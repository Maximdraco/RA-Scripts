// Prehistoric Isle 2
// #ID = 12343

// Functions for general use //

function bitchange(logic) => (prev(logic) < logic)

function Change_to_cero(logic) => (prev(logic) > 0 && logic == 0)

function DeltaE(address, value) {return (prev(address) == value)} // Equal
function DeltaNE(address, value) {return (prev(address) != value)} // Not Equal
function DeltaB(address, value) {return (prev(address) > value)} // Bigger
function DeltaS(address, value) {return (prev(address) < value)} // Smaller
function DeltaBE(address, value) {return (prev(address) >= value)} // Bigger or Equal
function DeltaSE(address, value) {return (prev(address) <= value)} // Smaller or Equal

// Priors
function PriorE(address, value) {return (prior(address) == value)} // Equal
function PriorNE(address, value) {return (prior(address) != value)} // Not Equal
function PriorB(address, value) {return (prior(address) > value)} // Bigger
function PriorS(address, value) {return (prior(address) < value)} // Smaller
function PriorBE(address, value) {return (prior(address) >= value)} // Bigger or Equal
function PriorSE(address, value) {return (prior(address) <= value)} // Smaller or Equal

// ResetIf
function ResetIf(logic) {return (never(logic))}

// PauseIf
function PauseIf(logic) {return (unless(logic))}
function PauseIfUntil(logic) {disable_when(logic, until=always_false())} // Pause without a reset flag
function PauseIfUntil(logic, Until) {disable_when(logic, until=Until)} // Pause with a reset flag

// AddSource chains
// Receive an array of size(address) elements and create an AddSource chain that have to be equal to the size of the array
// Used for bitflags
function AddSourceChain(array) {
    return_logic = array[0]
    for index in range(1, length(array)-1) {
        return_logic = return_logic + array[index]
    }
    
    return (measured(return_logic == length(array), when=always_true(), format="raw"))
}

// Receive an array of size(address) elements and create an AddSource Delta chain that have to be equal to the size of the array minus 1
// Used for bitflags
function AddSourceDeltaChain(array) {
    return_logic = prev(array[0])
    for index in range(1, length(array)-1) {
        return_logic = return_logic + prev(array[index])
    }
    
    return (return_logic == length(array)-1)
}

// Variables

lives = byte(0x005054)

// Civilians and soldiers saved in blue helicopter (5 on all levels)
rescued_civilians_blue = byte(0x5068)

// [8 Bits] Civilians rescued in Red Helicopter
//
// Stage 1: 20 in total
// Stage 2: 30 in total
// Stage 4: 30 in total
// Stage 5: 30 in total
rescued_civilians_red = byte(0x00E000)

// [16 Bits] Stars/medals
stars_medals = word(0x00506A)

// Game screen:
// 00 = Hardware Test
// 51 = SNK logo
// 52-61 = Intro cinematic
// 61 = Title screen
// 63 = Neo Geo logo
// 78-79 = How to play screen
// 80 = Player select screen
// 87 = Character selected
// e1 = During level transition
// ef = Demo
// d3 = Gameplay
// f2 = Credits
game_screen = byte(0x007503)

// In-game check
in_game = (game_screen == 0xd3 ||
           game_screen == 0xe1)

not_in_game = (game_screen != 0xd3 &&
               game_screen != 0xe1 &&
               game_screen != 0xf2 &&
               game_screen != 0xf0)

// Level
// 0x00 = Stage 1
// 0x04 = Stage 2
// 0x08 = Stage 3
// 0x0c = Stage 4
// 0x10 = Stage 5
// 0x14 = Stage 6
level = byte(0x8434)

// [8 Bits BCD] Score: 00XX000000
score_00XX000000 = byte(0x00C1A4)

// [8 Bits BCD] Score: XX00000000
score_XX00000000 = byte(0x00C1A5)

// [8 Bits BCD] Score: 000000XX00
score_000000XX00 = byte(0x00C1A6)

// $C1A7: [8 Bits BCD] Score: 0000XX0000
score_0000XX0000 = byte(0x00C1A7)

// [8 Bits] Difficulty Level (Bios setting)
//        
// 0 = Level 1
// 7 = Level 8 (Max difficulty)
difficulty = byte(0x00FD8C)


achievement_titles = ["Pachycephalosaurus", "What the hell is this?!",
                      "Bird Up", "Aptenoperissus?",
                      "The Volcano Level", "Is this an Alien?"]


// Functions
function level_ID(level_number) => ((level_number-1)*4)

function level_complete(level_number){
    if (level_number != 6){
        return (DeltaE(level, level_ID(level_number)) && // actual level
                level == level_ID(level_number+1) // next level
        )
    }
    else{
        return(level == level_ID(level_number) && // actual level
            DeltaNE(game_screen, 0xf2) &&
            game_screen == 0xf2 // change to credits
        )
    }
}

function main_achievements(level_number){
    // Progression achievements
    Title = achievement_titles[level_number-1]
    if (level_number < 6){
        achievement(
            title = Title,
            points = 10,
            type = "progression",
            description = "Complete Stage " + level_number + ".",
            trigger = level_complete(level_number) &&
                      in_game
        )
        // Level 8 difficulty achievements
        achievement(
            title = Title + " [Level 8]",
            points = 10,
            type = "",
            description = "Complete Stage " + level_number + " with Difficulty Level 8.",
            trigger = level_complete(level_number) &&
                      difficulty == 7 &&
                      in_game
        )
    }
    // Win condition achievements
    else{
        achievement(
            title = Title,
            points = 10,
            type = "win_condition",
            description = "Complete Stage " + level_number + ".",
            trigger = level_complete(level_number)
        )
        // Level 8 difficulty achievements
        achievement(
            title = Title + " [Level 8]",
            points = 10,
            type = "",
            description = "Complete Stage " + level_number + " with Difficulty Level 8.",
            trigger = level_complete(level_number) &&
                      difficulty == 7
        )
    }
}

function red_helicopter(level_number,letter, total_civilians_red){
    achievement(
    title = "Just Doing My Job " + letter,
    points = 5,
    description = "Save all the civilians in Stage " + level_number + " (the civilians that go in a red helicopter).",
    trigger = level == level_ID(level_number) &&
              DeltaS(rescued_civilians_red, total_civilians_red) &&
              rescued_civilians_red == total_civilians_red &&
              in_game
    )
}

function blue_helicopter(level_number, letter){
    achievement(
    title = "No One Left Behind " + letter,
    points = 10,
    description = "Get all the Rescue Bonus in level " + level_number + ".",
    trigger = level == level_ID(level_number) &&
              in_game &&
              DeltaS(rescued_civilians_blue, 5) &&
              rescued_civilians_blue == 5
    )
}

function invincible(level_number, letter){
    achievement(
        title = "Invincible " + letter,
        points = 25,
        description = "Complete Stage " + level_number + " deadless.",
        trigger = level_complete(level_number) &&
                  PauseIfUntil(level == level_ID(level_number) &&
                               DeltaB(lives, lives),
                               not_in_game)
    )
}

// Achievement logic
main_achievements(1)
main_achievements(2)
main_achievements(3)
main_achievements(4)
main_achievements(5)
main_achievements(6)

red_helicopter(1, "I", 20)
red_helicopter(2, "II", 30)
red_helicopter(4, "III", 30)
red_helicopter(5, "IV", 30)

blue_helicopter(1, "I")
blue_helicopter(2, "II")
blue_helicopter(4, "III")
blue_helicopter(5, "IV")

invincible(1, "I")
invincible(2, "II")
invincible(3, "III")
invincible(4, "IV")
invincible(5, "V")
invincible(6, "VI")

achievement(
    title = "Untouchable", points = 50,
    description = "Complete the game deadless.",
    trigger = level_complete(6) &&
              PauseIfUntil(DeltaB(lives, lives),
                           not_in_game)
)

leaderboard(
    id = 103550, title = "Best Pilot in the World",
    description = "Get as many points as you can.",
    start  = DeltaE(game_screen, 0xf2) && game_screen == 0xf2,
    cancel = game_screen != 0xf2,
    submit = DeltaE(game_screen, 0xf2) && game_screen == 0xf2,
    value = measured((bcd(score_000000XX00) * 100 +
                      bcd(score_0000XX0000) * 10000 +
                      bcd(score_00XX000000) * 1000000 +
                      bcd(score_XX00000000) * 100000000 + 0)
            ),
    format = "VALUE"
)

leaderboard(
    id = 103551, title = "Medal Collector",
    description = "Get as many medals as possible.",
    start  = DeltaE(game_screen, 0xf2) && game_screen == 0xf2,
    cancel = game_screen != 0xf2,
    submit = DeltaE(game_screen, 0xf2) && game_screen == 0xf2,
    value = measured(stars_medals),
    format = "VALUE"
)

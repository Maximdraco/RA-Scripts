// Chronicles of Narnia, The: The Lion, the Witch and the Wardrobe
// #ID = 28384
// RA Hash = 380582e0d15d448f212a96cb2aba111b (USA version)
// RA Hash = cf20b8ba8fe25dd983d6723a8837bba8 (Europe version)
// RA Hash = d2a799dd9f7838b6c99971ce8db988ef (Germany version)
// RA Hash = 65c135a03fc8f701306a30f6951ba1c7 (French version)

// == Functions to write logic more similar to the normal toolkit

// Deltas
function DeltaE(address, value) {return (prev(address) == value)}
function DeltaNE(address, value) {return (prev(address) != value)}
function DeltaB(address, value) {return (prev(address) > value)}
function DeltaS(address, value) {return (prev(address) < value)}
function DeltaBE(address, value) {return (prev(address) >= value)}
function DeltaSE(address, value) {return (prev(address) <= value)}

// Priors
function PriorE(address, value) {return (prior(address) == value)}
function PriorNE(address, value) {return (prior(address) != value)}
function PriorB(address, value) {return (prior(address) > value)}
function PriorS(address, value) {return (prior(address) < value)}
function PriorBE(address, value) {return (prior(address) >= value)}
function PriorSE(address, value) {return (prior(address) <= value)}

// ResetIf
function ResetIf(logic) {return (never(logic))}

// PauseIf
function PauseIf(logic) {return (unless(logic))}
function PauseIfUntil(logic) {disable_when(logic, until=always_false())}
function PauseIfUntil(logic, Until) {disable_when(logic, until=Until)}

// AddSource chain
function AddSourceChain(array) {
    return_logic = array[0]
    for index in range(1, length(array)-1) {
        return_logic = return_logic + array[index]
    }
    
    return (measured(return_logic == length(array), when=always_true(), format="raw"))
}

function AddSourceDeltaChain(array) {
    return_logic = prev(array[0])
    for index in range(1, length(array)-1) {
        return_logic = return_logic + prev(array[index])
    }
    
    return (return_logic == length(array)-1)
}

// == Variables ==
Germany = 0
USA = 1
France = 2
Europe = 3

// Regional indicator
Region_ID = byte(0x0003)

// Level complete screen
// 0x44 = Level complete screen
Level_complete_screen = [byte(0x2478d7), // Germany
                         byte(0x2468b7), // USA
                         byte(0x247877), // France
                         byte(0x2475d7)] // Europe
                         
// Difficulty
// 0x00 = Normal
// 0x01 = Hard
Difficulty = [byte(0x49b7f0), // Germany
              byte(0x49a670), // USA
              byte(0x49b7b0), // France
              byte(0x49b4f0)] // Europe

// Level ID
Level_ID = [byte(0x485fa3), // Germany
            byte(0x484e23), // USA
            byte(0x485f63), // France
            byte(0x485ca3)] // Europe
            
// Screen IDs
// 0x00 = Starting the game
// 0x08 = Title Screen (intro custscene)
// 0x0e = Title Screen (options)
// 0xf4 = Load save screen
// 0xf5 = Confirm load save screen
// 0xff = Game and level select screen
Screen_ID = [byte(0x4dfd3b), // Germany
             byte(0x4deb7b), // USA
             byte(0x4dfcfb), // France
             byte(0x4dfa3b)] // Europe
            
// Statues in the Great Battle
Statues_not_used_in_Great_Battle = [byte(0x4e1ba3), // Germany
                                    byte(0x4e09db), // USA
                                    byte(0x4e1b63), // France
                                    byte(0x4e18a3)] // Europe

Total_of_statues_in_Great_Battle = [byte(0x4e1ba7), // Germany
                                    byte(0x4e09df), // USA
                                    byte(0x4e1b67), // France
                                    byte(0x4e18a7)] // Europe
                                    
// Shields
// Each shield counter address is +0x04 from the previous one until level ID 0x00 to 0x0e
Starting_shields_address = [0x49d693, // Germany
                            0x49c513, // USA
                            0x49d653, // France
                            0x49d393] // Europe
                      
Amount_of_shield = [21, 5, 16, 21, 29, 4, 13, 7, 16, 10, 12, 6, 5, 7, 5]

// Cheats
Down = 0x64 // Cheat input Down
Left = 0x6c // Cheat input Left
Right = 0x72 // Cheat input Right
Up = 0x75 // Cheat input Up
Starting_cheat_input_address = [0x36e7c8, // Germany
                                0x36d648, // USA                            
                                0x36e788, // France
                                0x36e4c8] // Europe
                                
// List of cheat inputs
Unlock_all_bonus_level = [Down, Down, Right, Right, Down, Right, Up]
Unlock_all_abilities = [Down, Left, Right, Left, Up]
Restore_heal = [Down, Left, Left, Right]
Get_coins = [Down, Left, Right, Down, Down]
Open_all_levels = [Up, Up, Right, Right, Up, Right, Down]
Fill_combo_meter = [Up, Up, Right, Up]
Automatically_complete_level = [Down, Left, Down, Left, Down, Right, Down, Right, Up]
Cheat_mode = [Down, Down, Right, Up]

Pete_skills_starting_address = [0x49ba3d, // Germany
                                0x49a8bd, // USA
                                0x49b9fd, // France
                                0x49b73d] // Europe
                                
Susan_skills_starting_address = [0x49ba40, // Germany
                                 0x49a8c0, // USA
                                 0x49ba00, // France
                                 0x49b740] // Europe
                                 
Edmund_skills_starting_address = [0x49ba44, // Germany
                                  0x49a8c4, // USA
                                  0x49ba04, // France
                                  0x49b744] // Europe
                                  
Lucy_skills_starting_address = [0x49ba48, // Germany
                                0x49a8c8, // USA
                                0x49ba08, // France
                                0x49b748] // Europe

Level_names = ["The Air Raid", "Glimpse of Narnia", "The Spare Room",
               "Lantern Waste", "To Western Wood", "Beaver Dam",
               "Through the Tunnel", "Frozen Lake", "The Great River",
               "Rescue Edmund", "Follow Aslan", "Battle of Beruna",
               "The Witch's Castle", "The Great Battle", "The White Witch"]

Achievement_titles_Bonus_levels = ["To Western Wood Again",
                                   "Return to Allies Enclave",
                                   "The Winter is back",
                                   "Another Great River",
                                   "Stealth Mission",
                                   "The Witch's Second Castle"]
                          
Bonus_level_names = ["To Western Wood",
                     "Allies Enclave",
                     "Frozen Lake",
                     "The Great River",
                     "Follow Aslan",
                     "The Witch's Castle"]

Levels_with_statues_names = ["Lantern Waste", "To Western Wood", "Beaver Damn",
                             "Through the Tunnel", "Frozen Lake", "The Great River",
                             "Rescue Edmund", "Follow Aslan", "Battle of Beruna"]

Amount_of_statues = [10, 15, 6, 12, 12, 4, 4, 5, 4]

Start_of_statues_address = [0x49bcfc, // Germany
                            0x49ab7c, // USA
                            0x49bcbc, // France
                            0x49b9fc] // European

// == Functions ==
function Region_ID_check(region) {
    if (region == 0){return(PauseIf(Region_ID != 0x44))}
    else if (region == 1){return(PauseIf(Region_ID != 0x45))}
    else if (region == 2){return(PauseIf(Region_ID != 0x46))}
    else if (region == 3){return(PauseIf(Region_ID != 0x50))}
}

function Level_completed(region){
    return(DeltaNE(Level_complete_screen[region], 0x44) && Level_complete_screen[region] == 0x44)
}

function Difficulty(region, value) => (Difficulty[region] == value)

function Level_ID(region, value) => (Level_ID[region] == value)

function Screen_ID(region, value) => (Screen_ID[region] == value)

function in_game(region) => (DeltaNE(Screen_ID[region], 0xf5) && DeltaNE(Screen_ID[region], 0xf6))

// This logic is to reset all hit counts when the player reset the game
function Game_reseted(region){return(Screen_ID(region, 0x00) || Screen_ID(region, 0x08))}

function Normal_mode(region){
    return(
           // In game screen values, to check if the player in playing in Normal mode
           (Screen_ID(region, 0xff) || Screen_ID(region, 0x0f))
           && Difficulty(region, 0x00)
    )
}

function Hard_mode(region){
    // Pause the logic if the player is in any level on Normal difficulty
    // and only unpause if the player reset the game
    return(PauseIfUntil(Normal_mode(region),
                        Game_reseted(region))
           && Difficulty(region, 0x01)
    )
}

function Statues_check_Great_Battle(region) {
    return (Statues_not_used_in_Great_Battle[region] == Total_of_statues_in_Great_Battle[region])
}

function Shield_counter(region, level_ID){
    Shield_address = byte(Starting_shields_address[region]+(0x04*level_ID))
    
    return(DeltaS(Shield_address, Amount_of_shield[level_ID])
           && Shield_address == Amount_of_shield[level_ID]
    )
}

function cheat_input(address, value) => (byte(address) == value)

function Cheat(inputs, region){
    i = byte(Starting_cheat_input_address[region])
    cheat = DeltaE(i, inputs[0])
    
    for index in range(1, length(inputs)-1) {
        cheat = cheat && cheat_input(Starting_cheat_input_address[region]+index,
                                     inputs[index])
    }
    return cheat
}

function AntiCheat(region){
    return(
            PauseIfUntil(Cheat(Unlock_all_bonus_level, region), Game_reseted(region))                      
            && PauseIfUntil(Cheat(Unlock_all_abilities, region), Game_reseted(region))
            && PauseIfUntil(Cheat(Restore_heal, region), Game_reseted(region))
            && PauseIfUntil(Cheat(Get_coins, region), Game_reseted(region))
            && PauseIfUntil(Cheat(Open_all_levels, region), Game_reseted(region))
            && PauseIfUntil(Cheat(Fill_combo_meter, region), Game_reseted(region))
            && PauseIfUntil(Cheat(Automatically_complete_level, region), Game_reseted(region))
    )
}

function Pete_Skills(region){
    i = Pete_skills_starting_address[region]
    return([bit0(i), // Bit0 = Ogre Bane (Peter and Edmund)
            bit4(i), // Bit4 = Double Damage
            bit5(i), // Bit5 = Gift Sword
            bit6(i), // Bit6 = Team Attack (Peter and Susan)
            bit7(i), // Bit7 = Blade Spinner (Peter and Edmund)
            bit0(i+0x01), // Bit0 = Wolf Bane (Peter and Edmund)
            bit1(i+0x01), // Bit1 = Lion's Leap (Peter and Edmund)
            bit2(i+0x01), // Bit2 = Ghoul Bane (Peter and Edmund)
            bit3(i+0x01), // Bit3 = Lion's Roar (Peter and Edmund)
            bit4(i+0x01), // Bit4 = Boogle Bane (Peter and Edmund)
            bit5(i+0x01), // Bit5 = Shield Slam
            bit6(i+0x01), // Bit6 = Minoboard Bane (Peter and Edmund)
            bit7(i+0x01), // Bit7 = Lion's Claw (Peter and Edmund)
            bit0(i+0x02), // Bit0 = Valiant Heart (All Children)
            bit1(i+0x02), // Bit1 = Brave Heart (All Children)
            bit2(i+0x02), // Bit2 = Phoenix Heart (All Children)
            bit3(i+0x02)] // Bit3 = Lion Heart (All Children)
    )

}

function Susan_Skills(region){
    i = Susan_skills_starting_address[region]
    return([bit0(i), // Full Circle (Susan and Edmund)
            bit5(i+0x01), // Rain of Fire (Susan and Lucy)
            bit6(i+0x01), // Team Attack (Peter and Susan)
            bit1(i+0x02), // Fast Reload
            bit2(i+0x02), // Dryad's Melody
            bit3(i+0x02), // Hawkspeed
            bit4(i+0x02), // Stone Song
            bit5(i+0x02), // Panpipes
            bit6(i+0x02), // Gift Bow
            bit7(i+0x02), // Ivory Horn
            bit0(i+0x03), // Valiant Heart (All Children)
            bit1(i+0x03), // Brave Heart (All Children)
            bit2(i+0x03), // Phoenix Heart (All Children)
            bit3(i+0x03)] // Lion Heart (All Children)
    )
}
                                  
function Edmund_Skills(region){
    i = Edmund_skills_starting_address[region]
    return([bit0(i), // Full Circle (Susan and Edmund)
            bit0(i+0x01), // Ogre Bane (Peter and Edmund)
            bit4(i+0x01), // Shield Shower (Edmund and Lucy)
            bit7(i+0x01), // Blade Spinner (Peter and Edmund)
            bit0(i+0x02), // Wolf Bane (Peter and Edmund)
            bit1(i+0x02), // Lion's Leap (Peter and Edmund)
            bit2(i+0x02), // Ghoul Bane (Peter and Edmund)
            bit3(i+0x02), // Lion's Roar (Peter and Edmund)
            bit4(i+0x02), // Boogle Bane (Peter and Edmund)
            bit6(i+0x02), // Minoboard Bane (Peter and Edmund)
            bit7(i+0x02), // Lion's Claw (Peter and Edmund)
            bit0(i+0x03), // Valiant Heart (All Children)
            bit1(i+0x03), // Brave Heart (All Children)
            bit2(i+0x03), // Phoenix Heart (All Children)
            bit3(i+0x03)] // Lion Heart (All Children)
    )
}

function Lucy_Skills(region){
    i = Lucy_skills_starting_address[region]
    return([bit1(i), // Dryad's Cloak
            bit0(i+0x01), // Sun Fire
            bit1(i+0x01), // Boggle Tame
            bit2(i+0x01), // Fire Flower Cordial
            bit4(i+0x01), // Shield Shower (Edmund and Lucy)
            bit5(i+0x01), // Rain of Fire (Susan and Lucy)
            bit0(i+0x02), // First Aid
            bit1(i+0x02), // Wolf Tame
            bit2(i+0x02), // Ghoul Tame
            bit3(i+0x02), // Fire Fill
            bit4(i+0x02), // Minoboar Tame
            bit5(i+0x02), // Double Drop
            bit6(i+0x02), // Sun Speed
            bit7(i+0x02), // Triple Tipple
            bit0(i+0x03), // Valiant Heart (All Children)
            bit1(i+0x03), // Brave Heart (All Children)
            bit2(i+0x03), // Phoenix Heart (All Children)
            bit3(i+0x03)] // Lion Heart (All Children)
    )
}

function Main_achievement_logic(region, difficulty, level_ID){
    Base_logic = (Level_completed(region)
                  && Level_ID(region, level_ID)
                  && Region_ID_check(region)
                  && AntiCheat(region))
                  
    if (difficulty == 0){return(Base_logic)}
    else if (difficulty == 1){return(Hard_mode(region) && Base_logic)}
}

function Level_achievements(level_ID){
    Type = "progression"
    if (level_ID == 0x0e) {Type = "win_condition"}
    // Normal difficulty
    achievement(
            title = Level_names[level_ID],
            description = "Complete \"" + Level_names[level_ID] + "\".",
            points = 5,
            type = Type,
            trigger = (Main_achievement_logic(Germany, 0, level_ID)
                       || Main_achievement_logic(USA, 0, level_ID)
                       || Main_achievement_logic(France, 0, level_ID)
                       || Main_achievement_logic(Europe, 0, level_ID)
            )
    )
    // Hard difficulty
    achievement(
        title = Level_names[level_ID] + " [Hard]",
        description = "Complete \"" + Level_names[level_ID] + "\" on Hard difficulty.",
        points = 5,
        type = "",
        trigger = (Main_achievement_logic(Germany, 1, level_ID)
                   || Main_achievement_logic(USA, 1, level_ID)
                   || Main_achievement_logic(France, 1, level_ID)
                   || Main_achievement_logic(Europe, 1, level_ID)
        )
    )
    // Bonus levels
    if (0 <= level_ID) && (level_ID <= 5){
        // Normal difficulty
        achievement(
            title = Achievement_titles_Bonus_levels[level_ID],
            description = "Complete the bonus level \"" + Bonus_level_names[level_ID] + "\".",
            points = 5,
            type = "",
            trigger = (Main_achievement_logic(Germany, 0, level_ID+15)
                       || Main_achievement_logic(USA, 0, level_ID+15)
                       || Main_achievement_logic(France, 0, level_ID+15)
                       || Main_achievement_logic(Europe, 0, level_ID+15)
            )
        )
        // Hard difficulty
        achievement(
            title = Achievement_titles_Bonus_levels[level_ID] + " [Hard]",
            description = "Complete the bonus level \"" + Bonus_level_names[level_ID] + "\" on Hard difficulty.",
            points = 5,
            type = "",
            trigger = (Main_achievement_logic(Germany, 1, level_ID+15)
                       || Main_achievement_logic(USA, 1, level_ID+15)
                       || Main_achievement_logic(France, 1, level_ID+15)
                       || Main_achievement_logic(Europe, 1, level_ID+15)
            )
        )
    }
}

function Shield_achievements_logic(region, level_ID){
    return(
        Shield_counter(region, level_ID) &&
        Region_ID_check(region) &&
        AntiCheat(region) &&
        in_game(region)
    )
}

function Shield_achievements(level_ID){
    achievement(
        title = "Gathering shields in " + Level_names[level_ID],
        description = "Collect all shields in \"" + Level_names[level_ID] + "\".",
        points = 3,
        type = "",
        trigger = (Shield_achievements_logic(Germany, level_ID) ||
                   Shield_achievements_logic(USA, level_ID) ||
                   Shield_achievements_logic(France, level_ID) ||
                   Shield_achievements_logic(Europe, level_ID)
        )
    )
}

function Character_skills_logic(character, region){
    Base_logic = Region_ID_check(region) &&
                 AntiCheat(region)

    if (character == "Pete"){
        return(AddSourceChain(Pete_Skills(region)) &&
               AddSourceDeltaChain(Pete_Skills(region)) &&
               Base_logic
        )
    }
    if (character == "Susan"){
        return(AddSourceChain(Susan_Skills(region)) &&
               AddSourceDeltaChain(Susan_Skills(region)) &&
               Base_logic
        )
    }
    if (character == "Edmund"){
        return(AddSourceChain(Edmund_Skills(region)) &&
               AddSourceDeltaChain(Edmund_Skills(region)) &&
               Base_logic
        )
    }
    if (character == "Lucy"){
        return(AddSourceChain(Lucy_Skills(region)) &&
               AddSourceDeltaChain(Lucy_Skills(region)) &&
               Base_logic
        )
    }
}

function No_reinforcement_logic(region){
    return(Region_ID_check(region) &&
           Level_ID(region, 13) &&
           Level_completed(region) &&
           Statues_check_Great_Battle(region) &&
           AntiCheat(region)
    )
}

function Statue_logic(region, level){
    starting_address = Start_of_statues_address[region] + (0x40*level)
    Statues = [bit0(starting_address)]
    
    for index in range(0x01, Amount_of_statues[level]-1){array_push(Statues, bit0(starting_address + index))}
    
    Statues_chain = AddSourceChain(Statues)
    Delta_statues_chain = AddSourceDeltaChain(Statues)
    
    return (Statues_chain &&
            Region_ID_check(region) &&
            Delta_statues_chain &&
            AntiCheat(region)
    )
}

function collecting_statues_achievements(level){
    achievement(
        title = "Finding statues in " + Levels_with_statues_names[level],
        description = "Collect all statues in \"" + Levels_with_statues_names[level] + "\".",
        points = 3,
        type = "",
        trigger = Statue_logic(Germany, level) ||
                  Statue_logic(USA, level) ||
                  Statue_logic(France, level) ||
                  Statue_logic(Europe, level)
    )
}

// === Achievements =========

// Warning achievement
achievement(
    title = "WARNING!",
    description = "None of the achievements will trigger if you use any cheat, and to change from Normal to Hard you will have to start a new game in Hard or change from Normal to Hard in game, beat a level, save and reset the game.",
    points = 0,
    type = "",
    trigger = (repeated(100, always_true()))
)

// Main and shield achievements
for index in range(0x00, 0x0e) {
    // Main achievements
    Level_achievements(index)
    // Shield achievements
    Shield_achievements(index)

}

// Achievements for unlocking all skills - Pete
achievement(
    title = "High King Peter the Magnificent",
    description = "Unlock all of Pete's skills.",
    points = 5,
    type = "",
    trigger = (Character_skills_logic("Pete", Germany) ||
               Character_skills_logic("Pete", USA) ||
               Character_skills_logic("Pete", France) ||
               Character_skills_logic("Pete", Europe)
    )
)
// Susan
achievement(
    title = "Queen Susan the Gentle",
    description = "Unlock all of Susan's skills.",
    points = 5,
    type = "",
    trigger = (Character_skills_logic("Susan", Germany) ||
               Character_skills_logic("Susan", USA) ||
               Character_skills_logic("Susan", France) ||
               Character_skills_logic("Susan", Europe)
    )
)
// Edmund
achievement(
    title = "King Edmund the Just",
    description = "Unlock all of Edmund's skills.",
    points = 5,
    type = "",
    trigger = (Character_skills_logic("Edmund", Germany) ||
               Character_skills_logic("Edmund", USA) ||
               Character_skills_logic("Edmund", France) ||
               Character_skills_logic("Edmund", Europe)
    )
)
// Lucy
achievement(
    title = "Queen Lucy the Valiant",
    description = "Unlock all of Lucy's skills.",
    points = 5,
    type = "",
    trigger = (Character_skills_logic("Lucy", Germany) ||
               Character_skills_logic("Lucy", USA) ||
               Character_skills_logic("Lucy", France) ||
               Character_skills_logic("Lucy", Europe)
    )
)

// No reinforcement achievements
achievement(
    title = "No Reinforcement Needed",
    description = "Complete \"The Great Battle\" without using statues.",
    points = 5,
    type = "",
    trigger = (No_reinforcement_logic(Germany) ||
               No_reinforcement_logic(USA) ||
               No_reinforcement_logic(France) ||
               No_reinforcement_logic(Europe)
    )
)
// No reinforcement achievements Hard difficulty
achievement(
    title = "No Reinforcement Needed [Hard]",
    description = "Complete \"The Great Battle\" on Hard difficulty without using statues.",
    points = 5,
    type = "",
    trigger = ((Hard_mode(Germany) && No_reinforcement_logic(Germany)) ||
               (Hard_mode(USA) && No_reinforcement_logic(USA)) ||
               (Hard_mode(France) && No_reinforcement_logic(France)) ||
               (Hard_mode(Europe) && No_reinforcement_logic(Europe))
    )
)

// Achievements for collecting statues
for index in range(0, 8){
    collecting_statues_achievements(index)
}



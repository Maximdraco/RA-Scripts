// Pachicom
// #ID = 14198

// == General functions ==
function DeltaE(address, value) {return (prev(address) == value)} // Equal
function DeltaNE(address, value) {return (prev(address) != value)} // Not Equal
function DeltaB(address, value) {return (prev(address) > value)} // Bigger
function DeltaS(address, value) {return (prev(address) < value)} // Smaller
function DeltaBE(address, value) {return (prev(address) >= value)} // Bigger or Equal
function DeltaSE(address, value) {return (prev(address) <= value)} // Smaller or Equal

// ResetIf
function ResetIf(logic) {return (never(logic))}

// PauseIf
function PauseIf(logic) {return (unless(logic))}
function PauseIfUntil(logic) {disable_when(logic, until=always_false())} // Pause without a reset flag
function PauseIfUntil(logic, Until) {disable_when(logic, until=Until)} // Pause with a reset flag

// == Variables ==

// 0x462e [8 Bits] FF during gameplay
// Change to 0 for a moment when Ball trial ends
// 01 when you lose Time trial
// 03 when you win Time trial
playing = byte(0x462e)

// In Ball mode start with a score of 100, each point is 1 ball

// 0x0400 [8 Bits] Mode:
// Bit0 = Mode (Time/Ball)
// Bit1 = Auto/Manual
game_mode = bit0(0x0400)

// 0x0403 [16 Bits BCD] Machine No (from 1 to 300)
machine_number = bcd(word(0x0403))

// 0x0407 [8 BIts BCD] Score 0000XX
score_0000XX = bcd(byte(0x0407))

// 0x0408 [8 BIts BCD] Score 00XX00
score_00XX00 = bcd(byte(0x0408))

// 0x0409 [8 BIts BCD] Score XX0000
score_XX0000 = bcd(byte(0x0409))

// Balls at the start of Ball trial
// c0x040a [8 Bits BCD] Balls 0000XX
balls_0000XX = bcd(byte(0x040a))

// 0x040b [8 Bits BCD] Balls 00XX00
balls_00XX00 = bcd(byte(0x040b))

// 0x040c [8 Bits BCD] Balls XX0000 (any value from 3000 to 999999)
balls_XX0000 = bcd(byte(0x040c))

// 0x040d [8 Bits BCD] Ball mode time (minutes)
minutes_ball_trial = bcd(byte(0x040d))

// 0x040e [8 Bits BCD] Time miliseconds
miliseconds = bcd(byte(0x040e))

// 0x040f [8 Bits BCD] Time seconds
seconds = bcd(byte(0x040f))

// 0x0410 [8 Bits BCD] Time minutes
minutes = bcd(byte(0x0410))

reset = ResetIf(game_mode == 1 ||
                (minutes == 0 &&
                 seconds == 0 &&
                 miliseconds == 0))

// == Functions ==
function game_started(mode){
    if (mode == 0){
        return(
            once(
                playing == 0xff && // In game check
                game_mode == 0x00 && // Time trial
                DeltaE(miliseconds, 0x00) && // Check if the time just started
                DeltaE(seconds, 0x00) && // Check if the time just started
                DeltaE(minutes, 0x00) && // Check if the time just started
                miliseconds != 0x00 // Check if the time just started
            ) && reset
        )
    }
    else{
        return(
            once(
                playing == 0xff && // In game check
                game_mode == 0x01 && // Ball trial
                DeltaE(miliseconds, 0x00) && // Check if the time just started
                DeltaE(seconds, 0x00) && // Check if the time just started
                DeltaE(minutes, 0x10) && // Check if the time just started
                miliseconds != 0x00 // Check if the time just started
            ) && reset
        )
    }
}

function time_trial_achievements(number){
    achievement(
    title = "Time Trial " + number,
    description = "Complete Time Trial with 3000 balls on Machine No. " + number + ".",
    points = 10,
    type = "win_condition",
    trigger = game_started(0) &&
              balls_0000XX == 0x00 &&
              balls_00XX00 == 30 &&
              balls_XX0000 == 0x00 &&
              machine_number == number &&
              trigger_when(
                  DeltaS(score_00XX00, 30) && score_00XX00 >= 30 ||
                  DeltaS(score_XX0000, 1) && score_XX0000 >= 1
              )
    )
}

function leaderboards(number, mode){
    if (mode == 0){
        leaderboard(
            title = "Time Trial in Machine No " + number,
            description = "How fast can you get 3000 points or more?",
            start = game_mode == 0 &&
                    balls_0000XX == 0x00 &&
                    balls_00XX00 == 30 &&
                    balls_XX0000 == 0x00 &&
                    (DeltaS(score_00XX00, 30) && score_00XX00 >= 30 ||
                     DeltaS(score_XX0000, 1) && score_XX0000 >= 1),
            cancel = game_mode == 2,
            submit = game_mode == 0 &&
                    (DeltaS(score_00XX00, 30) && score_00XX00 >= 30 ||
                     DeltaS(score_XX0000, 1) && score_XX0000 >= 1),
            value = measured(minutes * 6000 + seconds * 100 + miliseconds),
            format="MILLISECS",
            lower_is_better=true,
            id=0
        )
    }
    if (mode == 1){
        leaderboard(
            title = "Ball Trial in Machine No " + number,
            description = "How many points can you get in 10 minutes?",
            start = game_mode == 1 &&
                    minutes_ball_trial == 10 &&
                    minutes == 0 &&
                    seconds == 0 &&
                    DeltaB(miliseconds, 0) &&
                    miliseconds == 0,
            cancel = game_mode == 2,
            submit = game_mode == 1 &&
                    minutes_ball_trial == 10 &&
                    minutes == 0 &&
                    seconds == 0 &&
                    DeltaB(miliseconds, 0) &&
                    miliseconds == 0,
            value = measured(score_XX0000*10000 + score_00XX00*100 + score_0000XX),
            format="VALUE",
            lower_is_better=false,
            id=0
        )
    }
}

// == Achievement logic ==

// Levels that doesn't exist
not_include = [4, 9,
               14, 19,
               24, 29,
               34, 39,
               40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
               54, 59,
               64, 69,
               74, 79,
               84, 89,
               90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
               104, 109,
               114, 119,
               124, 129,
               134, 139,
               140, 141, 142, 143, 144, 145, 146, 147, 148, 149,
               154, 159,
               164, 169,
               174, 179,
               184, 189,
               190, 191, 192, 193, 194, 195, 196, 197, 198, 199,
               204, 209,
               214, 219,
               224, 229,
               234, 239,
               240, 241, 242, 243, 244, 245, 246, 247, 248, 249,
               254, 259,
               264, 269,
               274, 279,
               284, 289,
               290, 291, 292, 293, 294, 295, 296, 297, 298, 299]

// function that works as a not in array
function note_include(index){
    i = true
    for number in not_include{
        i = i && index != number
    }
    return i
}

for index in range(1, 300) {
    if (note_include(index)){
        time_trial_achievements(index)
        //leaderboards(index, 0)
        leaderboards(index, 1)
    }
}

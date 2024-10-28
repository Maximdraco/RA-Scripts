// ~Homebrew~ Senshijidaino Kyoryu: DINOPREHIS!
// #ID = 30164

// Usefull functions ==

function bitchange(logic) => (prev(logic) < logic)

function Change_to_cero(logic) => (prev(logic) > 0 && logic == 0)

// == Variables ==
// Screen
// 00 = Title screen
// 0f = Gameplay
Screen = byte(0xc120)

// Event flags
// f401 = Win first rival battle
Win_first_rival_battle = word(0x00CDC9)

End_of_mining_tutorial = bit0(0x00cddb)

Tirita_first_area = bit0(0x00ce03)

Break_rocks_tutorial = bit0(0x00ce05)

Trainer_first_area_1 = bit0(0x00ce0b)

// 00 -> 01 = Getting starting Dinoprehi
Getting_starting_dinoprehi = byte(0x00ce11)

Gift_complete_dinopedia = bit0(0x00ce13)

Give_tirita_to_kid = bit0(0x00ce27)

Give_caramelo_to_kid = bit0(0x00ce2b)

Tirita_second_area = bit0(0x00ce33)

Rock_second_area = bit0(0x00ce59)

Caramelo_second_area = bit0(0x00ce5b)

// Rival have 5 Dinoprehis
Rival_second_battle = bit0(0x00ce61)

Opponent_dino1 = word(0x00cd85)

Opponent_dino2 = word(0x00cd91)

Opponent_dino3 = word(0x00cd9d)

Opponent_dino4 = word(0x00cda9)

Opponent_dino5 = word(0x00cdb5)

//==  Functions ==

function Ingame_check() => (prev(Screen) != 00)

function Win_first_rival_battle() => (prev(Win_first_rival_battle) == 0 && Win_first_rival_battle == 0x01f4)

function Win_second_rival_battle() => (
    never(Rival_second_battle == 0) &&
    once(Change_to_cero(Opponent_dino1)) &&
    once(Change_to_cero(Opponent_dino2)) &&
    once(Change_to_cero(Opponent_dino3)) &&
    once(Change_to_cero(Opponent_dino4)) &&
    once(Change_to_cero(Opponent_dino5)) &&
    never(Screen == 0)
)

function Mining_tutorial_check() => bitchange(End_of_mining_tutorial)

function Tirita_first_are() => bitchange(Tirita_first_area)

function Break_rocks_tutorial() => bitchange(Break_rocks_tutorial)

function Getting_starter_dinoprehi() => (prev(Getting_starting_dinoprehi) == 0 && Getting_starting_dinoprehi == 1)

function Gift_complete_dinopedia() => bitchange(Gift_complete_dinopedia)

function Give_tirita_to_kid() => bitchange(Give_tirita_to_kid)

function Give_caramelo_to_kid() => bitchange(Give_caramelo_to_kid)

function Tirita_second_area() => bitchange(Tirita_second_area)

function Rock_second_area() => bitchange(Rock_second_area)

function Caramelo_second_area() => bitchange(Caramelo_second_are)

function Rival_second_battle() => bitchange(Rival_second_battle)

function Collecting_items() => (
    (prev(Tirita_first_area) + prev(Tirita_second_area) + prev(Caramelo_second_area)) == 2 &&
    (Tirita_first_area + Tirita_second_area + Caramelo_second_area) == 3
)

function Complete_missions() => (
    (prev(Give_tirita_to_kid) + prev(Give_caramelo_to_kid) == 1) &&
    (Give_tirita_to_kid + Give_caramelo_to_kid == 2)
)

// == Achievements ==

achievement(
    title = "Classic Rival",
    description = "Defeated your rival for the first time.",
    points = 1,
    type = "progression",
    trigger = (Ingame_check() && Win_first_rival_battle())
)

achievement(
    title = "So we back in the mine",
    description = "Complete the mining tutorial.",
    points = 1,
    type = "progression",
    trigger = (Ingame_check() && Mining_tutorial_check())
)

achievement(
    title = "Item Hoarder",
    description = "Find all objects on the map",
    points = 1,
    type = "",
    trigger = (Ingame_check() && Collecting_items())
)

achievement(
    title = "Helping Others",
    description = "Give the Tirita and Caramelo to the kids.",
    points = 1,
    type = "",
    trigger = (Ingame_check() && Complete_missions())
)

achievement(
    title = "A Complete Collection",
    description = "Get the reward for finding all species of Dinoprehis (the other starter doesn't count for the reward). (m: The game ends after the second rival battle)",
    points = 1,
    type = "missable",
    trigger = (Ingame_check() && Gift_complete_dinopedia())
)

achievement(
    title = "Pokemon? I only know Dinoprehis",
    description = "Defeat your rival a second time and complete the game.",
    points = 2,
    type = "win_condition",
    trigger = (Ingame_check() && Win_second_rival_battle())
)

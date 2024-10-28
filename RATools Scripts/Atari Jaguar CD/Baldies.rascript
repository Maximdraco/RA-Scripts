// Baldies
// #ID = 21663

// == Variables ==

// $004011: [8 Bit] Current Map ID
//          Change while loading the map, stay fixed until next map is loaded (even on Main Menu)
//          Can be frozen for accessing other maps
Current_map_ID = byte(0x004011)

// $00403B: [8 Bit] ? TBC but so far look like this:
//          State Indicator
//          02 > Main Menu / Victory Screen / Game Over Screen
//          03 > In-Game
State_indicator = byte(0x00403B)

// $004050: [8 Bits] Change from 16 to 5 in the last win screen
Last_win_screen = byte(0x004050)

// $004660: [32 Bit] Level State: 01
//          00 > Locked
//          01 > Available
//          02 > Cleared
//          Switch from 01 to 02 during Gameplay on "You Won !" Screen
function LevelState() => dword(0x004660)

// $004664: [32 Bit] Level State: 02
function LevelState() => dword(0x004664)

// $004668: [32 Bit] Level State: 03
function LevelState() => dword(0x004668)

// $00466C: [32 Bit] Level State: 04
function LevelState() => dword(0x00466C)

// $004670: [32 Bit] Level State: 05
function LevelState() => dword(0x004670)

// $004674: [32 Bit] Level State: 06
function LevelState() => dword(0x004674)

// $004678: [32 Bit] Level State: 07
function LevelState() => dword(0x004678)

// $00467C: [32 Bit] Level State: 08
function LevelState() => dword(0x00467C)

// $004680: [32 Bit] Level State: 09
function LevelState() => dword(0x004680)

// $004684: [32 Bit] Level State: 10
function LevelState() => dword(0x004684)

// $004688: [32 Bit] Level State: 11
function LevelState() => dword(0x004688)

// $00468C: [32 Bit] Level State: 12
function LevelState() => dword(0x00468C)

// $004690: [32 Bit] Level State: 13
function LevelState() => dword(0x004690)

// $004694: [32 Bit] Level State: 14
function LevelState() => dword(0x004694)

// $004698: [32 Bit] Level State: 15
function LevelState() => dword(0x004698)

// $00469C: [32 Bit] Level State: 16
function LevelState() => dword(0x00469C)

// $0046A0: [32 Bit] Level State: 17
function LevelState() => dword(0x0046A0)

// $0046A4: [32 Bit] Level State: 18
function LevelState() => dword(0x0046A4)

// $0046A8: [32 Bit] Level State: 19
function LevelState() => dword(0x0046A8)

// $0046AC: [32 Bit] Level State: 20
function LevelState() => dword(0x0046AC)

// $0046B0: [32 Bit] Level State: 21
function LevelState() => dword(0x0046B0)

// $0046B4: [32 Bit] Level State: 22
function LevelState() => dword(0x0046B4)

// $0046B8: [32 Bit] Level State: 23
function LevelState() => dword(0x0046B8)

// $0046BC: [32 Bit] Level State: 24
function LevelState() => dword(0x0046BC)

// $0046C0: [32 Bit] Level State: 25
function LevelState() => dword(0x0046C0)

// $0046C4: [32 Bit] Level State: 26
function LevelState() => dword(0x0046C4)

// $0046C8: [32 Bit] Level State: 27
function LevelState() => dword(0x0046C8)

// $0046CC: [32 Bit] Level State: 28
function LevelState() => dword(0x0046CC)

// $0046D0: [32 Bit] Level State: 29
function LevelState() => dword(0x0046D0)

// $0046D4: [32 Bit] Level State: 30
function LevelState() => dword(0x0046D4)

// $0046D8: [32 Bit] Level State: 31
function LevelState() => dword(0x0046D8)

// $0046DC: [32 Bit] Level State: 32
function LevelState() => dword(0x0046DC)

// $0046E0: [32 Bit] Level State: 33
function LevelState() => dword(0x0046E0)

// $0046E4: [32 Bit] Level State: 34
function LevelState() => dword(0x0046E4)

// $0046E8: [32 Bit] Level State: 35
function LevelState() => dword(0x0046E8)

// $0046EC: [32 Bit] Level State: 36
function LevelState() => dword(0x0046EC)

// $0046F0: [32 Bit] Level State: 37
function LevelState() => dword(0x0046F0)

// $0046F4: [32 Bit] Level State: 38
function LevelState() => dword(0x0046F4)

// $0046F8: [32 Bit] Level State: 39
function LevelState() => dword(0x0046F8)

// $0046FC: [32 Bit] Level State: 40
function LevelState() => dword(0x0046FC)

// $004700: [32 Bit] Level State: 41
function LevelState() => dword(0x004700)

// $004704: [32 Bit] Level State: 42
function LevelState() => dword(0x004704)

// $004708: [32 Bit] Level State: 43
function LevelState() => dword(0x004708)

// $00470C: [32 Bit] Level State: 44
function LevelState() => dword(0x00470C)

// $004710: [32 Bit] Level State: 45
function LevelState() => dword(0x004710)

// $004714: [32 Bit] Level State: 46
function LevelState() => dword(0x004714)

// $004718: [32 Bit] Level State: 47
function LevelState() => dword(0x004718)

// $00471C: [32 Bit] Level State: 48
function LevelState() => dword(0x00471C)

// $004720: [32 Bit] Level State: 49
function LevelState() => dword(0x004720)

// $004724: [32 Bit] Level State: 50
function LevelState() => dword(0x004724)

// $004728: [32 Bit] Level State: 51
function LevelState() => dword(0x004728)

// $00472C: [32 Bit] Level State: 52
function LevelState() => dword(0x00472C)

// $004730: [32 Bit] Level State: 53
function LevelState() => dword(0x004730)

// $004734: [32 Bit] Level State: 54
function LevelState() => dword(0x004734)

// $004738: [32 Bit] Level State: 55
function LevelState() => dword(0x004738)

// $00473C: [32 Bit] Level State: 56
function LevelState() => dword(0x00473C)

// $004740: [32 Bit] Level State: 57
function LevelState() => dword(0x004740)

// $004744: [32 Bit] Level State: 58
function LevelState() => dword(0x004744)

// $004748: [32 Bit] Level State: 59
function LevelState() => dword(0x004748)

// $00474C: [32 Bit] Level State: 60
function LevelState() => dword(0x00474C)

// $004750: [32 Bit] Level State: 61
function LevelState() => dword(0x004750)

// $004754: [32 Bit] Level State: 62
function LevelState() => dword(0x004754)

// $004758: [32 Bit] Level State: 63
function LevelState() => dword(0x004758)

// $00475C: [32 Bit] Level State: 64
function LevelState() => dword(0x00475C)

// $004760: [32 Bit] Level State: 65
function LevelState() => dword(0x004760)

// $004764: [32 Bit] Level State: 66
function LevelState() => dword(0x004764)

// $004768: [32 Bit] Level State: 67
function LevelState() => dword(0x004768)

// $00476C: [32 Bit] Level State: 68
function LevelState() => dword(0x00476C)

// $004770: [32 Bit] Level State: 69 (nice)
function LevelState() => dword(0x004770)

// $004774: [32 Bit] Level State: 70
function LevelState() => dword(0x004774)

// $004778: [32 Bit] Level State: 71
function LevelState() => dword(0x004778)

// $00477C: [32 Bit] Level State: 72
function LevelState() => dword(0x00477C)

// $004780: [32 Bit] Level State: 73
function LevelState() => dword(0x004780)

// $004784: [32 Bit] Level State: 74
function LevelState() => dword(0x004784)

// $004788: [32 Bit] Level State: 75
function LevelState() => dword(0x004788)

// $00478C: [32 Bit] Level State: 76
function LevelState() => dword(0x00478C)

// $004790: [32 Bit] Level State: 77
function LevelState() => dword(0x004790)

// $004794: [32 Bit] Level State: 78
function LevelState() => dword(0x004794)

// $004798: [32 Bit] Level State: 79
function LevelState() => dword(0x004798)

// $00479C: [32 Bit] Level State: 80
function LevelState() => dword(0x00479C)

// $0047A0: [32 Bit] Level State: 81
function LevelState() => dword(0x0047A0)

// $0047A4: [32 Bit] Level State: 82
function LevelState() => dword(0x0047A4)

// $0047A8: [32 Bit] Level State: 83
function LevelState() => dword(0x0047A8)

// $0047AC: [32 Bit] Level State: 84
function LevelState() => dword(0x0047AC)

// $0047B0: [32 Bit] Level State: 85
function LevelState() => dword(0x0047B0)

// $0047B4: [32 Bit] Level State: 86
function LevelState() => dword(0x0047B4)

// $0047B8: [32 Bit] Level State: 87
function LevelState() => dword(0x0047B8)

// $0047BC: [32 Bit] Level State: 88
function LevelState() => dword(0x0047BC)

// $0047C0: [32 Bit] Level State: 89
function LevelState() => dword(0x0047C0)

// $0047C4: [32 Bit] Level State: 90
function LevelState() => dword(0x0047C4)

// $0047C8: [32 Bit] Level State: 91
function LevelState() => dword(0x0047C8)

// $0047CC: [32 Bit] Level State: 92
function LevelState() => dword(0x0047CC)

// $0047D0: [32 Bit] Level State: 93
function LevelState() => dword(0x0047D0)

// $0047D4: [32 Bit] Level State: 94
function LevelState() => dword(0x0047D4)

// $0047D8: [32 Bit] Level State: 95
function LevelState() => dword(0x0047D8)

// $0047DC: [32 Bit] Level State: 96
function LevelState() => dword(0x0047DC)

// $0047E0: [32 Bit] Level State: 97
function LevelState() => dword(0x0047E0)

// $0047E4: [32 Bit] Level State: 98
function LevelState() => dword(0x0047E4)

// $0047E8: [32 Bit] Level State: 99
function LevelState() => dword(0x0047E8)

// $0047EC: [32 Bit] Level State: 100
function LevelState() => dword(0x0047EC)

// $027382: (16b) 1st craft ID
//          0001=small mine
//          0101=medium mine
//          0201=large mine
//          0301=small trap
//          0401=medium trap
//          
//          0c01=small pit
//          0d01=medium pit
//          0e01=large pit
//          
//          1601=small catapult
//          1701=medium catapult
//          1801=large catapult
//          1901=large electrocution
//          1a01=popper
//          2101=small electrocution
//          2201=medium electrocution
function B1stCraftId() => word(0x027382)

// $027385: 01 when 1st craft is ready/full
function When1stCraftIsReadyFull() => byte(0x027385)

// $02738A: (16b) 2nd craft ID
function B2ndCraftId() => word(0x02738A)

// $02738D: 2nd craft in bar, 01 when done
function NdCraftInBar01WhenDone() => byte(0x02738D)

// $027392: (16b) 3rd craft ID
function B3rdCraftId() => word(0x027392)

// $027395: 3rd craft in bar, 01 when ready
function RdCraftInBar01WhenReady() => byte(0x027395)

// $02739A: (16b) 4th craft ID
function B4thCraftId() => word(0x02739A)

// $02739D: 4th craft in bar, 01 when ready
function ThCraftInBar01WhenReady() => byte(0x02739D)

// $0273A2: (16b) 5th craft ID
function B5thCraftId() => word(0x0273A2)

// $0273A5: 5th craft in bar, 01 when ready
function ThCraftInBar01WhenReady() => byte(0x0273A5)

// $0273AA: (16b) 6th craft ID
function B6thCraftId() => word(0x0273AA)

// $0273AD: 6th craft in bar, 01 when ready
function ThCraftInBar01WhenReady() => byte(0x0273AD)

// $05E134: [8 Bits] Password
//          
//          0x3x = Numbers from 0 to 9
function Password() => byte(0x05E134)

// $05E135: [8 Bits] Password
//          
//          0x3x = Numbers from 0 to 9
function Password() => byte(0x05E135)

// $05E136: [8 Bits] Password
//          
//          0x3x = Numbers from 0 to 9
function Password() => byte(0x05E136)

// $05E137: [8 Bits] Password
//          
//          0x3x = Numbers from 0 to 9
function Password() => byte(0x05E137)

// $05E138: [8 Bits] Password
//          
//          0x3x = Numbers from 0 to 9
function Password() => byte(0x05E138)

// $05E139: [8 Bits] Password
//          
//          0x3x = Numbers from 0 to 9
function Password() => byte(0x05E139)

// $05E13A: [8 Bits] Password
//          
//          0x3x = Numbers from 0 to 9
function Password() => byte(0x05E13A)

// $05E13B: [8 Bits] Password
//          
//          0x3x = Numbers from 0 to 9
function Password() => byte(0x05E13B)

achievement(
    title = "Pika !", points = 0,
    description = "Create a Large Electrocution",
    id = 325942, badge = "366034", published = "08-06-2023 19:00:51", modified = "11-06-2023 20:20:41",
    trigger = TbcButSoFarLookLikeThis() == 3 &&
              ((B1stCraftId() == 6401 && When1stCraftIsReadyFull() == 1 && prev(When1stCraftIsReadyFull()) == 0) ||
               (B2ndCraftId() == 6401 && NdCraftInBar01WhenDone() == 1 && prev(RdCraftInBar01WhenReady()) == 0) ||
               (B3rdCraftId() == 6401 && RdCraftInBar01WhenReady() == 1 && prev(RdCraftInBar01WhenReady()) == 0) ||
               (B4thCraftId() == 6401 && ThCraftInBar01WhenReady() == 1 && prev(ThCraftInBar01WhenReady()) == 0) ||
               (B5thCraftId() == 6401 && ThCraftInBar01WhenReady() == 1 && prev(ThCraftInBar01WhenReady()) == 0) ||
               (B6thCraftId() == 6401 && ThCraftInBar01WhenReady() == 1 && prev(ThCraftInBar01WhenReady()) == 0))
)

achievement(
    title = "Pay Attention Where You Step", points = 1,
    description = "Create a Large Mine.",
    id = 325972, badge = "364032", published = "08-06-2023 20:39:51", modified = "11-06-2023 20:20:41",
    trigger = TbcButSoFarLookLikeThis() == 3 &&
              ((B1stCraftId() == 513 && prev(When1stCraftIsReadyFull()) != 1 && When1stCraftIsReadyFull() == 1) ||
               (B2ndCraftId() == 513 && prev(NdCraftInBar01WhenDone()) != 1 && NdCraftInBar01WhenDone() == 1) ||
               (B3rdCraftId() == 513 && prev(RdCraftInBar01WhenReady()) != 1 && RdCraftInBar01WhenReady() == 1) ||
               (B4thCraftId() == 513 && prev(ThCraftInBar01WhenReady()) != 1 && ThCraftInBar01WhenReady() == 1) ||
               (B5thCraftId() == 513 && prev(ThCraftInBar01WhenReady()) != 1 && ThCraftInBar01WhenReady() == 1) ||
               (B6thCraftId() == 513 && prev(ThCraftInBar01WhenReady()) != 1 && ThCraftInBar01WhenReady() == 1))
)

achievement(
    title = "Shortcut To Australia", points = 1,
    description = "Create a Large Pit",
    id = 326382, badge = "364032", published = "09-06-2023 13:07:18", modified = "11-06-2023 20:20:42",
    trigger = TbcButSoFarLookLikeThis() == 3 &&
              ((B1stCraftId() == 3585 && prev(When1stCraftIsReadyFull()) != 1 && When1stCraftIsReadyFull() == 1) ||
               (B2ndCraftId() == 3585 && prev(NdCraftInBar01WhenDone()) != 1 && NdCraftInBar01WhenDone() == 1) ||
               (B3rdCraftId() == 3585 && prev(RdCraftInBar01WhenReady()) != 1 && RdCraftInBar01WhenReady() == 1) ||
               (B4thCraftId() == 3585 && prev(ThCraftInBar01WhenReady()) != 1 && ThCraftInBar01WhenReady() == 1) ||
               (B5thCraftId() == 3585 && prev(ThCraftInBar01WhenReady()) != 1 && ThCraftInBar01WhenReady() == 1) ||
               (B6thCraftId() == 3585 && prev(ThCraftInBar01WhenReady()) != 1 && ThCraftInBar01WhenReady() == 1))
)

achievement(
    title = "Bouncing Baldies", points = 1,
    description = "Create a Large Catapult",
    id = 326820, badge = "364783", published = "11-06-2023 14:35:55", modified = "11-06-2023 20:20:43",
    trigger = TbcButSoFarLookLikeThis() == 3 &&
              ((B1stCraftId() == 6145 && prev(When1stCraftIsReadyFull()) != 1 && When1stCraftIsReadyFull() == 1) ||
               (B2ndCraftId() == 6145 && prev(NdCraftInBar01WhenDone()) != 1 && NdCraftInBar01WhenDone() == 1) ||
               (B3rdCraftId() == 6145 && prev(RdCraftInBar01WhenReady()) != 1 && RdCraftInBar01WhenReady() == 1) ||
               (B4thCraftId() == 6145 && prev(ThCraftInBar01WhenReady()) != 1 && ThCraftInBar01WhenReady() == 1) ||
               (B5thCraftId() == 6145 && prev(ThCraftInBar01WhenReady()) != 1 && ThCraftInBar01WhenReady() == 1) ||
               (B6thCraftId() == 6145 && prev(ThCraftInBar01WhenReady()) != 1 && ThCraftInBar01WhenReady() == 1))
)

achievement(
    title = "Plains - Level I", points = 1, type="progression",
    description = "Clear Level 001",
    id = 324375, badge = "362088", published = "03-06-2023 20:47:58", modified = "10-07-2024 1:54:19",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255) &&
              Password() == 0 && Password() == 0 && Password() == 0 && Password() == 0 &&
              Password() == 0 && Password() == 0 && Password() == 0 && Password() == 0
)

achievement(
    title = "Plains - Level II", points = 5, type="progression",
    description = "Clear Level 002",
    id = 324376, badge = "362089", published = "03-06-2023 20:47:59", modified = "11-06-2023 20:20:45",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Plains - Level III", points = 5, type="progression",
    description = "Clear Level 003",
    id = 324377, badge = "362090", published = "03-06-2023 20:48:00", modified = "11-06-2023 20:20:58",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Plains - Level IV", points = 5, type="progression",
    description = "Clear Level 004",
    id = 324378, badge = "362091", published = "03-06-2023 20:48:01", modified = "11-06-2023 20:20:59",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Plains - Level V", points = 5, type="progression",
    description = "Clear Level 005",
    id = 324379, badge = "362092", published = "03-06-2023 20:48:03", modified = "11-06-2023 20:21:00",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Plains - Level VI", points = 5, type="progression",
    description = "Clear Level 006",
    id = 324380, badge = "362093", published = "03-06-2023 20:48:05", modified = "11-06-2023 20:21:01",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Plains - Level VII", points = 5, type="progression",
    description = "Clear Level 007",
    id = 324381, badge = "362094", published = "03-06-2023 20:48:07", modified = "11-06-2023 20:21:02",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Plains - Level VIII", points = 5, type="progression",
    description = "Clear Level 008",
    id = 324382, badge = "362095", published = "03-06-2023 20:48:10", modified = "11-06-2023 20:21:03",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Plains - Level IX", points = 5, type="progression",
    description = "Clear Level 009",
    id = 324383, badge = "362096", published = "03-06-2023 20:48:12", modified = "11-06-2023 20:21:05",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Plains - Level X", points = 5, type="progression",
    description = "Clear Level 010",
    id = 324384, badge = "362097", published = "03-06-2023 20:48:14", modified = "11-06-2023 20:21:05",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Plains - Level XI", points = 5, type="progression",
    description = "Clear Level 011",
    id = 324385, badge = "362098", published = "03-06-2023 20:48:18", modified = "11-06-2023 20:21:07",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Plains - Level XII", points = 5, type="progression",
    description = "Clear Level 012",
    id = 324386, badge = "362099", published = "03-06-2023 20:48:22", modified = "11-06-2023 20:21:07",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Plains - Level XIII", points = 5, type="progression",
    description = "Clear Level 013",
    id = 324387, badge = "362100", published = "03-06-2023 20:48:26", modified = "11-06-2023 20:21:08",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Plains - Level XIV", points = 5, type="progression",
    description = "Clear Level 014",
    id = 324388, badge = "362101", published = "03-06-2023 20:48:30", modified = "11-06-2023 20:21:09",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Plains - Level XV", points = 5, type="progression",
    description = "Clear Level 015",
    id = 324389, badge = "362102", published = "03-06-2023 20:48:33", modified = "11-06-2023 20:21:10",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Plains - Level XVI", points = 5, type="progression",
    description = "Clear Level 016",
    id = 324390, badge = "362103", published = "03-06-2023 20:48:37", modified = "11-06-2023 20:21:12",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Plains - Level XVII", points = 5, type="progression",
    description = "Clear Level 017",
    id = 324391, badge = "362104", published = "03-06-2023 20:48:39", modified = "11-06-2023 20:21:13",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Plains - Level XVIII", points = 5, type="progression",
    description = "Clear Level 018",
    id = 324392, badge = "362105", published = "03-06-2023 20:48:40", modified = "11-06-2023 20:21:14",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Plains - Level XIX", points = 5, type="progression",
    description = "Clear Level 019",
    id = 324393, badge = "362106", published = "03-06-2023 20:48:41", modified = "11-06-2023 20:21:16",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Plains - Level XX", points = 5, type="progression",
    description = "Clear Level 020",
    id = 324394, badge = "362107", published = "03-06-2023 20:48:41", modified = "11-06-2023 20:21:17",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Artic - Level I", points = 5, type="progression",
    description = "Clear Level 21",
    id = 324437, badge = "362169", published = "03-06-2023 22:11:15", modified = "11-06-2023 20:21:18",
    trigger = (prev(CurrentMapId()) == 20 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Artic - Level II", points = 5, type="progression",
    description = "Clear Level 22",
    id = 324438, badge = "362170", published = "03-06-2023 22:11:15", modified = "11-06-2023 20:21:19",
    trigger = (prev(CurrentMapId()) == 21 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Artic - Level III", points = 5, type="progression",
    description = "Clear Level 23",
    id = 324439, badge = "362171", published = "03-06-2023 22:11:16", modified = "11-06-2023 20:21:20",
    trigger = (prev(CurrentMapId()) == 22 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Artic - Level IV", points = 5, type="progression",
    description = "Clear Level 24",
    id = 324440, badge = "362172", published = "03-06-2023 22:11:16", modified = "11-06-2023 20:21:22",
    trigger = (prev(CurrentMapId()) == 23 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Artic - Level V", points = 5, type="progression",
    description = "Clear Level 25",
    id = 324441, badge = "362173", published = "03-06-2023 22:11:16", modified = "11-06-2023 20:21:23",
    trigger = (prev(CurrentMapId()) == 24 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Artic - Level VI", points = 5, type="progression",
    description = "Clear Level 26",
    id = 324442, badge = "362174", published = "03-06-2023 22:11:16", modified = "11-06-2023 20:21:24",
    trigger = (prev(CurrentMapId()) == 25 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Artic - Level VII", points = 5, type="progression",
    description = "Clear Level 27",
    id = 324443, badge = "362175", published = "03-06-2023 22:11:17", modified = "11-06-2023 20:21:26",
    trigger = (prev(CurrentMapId()) == 26 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Artic - Level VIII", points = 5, type="progression",
    description = "Clear Level 28",
    id = 324444, badge = "362176", published = "03-06-2023 22:11:17", modified = "11-06-2023 20:21:27",
    trigger = (prev(CurrentMapId()) == 27 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Artic - Level IX", points = 5, type="progression",
    description = "Clear Level 29",
    id = 324445, badge = "362177", published = "03-06-2023 22:11:17", modified = "11-06-2023 20:21:28",
    trigger = (prev(CurrentMapId()) == 28 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Artic - Level X", points = 5, type="progression",
    description = "Clear Level 30",
    id = 324446, badge = "362178", published = "03-06-2023 22:11:17", modified = "11-06-2023 20:21:29",
    trigger = (prev(CurrentMapId()) == 29 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Artic - Level XI", points = 5, type="progression",
    description = "Clear Level 31",
    id = 324447, badge = "362179", published = "03-06-2023 22:11:18", modified = "11-06-2023 20:21:30",
    trigger = (prev(CurrentMapId()) == 30 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Artic - Level XII", points = 5, type="progression",
    description = "Clear Level 32",
    id = 324448, badge = "362180", published = "03-06-2023 22:11:18", modified = "11-06-2023 20:21:31",
    trigger = (prev(CurrentMapId()) == 31 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Artic - Level XIII", points = 5, type="progression",
    description = "Clear Level 33",
    id = 324449, badge = "362181", published = "03-06-2023 22:11:18", modified = "11-06-2023 20:21:32",
    trigger = (prev(CurrentMapId()) == 32 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Artic - Level XIV", points = 5, type="progression",
    description = "Clear Level 34",
    id = 324450, badge = "362182", published = "03-06-2023 22:11:19", modified = "11-06-2023 20:21:33",
    trigger = (prev(CurrentMapId()) == 33 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Artic - Level XV", points = 5, type="progression",
    description = "Clear Level 35",
    id = 324451, badge = "362183", published = "03-06-2023 22:11:19", modified = "11-06-2023 20:21:34",
    trigger = (prev(CurrentMapId()) == 34 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Artic - Level XVI", points = 5, type="progression",
    description = "Clear Level 36",
    id = 324452, badge = "362184", published = "03-06-2023 22:11:19", modified = "11-06-2023 20:21:35",
    trigger = (prev(CurrentMapId()) == 35 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Artic - Level XVII", points = 5, type="progression",
    description = "Clear Level 37",
    id = 324453, badge = "362185", published = "03-06-2023 22:11:19", modified = "11-06-2023 20:21:36",
    trigger = (prev(CurrentMapId()) == 36 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Artic - Level XVIII", points = 5, type="progression",
    description = "Clear Level 38",
    id = 324454, badge = "362186", published = "03-06-2023 22:11:20", modified = "11-06-2023 20:21:37",
    trigger = (prev(CurrentMapId()) == 37 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Artic - Level XIX", points = 5, type="progression",
    description = "Clear Level 39",
    id = 324455, badge = "362187", published = "03-06-2023 22:11:20", modified = "11-06-2023 20:21:38",
    trigger = (prev(CurrentMapId()) == 38 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Artic - Level XX", points = 5, type="progression",
    description = "Clear Level 40",
    id = 324456, badge = "362188", published = "03-06-2023 22:11:20", modified = "11-06-2023 20:21:39",
    trigger = (prev(CurrentMapId()) == 39 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Circus - Level I", points = 5, type="progression",
    description = "Clear Level 41",
    id = 324395, badge = "362108", published = "03-06-2023 20:51:06", modified = "11-06-2023 20:21:40",
    trigger = (prev(CurrentMapId()) == 40 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Circus - Level II", points = 5, type="progression",
    description = "Clear Level 42",
    id = 324396, badge = "362109", published = "03-06-2023 20:51:07", modified = "11-06-2023 20:21:41",
    trigger = (prev(CurrentMapId()) == 41 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Circus - Level III", points = 5, type="progression",
    description = "Clear Level 43",
    id = 324397, badge = "362110", published = "03-06-2023 20:51:07", modified = "11-06-2023 20:21:42",
    trigger = (prev(CurrentMapId()) == 42 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Circus - Level IV", points = 5, type="progression",
    description = "Clear Level 44",
    id = 324398, badge = "362111", published = "03-06-2023 20:51:08", modified = "11-06-2023 20:21:42",
    trigger = (prev(CurrentMapId()) == 43 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Circus - Level V", points = 5, type="progression",
    description = "Clear Level 45",
    id = 324399, badge = "362112", published = "03-06-2023 20:51:08", modified = "11-06-2023 20:21:43",
    trigger = (prev(CurrentMapId()) == 44 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Circus - Level VI", points = 5, type="progression",
    description = "Clear Level 46",
    id = 324400, badge = "362113", published = "03-06-2023 20:51:08", modified = "11-06-2023 20:21:44",
    trigger = (prev(CurrentMapId()) == 45 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Circus - Level VII", points = 5, type="progression",
    description = "Clear Level 47",
    id = 324401, badge = "362114", published = "03-06-2023 20:51:09", modified = "11-06-2023 20:21:45",
    trigger = (prev(CurrentMapId()) == 46 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Circus - Level VIII", points = 5, type="progression",
    description = "Clear Level 48",
    id = 324402, badge = "362115", published = "03-06-2023 20:51:09", modified = "11-06-2023 20:21:46",
    trigger = (prev(CurrentMapId()) == 47 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Circus - Level IX", points = 5, type="progression",
    description = "Clear Level 49",
    id = 324403, badge = "362116", published = "03-06-2023 20:51:10", modified = "11-06-2023 20:21:47",
    trigger = (prev(CurrentMapId()) == 48 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Circus - Level X", points = 5, type="progression",
    description = "Clear Level 50",
    id = 324404, badge = "362117", published = "03-06-2023 20:51:10", modified = "11-06-2023 20:21:47",
    trigger = (prev(CurrentMapId()) == 49 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Circus - Level XI", points = 5, type="progression",
    description = "Clear Level 51",
    id = 324405, badge = "362118", published = "03-06-2023 20:51:10", modified = "11-06-2023 20:21:48",
    trigger = (prev(CurrentMapId()) == 50 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Circus - Level XII", points = 5, type="progression",
    description = "Clear Level 52",
    id = 324406, badge = "362119", published = "03-06-2023 20:51:11", modified = "11-06-2023 20:21:49",
    trigger = (prev(CurrentMapId()) == 51 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Circus - Level XIII", points = 5, type="progression",
    description = "Clear Level 53",
    id = 324407, badge = "362120", published = "03-06-2023 20:51:12", modified = "11-06-2023 20:21:49",
    trigger = (prev(CurrentMapId()) == 52 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Circus - Level XIV", points = 5, type="progression",
    description = "Clear Level 54",
    id = 324408, badge = "362121", published = "03-06-2023 20:51:12", modified = "11-06-2023 20:21:50",
    trigger = (prev(CurrentMapId()) == 53 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Circus - Level XV", points = 5, type="progression",
    description = "Clear Level 55",
    id = 324409, badge = "362122", published = "03-06-2023 20:51:12", modified = "11-06-2023 20:21:50",
    trigger = (prev(CurrentMapId()) == 54 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Circus - Level XVI", points = 5, type="progression",
    description = "Clear Level 56",
    id = 324410, badge = "362123", published = "03-06-2023 20:51:13", modified = "11-06-2023 20:21:51",
    trigger = (prev(CurrentMapId()) == 55 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Circus - Level XVII", points = 5, type="progression",
    description = "Clear Level 57",
    id = 324411, badge = "362124", published = "03-06-2023 20:51:13", modified = "11-06-2023 20:21:52",
    trigger = (prev(CurrentMapId()) == 56 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Circus - Level XVIII", points = 5, type="progression",
    description = "Clear Level 58",
    id = 324412, badge = "362125", published = "03-06-2023 20:51:13", modified = "11-06-2023 20:21:52",
    trigger = (prev(CurrentMapId()) == 57 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Circus - Level XIX", points = 5, type="progression",
    description = "Clear Level 59",
    id = 324413, badge = "362126", published = "03-06-2023 20:51:14", modified = "11-06-2023 20:21:53",
    trigger = (prev(CurrentMapId()) == 58 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Circus - Level XX", points = 5, type="progression",
    description = "Clear Level 60",
    id = 324414, badge = "362127", published = "03-06-2023 20:51:14", modified = "11-06-2023 20:21:53",
    trigger = (prev(CurrentMapId()) == 59 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Desert - Level I", points = 5, type="progression",
    description = "Complete level 61.",
    id = 324350, badge = "362063", published = "03-06-2023 20:40:22", modified = "11-06-2023 20:21:54",
    trigger = prev(CurrentMapId()) == 60 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Desert - Level II", points = 5, type="progression",
    description = "Complete level 62.",
    id = 324356, badge = "362069", published = "03-06-2023 20:40:27", modified = "11-06-2023 20:21:55",
    trigger = prev(CurrentMapId()) == 61 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Desert - Level III", points = 5, type="progression",
    description = "Complete level 63.",
    id = 324357, badge = "362070", published = "03-06-2023 20:40:28", modified = "11-06-2023 20:21:56",
    trigger = prev(CurrentMapId()) == 62 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Desert - Level IV", points = 5, type="progression",
    description = "Complete level 64.",
    id = 324358, badge = "362071", published = "03-06-2023 20:40:29", modified = "11-06-2023 20:21:57",
    trigger = prev(CurrentMapId()) == 63 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Desert - Level V", points = 5, type="progression",
    description = "Complete level 65.",
    id = 324359, badge = "362072", published = "03-06-2023 20:40:30", modified = "11-06-2023 20:21:58",
    trigger = prev(CurrentMapId()) == 64 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Desert - Level VI", points = 5, type="progression",
    description = "Complete level 66.",
    id = 324360, badge = "362073", published = "03-06-2023 20:40:31", modified = "11-06-2023 20:21:59",
    trigger = prev(CurrentMapId()) == 65 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Desert - Level VII", points = 5, type="progression",
    description = "Complete level 67.",
    id = 324361, badge = "362074", published = "03-06-2023 20:40:33", modified = "11-06-2023 20:21:59",
    trigger = prev(CurrentMapId()) == 66 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Desert - Level VIII", points = 5, type="progression",
    description = "Complete level 68.",
    id = 324362, badge = "362075", published = "03-06-2023 20:40:34", modified = "11-06-2023 20:22:00",
    trigger = prev(CurrentMapId()) == 67 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Desert - Level IX", points = 5, type="progression",
    description = "Complete level 69.",
    id = 324363, badge = "362076", published = "03-06-2023 20:40:35", modified = "11-06-2023 20:22:01",
    trigger = prev(CurrentMapId()) == 68 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Desert - Level X", points = 5, type="progression",
    description = "Complete level 70.",
    id = 324364, badge = "362077", published = "03-06-2023 20:40:36", modified = "11-06-2023 20:22:02",
    trigger = prev(CurrentMapId()) == 69 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Desert - Level XI", points = 5, type="progression",
    description = "Complete level 71.",
    id = 324365, badge = "362078", published = "03-06-2023 20:40:37", modified = "11-06-2023 20:22:03",
    trigger = prev(CurrentMapId()) == 70 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Desert - Level XII", points = 5, type="progression",
    description = "Complete level 72.",
    id = 324366, badge = "362079", published = "03-06-2023 20:40:38", modified = "11-06-2023 20:22:04",
    trigger = prev(CurrentMapId()) == 71 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Desert - Level XIII", points = 5, type="progression",
    description = "Complete level 73.",
    id = 324367, badge = "362080", published = "03-06-2023 20:40:39", modified = "11-06-2023 20:22:05",
    trigger = prev(CurrentMapId()) == 72 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Desert - Level IV", points = 5, type="progression",
    description = "Complete level 74.",
    id = 324368, badge = "362081", published = "03-06-2023 20:40:40", modified = "11-06-2023 20:22:05",
    trigger = prev(CurrentMapId()) == 73 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Desert - Level XV", points = 5, type="progression",
    description = "Complete level 75.",
    id = 324369, badge = "362082", published = "03-06-2023 20:40:41", modified = "11-06-2023 20:22:06",
    trigger = prev(CurrentMapId()) == 74 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Desert - Level XVI", points = 5, type="progression",
    description = "Complete level 76.",
    id = 324370, badge = "362083", published = "03-06-2023 20:40:42", modified = "11-06-2023 20:22:08",
    trigger = prev(CurrentMapId()) == 75 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Desert - Level XVII", points = 5, type="progression",
    description = "Complete level 77.",
    id = 324371, badge = "362084", published = "03-06-2023 20:40:43", modified = "11-06-2023 20:22:09",
    trigger = prev(CurrentMapId()) == 76 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Desert - Level XVIII", points = 5, type="progression",
    description = "Complete level 78.",
    id = 324372, badge = "362085", published = "03-06-2023 20:40:44", modified = "11-06-2023 20:22:09",
    trigger = prev(CurrentMapId()) == 77 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Desert - Level XIX", points = 5, type="progression",
    description = "Complete level 79.",
    id = 324373, badge = "362086", published = "03-06-2023 20:40:45", modified = "11-06-2023 20:22:11",
    trigger = prev(CurrentMapId()) == 78 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Desert - Level XX", points = 5, type="progression",
    description = "Complete level 80.",
    id = 324374, badge = "362087", published = "03-06-2023 20:40:46", modified = "11-06-2023 20:22:11",
    trigger = prev(CurrentMapId()) == 79 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Hell - Level I", points = 10, type="progression",
    description = "Clear Level 081",
    id = 324420, badge = "362133", published = "03-06-2023 20:57:18", modified = "11-06-2023 20:22:12",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Hell - Level II", points = 10, type="progression",
    description = "Clear Level 082",
    id = 324421, badge = "362134", published = "03-06-2023 20:57:18", modified = "11-06-2023 20:22:14",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Hell - Level III", points = 10, type="progression",
    description = "Clear Level 083",
    id = 324422, badge = "362135", published = "03-06-2023 20:57:18", modified = "11-06-2023 20:22:15",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Hell - Level IV", points = 10, type="progression",
    description = "Clear Level 084",
    id = 324423, badge = "362136", published = "03-06-2023 20:57:19", modified = "11-06-2023 20:22:16",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Hell - Level V", points = 10, type="progression",
    description = "Clear Level 085",
    id = 324424, badge = "362136", published = "03-06-2023 20:57:19", modified = "11-06-2023 20:22:18",
    trigger = prev(LevelState()) == 1 && LevelState() == 2 && unless(prev(CurrentMapId()) == 255)
)

achievement(
    title = "Hell - Level VI", points = 10, type="progression",
    description = "Clear Level 86",
    id = 324457, badge = "362189", published = "03-06-2023 22:14:48", modified = "11-06-2023 20:22:19",
    trigger = (prev(CurrentMapId()) == 85 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Hell - Level VII", points = 10, type="progression",
    description = "Clear Level 87",
    id = 324458, badge = "362190", published = "03-06-2023 22:14:48", modified = "11-06-2023 20:22:20",
    trigger = (prev(CurrentMapId()) == 86 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Hell - Level VIII", points = 10, type="progression",
    description = "Clear Level 88",
    id = 324459, badge = "362191", published = "03-06-2023 22:14:48", modified = "11-06-2023 20:22:21",
    trigger = (prev(CurrentMapId()) == 87 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Hell - Level IX", points = 10, type="progression",
    description = "Clear Level 89",
    id = 324460, badge = "362192", published = "03-06-2023 22:14:48", modified = "11-06-2023 20:22:22",
    trigger = (prev(CurrentMapId()) == 88 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Hell - Level X", points = 10, type="progression",
    description = "Clear Level 90",
    id = 324461, badge = "362193", published = "03-06-2023 22:14:49", modified = "11-06-2023 20:22:23",
    trigger = (prev(CurrentMapId()) == 89 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Hell - Level XI", points = 10, type="progression",
    description = "Clear Level 91",
    id = 324415, badge = "362128", published = "03-06-2023 20:51:15", modified = "11-06-2023 20:22:25",
    trigger = (prev(CurrentMapId()) == 90 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Hell - Level XII", points = 10, type="progression",
    description = "Clear Level 92",
    id = 324416, badge = "362129", published = "03-06-2023 20:51:15", modified = "11-06-2023 20:22:26",
    trigger = (prev(CurrentMapId()) == 91 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Hell - Level XIII", points = 10, type="progression",
    description = "Clear Level 93",
    id = 324417, badge = "362130", published = "03-06-2023 20:51:15", modified = "11-06-2023 20:22:27",
    trigger = (prev(CurrentMapId()) == 92 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Hell - Level XIV", points = 10, type="progression",
    description = "Clear Level 94",
    id = 324418, badge = "362131", published = "03-06-2023 20:51:15", modified = "11-06-2023 20:22:27",
    trigger = (prev(CurrentMapId()) == 93 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Hell - Level XV", points = 10, type="progression",
    description = "Clear Level 95",
    id = 324419, badge = "362132", published = "03-06-2023 20:51:16", modified = "11-06-2023 20:22:28",
    trigger = (prev(CurrentMapId()) == 94 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2) &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Hell - Level XVI", points = 25, type="progression",
    description = "Complete level 96.",
    id = 324351, badge = "362064", published = "03-06-2023 20:40:23", modified = "11-06-2023 20:22:29",
    trigger = prev(CurrentMapId()) == 95 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Hell - Level XVII", points = 25, type="progression",
    description = "Complete level 97.",
    id = 324352, badge = "362065", published = "03-06-2023 20:40:24", modified = "11-06-2023 20:22:31",
    trigger = prev(CurrentMapId()) == 96 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Hell - Level XVIII", points = 25, type="progression",
    description = "Complete level 98.",
    id = 324353, badge = "362066", published = "03-06-2023 20:40:24", modified = "11-06-2023 20:22:32",
    trigger = prev(CurrentMapId()) == 97 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

achievement(
    title = "Hell - Level XIX", points = 25, type="progression",
    description = "Complete level 99.",
    id = 324354, badge = "362067", published = "03-06-2023 20:40:25", modified = "11-06-2023 20:22:33",
    trigger = prev(CurrentMapId()) == 98 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 &&
              prev(LevelState()) == 1 && LevelState() == 2
)

// Ticket 73705: I played the final level to completion twice, and the achievement didn't trigger. This has happened on
//               other levels, and a replay usually gets it to trigger. It seemed like sometimes the level would end
//               even though a building was still on the map, and that might have been the cause the first time. The
//               second time I used the armageddon tech (punching glove) to end the level, and while that worked for
//               every other time, it didn't on the final. I noticed that level 100 doesn't get the green check mark on
//               the level selection. Maybe that's a factor.
//               
//               Password for level 100: 31272228
//               
//               There's no password given at the end of level 100. The credits just start rolling:
//               https://i.imgur.com/yzuxByh.png
//               RetroAchievements Hash: 76af127fbb4f621d9c128df809b27d4c
//               Emulator: Bizhawk
//               Emulator Version: 2.9.1 (x64)
achievement(
    title = "Hell - Level XX", points = 25, type="win_condition",
    description = "Complete level 100.",
    id = 324355, badge = "362068", published = "03-06-2023 20:40:26", modified = "10-07-2024 1:54:12",
    trigger = prev(CurrentMapId()) == 99 && prev(TbcButSoFarLookLikeThis()) == 3 && TbcButSoFarLookLikeThis() == 2 && LevelState() == 1 &&
              prev(ChangeFrom16To5InTheLastWinScreen()) == 22 && ChangeFrom16To5InTheLastWinScreen() == 5
)

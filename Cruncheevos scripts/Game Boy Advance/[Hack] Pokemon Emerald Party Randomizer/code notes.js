import { AchievementSet, define as $ } from '@cruncheevos/core'
import * as mdf from "../../custom functions.js"

// Achievement logic line structure
// [flag, type1, size1, memval1, cmp, type2, size2, memval2, hit]

// Functions usefull when making sets for this game

// Function to check if the player is playing and not in the title screen
// i is the position in the array of version of the particular version of the game
export function in_game_check(i){
    var version = list_of_versions[i]
    var timer_state = version.timer_state
    var mem = mdf.mem(timer_state)
    var val = mdf.value(timer_state.values.stopped)
    // Logic line
    return $(mdf.logic("", mem, "!=", val, 0))
}

// Checks if the player is in the correct map
// i is the position in the array of version of the particular version of the game
// mapb is the name of the map bank
// subm is the name of the sub map
export function in_map(i, mapb, subm){
    var version = list_of_versions[i]
    var maps = version.maps
    var map_bank = mdf.mem(maps.map_bank)
    var sub_map = mdf.mem(maps.sub_bank)
    var map = maps.areas[mapb]
    var map_bank_value = mdf.value(map.map_bank)
    var sub_map_value = mdf.value(map.sub_maps[subm])
    // Logic lines
    return $(
        mdf.logic("", map_bank, "=", map_bank_value, 0),
        mdf.logic("", sub_map, "=", sub_map_value, 0)
    )
}

// A function that returns a block of logic that checks when an event bitflag changed from 0 to 1 (off to on) on the previous frame
// i is the position in the array of version of the particular version of the game
export function event_flag_triggering(i, Pointer, Bitflag){
    var version = list_of_versions[i]
    var pointer = version[Pointer]
    var offsets = pointer.offsets
    var bitflag = mdf.mem(offsets[Bitflag])
    var logic = mdf.delta("", bitflag, ">", bitflag, 0)
    return(
        mdf.simple_pointer(pointer, logic)
    )
}

// Check so the achievement doesn't trigger if the pointer moves randomly
// i is the position in the array of version of the particular version of the game
export function pointer_check(i, Pointer){
    var version = list_of_versions[i]
    // Pointer and it's data
    var pointer = version[Pointer]
    var type = pointer.type
    var size = pointer.size
    var address = pointer.address
    // Logic lines
    return $(
        ["", type, size, address, "=", "Delta", size, address, 20],
        ["ResetIf", type, size, address, "!=", "Delta", size, address, 0]
    )
}

// Data per game version
// The hack and the patched version for the subset
export const v_original = {
    // Used to check if the player is in-game /////
    in_game_check: {
        // 00 durint the intro and select save menu
        address: 0x3f32f,
        size: "8bit",
        type: "Mem",
        values: {
            title_intro_screen: 0
        }
    },
    // Address used as in-game check
    // It shows if the in-game time is running
    timer_state:{
        address: 0x000e08,
        size: "8bit",
        type: "Mem",
        values: {
            stopped: 0,
            running: 1,
            maxed: 2
        }
    },
    /////////////////////////////////////////////////
    maps:{
        map_bank:{
            address: 0x3a2e4,
            size: "8bit",
            type: "Mem"
        },
        sub_bank: {
            address: 0x3a2e5,
            size: "8bit",
            type: "Mem"
        },
        areas:{
            battle_frontier:{
                map_bank: 26,
                sub_maps: {
                    symbol_battle_tower: 8,
                    symbol_battle_dome: 21,
                    symbol_battle_palace: 24,
                    symbol_battle_arena: 30,
                    symbol_battle_factory: 33,
                    symbol_battle_pike: 37,
                    symbol_battle_pyramid: 27,
                    battle_frontier_shield:46
                }
            }
        }
    },
    //////////////////////////////////////

    // Pointers for dinamic memory //
    main_pointer: {
        address: 0x5d8c,
        size: "24bit",
        type: "Mem",
        offsets: {
            // Bitflags
            battle_frontier_silver_symbol_tower: {
                offset: 0x9388,
                size: "Bit4",
                type: "Mem"
            },
            battle_frontier_golden_symbol_tower: {
                offset: 0x9388,
                size: "Bit5",
                type: "Mem"
            },
            battle_frontier_silver_symbol_dome: {
                offset: 0x9388,
                size: "Bit6",
                type: "Mem"
            },
            battle_frontier_golden_symbol_dome: {
                offset: 0x9388,
                size: "Bit7",
                type: "Mem"
            },
            battle_frontier_silver_symbol_palace: {
                offset: 0x9389,
                size: "Bit0",
                type: "Mem"
            },
            battle_frontier_golden_symbol_palace: {
                offset: 0x9389,
                size: "Bit1",
                type: "Mem"
            },
            battle_frontier_silver_symbol_arena: {
                offset: 0x9389,
                size: "Bit2",
                type: "Mem"
            },
            battle_frontier_golden_symbol_arena: {
                offset: 0x9389,
                size: "Bit3",
                type: "Mem"
            },
            battle_frontier_silver_symbol_factory: {
                offset: 0x9389,
                size: "Bit4",
                type: "Mem"
            },
            battle_frontier_golden_symbol_factory: {
                offset: 0x9389,
                size: "Bit5",
                type: "Mem"
            },
            battle_frontier_silver_symbol_pike: {
                offset: 0x9389,
                size: "Bit6",
                type: "Mem"
            },
            battle_frontier_golden_symbol_pike: {
                offset: 0x9389,
                size: "Bit7",
                type: "Mem"
            },
            battle_frontier_silver_symbol_pyramid: {
                offset: 0x938a,
                size: "Bit0",
                type: "Mem"
            },
            battle_frontier_golden_symbol_pyramid: {
                offset: 0x938a,
                size: "Bit1",
                type: "Mem"
            },
            battle_frontier_silver_shield: {
                offset: 0x928d,
                size: "Bit5",
                type: "Mem"
            },
            battle_frontier_golden_shield: {
                offset: 0x928d,
                size: "Bit6",
                type: "Mem"
            }
        }
    }
}

// List
export const list_of_versions = [v_original]

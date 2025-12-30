import { AchievementSet, define as $ } from '@cruncheevos/core'
import * as mdf from "../../custom functions.js"

// Achievement logic line structure
// [flag, type1, size1, memval1, cmp, type2, size2, memval2, hit]

// Functions usefull when making sets for this game

// Function to check if the player is playing and not in the title screen
// i is the position in the array of version of the particular version of the game
export function in_game_check(i){
    var version = list_of_versions[i]
    var timer = version.timer_state
    // Logic line
    return $(["ResetIf", timer.type, timer.size, timer.address, "=", "Value", "", timer.values.stopped, 0])
}

// Checks if the player is in the correct map
// i is the position in the array of version of the particular version of the game
// mapb is the name of the map bank
// subm is the name of the sub map
export function in_map(i, mapb, subm){
    var version = list_of_versions[i]
    // Saves the data of maps
    var maps = version.maps
    // Saves the data of the map banks and sub maps
    var map_bank = maps.map_bank
    var sub_map = maps.sub_bank
    // Saves the specific data of the desired map bank
    var map = maps.areas[mapb]
    // Saves the values of the map bank and sub map
    var map_bank_value = map.map_bank
    var sub_map_value = map.sub_maps[subm]
    // Logic lines
    return $(
        ["", map_bank.type, map_bank.size, map_bank.address, "=", "Value", "", map_bank_value, 0],
        ["", sub_map.type, sub_map.size, sub_map.address, "=", "Value", "", sub_map_value, 0]
    )
}

export function while_in_map(i, mapb, subm){
    var version = list_of_versions[i]
    // Saves the data of maps
    var maps = version.maps
    // Saves the data of the map banks and sub maps
    var map_bank = maps.map_bank
    var sub_map = maps.sub_bank
    // Saves the specific data of the desired map bank
    var map = maps.areas[mapb]
    // Saves the values of the map bank and sub map
    var map_bank_value = map.map_bank
    var sub_map_value = map.sub_maps[subm]
    // Logic lines
    return $(
        ["AndNext", map_bank.type, map_bank.size, map_bank.address, "=", "Value", "", map_bank_value, 0],
        ["AndNext", sub_map.type, sub_map.size, sub_map.address, "=", "Value", "", sub_map_value, 0]
    )
}

// A function that returns a block of logic that checks when an event bitflag changed from 0 to 1 (off to on) on the previous frame
// i is the position in the array of version of the particular version of the game
export function event_flag_triggering(i, Pointer, Bitflag){
    var version = list_of_versions[i]
    var pointer = version[Pointer]
    var offsets = pointer.offsets
    var bitflag = offsets[Bitflag]
    var logic = ["", bitflag.type, bitflag.size, bitflag.offset, ">", "Delta", bitflag.size, bitflag.offset, 0]
    return $(
        mdf.simple_pointer(pointer, logic)
    )
}

export function event_flag_on(i, Pointer, Bitflag){
    var version = list_of_versions[i]
    var pointer = version[Pointer]
    var offsets = pointer.offsets
    var bitflag = offsets[Bitflag]
    var logic = ["", bitflag.type, bitflag.size, bitflag.offset, "=", "Value", "", 1, 0]
    return $(
        mdf.simple_pointer(pointer, logic)
    )
}

export function event_flag_off(i, Pointer, Bitflag){
    var version = list_of_versions[i]
    var pointer = version[Pointer]
    var offsets = pointer.offsets
    var bitflag = offsets[Bitflag]
    var logic = ["", bitflag.type, bitflag.size, bitflag.offset, "=", "Value", "", 0, 0]
    return $(
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
        ["ResetNextIf", type, size, address, "!=", "Delta", size, address, 0],
        ["", type, size, address, "=", "Delta", size, address, 20]
    )
}

export function in_battle_check(i){
    var version = list_of_versions[i]
    var in_battle = version.in_battle
    var type = in_battle.type
    var size = in_battle.size
    var address = in_battle.address
    return $(["", type, size, address, "=", "Value", "", 1, 0])
}

export function won_battle(i){
    var version = list_of_versions[i]
    var battle_state = version.battle_data.battle_state
    var timer = version.timer_state
    // Data of battle_state
    var typeB = battle_state.type
    var sizeB = battle_state.size
    var addressB = battle_state.address
    // Data of the timer
    var typeT = timer.type
    var sizeT = timer.size
    var addressT = timer.address
    //------------------
    var win = battle_state.values.win
    var fighting = battle_state.values.fighting
    var logic = [
        // Check if the timer have stoped
        ["OrNext", typeT, sizeT, addressT, "=", "Value", "", timer.values.stopped, 0],
        // Reset condition in case the player enters another battle
        ["ResetNextIf", typeB, sizeB, addressB, "!=", "Value", "", win, 0],
        // Checks that the player was fighting the frame before
        ["AndNext", "Delta", sizeB, addressB, "=", "Value", "", fighting, 0],
        // Checks that the player won the previous battle
        ["", typeB, sizeB, addressB, "=", "Value", "", win, 1]
    ]
    return mdf.assembler(logic)
}

export function not_catch(i){
    var version = list_of_versions[i]
    var battle_state = version.battle_data.battle_state
    var timer = version.timer_state
    // Data of battle_state
    var typeB = battle_state.type
    var sizeB = battle_state.size
    var addressB = battle_state.address
    // Data of the timer
    var typeT = timer.type
    var sizeT = timer.size
    var addressT = timer.address
    //------------------
    var captured = battle_state.values.captured
    var fighting = battle_state.values.fighting
    var logic = [
        // Checks that the player was fighting the frame before
        ["AndNext", "Delta", sizeB, addressB, "=", "Value", "", fighting, 0],
        // Checks that the player didn't catched the mon
        ["AndNext", typeB, sizeB, addressB, "!=", "Value", "", captured, 0],
        ["", typeB, sizeB, addressB, "!=", "Value", "", fighting, 0]
    ]
    return mdf.assembler(logic)
}

// Data per game version
// The hack and the patched version for the subset
export const v_original = {
    // Used to check if the player is in-game /////
    // I'm actualli not using this anymore
    // But I will keep it just in case
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
            address: 0x3f35a,
            size: "8bit",
            type: "Mem"
        },
        sub_bank: {
            address: 0x3f359,
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
            },
            overworld:{
                map_bank: 0,
                sub_maps: {
                    route_101: 0x9
                }
            },
            denford_gym:{
                map_bank: 0x3,
                sub_map: {
                    gym_leader_room: 0x3
                }
            },
            lavaridge_gym:{
                map_bank: 0x4,
                sub_map: {
                    gym_leader_room: 0x1
                }
            },
            petalburg_gym:{
                map_bank: 0x8,
                sub_map: {
                    gym_leader_room: 0x1
                }
            },
            mauville_gym:{
                map_bank: 0xa,
                sub_map: {
                    gym_leader_room: 0x0
                }
            },
            rustboro_gym:{
                map_bank: 0xb,
                sub_map: {
                    gym_leader_room: 0x3
                }
            },
            fortree_gym:{
                map_bank: 0xc,
                sub_map: {
                    gym_leader_room: 0x1
                }
            },
            mossdeep_gym:{
                map_bank: 0xe,
                sub_map: {
                    gym_leader_room: 0x0
                }
            },
            sootopolis_gym:{
                map_bank: 0xf,
                sub_map: {
                    gym_leader_room: 0x0
                }
            },
            league:{
                map_bank: 0x10
            },
            steven_cave:{
                map_bank: 0x18,
                sub_maps: {
                    steven_room: 0x6b
                },
                sub_map: {
                    steven_room: 0x6b
                }
            }
        }
    },
    team_data: {
        mon1: {
            level:{
                address: 0x2c540,
                size: "8bit",
                type: "Mem"
            }
        },
        mon2: {
            level:{
                address: 0x2c5a4,
                size: "8bit",
                type: "Mem"
            }
        },
        mon3: {
            level:{
                address: 0x2c608,
                size: "8bit",
                type: "Mem"
            }
        },
        mon4: {
            level:{
                address: 0x2c66c,
                size: "8bit",
                type: "Mem"
            }
        },
        mon5: {
            level:{
                address: 0x2c6d0,
                size: "8bit",
                type: "Mem"
            }
        },
        mon6: {
            level:{
                address: 0x2c734,
                size: "8bit",
                type: "Mem"
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
            settings_set_mode: {
                offset: 0x7069,
                size: "Bit1",
                type: "Mem"
            },
            first_npc_route_101_visible: {
                offset: 0x92eb,
                size: "Bit7",
                type: "Mem"
            },
            hides_wally_petalburg:{
                offset: 0x92ca,
                size: "Bit6",
                type: "Mem"
            },
            professor_birch_recued: {
                offset: 0x927a,
                size: "Bit2",
                type: "Mem"
            },
            gym_badge1: {
                offset: 0x937c,
                size: "Bit7",
                type: "Mem"
            },
            gym_badge2: {
                offset: 0x937d,
                size: "Bit0",
                type: "Mem"
            },
            gym_badge3: {
                offset: 0x937d,
                size: "Bit1",
                type: "Mem"
            },
            gym_badge4: {
                offset: 0x937d,
                size: "Bit2",
                type: "Mem"
            },
            gym_badge5: {
                offset: 0x937d,
                size: "Bit3",
                type: "Mem"
            },
            gym_badge6: {
                offset: 0x937d,
                size: "Bit4",
                type: "Mem"
            },
            gym_badge7: {
                offset: 0x937d,
                size: "Bit5",
                type: "Mem"
            },
            gym_badge8: {
                offset: 0x937d,
                size: "Bit6",
                type: "Mem"
            },
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
    },
    pointer_two:{
        address: 0x5d90,
        size: "24bit",
        type: "Mem",
        // Offset: 8028 - 8058 (full Pokedex)
        offsets: {
            dex_1_8: {
                offset: 0x8028,
                size: "BitCount",
                type: "Mem"
            },
            dex_385:{
                offset: 0x8058,
                size: "Bit0",
                type: "Mem"
            },
            dex_386:{
                offset: 0x8058,
                size: "Bit1",
                type: "Mem"
            }
        }
    },
    ////////////////////////////
    player_movement_type:{
        address: 0x3f590,
        type: "Mem",
        bits:{
            walking: "Bit0",
            surfing: "Bit3",
            diving: "Bit4"
        }
    },
    battle_data:{
        own_pokemon_id:{
            address: 0x2c084,
            size: "16bit",
            type: "Mem"
        },
        enemy_pokemon_id:{
            address: 0x2ba68,
            size: "16bit",
            type: "Mem"
        },
        battle_state:{
            address: 0x2c33a,
            size: "8bit",
            type: "Mem",
            values:{
                fighting: 0,
                win: 1,
                lose: 2,
                scape: 4,
                teleport: 5,
                captured: 7
            }
        }
    },
    // Not sure if I should keep using it
    music:{
        address: 0x0f48,
        size: "16bit",
        type: "Mem",
        values:{
            surfing: 0x016d,
            diving: 0x019b,
            gym_leader: 0x01dd,
            elite_four: 0x01e3,
            champion: 0x01de,
            steven: 0x01e1
        }
    },
    total_party_members:{
        address: 0x2c4e9,
        size: "8bit",
        type: "Mem"
    },
    // This bit changes to 1 in all battles (at least the important ones for this set)
    in_battle:{
        address: 0xd63c,
        size: "Bit0",
        type: "Mem"
    },
    bag_open_in_battle:{
        address: 0x016802,
        size: "8bit",
        type: "Mem"
    }
}

// List
export const list_of_versions = [v_original]

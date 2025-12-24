import { AchievementSet, define as $ } from '@cruncheevos/core'
import * as mdf from "../../custom functions.js"

// Functions -----------
export function region_check(i){
	var version = list_of_versions[i]
	var region_id = version.regional_ID
	var address = region_id.address
	var size = region_id.size
	var type = region_id.type
	var id = region_id.value

	return $(
		["PauseIf", type, size, address, "!=", "Value", "", id, 0]
	)
}

export function level_complete(i){
	var version = list_of_versions[i]
	var lv_complete = version.level_complete_screen
	var address = lv_complete.address
	var size = lv_complete.size
	var type = lv_complete.type
	var value = lv_complete.value

	return $(
		["", "Delta", size, address, "!=", "Value", "", value, 0],
		["", type, size, address, "=", "Value", "", value, 0]
	)
}

export function in_level(i, id){
	var version = list_of_versions[i]
	var level_ID = version.level_ID
	var address = level_ID.address
	var size = level_ID.size
	var type = level_ID.type
	var value = id

	return $(
		["", type, size, address, "=", "Value", "", value, 0]
	)
}

export function cheat_check(i){
	var version = list_of_versions[i]
	var cheat = version.cheat_flag
	var address = cheat.address
	var size = cheat.size
	var type = cheat.type

	return $(
		["PauseIf", type, size, address, "=", "Value", "", 1, 0]
	)
}

export function hard_mode(i){
	var version = list_of_versions[i]
	var hard_mode = version.difficulty
	var address1 = hard_mode.address
	var size1 = hard_mode.size
	var type1 = hard_mode.type

	var level_ID = version.level_ID
	var address2 = level_ID.address
	var size2 = level_ID.size
	var type2 = level_ID.type

	return $(
		["OrNext", type2, size2, address2, "=", "Value", "", 0x2c, 0],
		["ResetNextIf", type2, size2, address2, "=", "Value", "", 0x2b, 0],
		["PauseIf", type1, size1, address1, "=", "Value", "", 0x00, 1],
		["", type1, size1, address1, "=", "Value", "", 1, 0]
	)
}

// Code notes ----------
export const USA = {
	regional_ID:{
		address: 0x00000003,
		size: "8bit",
        type: "Mem",
		value: 0x45
	},
	cheat_flag:{
		address: 0x4e23bb,
		size: "Bit0",
		type: "Mem"
	},
	level_complete_screen:{
		address: 0x2468b7,
		size: "8bit",
		type: "Mem",
		value: 0x44
	},
	// IDs 0x00 to 0x0e are the normal levels
	// 0x0f to 0x14 are the bonus levels
	// 0x2b is the title screen
	// 0x2c is the Level select and bonus screens
	level_ID:{
		address: 0x484e23,
		size: "8bit",
		type: "Mem"
	},
	// 1 is Hard mode
	difficulty:{
		address: 0x49a670,
		size: "Bit0",
		type: "Mem"
	},
	// For the next address add 0x04*Level_ID
	start_shields_collected:{
		address: 0x49c513,
		size: "8bit",
		type: "Mem",
	},
	// For all statue addresses, the next flag in the same level is one next the other
	start_statues_lantern_waste:{
		address: 0x49ab7c,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_to_western_wood:{
		address: 0x49abbc,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_beaver_damn:{
		address: 0x49abfc,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_through_the_tunnel:{
		address: 0x49ac3c,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_frozen_lake:{
		address: 0x49ac7c,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_the_great_river:{
		address: 0x49acbc,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_rescue_edmund:{
		address: 0x49acfc,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_follow_aslan:{
		address: 0x49ad3c,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_battle_of_beruna:{
		address: 0x49ad7c,
		size: "Bit0",
		type: "Mem"
	},
	start_pete_skills:{
		address: 0x49a8bd
		/*
		 All version have the same order of skills:

		 Bit0 = Ogre Bane (Peter and Edmund)  *
		 Bit4 = Double Damage
		 Bit5 = Gift Sword
		 Bit6 = Team Attack (Peter and Susan)
		 Bit7 = Blade Spinner (Peter and Edmund)

		 Next address

		 Bit0 = Wolf Bane (Peter and Edmund)
		 Bit1 = Lion's Leap (Peter and Edmund)
		 Bit2 = Ghoul Bane (Peter and Edmund)
		 Bit3 = Lion's Roar (Peter and Edmund)
		 Bit4 = Boogle Bane (Peter and Edmund)
		 Bit5 = Shield Slam
		 Bit6 = Minoboard Bane (Peter and Edmund)
		 Bit7 = Lion's Claw (Peter and Edmund)

		 Next address

		 Bit0 = Valiant Heart (All Children)
		 Bit1 = Brave Heart (All Children)
		 Bit2 = Phoenix Heart (All Children)
		 Bit3 = Lion Heart (All Children)
		*/
	},
	start_susan_skills:{
		address: 0x49a8c0
		/*
		 Bit0 = Full Circle (Susan and Edmund)

		 Bit5 = Rain of Fire (Susan and Lucy)
		 Bit6 = Team Attack (Peter and Susan)

		 Bit1 = Fast Reload
		 Bit2 = Dryad's Melody
		 Bit3 = Hawkspeed
		 Bit4 = Stone Song
		 Bit5 = Panpipes
		 Bit6 = Gift Bow
		 Bit7 = Ivory Horn

		 Bit0 = Valiant Heart (All Children)
		 Bit1 = Brave Heart (All Children)
		 Bit2 = Phoenix Heart (All Children)
		 Bit3 = Lion Heart (All Children)
		*/
	},
	start_edmund_skills:{
		address: 0x49a8c4
		/*
		 Bit0 = Full Circle (Susan and Edmund)

		 Bit0 = Ogre Bane (Peter and Edmund)
		 Bit4 = Shield Shower (Edmund and Lucy)
		 Bit7 = Blade Spinner (Peter and Edmund)

		 Bit0 = Wolf Bane (Peter and Edmund)
		 Bit1 = Lion's Leap (Peter and Edmund)
		 Bit2 = Ghoul Bane (Peter and Edmund)
		 Bit3 = Lion's Roar (Peter and Edmund)
		 Bit4 = Boogle Bane (Peter and Edmund)
		 Bit6 = Minoboard Bane (Peter and Edmund)
		 Bit7 = Lion's Claw (Peter and Edmund)
		*/
	},
	start_lucy_skills:{
		address: 0x49a8c8
		/*
		 Bit1 = Dryad's Cloak

		 Bit0 = Sun Fire
		 Bit1 = Boggle Tame
		 Bit2 = Fire Flower Cordial
		 Bit4 = Shield Shower (Edmund and Lucy)
		 Bit5 = Rain of Fire (Susan and Lucy)

		 Bit0 = First Aid
		 Bit1 = Wolf Tame
		 Bit2 = Ghoul Tame
		 Bit3 = Fire Fill
		 Bit4 = Minoboar Tame
		 Bit5 = Double Drop
		 Bit6 = Sun Speed
		 Bit7 = Triple Tipple

		 Bit0 = Valiant Heart (All Children)
		 Bit1 = Brave Heart (All Children)
		 Bit2 = Phoenix Heart (All Children)
		 Bit3 = Lion Heart (All Children)
		*/
	},
	statues_not_used_great_battle:{
		address: 0x4e09db,
		size: "8bit",
		type: "Mem"
	},
	total_statues_collected:{
		address: 0x4e09df,
		size: "8bit",
		type: "Mem"
	}
}

export const European = {
	regional_ID:{
		address: 0x00000003,
		size: "8bit",
        type: "Mem",
		value: 0x50
	},
	cheat_flag:{
		address: 0x4e3287,
		size: "Bit0",
		type: "Mem"
	},
	level_complete_screen:{
		address: 0x2475d7,
		size: "8bit",
		type: "Mem",
		value: 0x44
	},
	// IDs 0x00 to 0x0e are the normal levels
	// 0x0f to 0x14 are the bonus levels
	// 0x2b is the title screen
	// 0x2c is the Level select and bonus screens
	level_ID:{
		address: 0x485ca3,
		size: "8bit",
		type: "Mem"
	},
	// 1 is Hard mode
	difficulty:{
		address: 0x49b4f0,
		size: "Bit0",
		type: "Mem"
	},
	// For the next address add 0x04*Level_ID
	start_shields_collected:{
		address: 0x49d393,
		size: "8bit",
		type: "Mem",
	},
	// For all statue addresses, the next flag in the same level is one next the other
	start_statues_lantern_waste:{
		address: 0x49b9fc,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_to_western_wood:{
		address: 0x49ba3c,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_beaver_damn:{
		address: 0x49ba7c,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_through_the_tunnel:{
		address: 0x49babc,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_frozen_lake:{
		address: 0x49bafc,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_the_great_river:{
		address: 0x49bb3c,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_rescue_edmund:{
		address: 0x49bb7c,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_follow_aslan:{
		address: 0x49bbbc,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_battle_of_beruna:{
		address: 0x49bbfc,
		size: "Bit0",
		type: "Mem"
	},
	start_pete_skills:{
		address: 0x49b73d
	},
	start_susan_skills:{
		address: 0x49b740
	},
	start_edmund_skills:{
		address: 0x49b744
	},
	start_lucy_skills:{
		address: 0x49b748
	},
	statues_not_used_great_battle:{
		address: 0x4e18a3,
		size: "8bit",
		type: "Mem"
	},
	total_statues_collected:{
		address: 0x4e18a7,
		size: "8bit",
		type: "Mem"
	}
}

export const German = {
	regional_ID:{
		address: 0x00000003,
		size: "8bit",
        type: "Mem",
		value: 0x44
	},
	cheat_flag:{
		address: 0x4e3587,
		size: "Bit0",
        type: "Mem"
	},
	// 0x44 = Level complete screen
	level_complete_screen:{
		address: 0x2478d7,
		size: "8bit",
		type: "Mem",
		value: 0x44
	},
	// IDs 0x00 to 0x0e are the normal levels
	// 0x0f to 0x14 are the bonus levels
	// 0x2b is the title screen
	// 0x2c is the Level select and bonus screens
	level_ID:{
		address: 0x485fa3,
		size: "8bit",
		type: "Mem"
	},
	// 1 is Hard mode
	difficulty:{
		address: 0x49b7f0,
		size: "Bit0",
		type: "Mem"
	},
	// For the next address add 0x04*Level_ID
	start_shields_collected:{
		address: 0x49d693,
		size: "8bit",
		type: "Mem",
	},
	// For all statue addresses, the next flag in the same level is one next the other
	start_statues_lantern_waste:{
		address: 0x49bcfc,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_to_western_wood:{
		address: 0x49bd3c,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_beaver_damn:{
		address: 0x49bd7c,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_through_the_tunnel:{
		address: 0x49bdbc,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_frozen_lake:{
		address: 0x49bdfc,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_the_great_river:{
		address: 0x49be3c,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_rescue_edmund:{
		address: 0x49be7c,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_follow_aslan:{
		address: 0x49bebc,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_battle_of_beruna:{
		address: 0x49befc,
		size: "Bit0",
		type: "Mem"
	},
	start_pete_skills:{
		address: 0x49ba3d
	},
	start_susan_skills:{
		address: 0x49ba40
	},
	start_edmund_skills:{
		address: 0x49ba44
	},
	start_lucy_skills:{
		address: 0x49ba48
	},
	statues_not_used_great_battle:{
		address: 0x4e1ba3,
		size: "8bit",
		type: "Mem"
	},
	total_statues_collected:{
		address: 0x4e1ba7,
		size: "8bit",
		type: "Mem"
	}
}

export const French = {
	regional_ID:{
		address: 0x00000003,
		size: "8bit",
        type: "Mem",
		value: 0x46
	},
	cheat_flag:{
		address: 0x4e3547,
		size: "Bit0",
		type: "Mem"
	},
	level_complete_screen:{
		address: 0x247877,
		size: "8bit",
		type: "Mem",
		value: 0x44
	},
	// IDs 0x00 to 0x0e are the normal levels
	// 0x0f to 0x14 are the bonus levels
	// 0x2b is the title screen
	// 0x2c is the Level select and bonus screens
	level_ID:{
		address: 0x485f63,
		size: "8bit",
		type: "Mem"
	},
	// 1 is Hard mode
	difficulty:{
		address: 0x49b7b0,
		size: "Bit0",
		type: "Mem"
	},
	// For the next address add 0x04*Level_ID
	start_shields_collected:{
		address: 0x49d653,
		size: "8bit",
		type: "Mem",
	},
	// For all statue addresses, the next flag in the same level is one next the other
	start_statues_lantern_waste:{
		address: 0x49bcbc,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_to_western_wood:{
		address: 0x49bcfc,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_beaver_damn:{
		address: 0x49bd3c,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_through_the_tunnel:{
		address: 0x49bd7c,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_frozen_lake:{
		address: 0x49bdbc,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_the_great_river:{
		address: 0x49bdfc,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_rescue_edmund:{
		address: 0x49be3c,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_follow_aslan:{
		address: 0x49be7c,
		size: "Bit0",
		type: "Mem"
	},
	start_statues_battle_of_beruna:{
		address: 0x49bebc,
		size: "Bit0",
		type: "Mem"
	},
	start_pete_skills:{
		address: 0x49b9fd
	},
	start_susan_skills:{
		address: 0x49ba00
	},
	start_edmund_skills:{
		address: 0x49ba04
	},
	start_lucy_skills:{
		address: 0x49ba08
	},
	statues_not_used_great_battle:{
		address: 0x4e1b63,
		size: "8bit",
		type: "Mem"
	},
	total_statues_collected:{
		address: 0x4e1b67,
		size: "8bit",
		type: "Mem"
	}
}

export const list_of_versions = [USA, European, German, French]

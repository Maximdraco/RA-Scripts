import { AchievementSet, define as $ } from '@cruncheevos/core'
import * as codeNotes from "./code notes.js"
// Maximdraco's functions'
import * as mdf from "../../custom functions.js"

const set = new AchievementSet({
  gameId: 28384,
  title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
})

// Variables

var Level_names = ["The Air Raid", "Glimpse of Narnia", "The Spare Room",
"Lantern Waste", "To Western Wood", "Beaver Dam",
"Through the Tunnel", "Frozen Lake", "The Great River",
"Rescue Edmund", "Follow Aslan", "Battle of Beruna",
"The Witch's Castle", "The Great Battle", "The White Witch"]

var Achievement_titles_Bonus_levels = ["To Western Wood Again",
"Return to Allies Enclave",
"The Winter is back",
"Another Great River",
"Stealth Mission",
"The Witch's Second Castle"]

var Bonus_level_names = ["To Western Wood",
"Allies Enclave",
"Frozen Lake",
"The Great River",
"Follow Aslan",
"The Witch's Castle"]

// Levels_with_statues_names = ["Lantern Waste", "To Western Wood", "Beaver Damn", "Through the Tunnel", "Frozen Lake", "The Great River", "Rescue Edmund", "Follow Aslan", "Battle of Beruna"]

var Amount_of_statues = [10, 15, 6, 12, 12, 4, 4, 5, 4]

var Amount_of_shield = [21, 5, 16, 21, 29, 4, 13, 7, 16, 10, 12, 6, 5, 7, 5]

// Functions

function levels_achievements(index){
  var title
  if (index < 15){
    title = Level_names[index]
  } else {
    title = Achievement_titles_Bonus_levels[index-15]
  }

  var description
  if (index < 15){
    description = "Complete \"" + Level_names[index] + "\"."
  } else {
    description = "Complete the bonus level \"" + Bonus_level_names[index-15] + "\"."
  }
  // Achievements for completing the levels in any difficulty
  set.addAchievement({
    title: title,
    description: description,
    points: 5,
    type: 'progression',
    conditions:(
      mdf.simple_achievement_logic([
        {fn: codeNotes.region_check, args: []},
        {fn: codeNotes.cheat_check, args: []},
        {fn: codeNotes.in_level, args: [index]},
        {fn: codeNotes.level_complete, args: []}
      ], codeNotes.list_of_versions)
    )
  })
  // Achievements for completing the levels in Hard difficulty
  set.addAchievement({
    title: title + " [Hard]",
    description: description,
    points: 5,
    conditions:(
      mdf.simple_achievement_logic([
        {fn: codeNotes.region_check, args: []},
        {fn: codeNotes.cheat_check, args: []},
        {fn: codeNotes.hard_mode, args: []},
        {fn: codeNotes.in_level, args: [index]},
        {fn: codeNotes.level_complete, args: []}
      ], codeNotes.list_of_versions)
    )
  })
}

function shield(i, index){
  var version = codeNotes.list_of_versions[i]
  var shield = version.start_shields_collected
  var address = shield.address + 0x04*index
  var size = shield.size
  var type = shield.type
  var total_of_shields = Amount_of_shield[index]

  return $(
    ["", "Delta", size, address, "<", "Value", "", total_of_shields, 0],
    ["", type, size, address, "=", "Value", "", total_of_shields, 0]
  )
}

// Only the main levels have shield (indexes smaller than 15)
function shield_achievements(index){
  set.addAchievement({
    title: "Gathering shields in " + Level_names[index],
    description: "Collect all shields in \"" + Level_names[index] + "\".",
    points: 3,
    conditions:(
      mdf.simple_achievement_logic([
        {fn: codeNotes.region_check, args: []},
        {fn: codeNotes.cheat_check, args: []},
        {fn: shield, args: [index]}
      ], codeNotes.list_of_versions)
    )
  })
}

function statues(i, index){
  var version = codeNotes.list_of_versions[i]
  var statue
  // Picks starting address depending on the level
  switch (index){
    case 3:
      statue = version.start_statues_lantern_waste
	  break
    case 4:
      statue = version.start_statues_to_western_wood
	  break
    case 5:
      statue = version.start_statues_beaver_damn
	  break
    case 6:
      statue = version.start_statues_through_the_tunnel
	  break
    case 7:
      statue = version.start_statues_frozen_lake
	  break
    case 8:
      statue = version.start_statues_the_great_river
	  break
    case 9:
      statue = version.start_statues_rescue_edmund
	  break
    case 10:
      statue = version.start_statues_follow_aslan
	  break
    case 11:
      statue = version.start_statues_battle_of_beruna
	  break
  }
  var address = statue.address
  var size = statue.size
  var type = statue.type

  var iteration = Amount_of_statues[index-3]
  var logic_mem = []
  var logic_delta = []
  // Loop to create the AddSource chain
  for (let i = 0; i<iteration; i++){
    // If is the last iteration, add the end of the chain
    if (i == iteration-1){
      logic_mem.push(
        ["Measured", type, size, address+i, "=", "Value", "", iteration]
      )
      logic_delta.push(
        ["", "Delta", size, address+i, "=", "Value", "", iteration-1]
      )
    } else {
      logic_mem.push(["AddSource", type, size, address+i])
      logic_delta.push(["AddSource", "Delta", size, address+i])
    }
  }

  var x = mdf.assembler(logic_delta)
  var y = mdf.assembler(logic_mem)

  return $(x, y)
}

// Only levels 3 to 12 have statues
function statue_achievements(index){
  set.addAchievement({
    title: "Finding statues in " + Level_names[index],
    description: "Collect all statues in \"" + Level_names[index] + "\".",
    points: 3,
    conditions:(
      mdf.simple_achievement_logic([
        {fn: codeNotes.region_check, args: []},
        {fn: codeNotes.cheat_check, args: []},
        {fn: statues, args: [index]}
      ], codeNotes.list_of_versions)
    )
  })
}

function pete_skills(i){
  var version = codeNotes.list_of_versions[i]
  var address = version.start_pete_skills.address
  return $(
    ["AddSource", "Delta" , "Bit0", address],
    ["AddSource", "Delta" , "Bit4", address],
    ["AddSource", "Delta" , "Bit5", address],
    ["AddSource", "Delta" , "Bit6", address],
    ["AddSource", "Delta" , "Bit7", address],
    ["AddSource", "Delta" , "BitCount", address+0x1],
    ["AddSource", "Delta" , "Bit0", address+0x2],
    ["AddSource", "Delta" , "Bit1", address+0x2],
    ["AddSource", "Delta" , "Bit2", address+0x2],
    ["", "Delta" , "Bit3", address+0x2, "=", "Value", "", 16, 0],
    ["AddSource", "Mem" , "Bit0", address],
    ["AddSource", "Mem" , "Bit4", address],
    ["AddSource", "Mem" , "Bit5", address],
    ["AddSource", "Mem" , "Bit6", address],
    ["AddSource", "Mem" , "Bit7", address],
    ["AddSource", "Mem" , "BitCount", address+0x1],
    ["AddSource", "Mem" , "Bit0", address+0x2],
    ["AddSource", "Mem" , "Bit1", address+0x2],
    ["AddSource", "Mem" , "Bit2", address+0x2],
    ["Measured", "Mem" , "Bit3", address+0x2, "=", "Value", "", 17, 0]
  )
}

function susan_skills(i){
  var version = codeNotes.list_of_versions[i]
  var address = version.start_susan_skills.address
  return $(
    ["AddSource", "Delta" , "Bit0", address],
    ["AddSource", "Delta" , "Bit5", address+0x1],
    ["AddSource", "Delta" , "Bit6", address+0x1],
    ["AddSource", "Delta" , "Bit1", address+0x2],
    ["AddSource", "Delta" , "Bit2", address+0x2],
    ["AddSource", "Delta" , "Bit3", address+0x2],
    ["AddSource", "Delta" , "Bit4", address+0x2],
    ["AddSource", "Delta" , "Bit5", address+0x2],
    ["AddSource", "Delta" , "Bit6", address+0x2],
    ["AddSource", "Delta" , "Bit7", address+0x2],
    ["AddSource", "Delta" , "Bit0", address+0x3],
    ["AddSource", "Delta" , "Bit1", address+0x3],
    ["AddSource", "Delta" , "Bit2", address+0x3],
    ["", "Delta" , "Bit3", address+0x3, "=", "Value", "", 13, 0],
    ["AddSource", "Mem" , "Bit0", address],
    ["AddSource", "Mem" , "Bit5", address+0x1],
    ["AddSource", "Mem" , "Bit6", address+0x1],
    ["AddSource", "Mem" , "Bit1", address+0x2],
    ["AddSource", "Mem" , "Bit2", address+0x2],
    ["AddSource", "Mem" , "Bit3", address+0x2],
    ["AddSource", "Mem" , "Bit4", address+0x2],
    ["AddSource", "Mem" , "Bit5", address+0x2],
    ["AddSource", "Mem" , "Bit6", address+0x2],
    ["AddSource", "Mem" , "Bit7", address+0x2],
    ["AddSource", "Mem" , "Bit0", address+0x3],
    ["AddSource", "Mem" , "Bit1", address+0x3],
    ["AddSource", "Mem" , "Bit2", address+0x3],
    ["Measured", "Mem" , "Bit3", address+0x3, "=", "Value", "", 14, 0]
  )
}

function edmund_skills(i){
  var version = codeNotes.list_of_versions[i]
  var address = version.start_edmund_skills.address
  return $(
    ["AddSource", "Delta" , "Bit0", address],
    ["AddSource", "Delta" , "Bit0", address+0x1],
    ["AddSource", "Delta" , "Bit4", address+0x1],
    ["AddSource", "Delta" , "Bit7", address+0x1],
    ["AddSource", "Delta" , "Bit0", address+0x2],
    ["AddSource", "Delta" , "Bit1", address+0x2],
    ["AddSource", "Delta" , "Bit2", address+0x2],
    ["AddSource", "Delta" , "Bit3", address+0x2],
    ["AddSource", "Delta" , "Bit4", address+0x2],
    ["AddSource", "Delta" , "Bit6", address+0x2],
    ["", "Delta" , "Bit7", address+0x2, "=", "Value", "", 10, 0],
    ["AddSource", "Mem" , "Bit0", address],
    ["AddSource", "Mem" , "Bit0", address+0x1],
    ["AddSource", "Mem" , "Bit4", address+0x1],
    ["AddSource", "Mem" , "Bit7", address+0x1],
    ["AddSource", "Mem" , "Bit0", address+0x2],
    ["AddSource", "Mem" , "Bit1", address+0x2],
    ["AddSource", "Mem" , "Bit2", address+0x2],
    ["AddSource", "Mem" , "Bit3", address+0x2],
    ["AddSource", "Mem" , "Bit4", address+0x2],
    ["AddSource", "Mem" , "Bit6", address+0x2],
    ["Measured", "Mem" , "Bit7", address+0x2, "=", "Value", "", 11, 0]
  )
}

function lucy_skills(i){
  var version = codeNotes.list_of_versions[i]
  var address = version.start_lucy_skills.address
  return $(
    ["AddSource", "Delta" , "Bit1", address],
    ["AddSource", "Delta" , "Bit0", address+0x1],
    ["AddSource", "Delta" , "Bit1", address+0x1],
    ["AddSource", "Delta" , "Bit2", address+0x1],
    ["AddSource", "Delta" , "Bit4", address+0x1],
    ["AddSource", "Delta" , "Bit5", address+0x1],
    ["AddSource", "Delta" , "BitCount", address+0x2],
    ["AddSource", "Delta" , "Bit0", address+0x3],
    ["AddSource", "Delta" , "Bit1", address+0x3],
    ["AddSource", "Delta" , "Bit2", address+0x3],
    ["", "Delta" , "Bit3", address+0x3, "=", "Value", "", 17, 0],
    ["AddSource", "Mem" , "Bit1", address],
    ["AddSource", "Mem" , "Bit0", address+0x1],
    ["AddSource", "Mem" , "Bit1", address+0x1],
    ["AddSource", "Mem" , "Bit2", address+0x1],
    ["AddSource", "Mem" , "Bit4", address+0x1],
    ["AddSource", "Mem" , "Bit5", address+0x1],
    ["AddSource", "Mem" , "BitCount", address+0x2],
    ["AddSource", "Mem" , "Bit0", address+0x3],
    ["AddSource", "Mem" , "Bit1", address+0x3],
    ["AddSource", "Mem" , "Bit2", address+0x3],
    ["Measured", "Mem" , "Bit3", address+0x3, "=", "Value", "", 18, 0],
  )
}

function no_statues_used(i){
  var version = codeNotes.list_of_versions[i]

  var no_used_statues = version.statues_not_used_great_battle
  var address1 = no_used_statues.address
  var size1 = no_used_statues.size
  var type1 = no_used_statues.type

  var total_statues = version.total_statues_collected
  var address2 = total_statues.address
  var size2 = total_statues.size
  var type2 = total_statues.type

  return $(
    ["", type1, size1, address1, "=", type2, size2, address2, 0]
  )
}

// Achievements

// Warning achievement
set.addAchievement({
  title: 'WARNING!',
  description:
    'None of the achievements will trigger if you use any cheat, and to change from Normal to Hard you will have to start a new game in Hard or change difficulty in the title screen or any level, if you do, leave and enter the level again.',
  points: 0,
  conditions: '1=1.100.',
  badge: '485878',
  id: 430486,
})

// Achievements for each level, shield and statues
for (let i = 0; i<=0x14; i++){
  levels_achievements(i)
  if (i<15){
    shield_achievements(i)
  }
  if (2<i && i<12){
    statue_achievements(i)
  }
}
// ------------------------------------------------
set.addAchievement({
  title: 'High King Peter the Magnificent',
  description: `Unlock all of Pete's skills.`,
  points: 5,
  conditions:(
    mdf.simple_achievement_logic([
      {fn: codeNotes.region_check, args: []},
      {fn: codeNotes.cheat_check, args: []},
      {fn: pete_skills, args: []}
    ], codeNotes.list_of_versions)
  )
})

set.addAchievement({
  title: 'Queen Susan the Gentle',
  description: `Unlock all of Susan's skills.`,
  points: 5,
  conditions:(
    mdf.simple_achievement_logic([
      {fn: codeNotes.region_check, args: []},
      {fn: codeNotes.cheat_check, args: []},
      {fn: susan_skills, args: []}
    ], codeNotes.list_of_versions)
  )
})

set.addAchievement({
  title: 'King Edmund the Just',
  description: `Unlock all of Edmund's skills.`,
  points: 5,
  conditions:(
    mdf.simple_achievement_logic([
      {fn: codeNotes.region_check, args: []},
      {fn: codeNotes.cheat_check, args: []},
      {fn: edmund_skills, args: []}
    ], codeNotes.list_of_versions)
  )
})

set.addAchievement({
  title: 'Queen Lucy the Valiant',
  description: `Unlock all of Lucy's skills.`,
  points: 5,
  conditions:(
    mdf.simple_achievement_logic([
      {fn: codeNotes.region_check, args: []},
      {fn: codeNotes.cheat_check, args: []},
      {fn: lucy_skills, args: []}
    ], codeNotes.list_of_versions)
  )
})

set.addAchievement({
  title: 'No Reinforcement Needed',
  description: `Complete "The Great Battle" without using statues.`,
  points: 5,
  conditions:(
    mdf.simple_achievement_logic([
      {fn: codeNotes.region_check, args: []},
      {fn: codeNotes.cheat_check, args: []},
      {fn: codeNotes.in_level, args: [0xd]},
      {fn: codeNotes.level_complete, args: []},
	  {fn: no_statues_used, args: []}
    ], codeNotes.list_of_versions)
  )
})

set.addAchievement({
  title: 'No Reinforcement Needed [Hard]',
  description: `Complete "The Great Battle" on Hard difficulty without using statues.`,
  points: 5,
  conditions:(
    mdf.simple_achievement_logic([
      {fn: codeNotes.region_check, args: []},
      {fn: codeNotes.cheat_check, args: []},
      {fn: codeNotes.hard_mode, args: []},
      {fn: codeNotes.in_level, args: [0xd]},
      {fn: codeNotes.level_complete, args: []},
	  {fn: no_statues_used, args: []}
    ], codeNotes.list_of_versions)
  )
})

export default set

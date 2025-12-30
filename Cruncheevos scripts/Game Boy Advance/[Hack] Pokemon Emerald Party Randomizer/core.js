import { AchievementSet, define as $ } from '@cruncheevos/core'
import * as codeNotes from "./code notes.js"
// Maximdraco's functions'
import * as mdf from "../../custom functions.js"

const set = new AchievementSet({
  gameId: 17757,
  title: '~Hack~ Pokémon Emerald Version: Party Randomizer',
})

// Variables

var gym_achievement_titles = [
  "Roxanne Rocked",
  "Brawly the Brawler",
  "Electric Master",
  "Candente!",
  "Just Normal",
  "Master of the Skies",
  "Two Minds Are Better Than One",
  "Ice Juan"
]

var gym_leader_names = [
  "Roxanne",
  "Brawly",
  "Wattson",
  "Flannery",
  "Norman",
  "Winona",
  "Tate and Liza",
  "Juan"
]

var gyms_city = [
  "Rustboro City",
  "Dewford Town",
  "Mauville City",
  "Lavaridge Town",
  "Petalburg City",
  "Fortree City",
  "Mossdeep City",
  "Sootopolis City"
]

var gym_challenge_achievement_titles = [
  "Not Quite Like Brock",
  "King of Fighters",
  "I\'m Not a Doctor - I\'m an Electrician!",
  "Super Candente!",
  "Hyper Normalization",
  "Renewal Wings",
  "Our IQ Is Over 9000!",
  "Ice King Juan"
]

var gym_level_caps = [15, 19, 24, 29, 31, 33, 42, 46]
var gym_leader_pronoums = ["her", "him", "him", "her", "him", "her", "them", "him"]

var gym_maps = [
  "rustboro_gym",
"denford_gym",
"mauville_gym",
"lavaridge_gym",
"petalburg_gym",
"fortree_gym",
"mossdeep_gym",
"sootopolis_gym"
]

// Functions

// I'm not using this at the moment
// m is the movement type (as string)
function surf_dive(i, m){
  var version = codeNotes.list_of_versions[i]
  var movement = version.player_movement_type
  return $(["AndNext", movement.type, movement.bits[m], movement.address, "=", "Value", "", 1, 0])
}

function pokedex(i){
  var version = codeNotes.list_of_versions[i]
  var pokedex = version.pointer_two
  // Ranges for the loops
  var start = pokedex.offsets.dex_1_8.offset
  var end = pokedex.offsets.dex_385.offset - 1
  // Declaration of some variables
  var logic // Used for each achievement logic line
  var conditions
  // Arrays with the delta and mem parts of the logic chains
  var delta = []
  var mem = []

  for (let o = start; o <= end; o = o + 1) {
    logic = ["AddSource", "Delta", "BitCount", o]
    delta.push(mdf.simple_pointer(pokedex, logic))
    logic[1] = "Mem"
    mem.push(mdf.simple_pointer(pokedex, logic))
  }

  // Last bitflags
  logic = ["AddSource", "Delta", pokedex.offsets.dex_385.size, pokedex.offsets.dex_385.offset]
  delta.push(mdf.simple_pointer(pokedex, logic))
  logic[1] = "Mem"
  mem.push(mdf.simple_pointer(pokedex, logic))

  logic = ["", "Delta", pokedex.offsets.dex_386.size, pokedex.offsets.dex_386.offset, "<=", "Value", "", 385, 0]
  delta.push(mdf.simple_pointer(pokedex, logic))
  logic[1] = "Mem"
  logic[4] = "="
  logic[7] = 386
  mem.push(mdf.simple_pointer(pokedex, logic))

  conditions = mdf.assembler(delta.concat(mem))

  return (conditions)
}

function set_mode(i){
  var version = codeNotes.list_of_versions[i]
  var pointer = version.main_pointer
  var set_mode = pointer.offsets.settings_set_mode
  var type = set_mode.type
  var size = set_mode.size
  var offset = set_mode.offset
  var logic = ["AndNext", type, size, offset, "=", "Value", "", 1, 0]

  return mdf.simple_pointer(pointer, logic)
}

function level_caps(i, level){
  var version = codeNotes.list_of_versions[i]
  var team = version.team_data
  var mon1 = team.mon1.level
  var mon2 = team.mon2.level
  var mon3 = team.mon3.level
  var mon4 = team.mon4.level
  var mon5 = team.mon5.level
  var mon6 = team.mon6.level

  var logic = [
    ["AndNext", mon1.type, mon1.size, mon1.address, "<=", "Value", "", level, 1],
    ["AndNext", mon2.type, mon2.size, mon2.address, "<=", "Value", "", level, 1],
    ["AndNext", mon3.type, mon3.size, mon3.address, "<=", "Value", "", level, 1],
    ["AndNext", mon4.type, mon4.size, mon4.address, "<=", "Value", "", level, 1],
    ["AndNext", mon5.type, mon5.size, mon5.address, "<=", "Value", "", level, 1],
    ["AndNext", mon6.type, mon6.size, mon6.address, "<=", "Value", "", level, 1]
  ]

  return mdf.assembler(logic)
}

function in_gym_leader_battle(i){
  var version = codeNotes.list_of_versions[i]
  var music = version.music
  var address = music.address
  var size = music.size
  var type = music.type
  var value = music.values.gym_leader

  return $(
    ["AndNext", type, size, address, "=", "Value", "", value, 1]
  )
}

function backpack_check(i, mb, sb){
  var version = codeNotes.list_of_versions[i]
  var logic = []
  // Map Bank
  var code_note = version.maps.map_bank
  var address = code_note.address
  var size = code_note.size
  var type = code_note.type
  var map = version.maps.areas[mb]
  var value = map.map_bank
  logic.push(
    ["OrNext", type, size, address, "!=", "Value", "", value, 0]
  )
  // Sub Bank
  var code_note = version.maps.sub_bank
  var address = code_note.address
  var size = code_note.size
  var type = code_note.type
  var value = map.sub_map[sb]
  logic.push(
    ["ResetNextIf", type, size, address, "!=", "Value", "", value, 0]
  )
  // Music
  var code_note = version.music
  var address = code_note.address
  var size = code_note.size
  var type = code_note.type
  var value = code_note.values.gym_leader
  logic.push(
    ["AndNext", type, size, address, "=", "Value", "", value, 0]
  )
  // Bag open in battle
  var code_note = version.bag_open_in_battle
  var address = code_note.address
  var size = code_note.size
  var type = code_note.type
  var value = 2
  logic.push(
    ["PauseIf", type, size, address, "=", "Value", "", value, 1]
  )

  return mdf.assembler(logic)
}

function map_check(i, mb, sb){
  var version = codeNotes.list_of_versions[i]
  var logic = []
  // Map Bank
  var code_note = version.maps.map_bank
  var address = code_note.address
  var size = code_note.size
  var type = code_note.type
  var map = version.maps.areas[mb]
  var value = map.map_bank
  logic.push(
    ["OrNext", type, size, address, "!=", "Value", "", value, 0]
  )
  // Sub Bank
  var code_note = version.maps.sub_bank
  var address = code_note.address
  var size = code_note.size
  var type = code_note.type
  var value = map.sub_map[sb]
  logic.push(
    ["ResetIf", type, size, address, "!=", "Value", "", value, 0]
  )
  return mdf.assembler(logic)
}


function in_map_bank(i, mb){
  var version = codeNotes.list_of_versions[i]
  // Map Bank
  var code_note = version.maps.map_bank
  var address = code_note.address
  var size = code_note.size
  var type = code_note.type
  var map = version.maps.areas[mb]
  var value = map.map_bank
  return $(
    ["AndNext", type, size, address, "=", "Value", "", value, 0]
  )
}

function league_win(i){
  var version = codeNotes.list_of_versions[i]
  var battle_state = version.battle_data.battle_state
  var type = battle_state.type
  var size = battle_state.size
  var address = battle_state.address
  var value = battle_state.values.win
  return $(
    ["AndNext", type, size, address, ">", "Delta", size, address, 0],
    ["", type, size, address, "=", "Value", "", value, 5]
  )
}

function lose(i){
  var version = codeNotes.list_of_versions[i]
  var battle_state = version.battle_data.battle_state
  var type = battle_state.type
  var size = battle_state.size
  var address = battle_state.address
  var value = battle_state.values.lose

  return $(
    ["ResetIf", type, size, address, "=", "Value", "", value, 0]
  )
}

function not_in_map_bank(i, mb){
  var version = codeNotes.list_of_versions[i]
  // Map Bank
  var code_note = version.maps.map_bank
  var address = code_note.address
  var size = code_note.size
  var type = code_note.type
  var map = version.maps.areas[mb]
  var value = map.map_bank
  return $(
    ["ResetIf", type, size, address, "!=", "Value", "", value, 0]
  )
}

function backpack_check_leage(i, mb){
  var version = codeNotes.list_of_versions[i]
  var logic = []
  // Map Bank
  var code_note = version.maps.map_bank
  var address = code_note.address
  var size = code_note.size
  var type = code_note.type
  var map = version.maps.areas[mb]
  var value = map.map_bank
  logic.push(
    ["ResetNextIf", type, size, address, "!=", "Value", "", value, 0]
  )
  // Music
  var code_note = version.music
  var address = code_note.address
  var size = code_note.size
  var type = code_note.type
  var value = code_note.values.elite_four
  logic.push(
    ["OrNext", type, size, address, "=", "Value", "", value, 0]
  )
  var value = code_note.values.champion
  logic.push(
    ["AndNext", type, size, address, "=", "Value", "", value, 0]
  )
  // Bag open in battle
  var code_note = version.bag_open_in_battle
  var address = code_note.address
  var size = code_note.size
  var type = code_note.type
  var value = 2
  logic.push(
    ["PauseIf", type, size, address, "=", "Value", "", value, 1]
  )
  return mdf.assembler(logic)
}

// Achievemenets

set.addAchievement({
  title: 'Is This Even Randomized?',
  description:
    'Save Professor Birch from the wild Zigzagoon with your starter!',
  points: 1,
  type: 'missable',
  conditions: (
      mdf.simple_achievement_logic([
        {fn: codeNotes.in_game_check, args: []},
        {fn: codeNotes.pointer_check, args: ["main_pointer"]},
        {fn: codeNotes.in_map, args: ["overworld", "route_101"]},
        {fn: codeNotes.in_battle_check, args: []},
        {fn: codeNotes.won_battle, args: []},
        {fn: codeNotes.event_flag_on, args: ["main_pointer", "first_npc_route_101_visible"]}
    ], codeNotes.list_of_versions)
  )
})

set.addAchievement({
  title: `Wally, You Can't Catch a Fainted Pokemon!`,
  description: `Watch Wally failing to catch a Ralts; you can't repeat this event`,
  points: 5,
  type: 'missable',
  conditions: (
    mdf.simple_achievement_logic([
      {fn: codeNotes.in_game_check, args: []},
      {fn: codeNotes.pointer_check, args: ["main_pointer"]},
      {fn: codeNotes.in_battle_check, args: []},
      {fn: codeNotes.not_catch, args: []},
      {fn: codeNotes.event_flag_off, args: ["main_pointer", "hides_wally_petalburg"]}
    ], codeNotes.list_of_versions)
  )
})

// Loop to create the achievements for the gym leaders
for (let i = 1; i<9; i++){
  var title = gym_achievement_titles[i-1]
  var description = "Defeat " + gym_leader_names[i-1] + ", the Gym Leader of " + gyms_city[i-1]
  var badge = "gym_badge" + i

  set.addAchievement({
    title: title,
    description: description,
    points: 10,
    type: 'progression',
    conditions: (
      mdf.simple_achievement_logic([
        {fn: codeNotes.in_game_check, args: []},
        {fn: codeNotes.pointer_check, args: ["main_pointer"]},
        {fn: codeNotes.event_flag_triggering, args: ["main_pointer", badge]}
      ], codeNotes.list_of_versions)
    )
  })
}

// Loop for the challenge achievements
for (let i = 1; i<9; i++){
  var title = gym_challenge_achievement_titles[i-1]
  var description = "In Set Mode, defeat " + gym_leader_names[i-1] + " in your first battle with " + gym_leader_pronoums[i-1] + " without opening the backpack in battle and without any Pokemon being higher than level " + gym_level_caps[i-1] + " at the beginning of the battle"
  var badge = "gym_badge" + i

  set.addAchievement({
    title: title,
    description: description,
    points: 10,
    type: 'missable',
    conditions: (
      mdf.simple_achievement_logic([
        {fn: codeNotes.in_game_check, args: []},
        {fn: codeNotes.pointer_check, args: ["main_pointer"]},
        {fn: set_mode, args: []},
        {fn: in_gym_leader_battle, args: []},
        {fn: level_caps, args: [gym_level_caps[i-1]]},
        {fn: codeNotes.event_flag_triggering, args: ["main_pointer", badge]},
        {fn: backpack_check, args: [gym_maps[i-1], "gym_leader_room"]},
        {fn: map_check, args: [gym_maps[i-1], "gym_leader_room"]}
      ], codeNotes.list_of_versions)
    )
  })
}

set.addAchievement({
  title: 'Randomized League',
  description: 'In a single session, defeat the Elite Four and the Champion',
  points: 25,
  type: 'win_condition',
  conditions: (
    mdf.simple_achievement_logic([
      {fn: codeNotes.in_game_check, args: []},
      {fn: in_map_bank, args: ["league"]},
      {fn: league_win, args: []},
      {fn: lose, args: []},
      {fn: not_in_map_bank, args: ["league"]}
    ], codeNotes.list_of_versions)
  )
})

set.addAchievement({
  title: 'The Luckiest Champion in the World',
  description:
    'In Set Mode, defeat the Elite Four and the Champion in a single session without opening the backpack in battle and without any Pokemon being higher than level 58 at the beginning of the first battle; start each attempt from the Pokemon Center',
  points: 50,
  conditions: (
      mdf.simple_achievement_logic([
        {fn: codeNotes.in_game_check, args: []},
        {fn: set_mode, args: []},
        {fn: in_map_bank, args: ["league"]},
        {fn: level_caps, args: [58]},
        {fn: league_win, args: []},
        {fn: backpack_check_leage, args: ["league"]},
        {fn: lose, args: []},
        {fn: not_in_map_bank, args: ["league"]}
      ], codeNotes.list_of_versions)
  )
})

function vs_steven(i){
  var version = codeNotes.list_of_versions[i]
  var music = version.music
  var address = music.address
  var size = music.size
  var type = music.type
  var value = music.values.steven

  return $(
    ["AndNext", type, size, address, "=", "Value", "", value, 0]
  )
}

function victory(i){
  var version = codeNotes.list_of_versions[i]
  var battle_state = version.battle_data.battle_state
  var type = battle_state.type
  var size = battle_state.size
  var address = battle_state.address
  var value = battle_state.values.win
  return $(
    ["AndNext", "Delta", size, address, "=", "Value", "", 0, 0],
    ["", type, size, address, "=", "Value", "", value, 0]
  )
}

function backpack_check_steven(i, mb, sb){
  var version = codeNotes.list_of_versions[i]
  var logic = []
  // Map Bank
  var code_note = version.maps.map_bank
  var address = code_note.address
  var size = code_note.size
  var type = code_note.type
  var map = version.maps.areas[mb]
  var value = map.map_bank
  logic.push(
    ["OrNext", type, size, address, "!=", "Value", "", value, 0]
  )
  // Sub Bank
  var code_note = version.maps.sub_bank
  var address = code_note.address
  var size = code_note.size
  var type = code_note.type
  var value = map.sub_map[sb]
  logic.push(
    ["ResetNextIf", type, size, address, "!=", "Value", "", value, 0]
  )
  // Music
  var code_note = version.music
  var address = code_note.address
  var size = code_note.size
  var type = code_note.type
  var value = code_note.values.steven
  logic.push(
    ["AndNext", type, size, address, "=", "Value", "", value, 0]
  )
  // Bag open in battle
  var code_note = version.bag_open_in_battle
  var address = code_note.address
  var size = code_note.size
  var type = code_note.type
  var value = 2
  logic.push(
    ["PauseIf", type, size, address, "=", "Value", "", value, 1]
  )

  return mdf.assembler(logic)
}

set.addAchievement({
  title: 'An Enthusiastic Geologist',
  description:
    'After beating the Pokemon League, defeat Steven Stone in Meteor Falls',
  points: 25,
  conditions: (
    mdf.simple_achievement_logic([
      {fn: codeNotes.in_game_check, args: []},
      {fn: codeNotes.while_in_map, args: ["steven_cave", "steven_room"]},
      {fn: vs_steven, args: []},
      {fn: victory, args: []},
    ], codeNotes.list_of_versions)
  )
})

set.addAchievement({
  title: 'Champion of Geology',
  description:
    'In Set Mode, defeat Steven Stone in Meteor Falls in your first battle with him without opening the backpack in battle and without any Pokemon being higher than level 78 at the beginning of the battle',
  points: 25,
  type: 'missable',
  conditions: (
    mdf.simple_achievement_logic([
      {fn: codeNotes.in_game_check, args: []},
      {fn: set_mode, args: []},
      {fn: codeNotes.while_in_map, args: ["steven_cave", "steven_room"]},
      {fn: vs_steven, args: []},
      {fn: level_caps, args: [78]},
      {fn: victory, args: []},
      {fn: backpack_check_steven, args: ["steven_cave", "steven_room"]},
      {fn: map_check, args: ["steven_cave", "steven_room"]}
    ], codeNotes.list_of_versions)
  )
})

set.addAchievement({
  title: `Gotta Randomize 'em All!`,
  description: 'Catch all 386 Pokemon',
  points: 25,
  conditions: (
    mdf.simple_achievement_logic([
      {fn: codeNotes.in_game_check, args: []},
      {fn: pokedex, args: []}
    ], codeNotes.list_of_versions)
  )
})

// Demoted achievements ============

// Some notes for the surfing and diving achievements
// in-game check logic
// Logic with player_movement_type
//// Use 0x8 for surfing and 0x10 for diving
// Logic with battle_data.own_pokemon_id to check that it have changed (happens in battle)
//// Include a hit of 1 for the change
// Use the music ID that have to be different from 220 and 218
//chain everything but the in-game check with AndNext
//(
//  mdf.simple_achievement_logic([
//    {fn: codeNotes.in_game_check, args: []},
//    {fn: surf_dive, args: ["surfing"]}
//  ], codeNotes.list_of_versions)
//)


set.addAchievement({
  title: 'An Entire Booster Pack!',
  description: 'Have a team of 6 Pokemon',
  points: 1,
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0x3f32f, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x2c734, '>', 'Delta', '8bit', 0x2c734],
    ['AndNext', 'Mem', '8bit', 0x2c6d0, '<=', 'Value', '', 100],
    ['', 'Mem', '8bit', 0x2c6d0, '>', 'Value', '', 0],
  ),
  badge: '188833',
  id: 159791,
})

set.addAchievement({
  title: 'A Legendary Trade',
  description: 'Use a legendary Pokemon in battle',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x3f32f, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xd63c, '=', 'Value', '', 1],
    ['OrNext', 'Mem', '16bit', 0x2c084, '=', 'Value', '', 144],
    ['OrNext', 'Mem', '16bit', 0x2c084, '=', 'Value', '', 145],
    ['OrNext', 'Mem', '16bit', 0x2c084, '=', 'Value', '', 146],
    ['OrNext', 'Mem', '16bit', 0x2c084, '=', 'Value', '', 150],
    ['OrNext', 'Mem', '16bit', 0x2c084, '=', 'Value', '', 151],
    ['OrNext', 'Mem', '16bit', 0x2c084, '=', 'Value', '', 243],
    ['OrNext', 'Mem', '16bit', 0x2c084, '=', 'Value', '', 244],
    ['OrNext', 'Mem', '16bit', 0x2c084, '=', 'Value', '', 245],
    ['OrNext', 'Mem', '16bit', 0x2c084, '=', 'Value', '', 249],
    ['OrNext', 'Mem', '16bit', 0x2c084, '=', 'Value', '', 250],
    ['OrNext', 'Mem', '16bit', 0x2c084, '=', 'Value', '', 251],
    ['OrNext', 'Mem', '16bit', 0x2c084, '=', 'Value', '', 401],
    ['OrNext', 'Mem', '16bit', 0x2c084, '=', 'Value', '', 402],
    ['OrNext', 'Mem', '16bit', 0x2c084, '=', 'Value', '', 403],
    ['OrNext', 'Mem', '16bit', 0x2c084, '=', 'Value', '', 404],
    ['OrNext', 'Mem', '16bit', 0x2c084, '=', 'Value', '', 405],
    ['OrNext', 'Mem', '16bit', 0x2c084, '=', 'Value', '', 406],
    ['OrNext', 'Mem', '16bit', 0x2c084, '=', 'Value', '', 407],
    ['OrNext', 'Mem', '16bit', 0x2c084, '=', 'Value', '', 408],
    ['OrNext', 'Mem', '16bit', 0x2c084, '=', 'Value', '', 409],
    ['', 'Mem', '16bit', 0x2c084, '=', 'Value', '', 410],
  ),
  badge: '188834',
  id: 159792,
})


set.addAchievement({
  title: 'Ultimate Copycat',
  description:
  'Use the same Pokemon in battle that you are fighting; Transform is allowed',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x3f32f, '!=', 'Value', '', 0],
    ['ResetNextIf', 'Mem', '8bit', 0xd63c, '!=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xd63c, '=', 'Value', '', 1, 200],
    ['', 'Mem', '16bit', 0x2ba68, '=', 'Mem', '16bit', 0x2c084],
    ['', 'Mem', '16bit', 0x2ba68, '!=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0x2c084, '!=', 'Value', '', 0],
  ),
  badge: '188851',
  id: 168002,
})

set.addAchievement({
  title: `It's Okay, I Know How to Swim`,
  description:
  'While surfing, lose your Pokemon that has Surf to a random change',
  points: 1,
  conditions: $(
    ['', 'Mem', '8bit', 0x3f32f, '!=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0x3f590, '=', 'Value', '', 8],
    ['AndNext', 'Mem', '16bit', 0x2c084, '!=', 'Delta', '16bit', 0x2c084, 1],
    ['AndNext', 'Mem', '8bit', 0xf48, '!=', 'Value', '', 220],
    ['', 'Mem', '8bit', 0xf48, '!=', 'Value', '', 218],
  )
})

set.addAchievement({
  title: 'Luckily I Always Carry My Diving Equipment',
  description:
  'While diving, lose your Pokemon that has Dive to a random change',
  points: 1,
  conditions: $(
    ['', 'Mem', '8bit', 0x3f32f, '!=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0x3f590, '=', 'Value', '', 16],
    ['AndNext', 'Mem', '16bit', 0x2c084, '!=', 'Delta', '16bit', 0x2c084, 1],
    ['', 'Mem', '8bit', 0xf48, '!=', 'Value', '', 218],
  )
})

set.addAchievement({
  title: 'Family Trip',
  description: 'Defeat the Winstrate family',
  points: 5,
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0x3f32c, '=', 'Value', '', 26],
    ['AndNext', 'Mem', '8bit', 0x3f360, '=', 'Value', '', 20],
    ['AndNext', 'Mem', '8bit', 0x3f362, '=', 'Value', '', 122],
    ['AndNext', 'Mem', '8bit', 0xf48, '=', 'Value', '', 220],
    ['AndNext', 'Mem', '8bit', 0x2c33a, '>', 'Delta', '8bit', 0x2c33a, 4],
    ['', 'Mem', '8bit', 0x2c33a, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0x2c33a, '>', 'Delta', '8bit', 0x2c33a, 1],
    ['AndNext', 'Mem', '8bit', 0x2c33a, '=', 'Value', '', 2, 1],
    ['ResetIf', 'Mem', '8bit', 0x3f32c, '!=', 'Value', '', 26],
    ['ResetIf', 'Mem', '8bit', 0x3f32c, '!=', 'Value', '', 26],
  ),
  badge: '201873',
  id: 168013,
})

set.addAchievement({
  title: 'Family Game Night',
  description:
  'In Set Mode, defeat the Winstrate family in your first battles with them without using items in battle and without any Pokemon being higher than level 24 at the beginning of the battle',
  points: 5,
  type: 'missable',
  conditions: {
    core: $(
      ['AddAddress', 'Mem', '24bit', 0x5d8c],
      ['AndNext', 'Mem', 'Bit1', 0x7069, '=', 'Value', '', 1],
      ['AndNext', 'Mem', '8bit', 0x3f32c, '=', 'Value', '', 26],
      ['AndNext', 'Mem', '8bit', 0x3f360, '=', 'Value', '', 20],
      ['AndNext', 'Mem', '8bit', 0x3f362, '=', 'Value', '', 122],
      ['AndNext', 'Mem', '8bit', 0x2c540, '<=', 'Value', '', 24, 1],
      ['AndNext', 'Mem', '8bit', 0x2c5a4, '<=', 'Value', '', 24, 1],
      ['AndNext', 'Mem', '8bit', 0x2c608, '<=', 'Value', '', 24, 1],
      ['AndNext', 'Mem', '8bit', 0x2c66c, '<=', 'Value', '', 24, 1],
      ['AndNext', 'Mem', '8bit', 0x2c6d0, '<=', 'Value', '', 24, 1],
      ['AndNext', 'Mem', '8bit', 0x2c734, '<=', 'Value', '', 24, 1],
      ['AndNext', 'Mem', '8bit', 0xf48, '=', 'Value', '', 220],
      ['AndNext', 'Mem', '8bit', 0x2c33a, '>', 'Delta', '8bit', 0x2c33a, 4],
      ['', 'Mem', '8bit', 0x2c33a, '=', 'Value', '', 1],
      ['AndNext', 'Mem', '8bit', 0x2c33a, '>', 'Delta', '8bit', 0x2c33a],
      ['AndNext', 'Mem', '8bit', 0x2c33a, '=', 'Value', '', 2],
      ['ResetIf', 'Mem', '8bit', 0x3f32c, '!=', 'Value', '', 26],
      ['AndNext', 'Mem', '8bit', 0x3f32c, '=', 'Value', '', 26],
      ['AndNext', 'Mem', '8bit', 0x3f360, '=', 'Value', '', 20],
      ['AndNext', 'Mem', '8bit', 0x3f362, '=', 'Value', '', 122],
      ['AndNext', 'Mem', '8bit', 0xf48, '=', 'Value', '', 220],
      ['PauseIf', 'Mem', '8bit', 0x16802, '=', 'Value', '', 2, 1],
    ),
    alt1: $(['', 'Mem', '8bit', 0xf48, '=', 'Mem', '8bit', 0xf48]),
                   alt2: $(['ResetIf', 'Mem', '8bit', 0x3f32c, '!=', 'Value', '', 26]),
  },
  badge: '201874',
  id: 168014,
})
// =================================

export default set

import { AchievementSet, define as $ } from '@cruncheevos/core'
import * as codeNotes from "./code notes.js"
// Maximdraco's functions'
import * as mdf from "../../custom functions.js"

const set = new AchievementSet({
  gameId: 20222,
  title:
    '~Hack~ Pokémon Emerald Version: Party Randomizer [Subset - Battle Frontier]',
})

////////////////
// Variables //
//////////////

const facilities = ["Tower", "Dome", "Palace",
                    "Arena", "Factory", "Pike",
                    "Pyramid", "Shield"]

const badge_types = ["Silver", "Golden"]

// Name of relevant areas in "code notes.js"
const area2 = [
  "symbol_battle_tower",
  "symbol_battle_dome",
  "symbol_battle_palace",
  "symbol_battle_arena",
  "symbol_battle_factory",
  "symbol_battle_pike",
  "symbol_battle_pyramid",
  "battle_frontier_shield"
]

// Name of bitflags in "code notes.js"
const bf = [
  // Silver
  [
    "battle_frontier_silver_symbol_tower",
    "battle_frontier_silver_symbol_dome",
    "battle_frontier_silver_symbol_palace",
    "battle_frontier_silver_symbol_arena",
    "battle_frontier_silver_symbol_factory",
    "battle_frontier_silver_symbol_pike",
    "battle_frontier_silver_symbol_pyramid",
    "battle_frontier_silver_shield"
  ],
  // Golden
  [
    "battle_frontier_golden_symbol_tower",
    "battle_frontier_golden_symbol_dome",
    "battle_frontier_golden_symbol_palace",
    "battle_frontier_golden_symbol_arena",
    "battle_frontier_golden_symbol_factory",
    "battle_frontier_golden_symbol_pike",
    "battle_frontier_golden_symbol_pyramid",
    "battle_frontier_golden_shield"
  ]
]

////////////////
// Functions //
//////////////

// [flag, type1, size1, memval1, cmp, type2, size2, memval2, hit]

function points(bt){
  if (bt == "Silver"){
    return 50
  }
  else{
    return 100
  }
}

function achievement_titles(bt, f, j){
  var ac = [
    "Symbol of the "+bt+" "+f,
    bt+" "+f,
    "Full "+bt+" "+f,
    "Warrior of the "+bt+" "+f,
    f+" of "+bt,
    "Queen of the "+bt+" "+f,
    bt+" Pharaoh\'s "+f,
    bt+" Scott"
  ]
  if (bt == "Golden" && f == "Factory"){
    return ("Factory of Gold")
  } else {
    return (ac[j])
  }
}

function achievement_description(bt, f, j){
  var ds = "Get the " + bt + " Symbol of the Battle " + f + "."

  if (f == "Shield"){
    return ("Get the " + bt + " Shield from Scott in the Battle Frontier.")
  } else {
    return ds
  }
}
////////////////
// Main code //
//////////////

// Loop per badge type
for (let i = 0; i < badge_types.length; i++){
  // Badge type
  var bt = badge_types[i]
  var point = points(bt)

  // Loop per facility
  for (let j = 0; j < facilities.length; j++){
    var f = facilities[j]

    // Titles and descriptions
    var ac = achievement_titles(bt, f, j)
    var ds = achievement_description(bt, f, j)

    // Achievements
    set.addAchievement({
      title: ac,
      description: ds,
      points: point,
      conditions: (
        mdf.simple_achievement_logic([
          { fn: codeNotes.in_game_check, args: [] },
          { fn: codeNotes.pointer_check, args: ["main_pointer"] },
          { fn: codeNotes.event_flag_triggering, args: ["main_pointer", bf[i][j]] }
        ], codeNotes.list_of_versions)
      )
    })
  }
}

export default set

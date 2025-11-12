import { AchievementSet, define as $ , RichPresence} from '@cruncheevos/core'

const set = new AchievementSet({ gameId: 20319, title: '3D Grand Prix' })

///////////////
// Variables //
///////////////

const cities = ["Mosport", "Zandvoort", "Silverstone",
                "Anderstorp", "Jarama", "Rouen",
                "Brands Hatch", "Kyahami"]

const countries = ["Canada", "Netherlands", "England",
                   "Sweden", "Spain", "France",
                   "Kent", "South Africa"]

// Screen = 207 Is the title screen
// Screen = 39 Is the You win screen
// You_win_screen = 183 Is the You win screen too
const Grand_Prix_Amsoft_1985 = {
  "Course": 0xa51e,
  "Position": 0xa510,
  "Screen": 0xc54e,
  "You_win_screen": 0xb8ab,
  "Score": 0xa51f,
  "Lap": 0xa50f
}

const versions = [Grand_Prix_Amsoft_1985]

///////////////
// Functions //
///////////////

// The last course is 0
function course(version, number){
  const addres = version["Course"]
  return(
    $(["", "Mem", "8bit", addres, "=", "Value", "", number])
  )
}

function position(version, number){
  const addres = version["Position"]
  var comparador = "<="
  if (number == 1){
    comparador = "="
  }
  return($(["", "Mem", "8bit", addres, comparador, "Value", "", number]))
}

function win(version){
  const screen = version["Screen"]
  const win_screen = version["You_win_screen"]

  return(
    $(
      ["AndNext", "Delta", "8bit", screen, "!=", "Value", "", 39],
      ["", "Mem", "8bit", screen, "=", "Value", "", 39 ],
      ["", "Mem", "8bit", win_screen, "=", "Value", "", 183]
    )
  )
}

function not_title_screen(version){
  const screen = version["Screen"]
  return(
    $(["", "Mem", "8bit", screen, "!=", "Value", "", 207])
  )
}

// Function to work with multiple logic
// Have to be edited per set and achievement
// This is mostly for practice, I don't think there are other
// versions of this game
function multiple_versions_logic(versions, pos, track){
  var logic = {}
  if (versions.length > 1){
    logic["core"] = $(["", "Value", "", 1, "=", "Value", "", 1])
    for (let i = 0; i < versions.length; i++){
      var n = "alt" + (i+1)
      logic[n] = $(
        course(versions[i], track),
        position(versions[i], pos),
        not_title_screen(versions[i]),
        win(versions[i])
      )
    }
  }
  else{
    logic = $(
        course(versions[0], track),
        position(versions[0], pos),
        not_title_screen(versions[0]),
        win(versions[0])
      )
  }

  return(logic)
}

function leaderderboard_start(versions){
  var logic = {}
  if (versions.length > 1){
    logic["core"] = $(["", "Value", "", 1, "=", "Value", "", 1])
    for (let i = 0; i < versions.length; i++){
      var n = "alt" + (i+1)
      logic[n] = $(['', 'Mem', '24bit', versions[i]["Score"], '!=', 'Value', '', 0])
    }
  }
  else{
    logic = $(['', 'Mem', '24bit', versions[0]["Score"], '!=', 'Value', '', 0])
  }
  return(logic)
}

function leaderderboard_cancel(versions){
  var logic = {}
  if (versions.length > 1){
    logic["core"] = $(["", "Value", "", 1, "=", "Value", "", 1])
    for (let i = 0; i < versions.length; i++){
      var n = "alt" + (i+1)
      logic[n] = $(['', 'Mem', '8bit', versions[i]["Screen"], '=', 'Value', '', 207])
    }
  }
  else{
    logic = $(['', 'Mem', '8bit', versions[0]["Screen"], '=', 'Value', '', 207])
  }
  return(logic)
}

function leaderderboard_submit(versions){
  var logic = {}
  if (versions.length > 1){
    logic["core"] = $(["", "Value", "", 1, "=", "Value", "", 1])
    for (let i = 0; i < versions.length; i++){
      var n = "alt" + (i+1)
      logic[n] = $(
      ['', 'Mem', '8bit', versions[i]["Course"], '=', 'Value', '', 0],
      ['', 'Mem', '8bit', versions[i]["Screen"], '=', 'Value', '', 39],
      ['', 'Mem', '8bit', versions[i]["Lap"], '=', 'Value', '', 3],
      ['', 'Mem', '8bit', versions[i]["Position"], '<=', 'Value', '', 3],
      ['', 'Mem', '8bit', versions[i]["You_win_screen"], '=', 'Value', '', 183]
      )
    }
  }
  else{
    logic = $(
      ['', 'Mem', '8bit', versions[0]["Course"], '=', 'Value', '', 0],
      ['', 'Mem', '8bit', versions[0]["Screen"], '=', 'Value', '', 39],
      ['', 'Mem', '8bit', versions[0]["Lap"], '=', 'Value', '', 3],
      ['', 'Mem', '8bit', versions[0]["Position"], '<=', 'Value', '', 3],
      ['', 'Mem', '8bit', versions[0]["You_win_screen"], '=', 'Value', '', 183]
    )
  }
  return(logic)
}

// Rework this is another version of the game exist
function leaderboard_value(versions){
    return($(['Measured', 'BCD', '24bit', versions[0]["Score"]]))
}
///////////////
// Main code //
///////////////

for (let i = 0; i < cities.length; i++){
  var p = 10
  var t = "progression"

  // Score and type for the win_condition achievement
  if (i == 0){
    t = "win_condition"
    p = 25
  }
  // Score for the last tracks
  if (i >= 5){p = 25}

  set.addAchievement({
    title: cities[i],
    description: "End in the Top 3 in the " + cities[i] + " Track.",
    points: p,
    type: t,
    conditions: multiple_versions_logic(versions, 3, i)
    })

  p = 25
  if (i == 0){p = 50}
  if (i >= 5){p = 50}

  set.addAchievement({
    title: "Top 1 in " + countries[i],
    description: "End in first place in the " + cities[i] + " Track.",
    points: p,
    type: "",
    conditions: multiple_versions_logic(versions, 1, i)
  })
}

set.addLeaderboard({
  title: 'High Score',
  description:
    'How many points can you accumulate from the start to the last race?',
  lowerIsBetter: false,
  type: 'VALUE',
  conditions: {
    start: leaderderboard_start(versions),
    cancel: leaderderboard_cancel(versions),
    submit: leaderderboard_submit(versions),
    value: leaderboard_value(versions),
  }
})

export const rich = RichPresence({
  lookupDefaultParameters: { keyFormat: 'dec', compressRanges: true },
  // Wraps calls to RichPresence.format
  format: {
    Score: 'VALUE',
  },
  // Wraps calls to RichPresence.lookup
  lookup: {
    Track: {
      // No need to specify name, it's taken from object
      values: {
        '*': 'This message shouldn\'t appear',
        0: "Mosport",
        1: "Zandvoort",
        2: "Silverstone",
        3: "Anderstorp",
        4: "Jarama",
        5: "Rouen",
        6: "Brands Hatch",
        7: "Kyahami"
      },
    },
  },
  displays: ({ lookup, format, tag }) => [
    [
      $(['', 'Mem', '8bit', versions[0]["Screen"], '=', 'Value', '', 207]),
      tag `In the title screen`,
    ],
    `Racing in ${lookup.Track.at('0xha51e')}`,
  ],
 })

export default set

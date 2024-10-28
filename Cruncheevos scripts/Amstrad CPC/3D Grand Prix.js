import { AchievementSet, define as $ } from '@cruncheevos/core'

const set = new AchievementSet({ gameId: 20319, title: '3D Grand Prix' })

///////////////
// Variables //
///////////////

const cities = ["Mosport", "Zandour", "Silverstone",
                "Anderstorp", "Jarama", "Roeur",
                "Brands Hatch", "Kyahami"]

const countries = ["Canada", "Belgium", "England",
                   "Sweden", "Spain", "France",
                   "Kent", "South Africa"]

// Screen = 207 Is the title screen
// Screen = 39 Is the You win screen
// You_win_screen = 183 Is the You win screen too
const Grand_Prix_Amsoft_1985 = {
  "Course": 0xa51e,
  "Position": 0xa510,
  "Screen": 0xc54e,
  "You_win_screen": 0xb8ab
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

function multiple_versions_logic(versions, pos, track){
  var logic = {}
  if (versions.length > 1){
    var logic = {}
    logic["core"] = $(["", "Value", "8bit", 1, "=", "Value", "", 1])
    for (let i = 0; i < versions.length; i++){
      logic["alt${i+1}"] = $(
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
    conditions: $(
      multiple_versions_logic(versions, 3, i)
    )
    })

  p = 25
  if (i == 0){p = 50}
  if (i >= 5){p = 50}

  set.addAchievement({
    title: "Top 1 in " + countries[i],
    description: "End in first place in the " + cities[i] + " Track.",
    points: p,
    type: "",
    conditions: $(
        multiple_versions_logic(versions, 1, i)
    )
  })
}

set.addLeaderboard({
  title: 'High Score',
  description:
    'How many points can you accumulate from the start to the last race?',
  lowerIsBetter: false,
  type: 'VALUE',
  conditions: {
    start: $(['', 'Mem', '24bit', 0xa51f, '!=', 'Value', '', 0]),
    cancel: $(['', 'Mem', '8bit', 0xc54e, '=', 'Value', '', 207]),
    submit: $(
      ['', 'Mem', '8bit', 0xa51e, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xc54e, '=', 'Value', '', 39],
      ['', 'Mem', '8bit', 0xa50f, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xa510, '<=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xb8ab, '=', 'Value', '', 183],
    ),
    value: $(['Measured', 'BCD', '24bit', 0xa51f]),
  },
  id: 52853,
})

export default set

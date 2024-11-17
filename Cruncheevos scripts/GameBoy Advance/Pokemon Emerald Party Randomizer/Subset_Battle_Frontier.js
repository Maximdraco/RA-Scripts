import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({
  gameId: 20222,
  title:
    '~Hack~ Pokémon Emerald Version: Party Randomizer [Subset - Battle Frontier]',
})

////////////////
// Variables //
//////////////

// The hack + a patch that only change the hash
const subset_patch = {
  Map_bank: 0x3a2e4,

  Sub_bank: 0x3a2e5,

  Tower: {
    Map_bank: 26,
    Sub_bank: 8,
    Silver: {offset: 0x9388, bit: "Bit4"},
    Golden: {offset: 0x9388, bit: "Bit5"}
  },

  Dome: {
    Map_bank: 26,
    Sub_bank: 21,
    Silver: {offset: 0x9388, bit: "Bit6"},
    Golden: {offset: 0x9388, bit: "Bit7"}
  },

  Palace: {
    Map_bank: 26,
    Sub_bank: 24,
    Silver: {offset: 0x9389, bit: "Bit0"},
    Golden: {offset: 0x9389, bit: "Bit1"}
  },

  Arena: {
    Map_bank: 26,
    Sub_bank: 30,
    Silver: {offset: 0x9389, bit: "Bit2"},
    Golden: {offset: 0x9389, bit: "Bit3"}
  },

  Factory: {
    Map_bank: 26,
    Sub_bank: 33,
    Silver: {offset: 0x9389, bit: "Bit4"},
    Golden: {offset: 0x9389, bit: "Bit5"}
  },

  Pike: {
    Map_bank: 26,
    Sub_bank: 37,
    Silver: {offset: 0x9389, bit: "Bit6"},
    Golden: {offset: 0x9389, bit: "Bit7"}
  },

  Pyramid: {
    Map_bank: 26,
    Sub_bank: 27,
    Silver: {offset: 0x938a, bit: "Bit0"},
    Golden: {offset: 0x938a, bit: "Bit1"}
  },

  main_pointer: 0x5d8c, // 24 bits

  Shield: {
    Map_bank: 26,
    Sub_bank: 46,
    Silver: {offset: 0x928d, bit: "Bit5"},
    Golden: {offset: 0x928d, bit: "Bit6"}
  },

  no_ingame: 0x3f32f, // 00 during the intro and select save menu
}

const versions = [subset_patch]

const facilities = ["Tower", "Dome", "Palace",
                    "Arena", "Factory", "Pike",
                    "Pyramid", "Shield"]

const badge_types = ["Silver", "Golden"]

////////////////
// Functions //
//////////////

function in_game_check(){
  return (
    ['', 'Delta', '8bit', versions[0].no_ingame, '!=', 'Value', '', 0]
  )
}

function pointer_bitflag(badge, facility){
  var v = versions[0]
  var f = v[facility]
  var b = f[badge]

  return($(
    ['AddAddress', 'Delta', '24bit', v.main_pointer],
    ['', 'Delta', b.bit, b.offset, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '24bit', v.main_pointer],
    ['', 'Mem', b.bit, b.offset, '=', 'Value', '', 1]
  ))
}

////////////////
// Main code //
//////////////

for (let i = 0; i < badge_types.length; i++){
  var ver = versions[0]
  var bt = badge_types[i]
  var points = 0

  if (i == 0){points = 50}
  else {points = 100}

  for (let j = 0; j < facilities.length; j++){
    var f = facilities[j]

    const achievement_titles = ["Emblem of the "+bt+" "+f,
                                bt+" "+f,
                                "Full "+bt+" "+f,
                                "Warrior of the "+bt+" "+f,
                                f+" of "+bt,
                                "Queen of the "+bt+" "+f,
                                bt+" Pharaoh\'s "+f,
                                bt+" Scott"
    ]

    var ac = achievement_titles[j]
    var ds = "Get the " + bt + " Emblem of the Battle " + f + "."

    if (f == "Factory"){
      if (bt == "Golden"){
        ac = "Factory of Gold"
      }
    } else if (f == "Shield"){
      ds = "Get the " + bt + " Shield from Scott in the Battle Frontier."
    }

    set.addAchievement({
      title: ac,
      description: ds,
      points: points,
      conditions: $(
        ['', 'Mem', '8bit', ver.Map_bank, '=', 'Value', '', ver[f].Map_bank],
        ['', 'Mem', '8bit', ver.Sub_bank, '=', 'Value', '', ver[f].Sub_bank],
        pointer_bitflag(bt, f),
        in_game_check()
      )
    })
  }
}

export default set

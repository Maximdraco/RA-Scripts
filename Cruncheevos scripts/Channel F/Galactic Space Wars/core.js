import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({
  gameId: 10306,
  title: 'Videocart-23: Galactic Space Wars',
})

set.addAchievement({
  title: 'Warning: Unknown Emulator',
  description: 'Hardcore unlocks cannot be earned using this emulator.',
  points: 0,
  conditions: '1=1.300.',
  badge: '00000',
  id: 101000001,
})

set.addAchievement({
  title: '[G1] Day 1 of the war',
  description: 'Get 10 Points',
  points: 1,
  type: 'progression',
  conditions: $(
    ['PauseIf', 'Mem', '8bit', 0x28, '!=', 'Value', '', 13],
    ['AndNext', 'Mem', '8bit', 0x3a, '>', 'Delta', '8bit', 0x3a],
    ['', 'Mem', '8bit', 0x3a, '>=', 'Value', '', 16],
    ['', 'Mem', '8bit', 0x3a, '<', 'Value', '', 32],
  ),
  badge: '261967',
  id: 236209,
})

set.addAchievement({
  title: '[G1] Day 5 of the war',
  description: 'Get 50 Points',
  points: 3,
  type: 'progression',
  conditions: $(
    ['PauseIf', 'Mem', '8bit', 0x28, '!=', 'Value', '', 13],
    ['AndNext', 'Mem', '8bit', 0x3a, '>', 'Delta', '8bit', 0x3a],
    ['', 'Mem', '8bit', 0x3a, '>=', 'Value', '', 80],
    ['', 'Mem', '8bit', 0x3a, '<', 'Value', '', 96],
  ),
  badge: '261968',
  id: 236210,
})

set.addAchievement({
  title: '[G1] The War of the Stars',
  description: 'Get 10 Points before the Enemy',
  points: 5,
  type: 'progression',
  conditions: $(
    ['PauseIf', 'Mem', '8bit', 0x28, '!=', 'Value', '', 13],
    ['AndNext', 'Mem', '8bit', 0x3a, '>', 'Delta', '8bit', 0x3a],
    ['', 'Mem', '8bit', 0x3a, '>=', 'Value', '', 16],
    ['', 'Mem', '8bit', 0x3a, '<', 'Value', '', 32],
    ['PauseIf', 'Mem', '8bit', 0x3c, '>=', 'Value', '', 16],
  ),
  badge: '261969',
  id: 236211,
})

set.addAchievement({
  title: '[G1] The War between the Stars',
  description: 'Get 50 Points before the Enemies',
  points: 5,
  type: 'progression',
  conditions: $(
    ['PauseIf', 'Mem', '8bit', 0x28, '!=', 'Value', '', 13],
    ['AndNext', 'Mem', '8bit', 0x3a, '>', 'Delta', '8bit', 0x3a],
    ['', 'Mem', '8bit', 0x3a, '>=', 'Value', '', 80],
    ['', 'Mem', '8bit', 0x3a, '<', 'Value', '', 96],
    ['PauseIf', 'Mem', '8bit', 0x3c, '>=', 'Value', '', 80],
  ),
  badge: '261970',
  id: 236212,
})

set.addAchievement({
  title: '[G2] First Record',
  description: 'Land successfully for the first time',
  points: 3,
  type: 'progression',
  conditions: $(
    ['PauseIf', 'Mem', '8bit', 0x28, '!=', 'Value', '', 15],
    ['AndNext', 'Delta', '8bit', 0x3a, '=', 'Value', '', 153],
    ['', 'Mem', '8bit', 0x3a, '<', 'Value', '', 153],
  ),
  badge: '261971',
  id: 236213,
})

set.addAchievement({
  title: '[G2] Saving Fuel',
  description: 'Land using 20 or less units of Fuel',
  points: 5,
  type: 'progression',
  conditions: $(
    ['PauseIf', 'Mem', '8bit', 0x28, '!=', 'Value', '', 15],
    ['AndNext', 'Delta', '8bit', 0x36, '=', 'Value', '', 224],
    ['', 'Mem', '8bit', 0x36, '=', 'Value', '', 251],
    ['', 'Mem', '8bit', 0x38, '>=', 'Value', '', 121],
  ),
  badge: '261972',
  id: 236214,
})

set.addAchievement({
  title: '[G2] The Fastest Landing in the West',
  description: 'Land with a Record of 30 or less',
  points: 5,
  type: 'progression',
  conditions: $(
    ['PauseIf', 'Mem', '8bit', 0x28, '!=', 'Value', '', 15],
    ['AndNext', 'Delta', '8bit', 0x3a, '>=', 'Value', '', 49],
    ['', 'Mem', '8bit', 0x3a, '<=', 'Value', '', 48],
  ),
  badge: '261973',
  id: 236215,
})

set.addLeaderboard({
  title: 'Conflict between Galaxies',
  description: 'How many point can you acumulate before time runs out?',
  lowerIsBetter: false,
  type: 'VALUE',
  conditions: {
    start: $(['', 'Mem', '8bit', 0x28, '=', 'Value', '', 13]),
    cancel: $(['', 'Mem', '8bit', 0x28, '=', 'Value', '', 15]),
    submit: $(['', 'Mem', '8bit', 0x39, '=', 'Value', '', 0]),
    value: $(['Measured', 'BCD', '8bit', 0x3a]),
  },
  id: 40548,
})

set.addLeaderboard({
  title: 'Like park a car',
  description: 'Land in the lowest time possible',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0x28, '=', 'Value', '', 15],
      ['', 'Mem', '8bit', 0x36, '=', 'Value', '', 224],
    ),
    cancel: $(['', 'Mem', '8bit', 0x28, '=', 'Value', '', 13]),
    submit: $(['', 'Mem', '8bit', 0x36, '=', 'Value', '', 251]),
    value: $(['Measured', 'BCD', '8bit', 0x3a]),
  },
  id: 40549,
})

export default set

import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 3557, title: 'Star Castle' })

set.addAchievement({
  title: 'Warning: Unknown Emulator',
  description: 'Hardcore unlocks cannot be earned using this emulator.',
  points: 0,
  conditions: '1=1.300.',
  badge: '00000',
  id: 101000001,
})

set.addAchievement({
  title: 'First Blood',
  description: 'Destroy the energy cannon as player 1 in game 1.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x8e, '!=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x79, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x79, '=', 'Value', '', 0, 1],
    ['AndNext', 'Delta', '8bit', 0x7a, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x7a, '=', 'Value', '', 0, 1],
    ['', 'Mem', '8bit', 0xac, '=', 'Value', '', 201],
    ['ResetIf', 'Mem', '8bit', 0xac, '=', 'Value', '', 172],
    ['ResetIf', 'Mem', '8bit', 0x263, '=', 'Value', '', 48],
    ['AndNext', 'Delta', '8bit', 0xac, '=', 'Value', '', 201],
    ['ResetIf', 'Mem', '8bit', 0xac, '=', 'Value', '', 0],
  ),
  badge: '266969',
  id: 240414,
})

set.addAchievement({
  title: 'Skilled Pilot',
  description:
    'Destroy the energy cannon as player 1 in game 1 without losing a life.',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x8e, '!=', 'Value', '', 0],
      ['AndNext', 'Delta', '8bit', 0x79, '=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x79, '=', 'Value', '', 0, 1],
      ['AndNext', 'Delta', '8bit', 0x7a, '=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x7a, '=', 'Value', '', 0, 1],
      ['', 'Mem', '8bit', 0xac, '=', 'Value', '', 201],
      ['AndNext', 'Delta', '8bit', 0x8e, '!=', 'Value', '', 0],
      ['ResetNextIf', 'Mem', '8bit', 0x8e, '=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0x9d, '<', 'Delta', '8bit', 0x9d, 1],
    ),
    alt1: $(['', 'Mem', '8bit', 0xac, '>=', 'Value', '', 0]),
    alt2: $(
      ['ResetIf', 'Mem', '8bit', 0xac, '=', 'Value', '', 172],
      ['', 'Mem', '8bit', 0xac, '=', 'Value', '', 255],
      ['ResetIf', 'Mem', '8bit', 0x263, '=', 'Value', '', 48],
      ['AndNext', 'Delta', '8bit', 0xac, '=', 'Value', '', 201],
      ['ResetIf', 'Mem', '8bit', 0xac, '=', 'Value', '', 0],
    ),
  },
  badge: '266968',
  id: 240413,
})

set.addAchievement({
  title: 'First Milestone',
  description: 'Reach 10K points as player 1 in game 1.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x79, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x79, '=', 'Value', '', 0, 1],
    ['AndNext', 'Delta', '8bit', 0x7a, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x7a, '=', 'Value', '', 0, 1],
    ['', 'Mem', '8bit', 0xac, '=', 'Value', '', 201],
    ['', 'Mem', '8bit', 0xb1, '=', 'Value', '', 49],
    ['', 'Mem', '8bit', 0xb0, '=', 'Value', '', 32],
    ['ResetIf', 'Mem', '8bit', 0xac, '=', 'Value', '', 172],
    ['ResetIf', 'Mem', '8bit', 0x263, '=', 'Value', '', 48],
    ['AndNext', 'Delta', '8bit', 0xac, '=', 'Value', '', 201],
    ['ResetIf', 'Mem', '8bit', 0xac, '=', 'Value', '', 0],
  ),
  badge: '266975',
  id: 240420,
})

set.addAchievement({
  title: 'Another Milestone',
  description: 'Reach 20K points as player 1 in game 1.',
  points: 10,
  type: 'win_condition',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x79, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x79, '=', 'Value', '', 0, 1],
    ['AndNext', 'Delta', '8bit', 0x7a, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x7a, '=', 'Value', '', 0, 1],
    ['', 'Mem', '8bit', 0xac, '=', 'Value', '', 201],
    ['', 'Mem', '8bit', 0xb1, '=', 'Value', '', 50],
    ['', 'Mem', '8bit', 0xb0, '=', 'Value', '', 32],
    ['ResetIf', 'Mem', '8bit', 0xac, '=', 'Value', '', 172],
    ['ResetIf', 'Mem', '8bit', 0x263, '=', 'Value', '', 48],
    ['AndNext', 'Delta', '8bit', 0xac, '=', 'Value', '', 201],
    ['ResetIf', 'Mem', '8bit', 0xac, '=', 'Value', '', 0],
  ),
  badge: '266973',
  id: 240418,
})

set.addAchievement({
  title: 'First Shot',
  description: 'Destroy the energy cannon as player 1 in game 2.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x8e, '!=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x79, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x79, '=', 'Value', '', 0, 1],
    ['AndNext', 'Delta', '8bit', 0x7a, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x7a, '=', 'Value', '', 0, 1],
    ['', 'Mem', '8bit', 0xac, '=', 'Value', '', 201],
    ['ResetIf', 'Mem', '8bit', 0xac, '=', 'Value', '', 172],
    ['ResetIf', 'Mem', '8bit', 0x263, '=', 'Value', '', 96],
    ['AndNext', 'Delta', '8bit', 0xac, '=', 'Value', '', 201],
    ['ResetIf', 'Mem', '8bit', 0xac, '=', 'Value', '', 0],
  ),
  badge: '266970',
  id: 240415,
})

set.addAchievement({
  title: 'A Less Skilled Pilot',
  description:
    'Destroy the energy cannon as player 1 in game 2 without losing a life.',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x8e, '!=', 'Value', '', 0],
      ['AndNext', 'Delta', '8bit', 0x79, '=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x79, '=', 'Value', '', 0, 1],
      ['AndNext', 'Delta', '8bit', 0x7a, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0x7a, '=', 'Value', '', 0, 1],
      ['', 'Mem', '8bit', 0xac, '=', 'Value', '', 201],
      ['AndNext', 'Delta', '8bit', 0x8e, '!=', 'Value', '', 0],
      ['ResetNextIf', 'Mem', '8bit', 0x8e, '=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0x9d, '<', 'Delta', '8bit', 0x9d, 1],
    ),
    alt1: $(['', 'Mem', '8bit', 0xac, '>=', 'Value', '', 0]),
    alt2: $(
      ['ResetIf', 'Mem', '8bit', 0xac, '=', 'Value', '', 172],
      ['', 'Mem', '8bit', 0xac, '=', 'Value', '', 255],
      ['ResetIf', 'Mem', '8bit', 0x263, '=', 'Value', '', 96],
      ['AndNext', 'Delta', '8bit', 0xac, '=', 'Value', '', 201],
      ['ResetIf', 'Mem', '8bit', 0xac, '=', 'Value', '', 0],
    ),
  },
  badge: '266971',
  id: 240416,
})

set.addAchievement({
  title: 'A Easy Milestone',
  description: 'Reach 10K points as player 1 in game 2.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x79, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x79, '=', 'Value', '', 0, 1],
    ['AndNext', 'Delta', '8bit', 0x7a, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x7a, '=', 'Value', '', 0, 1],
    ['', 'Mem', '8bit', 0xac, '=', 'Value', '', 201],
    ['', 'Mem', '8bit', 0xb1, '=', 'Value', '', 49],
    ['', 'Mem', '8bit', 0xb0, '=', 'Value', '', 32],
    ['ResetIf', 'Mem', '8bit', 0xac, '=', 'Value', '', 172],
    ['ResetIf', 'Mem', '8bit', 0x263, '=', 'Value', '', 96],
    ['AndNext', 'Delta', '8bit', 0xac, '=', 'Value', '', 201],
    ['ResetIf', 'Mem', '8bit', 0xac, '=', 'Value', '', 0],
  ),
  badge: '266974',
  id: 240419,
})

set.addAchievement({
  title: 'Still a Easy Milestone',
  description: 'Reach 20K points as player 1 in game 2.',
  points: 5,
  type: 'win_condition',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x79, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x79, '=', 'Value', '', 0, 1],
    ['AndNext', 'Delta', '8bit', 0x7a, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x7a, '=', 'Value', '', 0, 1],
    ['', 'Mem', '8bit', 0xac, '=', 'Value', '', 201],
    ['', 'Mem', '8bit', 0xb1, '=', 'Value', '', 50],
    ['', 'Mem', '8bit', 0xb0, '=', 'Value', '', 32],
    ['ResetIf', 'Mem', '8bit', 0xac, '=', 'Value', '', 172],
    ['ResetIf', 'Mem', '8bit', 0x263, '=', 'Value', '', 96],
    ['AndNext', 'Delta', '8bit', 0xac, '=', 'Value', '', 201],
    ['ResetIf', 'Mem', '8bit', 0xac, '=', 'Value', '', 0],
  ),
  badge: '266972',
  id: 240417,
})

set.addLeaderboard({
  title: 'Milestone',
  description: 'How many points can you get? (Player 1 and game 1)',
  lowerIsBetter: false,
  type: 'VALUE',
  conditions: {
    start: $(
      ['AndNext', 'Delta', '8bit', 0x79, '=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x79, '=', 'Value', '', 0],
      ['AndNext', 'Delta', '8bit', 0x7a, '=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x7a, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '8bit', 0xac, '=', 'Value', '', 172],
      ['', 'Mem', '8bit', 0xac, '=', 'Value', '', 0],
    ),
    submit: $(['', 'Mem', '8bit', 0x9d, '=', 'Value', '', 0]),
    value: $(
      ['AddSource', 'Mem', 'Lower4', 0xb5],
      ['AddSource', 'Mem', 'Lower4', 0xb4, '*', 'Value', '', 10],
      ['AddSource', 'Mem', 'Lower4', 0xb3, '*', 'Value', '', 100],
      ['AddSource', 'Mem', 'Lower4', 0xb2, '*', 'Value', '', 1000],
      ['AddSource', 'Mem', 'Lower4', 0xb1, '*', 'Value', '', 10000],
      ['AddSource', 'Mem', 'Lower4', 0xb0, '*', 'Value', '', 0x186a0],
      ['Measured', 'Value', '', 0],
    ),
  },
  id: 41898,
})

set.addLeaderboard({
  title: 'Easy Milestone',
  description: 'How many points can you get? (Player 1 and game 2)',
  lowerIsBetter: false,
  type: 'VALUE',
  conditions: {
    start: $(
      ['AndNext', 'Delta', '8bit', 0x79, '=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x79, '=', 'Value', '', 0],
      ['AndNext', 'Delta', '8bit', 0x7a, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0x7a, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '8bit', 0xac, '=', 'Value', '', 172],
      ['', 'Mem', '8bit', 0xac, '=', 'Value', '', 0],
    ),
    submit: $(['', 'Mem', '8bit', 0x9d, '=', 'Value', '', 0]),
    value: $(
      ['AddSource', 'Mem', 'Lower4', 0xb5],
      ['AddSource', 'Mem', 'Lower4', 0xb4, '*', 'Value', '', 10],
      ['AddSource', 'Mem', 'Lower4', 0xb3, '*', 'Value', '', 100],
      ['AddSource', 'Mem', 'Lower4', 0xb2, '*', 'Value', '', 1000],
      ['AddSource', 'Mem', 'Lower4', 0xb1, '*', 'Value', '', 10000],
      ['AddSource', 'Mem', 'Lower4', 0xb0, '*', 'Value', '', 0x186a0],
      ['Measured', 'Value', '', 0],
    ),
  },
  id: 41899,
})

export default set

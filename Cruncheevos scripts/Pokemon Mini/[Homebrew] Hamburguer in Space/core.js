import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({
  gameId: 19708,
  title: '~Homebrew~ Hamburger in Space!',
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
  title: 'Cheeseburger',
  description: 'Get a total of 50 points.',
  points: 1,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x1082, '=', 'Value', '', 8],
    ['', 'Delta', '8bit', 0x535, '=', 'Value', '', 106],
    ['', 'Delta', '8bit', 0x536, '=', 'Value', '', 101],
    ['', 'Mem', '8bit', 0x536, '=', 'Value', '', 102],
    ['', 'Mem', '8bit', 0x535, '=', 'Value', '', 97],
    ['', 'Mem', '8bit', 0x537, '=', 'Value', '', 97],
    ['', 'Mem', '8bit', 0x538, '=', 'Value', '', 97],
  ),
  badge: '243504',
  id: 220140,
})

set.addAchievement({
  title: 'Double Cheeseburger',
  description: 'Get a total of 100 points.',
  points: 2,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x1082, '=', 'Value', '', 8],
    ['', 'Delta', '8bit', 0x536, '=', 'Value', '', 106],
    ['', 'Mem', '8bit', 0x536, '=', 'Value', '', 97],
    ['', 'Delta', '8bit', 0x537, '=', 'Value', '', 97],
    ['', 'Mem', '8bit', 0x537, '=', 'Value', '', 98],
    ['', 'Mem', '8bit', 0x538, '=', 'Value', '', 97],
    ['', 'Mem', '8bit', 0x535, '=', 'Value', '', 97],
  ),
  badge: '243505',
  id: 220141,
})

set.addAchievement({
  title: 'Triple Cheeseburger',
  description: 'Get a total of 150 points.',
  points: 2,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x1082, '=', 'Value', '', 8],
    ['', 'Delta', '8bit', 0x536, '=', 'Value', '', 101],
    ['', 'Mem', '8bit', 0x536, '=', 'Value', '', 102],
    ['', 'Mem', '8bit', 0x537, '=', 'Value', '', 98],
    ['', 'Mem', '8bit', 0x538, '=', 'Value', '', 97],
    ['', 'Mem', '8bit', 0x535, '=', 'Value', '', 97],
  ),
  badge: '243506',
  id: 220142,
})

set.addAchievement({
  title: 'Burger Tower',
  description: 'Get 30 points without moving left or right.',
  points: 2,
  conditions: {
    core: $(
      ['ResetIf', 'Mem', '8bit', 0x1082, '!=', 'Value', '', 8],
      ['ResetIf', 'Mem', '8bit', 0x304, '!=', 'Delta', '8bit', 0x304],
    ),
    alt1: $([
      'Measured',
      'Mem',
      '8bit',
      0x535,
      '!=',
      'Delta',
      '8bit',
      0x535,
      30,
    ]),
    alt2: $(
      ['Trigger', 'Mem', '8bit', 0x535, '!=', 'Delta', '8bit', 0x535, 30],
      ['', 'Mem', '8bit', 0x535, '!=', 'Delta', '8bit', 0x535, 2],
    ),
  },
  badge: '243854',
  id: 220292,
})

set.addAchievement({
  title: 'Fast Food Happy Meal',
  description: 'Get 30 points in 1 minute (Sleep to reset).',
  points: 3,
  conditions: {
    core: $(
      ['PauseIf', 'Value', '', 0, '=', 'Value', '', 0, 4320],
      ['', 'Mem', '8bit', 0x1082, '=', 'Value', '', 8],
    ),
    alt1: $(
      ['ResetIf', 'Mem', '8bit', 0x1082, '=', 'Value', '', 104],
      ['ResetIf', 'Mem', '8bit', 0x1001, '!=', 'Value', '', 32],
      ['Measured', 'Mem', '8bit', 0x535, '!=', 'Delta', '8bit', 0x535, 30],
    ),
    alt2: $([
      'Trigger',
      'Mem',
      '8bit',
      0x535,
      '!=',
      'Delta',
      '8bit',
      0x535,
      30,
    ]),
  },
  badge: '243855',
  id: 220293,
})

set.addAchievement({
  title: 'Lactose Tolerant',
  description:
    'Hold down right for 1 minute without shooting or touching a milkshake.',
  points: 3,
  conditions: $(
    ['Trigger', 'Value', '', 0, '=', 'Value', '', 0, 4320],
    ['', 'Value', '', 0, '=', 'Value', '', 0, 72],
    ['ResetIf', 'Mem', 'Bit6', 0x1052, '=', 'Value', '', 1],
    ['ResetIf', 'Mem', '8bit', 0x1082, '!=', 'Value', '', 8],
    ['ResetIf', 'Mem', 'Bit0', 0x1052, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0x30c, '>=', 'Value', '', 14],
    ['AndNext', 'Mem', '8bit', 0x30c, '<=', 'Value', '', 30],
    ['AndNext', 'Mem', '8bit', 0x30d, '>=', 'Value', '', 23],
    ['ResetIf', 'Mem', '8bit', 0x30d, '<=', 'Value', '', 48],
    ['ResetIf', 'Mem', 'Bit5', 0x1001, '=', 'Value', '', 0],
  ),
  badge: '243856',
  id: 220294,
})

set.addLeaderboard({
  title: 'Fast Food Consumer',
  description: 'Get as many points as possible in 1 minute.',
  lowerIsBetter: false,
  type: 'VALUE',
  conditions: {
    start: $(['', 'Mem', '8bit', 0x1082, '=', 'Value', '', 8]),
    cancel: $(
      ['OrNext', 'Mem', '8bit', 0x1082, '=', 'Value', '', 104],
      ['', 'Mem', '8bit', 0x1001, '!=', 'Value', '', 32],
    ),
    submit: $(
      ['', 'Value', '', 0, '=', 'Value', '', 0, 4320],
      ['ResetIf', 'Mem', '8bit', 0x1082, '=', 'Value', '', 104],
      ['ResetIf', 'Mem', '8bit', 0x1001, '!=', 'Value', '', 32],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0x538, '*', 'Value', '', 1000],
      ['AddSource', 'Mem', '8bit', 0x537, '*', 'Value', '', 100],
      ['AddSource', 'Mem', '8bit', 0x536, '*', 'Value', '', 10],
      ['AddSource', 'Mem', '8bit', 0x535],
      ['SubSource', 'Value', '', 0x1a4f7],
      ['Measured', 'Value', '', 0],
    ),
  },
  id: 35088,
})

export default set

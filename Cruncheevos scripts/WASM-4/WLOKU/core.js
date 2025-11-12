import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 19310, title: 'WLOKU' })

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
  description: 'Get your first victory.',
  points: 1,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0xa5e, '!=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xa5e, '=', 'Value', '', 1],
    ['OrNext', 'Mem', '16bit', 0x3aba, '!=', 'Delta', '16bit', 0x3aba, 1],
    ['', 'Mem', '16bit', 0x3abe, '!=', 'Delta', '16bit', 0x3abe, 1],
    ['ResetIf', 'Delta', '8bit', 0xa5e, '=', 'Value', '', 84],
  ),
  badge: '238127',
  id: 215152,
})

set.addAchievement({
  title: '1 Hit KO',
  description: 'Win a match without shooting more than 1 bullet.',
  points: 1,
  conditions: {
    core: $(
      ['AndNext', 'Delta', '8bit', 0xa5e, '!=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0xa5e, '=', 'Value', '', 1],
      ['OrNext', 'Mem', '16bit', 0x3aba, '!=', 'Delta', '16bit', 0x3aba, 1],
      ['', 'Mem', '16bit', 0x3abe, '!=', 'Delta', '16bit', 0x3abe, 1],
      ['PauseIf', 'Mem', '8bit', 0x3ad0, '>', 'Delta', '8bit', 0x3ad0, 2],
    ),
    alt1: $(
      ['AndNext', 'Delta', '8bit', 0xa5e, '=', 'Value', '', 1],
      ['ResetIf', 'Mem', '8bit', 0xa5e, '!=', 'Value', '', 1],
      ['ResetIf', 'Delta', '8bit', 0xa5e, '=', 'Value', '', 84],
    ),
  },
  badge: '238128',
  id: 215153,
})

set.addAchievement({
  title: 'We Are One',
  description: 'Get in the exact same position as your opponent.',
  points: 1,
  conditions: $(
    ['', 'Mem', '8bit', 0x3abb, '=', 'Value', '', 65],
    ['', 'Mem', 'Upper4', 0x3aba, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x3acc, '=', 'Value', '', 0],
    ['OrNext', 'Mem', '16bit', 0x3abe, '=', 'Value', '', 17037],
    ['', 'Mem', '16bit', 0x3abe, '=', 'Value', '', 17036],
  ),
  badge: '238129',
  id: 215154,
})

set.addAchievement({
  title: 'Assassin Kiss',
  description: `Touch your enemy's cannon with your cannon and shoot.`,
  points: 1,
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0xa5e, '!=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xa5e, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x3acc, '=', 'Value', '', 2],
    ['OrNext', 'Mem', '16bit', 0x3abe, '=', 'Value', '', 17027],
    ['', 'Mem', '16bit', 0x3abe, '=', 'Value', '', 17026],
    ['', 'Mem', '8bit', 0x3abb, '=', 'Value', '', 65],
    ['', 'Mem', 'Upper4', 0x3aba, '=', 'Value', '', 2],
  ),
  badge: '238130',
  id: 215155,
})

set.addAchievement({
  title: 'Speedy Tank',
  description: 'Win a round in 6 seconds or less.',
  points: 2,
  conditions: {
    core: $(
      ['AndNext', 'Delta', '8bit', 0xa5e, '!=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0xa5e, '=', 'Value', '', 1],
      ['PauseIf', 'Mem', '8bit', 0x4fa4, '!=', 'Delta', '8bit', 0x4fa4, 381],
      ['OrNext', 'Mem', '16bit', 0x3aba, '!=', 'Delta', '16bit', 0x3aba, 1],
      ['', 'Mem', '16bit', 0x3abe, '!=', 'Delta', '16bit', 0x3abe, 1],
      ['ResetIf', 'Delta', '8bit', 0xa5e, '=', 'Value', '', 84],
    ),
    alt1: $(
      ['AndNext', 'Delta', '8bit', 0xa5e, '=', 'Value', '', 1],
      ['ResetIf', 'Mem', '8bit', 0xa5e, '!=', 'Value', '', 1],
    ),
  },
  badge: '238131',
  id: 215156,
})

set.addAchievement({
  title: 'Tank Master',
  description:
    'Win a match without shooting more than 1 bullet in 8 seconds or less.',
  points: 2,
  conditions: {
    core: $(
      ['', 'Delta', '8bit', 0xa5e, '!=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0xa5e, '=', 'Value', '', 1, 1],
      ['PauseIf', 'Mem', '8bit', 0x3ad0, '>', 'Delta', '8bit', 0x3ad0, 2],
      ['PauseIf', 'Mem', '8bit', 0x4fa4, '!=', 'Delta', '8bit', 0x4fa4, 481],
    ),
    alt1: $(
      ['AndNext', 'Delta', '8bit', 0xa5e, '=', 'Value', '', 1],
      ['ResetIf', 'Mem', '8bit', 0xa5e, '!=', 'Value', '', 1],
      ['ResetIf', 'Mem', '8bit', 0xa5e, '=', 'Value', '', 84],
    ),
  },
  badge: '238132',
  id: 215157,
})

set.addLeaderboard({
  title: 'The Fastest Tank of the West',
  description: 'Win a round as fast as possible.',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0xa5e, '!=', 'Value', '', 84],
      ['', 'Mem', '8bit', 0xa5e, '!=', 'Value', '', 1],
    ),
    cancel: $(['', 'Mem', '8bit', 0xa5e, '=', 'Value', '', 84]),
    submit: $(
      ['AndNext', 'Delta', '8bit', 0xa5e, '!=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0xa5e, '=', 'Value', '', 1],
    ),
    value: $([
      'Measured',
      'Mem',
      '8bit',
      0x4fa4,
      '!=',
      'Delta',
      '8bit',
      0x4fa4,
    ]),
  },
  id: 33786,
})

export default set

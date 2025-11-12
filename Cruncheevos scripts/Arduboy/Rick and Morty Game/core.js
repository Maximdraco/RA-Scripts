import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 7935, title: 'Rick and Morty Game' })

set.addAchievement({
  title: 'Warning: Unknown Emulator',
  description: 'Hardcore unlocks cannot be earned using this emulator.',
  points: 0,
  conditions: '1=1.300.',
  badge: '00000',
  id: 101000001,
})

set.addAchievement({
  title: 'The Only Right Choice',
  description: 'Win for the first time.',
  points: 1,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x150, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x150, '=', 'Value', '', 2],
  ),
  badge: '237882',
  id: 214935,
})

set.addAchievement({
  title: 'Why Would You Do That?',
  description: 'Lose for the first time.',
  points: 1,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x150, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x150, '=', 'Value', '', 3],
  ),
  badge: '237883',
  id: 214936,
})

set.addAchievement({
  title: 'He Turns Itself Into a Pickle!',
  description: 'Win 50 times in a row.',
  points: 1,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x150, '=', 'Value', '', 1],
    ['Measured', 'Mem', '8bit', 0x150, '=', 'Value', '', 2, 50],
    ['ResetIf', 'Mem', '8bit', 0x150, '=', 'Value', '', 0],
    ['ResetIf', 'Mem', '8bit', 0x150, '=', 'Value', '', 3],
  ),
  badge: '237884',
  id: 214937,
})

set.addAchievement({
  title: 'I Do As the Crystal Guides',
  description: 'Lose 50 times in a row.',
  points: 1,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x150, '=', 'Value', '', 1],
    ['Measured', 'Mem', '8bit', 0x150, '=', 'Value', '', 3, 50],
    ['ResetIf', 'Mem', '8bit', 0x150, '=', 'Value', '', 0],
    ['ResetIf', 'Mem', '8bit', 0x150, '=', 'Value', '', 2],
  ),
  badge: '237885',
  id: 214938,
})

set.addAchievement({
  title: 'Rickest Rick',
  description: 'Win 100 times in a row.',
  points: 2,
  type: 'win_condition',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x150, '=', 'Value', '', 1],
    ['Measured', 'Mem', '8bit', 0x150, '=', 'Value', '', 2, 100],
    ['ResetIf', 'Mem', '8bit', 0x150, '=', 'Value', '', 0],
    ['ResetIf', 'Mem', '8bit', 0x150, '=', 'Value', '', 3],
  ),
  badge: '237886',
  id: 214939,
})

set.addAchievement({
  title: 'Mortiest Morty',
  description: 'Lose 100 times in a row.',
  points: 2,
  type: 'win_condition',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x150, '=', 'Value', '', 1],
    ['Measured', 'Mem', '8bit', 0x150, '=', 'Value', '', 3, 100],
    ['ResetIf', 'Mem', '8bit', 0x150, '=', 'Value', '', 0],
    ['ResetIf', 'Mem', '8bit', 0x150, '=', 'Value', '', 2],
  ),
  badge: '237887',
  id: 214940,
})

set.addAchievement({
  title: 'This is a 18+ Show',
  description: 'Win or lose 69 times in one session.',
  points: 2,
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x150, '=', 'Value', '', 1],
    ['Measured', 'Mem', '8bit', 0x150, '>', 'Value', '', 1, 69],
    ['ResetIf', 'Mem', '8bit', 0x150, '=', 'Value', '', 0],
  ),
  badge: '242505',
  id: 219246,
})

set.addAchievement({
  title: 'Insert Weed Joke Here',
  description: 'Win or lose 420 times in one session.',
  points: 3,
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x150, '=', 'Value', '', 1],
    ['Measured', 'Mem', '8bit', 0x150, '>', 'Value', '', 1, 420],
    ['ResetIf', 'Mem', '8bit', 0x150, '=', 'Value', '', 0],
  ),
  badge: '242506',
  id: 219247,
})

set.addLeaderboard({
  title: 'The Rickest Rick',
  description: 'How many time can you win? (Lose to upload score).',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['AndNext', 'Delta', '8bit', 0x150, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x150, '=', 'Value', '', 1],
    ),
    cancel: $(['', 'Mem', '8bit', 0x150, '=', 'Value', '', 0]),
    submit: $(['', 'Mem', '8bit', 0x150, '=', 'Value', '', 3]),
    value: $(
      ['AndNext', 'Delta', '8bit', 0x150, '=', 'Value', '', 1],
      ['Measured', 'Mem', '8bit', 0x150, '=', 'Value', '', 2],
    ),
  },
  id: 34908,
})

set.addLeaderboard({
  title: 'The Mortiest Morty',
  description: 'How many time can you lose ? (Win to upload score).',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['AndNext', 'Delta', '8bit', 0x150, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x150, '=', 'Value', '', 1],
    ),
    cancel: $(['', 'Mem', '8bit', 0x150, '=', 'Value', '', 0]),
    submit: $(['', 'Mem', '8bit', 0x150, '=', 'Value', '', 2]),
    value: $(
      ['AndNext', 'Delta', '8bit', 0x150, '=', 'Value', '', 1],
      ['Measured', 'Mem', '8bit', 0x150, '=', 'Value', '', 3],
    ),
  },
  id: 34909,
})

export default set

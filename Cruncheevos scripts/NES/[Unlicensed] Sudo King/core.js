import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({
  gameId: 17178,
  title: '~Unlicensed~ Sudo King',
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
  title: 'Sudo-Novice',
  description: 'Complete a easy Sudoku (no hints).',
  points: 1,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x1e, '=', 'Value', '', 18, 1],
    ['', 'Mem', '8bit', 0x57, '=', 'Value', '', 0],
    ['ResetIf', 'Mem', '8bit', 0x202, '=', 'Value', '', 240],
    ['', 'Mem', '8bit', 0x202, '=', 'Value', '', 3],
  ),
  badge: '173383',
  id: 154210,
})

set.addAchievement({
  title: 'Sudo-Prince',
  description: 'Complete a middle Sudoku (no hints).',
  points: 3,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x1e, '=', 'Value', '', 18, 1],
    ['', 'Mem', '8bit', 0x57, '=', 'Value', '', 1],
    ['ResetIf', 'Mem', '8bit', 0x202, '=', 'Value', '', 240],
    ['', 'Mem', '8bit', 0x202, '=', 'Value', '', 3],
  ),
  badge: '173384',
  id: 154211,
})

set.addAchievement({
  title: 'Sudo-King',
  description: 'Complete a hard Sudoku (no hints).',
  points: 4,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x1e, '=', 'Value', '', 18, 1],
    ['', 'Mem', '8bit', 0x57, '=', 'Value', '', 2],
    ['ResetIf', 'Mem', '8bit', 0x202, '=', 'Value', '', 240],
    ['', 'Mem', '8bit', 0x202, '=', 'Value', '', 3],
  ),
  badge: '173385',
  id: 154212,
})

set.addAchievement({
  title: 'Think Fast Chucklenuts',
  description: 'Complete a easy Sudoku in less than 5 minutes (no hints).',
  points: 1,
  conditions: $(
    ['', 'Mem', '8bit', 0x1e, '=', 'Value', '', 18, 1],
    ['', 'Mem', '8bit', 0x57, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x4f, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x4e, '<', 'Value', '', 5],
    ['', 'Mem', '8bit', 0x4d, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x4c, '=', 'Value', '', 0],
    ['ResetIf', 'Mem', '8bit', 0x202, '=', 'Value', '', 240],
    ['', 'Mem', '8bit', 0x202, '=', 'Value', '', 3],
  ),
  badge: '173399',
  id: 154213,
})

set.addAchievement({
  title: 'Fast Mind',
  description: 'Complete a middle Sudoku in less than 10 minutes (no hints).',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x1e, '=', 'Value', '', 18, 1],
    ['', 'Mem', '8bit', 0x57, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x4f, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x4e, '<=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0x4d, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x4c, '=', 'Value', '', 0],
    ['ResetIf', 'Mem', '8bit', 0x202, '=', 'Value', '', 240],
    ['', 'Mem', '8bit', 0x202, '=', 'Value', '', 3],
  ),
  badge: '173389',
  id: 154214,
})

set.addAchievement({
  title: 'Use All Your Brain Power',
  description: 'Complete a hard Sudoku in 15 minutes or less (no hints).',
  points: 5,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x1e, '=', 'Value', '', 18, 1],
      ['', 'Mem', '8bit', 0x57, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0x4d, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0x202, '=', 'Value', '', 240],
      ['', 'Mem', '8bit', 0x202, '=', 'Value', '', 3],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0x4f, '=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x4e, '<=', 'Value', '', 5],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0x4f, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4e, '<=', 'Value', '', 9],
    ),
  },
  badge: '173390',
  id: 154215,
})

set.addAchievement({
  title: 'Sudoku Fan',
  description: 'Reach 10K points.',
  points: 2,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x46, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x47, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x48, '=', 'Value', '', 0],
  ),
  badge: '175679',
  id: 154216,
})

set.addAchievement({
  title: 'Sudoku Lover',
  description: 'Reach 50K points.',
  points: 4,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x46, '=', 'Value', '', 5],
    ['', 'Mem', '8bit', 0x47, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x48, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1f8, '=', 'Value', '', 16, 1],
  ),
  badge: '208344',
  id: 154217,
})

export default set

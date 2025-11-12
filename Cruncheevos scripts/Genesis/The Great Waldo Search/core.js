import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({
  gameId: 4266,
  title: 'The Great Waldo Search',
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
  title: 'Wololo!',
  description: 'Complete the Monk Battle level in normal.',
  points: 1,
  conditions: $(
    ['PauseIf', 'Mem', '8bit', 0xf0e, '!=', 'Value', '', 0],
    ['PauseIf', 'Mem', 'Bit0', 0xefc, '=', 'Value', '', 1],
    ['', 'Mem', 'Bit0', 0xf00, '=', 'Value', '', 0],
    ['', 'Delta', '8bit', 0xf74, '=', 'Value', '', 242],
    ['', 'Mem', '8bit', 0xf74, '=', 'Value', '', 34],
    ['', 'Mem', 'Bit7', 0x249, '=', 'Value', '', 0],
    ['', 'Mem', 'Bit0', 0xeda, '=', 'Value', '', 1],
  ),
  badge: '301377',
  id: 272261,
})

set.addAchievement({
  title: 'I Will Show You the World',
  description: 'Complete the Carpet Flyers level in normal.',
  points: 1,
  conditions: $(
    ['PauseIf', 'Mem', '8bit', 0xf0e, '!=', 'Value', '', 1],
    ['PauseIf', 'Mem', 'Bit0', 0xefc, '=', 'Value', '', 1],
    ['', 'Mem', 'Bit0', 0xf00, '=', 'Value', '', 0],
    ['', 'Delta', '8bit', 0xf74, '=', 'Value', '', 242],
    ['', 'Mem', '8bit', 0xf74, '=', 'Value', '', 34],
    ['', 'Mem', 'Bit7', 0x249, '=', 'Value', '', 0],
    ['', 'Mem', 'Bit0', 0xeda, '=', 'Value', '', 1],
  ),
  badge: '301378',
  id: 272262,
})

set.addAchievement({
  title: 'A Army of Goliats',
  description: 'Complete the level of the Giants in normal.',
  points: 1,
  conditions: $(
    ['PauseIf', 'Mem', '8bit', 0xf0e, '!=', 'Value', '', 2],
    ['PauseIf', 'Mem', 'Bit0', 0xefc, '=', 'Value', '', 1],
    ['', 'Mem', 'Bit0', 0xf00, '=', 'Value', '', 0],
    ['', 'Delta', '8bit', 0xf74, '=', 'Value', '', 242],
    ['', 'Mem', '8bit', 0xf74, '=', 'Value', '', 34],
    ['', 'Mem', 'Bit7', 0x249, '=', 'Value', '', 0],
    ['', 'Mem', 'Bit0', 0xeda, '=', 'Value', '', 1],
  ),
  badge: '301379',
  id: 272263,
})

set.addAchievement({
  title: 'Underground Hunting Season',
  description: 'Complete the underground level in normal.',
  points: 1,
  conditions: $(
    ['PauseIf', 'Mem', '8bit', 0xf0e, '!=', 'Value', '', 3],
    ['PauseIf', 'Mem', 'Bit0', 0xefc, '=', 'Value', '', 1],
    ['', 'Mem', 'Bit0', 0xf00, '=', 'Value', '', 0],
    ['', 'Delta', '8bit', 0xf74, '=', 'Value', '', 242],
    ['', 'Mem', '8bit', 0xf74, '=', 'Value', '', 34],
    ['', 'Mem', 'Bit7', 0x249, '=', 'Value', '', 0],
    ['', 'Mem', 'Bit0', 0xeda, '=', 'Value', '', 1],
  ),
  badge: '301380',
  id: 272264,
})

set.addAchievement({
  title: 'Waldo, You Are a Wizard',
  description: 'Complete the Monk Battle level in expert.',
  points: 2,
  type: 'progression',
  conditions: $(
    ['PauseIf', 'Mem', '8bit', 0xf0e, '!=', 'Value', '', 0],
    ['PauseIf', 'Mem', 'Bit0', 0xefc, '=', 'Value', '', 1],
    ['', 'Mem', 'Bit0', 0xf00, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0xf74, '=', 'Value', '', 242],
    ['', 'Mem', '8bit', 0xf74, '=', 'Value', '', 34],
    ['', 'Mem', 'Bit7', 0x249, '=', 'Value', '', 0],
    ['', 'Mem', 'Bit0', 0xeda, '=', 'Value', '', 1],
  ),
  badge: '301381',
  id: 272265,
})

set.addAchievement({
  title: 'Prince Waldo, Fabulous He, Waldo Ababwa',
  description: 'Complete the Carpet Flyers level in expert.',
  points: 2,
  type: 'progression',
  conditions: $(
    ['PauseIf', 'Mem', '8bit', 0xf0e, '!=', 'Value', '', 1],
    ['PauseIf', 'Mem', 'Bit0', 0xefc, '=', 'Value', '', 1],
    ['', 'Mem', 'Bit0', 0xf00, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0xf74, '=', 'Value', '', 242],
    ['', 'Mem', '8bit', 0xf74, '=', 'Value', '', 34],
    ['', 'Mem', 'Bit7', 0x249, '=', 'Value', '', 0],
    ['', 'Mem', 'Bit0', 0xeda, '=', 'Value', '', 1],
  ),
  badge: '301382',
  id: 272266,
})

set.addAchievement({
  title: 'Shingeki no Waldo',
  description: 'Complete the level of the Giants in expert.',
  points: 2,
  type: 'progression',
  conditions: $(
    ['PauseIf', 'Mem', '8bit', 0xf0e, '!=', 'Value', '', 2],
    ['PauseIf', 'Mem', 'Bit0', 0xefc, '=', 'Value', '', 1],
    ['', 'Mem', 'Bit0', 0xf00, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0xf74, '=', 'Value', '', 242],
    ['', 'Mem', '8bit', 0xf74, '=', 'Value', '', 34],
    ['', 'Mem', 'Bit7', 0x249, '=', 'Value', '', 0],
    ['', 'Mem', 'Bit0', 0xeda, '=', 'Value', '', 1],
  ),
  badge: '301383',
  id: 272267,
})

set.addAchievement({
  title: 'Waldo Underground',
  description: 'Complete the underground level in expert.',
  points: 2,
  type: 'progression',
  conditions: $(
    ['PauseIf', 'Mem', '8bit', 0xf0e, '!=', 'Value', '', 3],
    ['PauseIf', 'Mem', 'Bit0', 0xefc, '=', 'Value', '', 1],
    ['', 'Mem', 'Bit0', 0xf00, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0xf74, '=', 'Value', '', 242],
    ['', 'Mem', '8bit', 0xf74, '=', 'Value', '', 34],
    ['', 'Mem', 'Bit7', 0x249, '=', 'Value', '', 0],
    ['', 'Mem', 'Bit0', 0xeda, '=', 'Value', '', 1],
  ),
  badge: '301384',
  id: 272268,
})

set.addAchievement({
  title: 'Enough Waldos',
  description: 'Complete the Land of Waldos in expert.',
  points: 2,
  type: 'win_condition',
  conditions: $(
    ['PauseIf', 'Mem', '8bit', 0xf0e, '!=', 'Value', '', 4],
    ['PauseIf', 'Mem', 'Bit0', 0xefc, '=', 'Value', '', 1],
    ['', 'Mem', 'Bit0', 0xf00, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0xf74, '=', 'Value', '', 242],
    ['', 'Mem', '8bit', 0xf74, '=', 'Value', '', 34],
    ['', 'Mem', 'Bit7', 0x249, '=', 'Value', '', 0],
    ['', 'Mem', 'Bit0', 0xeda, '=', 'Value', '', 1],
  ),
  badge: '301389',
  id: 272273,
})

set.addAchievement({
  title: 'The Ultime Challenge',
  description:
    'Beat the game in expert without collecting any clock in one session (reset to retry).',
  points: 3,
  conditions: $(
    ['PauseIf', 'Mem', 'Bit0', 0xefc, '=', 'Value', '', 1],
    ['PauseIf', 'Mem', 'Bit0', 0xf00, '!=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xf0e, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0xf74, '=', 'Value', '', 242],
    ['AndNext', 'Mem', '8bit', 0xf74, '=', 'Value', '', 34],
    ['AndNext', 'Mem', 'Bit7', 0x249, '=', 'Value', '', 0],
    ['Trigger', 'Mem', 'Bit0', 0xeda, '=', 'Value', '', 1, 1],
    ['AndNext', 'Mem', '8bit', 0xf0e, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0xf74, '=', 'Value', '', 242],
    ['AndNext', 'Mem', '8bit', 0xf74, '=', 'Value', '', 34],
    ['AndNext', 'Mem', 'Bit7', 0x249, '=', 'Value', '', 0],
    ['Trigger', 'Mem', 'Bit0', 0xeda, '=', 'Value', '', 1, 1],
    ['AndNext', 'Mem', '8bit', 0xf0e, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0xf74, '=', 'Value', '', 242],
    ['AndNext', 'Mem', '8bit', 0xf74, '=', 'Value', '', 34],
    ['AndNext', 'Mem', 'Bit7', 0x249, '=', 'Value', '', 0],
    ['Trigger', 'Mem', 'Bit0', 0xeda, '=', 'Value', '', 1, 1],
    ['AndNext', 'Mem', '8bit', 0xf0e, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0xf74, '=', 'Value', '', 242],
    ['AndNext', 'Mem', '8bit', 0xf74, '=', 'Value', '', 34],
    ['AndNext', 'Mem', 'Bit7', 0x249, '=', 'Value', '', 0],
    ['Trigger', 'Mem', 'Bit0', 0xeda, '=', 'Value', '', 1, 1],
    ['AndNext', 'Mem', '8bit', 0xf0e, '=', 'Value', '', 4],
    ['AndNext', 'Delta', '8bit', 0xf74, '=', 'Value', '', 242],
    ['AndNext', 'Mem', '8bit', 0xf74, '=', 'Value', '', 34],
    ['AndNext', 'Mem', 'Bit7', 0x249, '=', 'Value', '', 0],
    ['Trigger', 'Mem', 'Bit0', 0xeda, '=', 'Value', '', 1, 1],
    ['ResetIf', 'Mem', '8bit', 0x0, '=', 'Value', '', 96],
    ['AndNext', 'Delta', '16bit', 0xf1e, '=', 'Value', '', 0],
    ['PauseIf', 'Mem', '16bit', 0xf1e, '=', 'Value', '', 60, 1],
    ['PauseIf', 'Mem', '8bit', 0xedc, '>', 'Delta', '8bit', 0xedc, 1],
  ),
  badge: '301388',
  id: 272272,
})

set.addAchievement({
  title: `Waldo's Dog`,
  description: `Find Waldo's Dog.`,
  points: 1,
  conditions: $(
    ['PauseIf', 'Delta', 'Bit0', 0xefc, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x7, '!=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x7, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0xf74, '=', 'Value', '', 242],
    ['', 'Mem', '8bit', 0x0, '!=', 'Value', '', 96],
  ),
  badge: '301385',
  id: 272269,
})

set.addAchievement({
  title: 'A Hint',
  description:
    'Find a Hint clock in any level  (reset the game if you watched the credits in this session).',
  points: 1,
  conditions: $(
    ['PauseIf', 'Delta', 'Bit0', 0xefc, '=', 'Value', '', 1],
    ['PauseIf', 'Delta', '8bit', 0xf74, '!=', 'Value', '', 242],
    ['PauseIf', 'Mem', '8bit', 0xf0e, '=', 'Value', '', 4],
    ['', 'Delta', '16bit', 0xf1e, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xf1e, '=', 'Value', '', 60],
  ),
  badge: '301387',
  id: 272271,
})

set.addLeaderboard({
  title: `Waldo's High Score (Normal)`,
  description: `Get as many points as possible, don't start from Land of Waldos (upload after completing Land of Waldos).`,
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['PauseIf', 'Delta', 'Bit0', 0xefc, '=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0xf74, '=', 'Value', '', 242],
      ['AndNext', 'Mem', '8bit', 0xf0e, '!=', 'Value', '', 4],
      ['ResetNextIf', 'Mem', '8bit', 0xf00, '=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0xf00, '=', 'Value', '', 0, 1],
      ['AndNext', 'Mem', '8bit', 0xf0e, '!=', 'Value', '', 4],
      ['', 'Mem', '16bit', 0xeca, '=', 'Value', '', 0],
    ),
    cancel: $(['', 'Mem', '8bit', 0x0, '=', 'Value', '', 96]),
    submit: $(
      ['', 'Mem', '8bit', 0xf0e, '=', 'Value', '', 4],
      ['', 'Delta', '8bit', 0xf74, '=', 'Value', '', 242],
      ['', 'Mem', '8bit', 0xf74, '=', 'Value', '', 34],
      ['', 'Mem', 'Bit7', 0x249, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit0', 0xeda, '=', 'Value', '', 1],
    ),
    value: $(['Measured', 'Mem', '16bit', 0xeca]),
  },
  id: 51912,
})

set.addLeaderboard({
  title: `Waldo's High Score (Expert)`,
  description: `Get as many points as possible, don't start from Land of Waldos (upload after completing Land of Waldos).`,
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['PauseIf', 'Delta', 'Bit0', 0xefc, '=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0xf74, '=', 'Value', '', 242],
      ['AndNext', 'Mem', '8bit', 0xf0e, '!=', 'Value', '', 4],
      ['ResetNextIf', 'Mem', '8bit', 0xf00, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xf00, '=', 'Value', '', 1, 1],
      ['AndNext', 'Mem', '8bit', 0xf0e, '!=', 'Value', '', 4],
      ['', 'Mem', '16bit', 0xeca, '=', 'Value', '', 0],
    ),
    cancel: $(['', 'Mem', '8bit', 0x0, '=', 'Value', '', 96]),
    submit: $(
      ['', 'Mem', '8bit', 0xf0e, '=', 'Value', '', 4],
      ['', 'Delta', '8bit', 0xf74, '=', 'Value', '', 242],
      ['', 'Mem', '8bit', 0xf74, '=', 'Value', '', 34],
      ['', 'Mem', 'Bit7', 0x249, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit0', 0xeda, '=', 'Value', '', 1],
    ),
    value: $(['Measured', 'Mem', '16bit', 0xeca, '=', 'Value', '', 3000]),
  },
  id: 51913,
})

export default set

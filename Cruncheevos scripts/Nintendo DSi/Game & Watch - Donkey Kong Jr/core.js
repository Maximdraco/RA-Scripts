import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({
  gameId: 22410,
  title: 'Game & Watch: Donkey Kong Jr.',
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
  title: 'Helping Donkey Kong',
  description: 'Free Donkey Kong in game A.',
  points: 3,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '32bit', 0x14049c, '=', 'Value', '', 9],
    ['', 'Delta', '8bit', 0x145f50, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x145f50, '=', 'Value', '', 4],
  ),
  badge: '407123',
  id: 361681,
})

set.addAchievement({
  title: 'Helping Donkey Kong (Again)',
  description: 'Free Donkey Kong in game B.',
  points: 3,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '32bit', 0x14049c, '=', 'Value', '', 10],
    ['', 'Delta', '8bit', 0x145f50, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x145f50, '=', 'Value', '', 4],
  ),
  badge: '407124',
  id: 361682,
})

set.addAchievement({
  title: 'So Close to Perfection',
  description: 'Free Donkey in game A without having more than 1 miss.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '32bit', 0x14049c, '=', 'Value', '', 9],
    ['', 'Delta', '8bit', 0x145f50, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x145f50, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0x143794, '<=', 'Value', '', 1],
  ),
  badge: '407125',
  id: 361683,
})

set.addAchievement({
  title: 'I Hate These Crocodiles',
  description: 'Free Donkey in game B without having more than 1 miss.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '32bit', 0x14049c, '=', 'Value', '', 10],
    ['', 'Delta', '8bit', 0x145f50, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x145f50, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0x143794, '<=', 'Value', '', 1],
  ),
  badge: '407126',
  id: 361684,
})

set.addAchievement({
  title: 'Perfect Run',
  description: 'Free Donkey in game A with 0 misses.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '32bit', 0x14049c, '=', 'Value', '', 9],
    ['', 'Delta', '8bit', 0x145f50, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x145f50, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0x143794, '=', 'Value', '', 0],
  ),
  badge: '407127',
  id: 361685,
})

set.addAchievement({
  title: 'Just Like Billy Mitchell',
  description: 'Free Donkey in game B with 0 misses.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '32bit', 0x14049c, '=', 'Value', '', 10],
    ['', 'Delta', '8bit', 0x145f50, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x145f50, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0x143794, '=', 'Value', '', 0],
  ),
  badge: '407128',
  id: 361686,
})

set.addLeaderboard({
  title: 'Game A',
  description: 'Get as many points as possible.',
  lowerIsBetter: false,
  type: 'VALUE',
  conditions: {
    start: $(['', 'Mem', '32bit', 0x14049c, '=', 'Value', '', 9]),
    cancel: $(['', 'Mem', '32bit', 0x14049c, '!=', 'Value', '', 9]),
    submit: $(['', 'Mem', '8bit', 0x143794, '=', 'Value', '', 3]),
    value: $(['Measured', 'Mem', '16bit', 0x143938]),
  },
  id: 79022,
})

set.addLeaderboard({
  title: 'Game B',
  description: 'Get as many points as possible.',
  lowerIsBetter: false,
  type: 'VALUE',
  conditions: {
    start: $(['', 'Mem', '32bit', 0x14049c, '=', 'Value', '', 10]),
    cancel: $(['', 'Mem', '32bit', 0x14049c, '!=', 'Value', '', 10]),
    submit: $(['', 'Mem', '8bit', 0x143794, '=', 'Value', '', 3]),
    value: $(['Measured', 'Mem', '16bit', 0x143938]),
  },
  id: 79023,
})

export default set

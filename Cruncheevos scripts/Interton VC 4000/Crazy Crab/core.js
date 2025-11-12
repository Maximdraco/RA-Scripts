import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 22899, title: 'Crazy Crab' })

set.addAchievement({
  title: 'Warning: Unknown Emulator',
  description: 'Hardcore unlocks cannot be earned using this emulator.',
  points: 0,
  conditions: '1=1.300.',
  badge: '00000',
  id: 101000001,
})

set.addAchievement({
  title: 'This Reminds Me to Pacman',
  description: 'Get 1000 point in level 1.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x50f, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x5c3, '=', 'Value', '', 3],
    ['', 'Delta', '8bit', 0x564, '=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0x564, '=', 'Value', '', 16],
  ),
  badge: '364625',
  id: 326697,
})

set.addAchievement({
  title: `Are You Sure I'm a Crab?`,
  description: 'Get 1000 point in level 2.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x50f, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x5c3, '=', 'Value', '', 3],
    ['', 'Delta', '8bit', 0x564, '=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0x564, '=', 'Value', '', 16],
  ),
  badge: '364626',
  id: 326698,
})

set.addAchievement({
  title: 'And I Can Eat Trees, Jellyfish and Snakes?',
  description: 'Get 1000 point in level 3.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x50f, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x5c3, '=', 'Value', '', 3],
    ['', 'Delta', '8bit', 0x564, '=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0x564, '=', 'Value', '', 16],
  ),
  badge: '364627',
  id: 326699,
})

set.addAchievement({
  title: `1000 Points Isn't As Hard As It Could Sound`,
  description: 'Get 1000 point in level 4.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x50f, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x5c3, '=', 'Value', '', 3],
    ['', 'Delta', '8bit', 0x564, '=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0x564, '=', 'Value', '', 16],
  ),
  badge: '364628',
  id: 326700,
})

set.addAchievement({
  title: 'Crab Rave',
  description: 'Get 1000 point in level 5.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x50f, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0x5c3, '=', 'Value', '', 3],
    ['', 'Delta', '8bit', 0x564, '=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0x564, '=', 'Value', '', 16],
  ),
  badge: '364629',
  id: 326701,
})

set.addAchievement({
  title: 'Crabzilla',
  description: 'Get 1000 point in level 6.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x50f, '=', 'Value', '', 5],
    ['', 'Mem', '8bit', 0x5c3, '=', 'Value', '', 3],
    ['', 'Delta', '8bit', 0x564, '=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0x564, '=', 'Value', '', 16],
  ),
  badge: '364630',
  id: 326702,
})

set.addAchievement({
  title: '[Insert Name]',
  description: 'Get 1000 point in level 7.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x50f, '=', 'Value', '', 6],
    ['', 'Mem', '8bit', 0x5c3, '=', 'Value', '', 3],
    ['', 'Delta', '8bit', 0x564, '=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0x564, '=', 'Value', '', 16],
  ),
  badge: '364631',
  id: 326703,
})

set.addAchievement({
  title: 'Remember Change This Achievement Name',
  description: 'Get 1000 point in level 8.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x50f, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0x5c3, '=', 'Value', '', 3],
    ['', 'Delta', '8bit', 0x564, '=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0x564, '=', 'Value', '', 16],
  ),
  badge: '364632',
  id: 326704,
})

set.addAchievement({
  title: 'Imagine This is a Great Achievement Name',
  description: 'Get 1000 point in level 9.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x50f, '=', 'Value', '', 8],
    ['', 'Mem', '8bit', 0x5c3, '=', 'Value', '', 3],
    ['', 'Delta', '8bit', 0x564, '=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0x564, '=', 'Value', '', 16],
  ),
  badge: '364633',
  id: 326705,
})

set.addAchievement({
  title: 'Imagine This is a Bad Achievement Title',
  description: 'Get 1000 point in level 10.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x50f, '=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0x5c3, '=', 'Value', '', 3],
    ['', 'Delta', '8bit', 0x564, '=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0x564, '=', 'Value', '', 16],
  ),
  badge: '364634',
  id: 326706,
})

set.addAchievement({
  title: '......',
  description: 'Get 1000 point in level 11.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x50f, '=', 'Value', '', 10],
    ['', 'Mem', '8bit', 0x5c3, '=', 'Value', '', 3],
    ['', 'Delta', '8bit', 0x564, '=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0x564, '=', 'Value', '', 16],
  ),
  badge: '364635',
  id: 326707,
})

set.addAchievement({
  title: 'My Lawyers Recomend Me to Have No References to Pacman',
  description: 'Get 1000 point in level 12.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x50f, '=', 'Value', '', 11],
    ['', 'Mem', '8bit', 0x5c3, '=', 'Value', '', 3],
    ['', 'Delta', '8bit', 0x564, '=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0x564, '=', 'Value', '', 16],
  ),
  badge: '364636',
  id: 326708,
})

set.addAchievement({
  title: 'If Someone Have Better Ideas for Names, Let Me Know',
  description: 'Get 1000 point in level 13.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x50f, '=', 'Value', '', 12],
    ['', 'Mem', '8bit', 0x5c3, '=', 'Value', '', 3],
    ['', 'Delta', '8bit', 0x564, '=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0x564, '=', 'Value', '', 16],
  ),
  badge: '364637',
  id: 326709,
})

set.addAchievement({
  title: `I'm Not Sure if I Can Call This a Pacman Clone`,
  description: 'Get 1000 point in level 14.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x50f, '=', 'Value', '', 13],
    ['', 'Mem', '8bit', 0x5c3, '=', 'Value', '', 3],
    ['', 'Delta', '8bit', 0x564, '=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0x564, '=', 'Value', '', 16],
  ),
  badge: '364638',
  id: 326710,
})

set.addAchievement({
  title: 'Did You Liked This Game?',
  description: 'Get 1000 point in level 15.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x50f, '=', 'Value', '', 14],
    ['', 'Mem', '8bit', 0x5c3, '=', 'Value', '', 3],
    ['', 'Delta', '8bit', 0x564, '=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0x564, '=', 'Value', '', 16],
  ),
  badge: '364639',
  id: 326711,
})

set.addAchievement({
  title: 'Last Achievement',
  description: 'Get 1000 point in level 16.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x50f, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x5c3, '=', 'Value', '', 3],
    ['', 'Delta', '8bit', 0x564, '=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0x564, '=', 'Value', '', 16],
  ),
  badge: '364640',
  id: 326712,
})

export default set

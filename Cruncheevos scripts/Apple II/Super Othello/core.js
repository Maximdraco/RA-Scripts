import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 25283, title: 'Super Othello' })

set.addAchievement({
  title: 'Warning: Unknown Emulator',
  description: 'Hardcore unlocks cannot be earned using this emulator.',
  points: 0,
  conditions: '1=1.300.',
  badge: '00000',
  id: 101000001,
})

set.addAchievement({
  title: 'Luminous Strategist',
  description: 'Win a 1P game as the White Pieces (Mode 1).',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x132a, '=', 'Value', '', 19],
    ['', 'Mem', '8bit', 0x3e6c, '=', 'Value', '', 129],
    ['', 'Mem', '8bit', 0x3e6d, '!=', 'Value', '', 64],
    ['', 'Mem', '8bit', 0x3e7a, '=', 'Value', '', 130],
    ['', 'Delta', '8bit', 0x6, '!=', 'Value', '', 193],
    ['', 'Mem', '8bit', 0x6, '=', 'Value', '', 193],
  ),
  badge: '440755',
  id: 390351,
})

set.addAchievement({
  title: 'Dark Sovereignty',
  description: 'Win a 1P game as the Black Pieces (Mode 1).',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x132a, '=', 'Value', '', 19],
    ['', 'Mem', '8bit', 0x3e6c, '=', 'Value', '', 129],
    ['', 'Mem', '8bit', 0x3e6d, '!=', 'Value', '', 64],
    ['', 'Mem', '8bit', 0x3e7a, '=', 'Value', '', 129],
    ['', 'Delta', '8bit', 0x6, '!=', 'Value', '', 193],
    ['', 'Mem', '8bit', 0x6, '=', 'Value', '', 193],
  ),
  badge: '440756',
  id: 390352,
})

set.addAchievement({
  title: 'Snowy Victory',
  description: 'Win a 1P game as the White Pieces (Mode 2).',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x132a, '=', 'Value', '', 19],
    ['', 'Mem', '8bit', 0x3e6c, '=', 'Value', '', 130],
    ['', 'Mem', '8bit', 0x3e6d, '!=', 'Value', '', 64],
    ['', 'Mem', '8bit', 0x3e7a, '=', 'Value', '', 130],
    ['', 'Delta', '8bit', 0x6, '!=', 'Value', '', 193],
    ['', 'Mem', '8bit', 0x6, '=', 'Value', '', 193],
  ),
  badge: '440757',
  id: 390353,
})

set.addAchievement({
  title: 'Shadow Mastermind',
  description: 'Win a 1P game as the Black Pieces (Mode 2).',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x132a, '=', 'Value', '', 19],
    ['', 'Mem', '8bit', 0x3e6c, '=', 'Value', '', 130],
    ['', 'Mem', '8bit', 0x3e6d, '!=', 'Value', '', 64],
    ['', 'Mem', '8bit', 0x3e7a, '=', 'Value', '', 129],
    ['', 'Delta', '8bit', 0x6, '!=', 'Value', '', 193],
    ['', 'Mem', '8bit', 0x6, '=', 'Value', '', 193],
  ),
  badge: '440758',
  id: 390354,
})

set.addAchievement({
  title: 'Purity of Mind',
  description: 'Win a 1P game as the White Pieces (Mode 3).',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x132a, '=', 'Value', '', 19],
    ['', 'Mem', '8bit', 0x3e6c, '=', 'Value', '', 130],
    ['', 'Mem', '8bit', 0x3e6d, '=', 'Value', '', 64],
    ['', 'Mem', '8bit', 0x3e7a, '=', 'Value', '', 130],
    ['', 'Delta', '8bit', 0x6, '!=', 'Value', '', 193],
    ['', 'Mem', '8bit', 0x6, '=', 'Value', '', 193],
  ),
  badge: '440759',
  id: 390355,
})

set.addAchievement({
  title: 'Eclipse Dominance',
  description: 'Win a 1P game as the Black Pieces (Mode 3).',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x132a, '=', 'Value', '', 19],
    ['', 'Mem', '8bit', 0x3e6c, '=', 'Value', '', 130],
    ['', 'Mem', '8bit', 0x3e6d, '=', 'Value', '', 64],
    ['', 'Mem', '8bit', 0x3e7a, '=', 'Value', '', 129],
    ['', 'Delta', '8bit', 0x6, '!=', 'Value', '', 193],
    ['', 'Mem', '8bit', 0x6, '=', 'Value', '', 193],
  ),
  badge: '440760',
  id: 390356,
})

export default set

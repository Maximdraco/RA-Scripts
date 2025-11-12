import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({
  gameId: 30164,
  title: '~Homebrew~ ~Demo~ Senshijidaino Kyoryu: DINOPREHIS!',
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
  title: 'Classic Rival',
  description: 'Defeated your rival for the first time.',
  points: 1,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0xc120, '!=', 'Value', '', 0],
    ['', 'Delta', '16bit', 0xcdc9, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xcdc9, '=', 'Value', '', 500],
  ),
  badge: '511001',
  id: 451455,
})

set.addAchievement({
  title: 'So we back in the mine',
  description: 'Complete the mining tutorial.',
  points: 1,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0xc120, '!=', 'Value', '', 0],
    ['', 'Delta', 'Bit0', 0xcddb, '<', 'Mem', 'Bit0', 0xcddb],
  ),
  badge: '511002',
  id: 451456,
})

set.addAchievement({
  title: 'Item Hoarder',
  description: 'Find all objects on the map.',
  points: 1,
  conditions: $(
    ['', 'Delta', '8bit', 0xc120, '!=', 'Value', '', 0],
    ['AddSource', 'Delta', 'Bit0', 0xce03],
    ['AddSource', 'Delta', 'Bit0', 0xce33],
    ['', 'Delta', 'Bit0', 0xce5b, '=', 'Value', '', 2],
    ['AddSource', 'Mem', 'Bit0', 0xce03],
    ['AddSource', 'Mem', 'Bit0', 0xce33],
    ['', 'Mem', 'Bit0', 0xce5b, '=', 'Value', '', 3],
  ),
  badge: '511003',
  id: 451457,
})

set.addAchievement({
  title: 'Helping Others',
  description: 'Give the Tirita and Caramelo to the kids.',
  points: 1,
  conditions: $(
    ['', 'Delta', '8bit', 0xc120, '!=', 'Value', '', 0],
    ['AddSource', 'Delta', 'Bit0', 0xce27],
    ['', 'Delta', 'Bit0', 0xce2b, '=', 'Value', '', 1],
    ['AddSource', 'Mem', 'Bit0', 0xce27],
    ['', 'Mem', 'Bit0', 0xce2b, '=', 'Value', '', 2],
  ),
  badge: '511004',
  id: 451458,
})

set.addAchievement({
  title: 'A Complete Collection',
  description: `Get the reward for finding all species of Dinoprehis (the other starter doesn't count for the reward). (m: The game ends after the second rival battle)`,
  points: 1,
  type: 'missable',
  conditions: $(
    ['', 'Delta', '8bit', 0xc120, '!=', 'Value', '', 0],
    ['', 'Delta', 'Bit0', 0xce13, '<', 'Mem', 'Bit0', 0xce13],
  ),
  badge: '511005',
  id: 451459,
})

set.addAchievement({
  title: 'Pokemon? I only know Dinoprehis',
  description: 'Defeat your rival a second time and complete the game.',
  points: 2,
  type: 'win_condition',
  conditions: $(
    ['', 'Delta', '8bit', 0xc120, '!=', 'Value', '', 0],
    ['ResetIf', 'Mem', 'Bit0', 0xce61, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '16bit', 0xcd85, '>', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xcd85, '=', 'Value', '', 0, 1],
    ['AndNext', 'Delta', '16bit', 0xcd91, '>', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xcd91, '=', 'Value', '', 0, 1],
    ['AndNext', 'Delta', '16bit', 0xcd9d, '>', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xcd9d, '=', 'Value', '', 0, 1],
    ['AndNext', 'Delta', '16bit', 0xcda9, '>', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xcda9, '=', 'Value', '', 0, 1],
    ['AndNext', 'Delta', '16bit', 0xcdb5, '>', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xcdb5, '=', 'Value', '', 0, 1],
    ['ResetIf', 'Mem', '8bit', 0xc120, '=', 'Value', '', 0],
  ),
  badge: '511006',
  id: 451460,
})

export default set

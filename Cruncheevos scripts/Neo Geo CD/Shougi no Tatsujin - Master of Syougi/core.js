import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({
  gameId: 23868,
  title: 'Shougi no Tatsujin: Master of Syougi',
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
  title: 'First Match [Any]',
  description: 'Defeat the level 1 opponent in Hasami-Shougi. [Any] [5 Pieces]',
  points: 3,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422215',
  id: 375718,
})

set.addAchievement({
  title: 'First Match [Normal Or Hard]',
  description:
    'Defeat the level 1 opponent in Hasami-Shougi. [Normal or Hard] [5 Pieces]',
  points: 3,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422216',
  id: 375719,
})

set.addAchievement({
  title: 'First Match [Hard]',
  description:
    'Defeat the level 1 opponent in Hasami-Shougi. [Hard] [5 Pieces]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422217',
  id: 375720,
})

set.addAchievement({
  title: 'Another Try [Any]',
  description: 'Defeat the level 1 opponent in Hasami-Shougi [Any] [6 Pieces]',
  points: 3,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422218',
  id: 375721,
})

set.addAchievement({
  title: 'Another Try  [Normal or Hard]',
  description:
    'Defeat the level 1 opponent in Hasami-Shougi  [Normal or Hard] [6 Pieces]',
  points: 3,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422219',
  id: 375722,
})

set.addAchievement({
  title: 'Another Try [Hard]',
  description: 'Defeat the level 1 opponent in Hasami-Shougi [Hard] [6 Pieces]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422220',
  id: 375723,
})

set.addAchievement({
  title: 'Another one [Any]',
  description: 'Defeat the level 1 opponent in Hasami-Shougi [Any] [7 Pieces]',
  points: 3,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422221',
  id: 375724,
})

set.addAchievement({
  title: 'Another one  [Normal or Hard]',
  description:
    'Defeat the level 1 opponent in Hasami-Shougi  [Normal or Hard] [7 Pieces]',
  points: 3,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422222',
  id: 375725,
})

set.addAchievement({
  title: 'Another one [Hard]',
  description: 'Defeat the level 1 opponent in Hasami-Shougi [Hard] [7 Pieces]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422223',
  id: 375726,
})

set.addAchievement({
  title: 'All or nothing [Any]',
  description: 'Defeat the level 1 opponent in Hasami-Shougi [Any] [8 Pieces]',
  points: 3,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422224',
  id: 375727,
})

set.addAchievement({
  title: 'All or nothing  [Normal or Hard]',
  description:
    'Defeat the level 1 opponent in Hasami-Shougi  [Normal or Hard] [8 Pieces]',
  points: 3,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422225',
  id: 375728,
})

set.addAchievement({
  title: 'All or nothing [Hard]',
  description: 'Defeat the level 1 opponent in Hasami-Shougi [Hard] [8 Pieces]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422226',
  id: 375729,
})

set.addAchievement({
  title: 'KoF 95 [Any]',
  description: 'Defeat the level 2 opponent in Hasami-Shougi [Any] [5 Pieces]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422227',
  id: 375730,
})

set.addAchievement({
  title: 'KoF 95  [Normal or Hard]',
  description:
    'Defeat the level 2 opponent in Hasami-Shougi  [Normal or Hard] [5 Pieces]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422228',
  id: 375731,
})

set.addAchievement({
  title: 'KoF 95 [Hard]',
  description: 'Defeat the level 2 opponent in Hasami-Shougi [Hard] [5 Pieces]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422229',
  id: 375732,
})

set.addAchievement({
  title: 'KoF 96 [Any]',
  description: 'Defeat the level 2 opponent in Hasami-Shougi [Any] [6 Pieces]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422230',
  id: 375733,
})

set.addAchievement({
  title: 'KoF 96  [Normal or Hard]',
  description:
    'Defeat the level 2 opponent in Hasami-Shougi  [Normal or Hard] [6 Pieces]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422231',
  id: 375734,
})

set.addAchievement({
  title: 'KoF 96 [Hard]',
  description: 'Defeat the level 2 opponent in Hasami-Shougi [Hard] [6 Pieces]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422232',
  id: 375735,
})

set.addAchievement({
  title: 'KoF 97 [Any]',
  description: 'Defeat the level 2 opponent in Hasami-Shougi [Any] [7 Pieces]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422233',
  id: 375736,
})

set.addAchievement({
  title: 'KoF 97  [Normal or Hard]',
  description:
    'Defeat the level 2 opponent in Hasami-Shougi  [Normal or Hard] [7 Pieces]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422234',
  id: 375737,
})

set.addAchievement({
  title: 'KoF 97 [Hard]',
  description: 'Defeat the level 2 opponent in Hasami-Shougi [Hard] [7 Pieces]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422235',
  id: 375738,
})

set.addAchievement({
  title: 'KoF 98 [Any]',
  description: 'Defeat the level 2 opponent in Hasami-Shougi [Any] [8 Pieces]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422236',
  id: 375739,
})

set.addAchievement({
  title: 'KoF 98  [Normal or Hard]',
  description:
    'Defeat the level 2 opponent in Hasami-Shougi  [Normal or Hard] [8 Pieces]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422237',
  id: 375740,
})

set.addAchievement({
  title: 'KoF 98 [Hard]',
  description: 'Defeat the level 2 opponent in Hasami-Shougi [Hard] [8 Pieces]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422238',
  id: 375741,
})

set.addAchievement({
  title: 'It was a long day at the office [Any]',
  description: 'Defeat the level 3 opponent in Hasami-Shougi [Any] [5 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422239',
  id: 375742,
})

set.addAchievement({
  title: 'It was a long day at the office  [Normal or Hard]',
  description:
    'Defeat the level 3 opponent in Hasami-Shougi  [Normal or Hard] [5 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422240',
  id: 375743,
})

set.addAchievement({
  title: 'It was a long day at the office [Hard]',
  description: 'Defeat the level 3 opponent in Hasami-Shougi [Hard] [5 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422241',
  id: 375744,
})

set.addAchievement({
  title: 'Nothing better than a round of Shogi [Any]',
  description: 'Defeat the level 3 opponent in Hasami-Shougi [Any] [6 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422242',
  id: 375745,
})

set.addAchievement({
  title: 'Nothing better than a round of Shogi  [Normal or Hard]',
  description:
    'Defeat the level 3 opponent in Hasami-Shougi  [Normal or Hard] [6 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422243',
  id: 375746,
})

set.addAchievement({
  title: 'Nothing better than a round of Shogi [Hard]',
  description: 'Defeat the level 3 opponent in Hasami-Shougi [Hard] [6 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422244',
  id: 375747,
})

set.addAchievement({
  title: 'This is a fun game [Any]',
  description: 'Defeat the level 3 opponent in Hasami-Shougi [Any] [7 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422245',
  id: 375748,
})

set.addAchievement({
  title: 'This is a fun game  [Normal or Hard]',
  description:
    'Defeat the level 3 opponent in Hasami-Shougi  [Normal or Hard] [7 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422246',
  id: 375749,
})

set.addAchievement({
  title: 'This is a fun game [Hard]',
  description: 'Defeat the level 3 opponent in Hasami-Shougi [Hard] [7 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422247',
  id: 375750,
})

set.addAchievement({
  title: 'This is not a very fun game [Any]',
  description: 'Defeat the level 3 opponent in Hasami-Shougi [Any] [8 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422248',
  id: 375751,
})

set.addAchievement({
  title: 'This is not a very fun game  [Normal or Hard]',
  description:
    'Defeat the level 3 opponent in Hasami-Shougi  [Normal or Hard] [8 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422249',
  id: 375752,
})

set.addAchievement({
  title: 'This is not a very fun game [Hard]',
  description: 'Defeat the level 3 opponent in Hasami-Shougi [Hard] [8 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422250',
  id: 375753,
})

set.addAchievement({
  title: 'Segata Sanshiro [Any]',
  description: 'Defeat the level 4 opponent in Hasami-Shougi [Any] [5 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422251',
  id: 375754,
})

set.addAchievement({
  title: 'Segata Sanshiro  [Normal or Hard]',
  description:
    'Defeat the level 4 opponent in Hasami-Shougi  [Normal or Hard] [5 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422252',
  id: 375755,
})

set.addAchievement({
  title: 'Segata Sanshiro [Hard]',
  description: 'Defeat the level 4 opponent in Hasami-Shougi [Hard] [5 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422253',
  id: 375756,
})

set.addAchievement({
  title: 'Kung Fu Shogi [Any]',
  description: 'Defeat the level 4 opponent in Hasami-Shougi [Any] [6 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422254',
  id: 375757,
})

set.addAchievement({
  title: 'Kung Fu Shogi  [Normal or Hard]',
  description:
    'Defeat the level 4 opponent in Hasami-Shougi  [Normal or Hard][6 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422255',
  id: 375758,
})

set.addAchievement({
  title: 'Kung Fu Shogi [Hard]',
  description: 'Defeat the level 4 opponent in Hasami-Shougi [Hard] [6 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422256',
  id: 375759,
})

set.addAchievement({
  title: 'Master of Shogi [Any]',
  description: 'Defeat the level 4 opponent in Hasami-Shougi [Any] [7 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422257',
  id: 375760,
})

set.addAchievement({
  title: 'Master of Shogi  [Normal or Hard]',
  description:
    'Defeat the level 4 opponent in Hasami-Shougi  [Normal or Hard] [7 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422258',
  id: 375761,
})

set.addAchievement({
  title: 'Master of Shogi [Hard]',
  description: 'Defeat the level 4 opponent in Hasami-Shougi [Hard] [7 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422259',
  id: 375762,
})

set.addAchievement({
  title: 'Sensei [Any]',
  description: 'Defeat the level 4 opponent in Hasami-Shougi [Any] [8 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422260',
  id: 375763,
})

set.addAchievement({
  title: 'Sensei  [Normal or Hard]',
  description:
    'Defeat the level 4 opponent in Hasami-Shougi  [Normal or Hard] [8 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422261',
  id: 375764,
})

set.addAchievement({
  title: 'Sensei [Hard]',
  description: 'Defeat the level 4 opponent in Hasami-Shougi [Hard] [8 Pieces]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba06, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422262',
  id: 375765,
})

set.addAchievement({
  title: 'Temple Triumph [Any]',
  description: 'Defeat the level 1 opponent in Hon-Shougi [Any] [No Handicap]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422284',
  id: 375787,
})

set.addAchievement({
  title: 'Temple Triumph [Normal or Hard]',
  description:
    'Defeat the level 1 opponent in Hon-Shougi [Normal or Hard] [No Handicap]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422285',
  id: 375788,
})

set.addAchievement({
  title: 'Temple Triumph [Hard]',
  description: 'Defeat the level 1 opponent in Hon-Shougi [Hard] [No Handicap]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422286',
  id: 375789,
})

set.addAchievement({
  title: 'Enlightened Victory [Any]',
  description: 'Defeat the level 1 opponent in Hon-Shougi [Any] [Handicap 1]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422287',
  id: 375790,
})

set.addAchievement({
  title: 'Enlightened Victory [Normal or Hard]',
  description:
    'Defeat the level 1 opponent in Hon-Shougi [Normal or Hard] [Handicap 1]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422288',
  id: 375791,
})

set.addAchievement({
  title: 'Enlightened Victory [Hard]',
  description: 'Defeat the level 1 opponent in Hon-Shougi [Hard] [Handicap 1]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422289',
  id: 375792,
})

set.addAchievement({
  title: 'Zen Checkmate [Any]',
  description: 'Defeat the level 1 opponent in Hon-Shougi [Any] [Handicap 2]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422290',
  id: 375793,
})

set.addAchievement({
  title: 'Zen Checkmate [Normal or Hard]',
  description:
    'Defeat the level 1 opponent in Hon-Shougi [Normal or Hard] [Handicap 2]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422291',
  id: 375794,
})

set.addAchievement({
  title: 'Zen Checkmate [Hard]',
  description: 'Defeat the level 1 opponent in Hon-Shougi [Hard] [Handicap 2]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422292',
  id: 375795,
})

set.addAchievement({
  title: 'Monastic Mastery [Any]',
  description: 'Defeat the level 1 opponent in Hon-Shougi [Any] [Handicap 3]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422293',
  id: 375796,
})

set.addAchievement({
  title: 'Monastic Mastery [Normal or Hard]',
  description:
    'Defeat the level 1 opponent in Hon-Shougi [Normal or Hard] [Handicap 3]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422294',
  id: 375797,
})

set.addAchievement({
  title: 'Monastic Mastery [Hard]',
  description: 'Defeat the level 1 opponent in Hon-Shougi [Hard] [Handicap 3]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422295',
  id: 375798,
})

set.addAchievement({
  title: `Monk's Challenge [Any]`,
  description: 'Defeat the level 1 opponent in Hon-Shougi [Any] [Handicap 4]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422296',
  id: 375799,
})

set.addAchievement({
  title: `Monk's Challenge [Normal or Hard]`,
  description:
    'Defeat the level 1 opponent in Hon-Shougi [Normal or Hard] [Handicap 4]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422297',
  id: 375800,
})

set.addAchievement({
  title: `Monk's Challenge [Hard]`,
  description: 'Defeat the level 1 opponent in Hon-Shougi [Hard] [Handicap 4]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422298',
  id: 375801,
})

set.addAchievement({
  title: `Blade's Edge [Any]`,
  description: 'Defeat the level 2 opponent in Hon-Shougi [Any] [No Handicap]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422299',
  id: 375802,
})

set.addAchievement({
  title: `Blade's Edge [Normal or Hard]`,
  description:
    'Defeat the level 2 opponent in Hon-Shougi [Normal or Hard] [No Handicap]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422300',
  id: 375803,
})

set.addAchievement({
  title: `Blade's Edge [Hard]`,
  description: 'Defeat the level 2 opponent in Hon-Shougi [Hard] [No Handicap]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422301',
  id: 375804,
})

set.addAchievement({
  title: 'Rapid Strike [Any]',
  description: 'Defeat the level 2 opponent in Hon-Shougi [Any] [Handicap 1]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422302',
  id: 375805,
})

set.addAchievement({
  title: 'Rapid Strike [Normal or Hard]',
  description:
    'Defeat the level 2 opponent in Hon-Shougi [Normal or Hard] [Handicap 1]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422303',
  id: 375806,
})

set.addAchievement({
  title: 'Rapid Strike [Hard]',
  description: 'Defeat the level 2 opponent in Hon-Shougi [Hard] [Handicap 1]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422304',
  id: 375807,
})

set.addAchievement({
  title: 'Samurai Supreme [Any]',
  description: 'Defeat the level 2 opponent in Hon-Shougi [Any] [Handicap 2]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422305',
  id: 375808,
})

set.addAchievement({
  title: 'Samurai Supreme [Normal or Hard]',
  description:
    'Defeat the level 2 opponent in Hon-Shougi [Normal or Hard] [Handicap 2]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422306',
  id: 375809,
})

set.addAchievement({
  title: 'Samurai Supreme [Hard]',
  description: 'Defeat the level 2 opponent in Hon-Shougi [Hard] [Handicap 2]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422307',
  id: 375810,
})

set.addAchievement({
  title: 'Swift Victory [Any]',
  description: 'Defeat the level 2 opponent in Hon-Shougi [Any] [Handicap 3]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422308',
  id: 375811,
})

set.addAchievement({
  title: 'Swift Victory [Normal or Hard]',
  description:
    'Defeat the level 2 opponent in Hon-Shougi [Normal or Hard] [Handicap 3]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422309',
  id: 375812,
})

set.addAchievement({
  title: 'Swift Victory [Hard]',
  description: 'Defeat the level 2 opponent in Hon-Shougi [Hard] [Handicap 3]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422310',
  id: 375813,
})

set.addAchievement({
  title: 'Katana Conqueror [Any]',
  description: 'Defeat the level 2 opponent in Hon-Shougi [Any] [Handicap 4]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422311',
  id: 375814,
})

set.addAchievement({
  title: 'Katana Conqueror [Normal or Hard]',
  description:
    'Defeat the level 2 opponent in Hon-Shougi [Normal or Hard] [Handicap 4]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422312',
  id: 375815,
})

set.addAchievement({
  title: 'Katana Conqueror [Hard]',
  description: 'Defeat the level 1 opponent in Hon-Shougi [Hard] [Handicap 4]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422313',
  id: 375816,
})

set.addAchievement({
  title: `Sensei's Surprise [Any]`,
  description: 'Defeat the level 3 opponent in Hon-Shougi [Any] [No Handicap]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422314',
  id: 375817,
})

set.addAchievement({
  title: `Sensei's Surprise [Normal or Hard]`,
  description:
    'Defeat the level 3 opponent in Hon-Shougi [Normal or Hard] [No Handicap]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422315',
  id: 375818,
})

set.addAchievement({
  title: `Sensei's Surprise [Hard]`,
  description: 'Defeat the level 3 opponent in Hon-Shougi [Hard] [No Handicap]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422316',
  id: 375819,
})

set.addAchievement({
  title: 'Strategic Prowess [Any]',
  description: 'Defeat the level 3 opponent in Hon-Shougi [Any] [Handicap 1]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422317',
  id: 375820,
})

set.addAchievement({
  title: 'Strategic Prowess [Normal or Hard]',
  description:
    'Defeat the level 3 opponent in Hon-Shougi [Normal or Hard] [Handicap 1]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422318',
  id: 375821,
})

set.addAchievement({
  title: 'Strategic Prowess [Hard]',
  description: 'Defeat the level 3 opponent in Hon-Shougi [Hard] [Handicap 1]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422319',
  id: 375822,
})

set.addAchievement({
  title: 'Mind Games Master [Any]',
  description: 'Defeat the level 3 opponent in Hon-Shougi [Any] [Handicap 2]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422320',
  id: 375823,
})

set.addAchievement({
  title: 'Mind Games Master [Normal or Hard]',
  description:
    'Defeat the level 3 opponent in Hon-Shougi [Normal or Hard] [Handicap 2]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422321',
  id: 375824,
})

set.addAchievement({
  title: 'Mind Games Master [Hard]',
  description: 'Defeat the level 3 opponent in Hon-Shougi [Hard] [Handicap 2]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422322',
  id: 375825,
})

set.addAchievement({
  title: 'Sensei Slayer [Any]',
  description: 'Defeat the level 3 opponent in Hon-Shougi [Any] [Handicap 3]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422323',
  id: 375826,
})

set.addAchievement({
  title: 'Sensei Slayer [Normal or Hard]',
  description:
    'Defeat the level 3 opponent in Hon-Shougi [Normal or Hard] [Handicap 3]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422324',
  id: 375827,
})

set.addAchievement({
  title: 'Sensei Slayer [Hard]',
  description: 'Defeat the level 3 opponent in Hon-Shougi [Hard] [Handicap 3]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422325',
  id: 375828,
})

set.addAchievement({
  title: 'Crafty Checkmate [Any]',
  description: 'Defeat the level 3 opponent in Hon-Shougi [Any] [Handicap 4]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422326',
  id: 375829,
})

set.addAchievement({
  title: 'Crafty Checkmate [Normal or Hard]',
  description:
    'Defeat the level 3 opponent in Hon-Shougi [Normal or Hard] [Handicap 4]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422327',
  id: 375830,
})

set.addAchievement({
  title: 'Crafty Checkmate [Hard]',
  description: 'Defeat the level 3 opponent in Hon-Shougi [Hard] [Handicap 4]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422328',
  id: 375831,
})

set.addAchievement({
  title: `Warlord's Gambit [Any]`,
  description: 'Defeat the level 4 opponent in Hon-Shougi [Any] [No Handicap]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422329',
  id: 375832,
})

set.addAchievement({
  title: `Warlord's Gambit [Normal or Hard]`,
  description:
    'Defeat the level 4 opponent in Hon-Shougi [Normal or Hard] [No Handicap]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422330',
  id: 375833,
})

set.addAchievement({
  title: `Warlord's Gambit [Hard]`,
  description: 'Defeat the level 4 opponent in Hon-Shougi [Hard] [No Handicap]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422331',
  id: 375834,
})

set.addAchievement({
  title: 'Strategic Resilience [Any]',
  description: 'Defeat the level 4 opponent in Hon-Shougi [Any] [Handicap 1]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422332',
  id: 375835,
})

set.addAchievement({
  title: 'Strategic Resilience [Normal or Hard]',
  description:
    'Defeat the level 4 opponent in Hon-Shougi [Normal or Hard] [Handicap 1]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422333',
  id: 375836,
})

set.addAchievement({
  title: 'Strategic Resilience [Hard]',
  description: 'Defeat the level 4 opponent in Hon-Shougi [Hard] [Handicap 1]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422334',
  id: 375837,
})

set.addAchievement({
  title: `Warlord's Downfall [Any]`,
  description: 'Defeat the level 4 opponent in Hon-Shougi [Any] [Handicap 2]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422335',
  id: 375838,
})

set.addAchievement({
  title: `Warlord's Downfall [Normal or Hard]`,
  description:
    'Defeat the level 4 opponent in Hon-Shougi [Normal or Hard] [Handicap 2]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422336',
  id: 375839,
})

set.addAchievement({
  title: `Warlord's Downfall [Hard]`,
  description: 'Defeat the level 4 opponent in Hon-Shougi [Hard] [Handicap 2]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422337',
  id: 375840,
})

set.addAchievement({
  title: 'Unyielding Defense [Any]',
  description: 'Defeat the level 4 opponent in Hon-Shougi [Any] [Handicap 3]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422338',
  id: 375841,
})

set.addAchievement({
  title: 'Unyielding Defense [Normal or Hard]',
  description:
    'Defeat the level 4 opponent in Hon-Shougi [Normal or Hard] [Handicap 3]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422339',
  id: 375842,
})

set.addAchievement({
  title: 'Unyielding Defense [Hard]',
  description: 'Defeat the level 4 opponent in Hon-Shougi [Hard] [Handicap 3]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422340',
  id: 375843,
})

set.addAchievement({
  title: `Warlord's Checkmate [Any]`,
  description: 'Defeat the level 4 opponent in Hon-Shougi [Any] [Handicap 4]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422341',
  id: 375844,
})

set.addAchievement({
  title: `Warlord's Checkmate [Normal or Hard]`,
  description:
    'Defeat the level 4 opponent in Hon-Shougi [Normal or Hard] [Handicap 4]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422342',
  id: 375845,
})

set.addAchievement({
  title: `Warlord's Checkmate [Hard]`,
  description: 'Defeat the level 4 opponent in Hon-Shougi [Hard] [Handicap 4]',
  points: 5,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422343',
  id: 375846,
})

set.addAchievement({
  title: 'Tricky Tactics [Any]',
  description: 'Defeat the level 5 opponent in Hon-Shougi [Any] [No Handicap]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 4],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422344',
  id: 375847,
})

set.addAchievement({
  title: 'Tricky Tactics [Normal or Hard]',
  description:
    'Defeat the level 5 opponent in Hon-Shougi [Normal or Hard] [No Handicap]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 4],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422345',
  id: 375848,
})

set.addAchievement({
  title: 'Tricky Tactics [Hard]',
  description: 'Defeat the level 5 opponent in Hon-Shougi [Hard] [No Handicap]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 4],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422346',
  id: 375849,
})

set.addAchievement({
  title: 'Trap Master [Any]',
  description: 'Defeat the level 5 opponent in Hon-Shougi [Any] [Handicap 1]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 4],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422347',
  id: 375850,
})

set.addAchievement({
  title: 'Trap Master [Normal or Hard]',
  description:
    'Defeat the level 5 opponent in Hon-Shougi [Normal or Hard] [Handicap 1]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 4],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422348',
  id: 375851,
})

set.addAchievement({
  title: 'Trap Master [Hard]',
  description: 'Defeat the level 5 opponent in Hon-Shougi [Hard] [Handicap 1]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 4],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422349',
  id: 375852,
})

set.addAchievement({
  title: 'Deceptive Checkmate [Any]',
  description: 'Defeat the level 5 opponent in Hon-Shougi [Any] [Handicap 2]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 4],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422350',
  id: 375853,
})

set.addAchievement({
  title: 'Deceptive Checkmate [Normal or Hard]',
  description:
    'Defeat the level 5 opponent in Hon-Shougi [Normal or Hard] [Handicap 2]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 4],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422351',
  id: 375854,
})

set.addAchievement({
  title: 'Deceptive Checkmate [Hard]',
  description: 'Defeat the level 5 opponent in Hon-Shougi [Hard] [Handicap 2]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 4],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422352',
  id: 375855,
})

set.addAchievement({
  title: 'Mind-bending Moves [Any]',
  description: 'Defeat the level 5 opponent in Hon-Shougi [Any] [Handicap 3]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 4],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422353',
  id: 375856,
})

set.addAchievement({
  title: 'Mind-bending Moves [Normal or Hard]',
  description:
    'Defeat the level 5 opponent in Hon-Shougi [Normal or Hard] [Handicap 3]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 4],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422354',
  id: 375857,
})

set.addAchievement({
  title: 'Mind-bending Moves [Hard]',
  description: 'Defeat the level 5 opponent in Hon-Shougi [Hard] [Handicap 3]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 4],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422355',
  id: 375858,
})

set.addAchievement({
  title: 'Trickster Triumph [Any]',
  description: 'Defeat the level 5 opponent in Hon-Shougi [Any] [Handicap 4]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 4],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422356',
  id: 375859,
})

set.addAchievement({
  title: 'Trickster Triumph [Normal or Hard]',
  description:
    'Defeat the level 5 opponent in Hon-Shougi [Normal or Hard] [Handicap 4]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 4],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422357',
  id: 375860,
})

set.addAchievement({
  title: 'Trickster Triumph [Hard]',
  description: 'Defeat the level 5 opponent in Hon-Shougi [Hard] [Handicap 4]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 4],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422358',
  id: 375862,
})

set.addAchievement({
  title: 'Precision Victory [Any]',
  description: 'Defeat the level 6 opponent in Hon-Shougi [Any] [No Handicap]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 5],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422359',
  id: 375863,
})

set.addAchievement({
  title: 'Precision Victory [Normal or Hard]',
  description:
    'Defeat the level 6 opponent in Hon-Shougi [Normal or Hard] [No Handicap]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 5],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422360',
  id: 375864,
})

set.addAchievement({
  title: 'Precision Victory [Hard]',
  description: 'Defeat the level 6 opponent in Hon-Shougi [Hard] [No Handicap]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 5],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422361',
  id: 375865,
})

set.addAchievement({
  title: 'Algorithmic Triumph [Any]',
  description: 'Defeat the level 6 opponent in Hon-Shougi [Any] [Handicap 1]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 5],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422362',
  id: 375866,
})

set.addAchievement({
  title: 'Algorithmic Triumph [Normal or Hard]',
  description:
    'Defeat the level 6 opponent in Hon-Shougi [Normal or Hard] [Handicap 1]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 5],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422363',
  id: 375867,
})

set.addAchievement({
  title: 'Algorithmic Triumph [Hard]',
  description: 'Defeat the level 6 opponent in Hon-Shougi [Hard] [Handicap 1]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 5],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422364',
  id: 375868,
})

set.addAchievement({
  title: `Conqueror's Checkmate [Any]`,
  description: 'Defeat the level 6 opponent in Hon-Shougi [Any] [Handicap 2]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 5],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422365',
  id: 375869,
})

set.addAchievement({
  title: `Conqueror's Checkmate [Normal or Hard]`,
  description:
    'Defeat the level 6 opponent in Hon-Shougi [Normal or Hard] [Handicap 2]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 5],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422366',
  id: 375870,
})

set.addAchievement({
  title: `Conqueror's Checkmate [Hard]`,
  description: 'Defeat the level 6 opponent in Hon-Shougi [Hard] [Handicap 2]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 5],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422367',
  id: 375871,
})

set.addAchievement({
  title: 'Chess Engine Challenger [Any]',
  description: 'Defeat the level 6 opponent in Hon-Shougi [Any] [Handicap 3]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 5],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422368',
  id: 375872,
})

set.addAchievement({
  title: 'Chess Engine Challenger [Normal or Hard]',
  description:
    'Defeat the level 6 opponent in Hon-Shougi [Normal or Hard] [Handicap 3]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 5],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422369',
  id: 375873,
})

set.addAchievement({
  title: 'Chess Engine Challenger [Hard]',
  description: 'Defeat the level 6 opponent in Hon-Shougi [Hard] [Handicap 3]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 5],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422370',
  id: 375874,
})

set.addAchievement({
  title: 'Calculated Risk [Any]',
  description: 'Defeat the level 6 opponent in Hon-Shougi [Any] [Handicap 4]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 5],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422371',
  id: 375875,
})

set.addAchievement({
  title: 'Calculated Risk [Normal or Hard]',
  description:
    'Defeat the level 6 opponent in Hon-Shougi [Normal or Hard] [Handicap 4]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 5],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422372',
  id: 375876,
})

set.addAchievement({
  title: 'Calculated Risk [Hard]',
  description: 'Defeat the level 6 opponent in Hon-Shougi [Hard] [Handicap 4]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 5],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422373',
  id: 375877,
})

set.addAchievement({
  title: 'Fearless Victory [Any]',
  description: 'Defeat the level 7 opponent in Hon-Shougi [Any] [No Handicap]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 6],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422374',
  id: 375878,
})

set.addAchievement({
  title: 'Fearless Victory [Normal or Hard]',
  description:
    'Defeat the level 7 opponent in Hon-Shougi [Normal or Hard] [No Handicap]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 6],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422375',
  id: 375879,
})

set.addAchievement({
  title: 'Fearless Victory [Hard]',
  description: 'Defeat the level 7 opponent in Hon-Shougi [Hard] [No Handicap]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 6],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422376',
  id: 375880,
})

set.addAchievement({
  title: `Ronin's Resilience [Any]`,
  description: 'Defeat the level 7 opponent in Hon-Shougi [Any] [Handicap 1]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 6],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422377',
  id: 375881,
})

set.addAchievement({
  title: `Ronin's Resilience [Normal or Hard]`,
  description:
    'Defeat the level 7 opponent in Hon-Shougi [Normal or Hard] [Handicap 1]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 6],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422378',
  id: 375882,
})

set.addAchievement({
  title: `Ronin's Resilience [Hard]`,
  description: 'Defeat the level 7 opponent in Hon-Shougi [Hard] [Handicap 1]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 6],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422379',
  id: 375883,
})

set.addAchievement({
  title: 'Unconventional Tactics [Any]',
  description: 'Defeat the level 7 opponent in Hon-Shougi [Any] [Handicap 2]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 6],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422380',
  id: 375884,
})

set.addAchievement({
  title: 'Unconventional Tactics [Normal or Hard]',
  description:
    'Defeat the level 7 opponent in Hon-Shougi [Normal or Hard] [Handicap 2]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 6],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422381',
  id: 375885,
})

set.addAchievement({
  title: 'Unconventional Tactics [Hard]',
  description: 'Defeat the level 7 opponent in Hon-Shougi [Hard] [Handicap 2]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 6],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422382',
  id: 375886,
})

set.addAchievement({
  title: `Ronin's Gambit [Any]`,
  description: 'Defeat the level 7 opponent in Hon-Shougi [Any] [Handicap 3]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 6],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422383',
  id: 375887,
})

set.addAchievement({
  title: `Ronin's Gambit [Normal or Hard]`,
  description:
    'Defeat the level 7 opponent in Hon-Shougi [Normal or Hard] [Handicap 3]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 6],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422384',
  id: 375888,
})

set.addAchievement({
  title: `Ronin's Gambit [Hard]`,
  description: 'Defeat the level 7 opponent in Hon-Shougi [Hard] [Handicap 3]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 6],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422385',
  id: 375889,
})

set.addAchievement({
  title: 'Fearless Checkmate [Any]',
  description: 'Defeat the level 7 opponent in Hon-Shougi [Any] [Handicap 4]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 6],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422386',
  id: 375890,
})

set.addAchievement({
  title: 'Fearless Checkmate [Normal or Hard]',
  description:
    'Defeat the level 7 opponent in Hon-Shougi [Normal or Hard] [Handicap 4]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 6],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422387',
  id: 375891,
})

set.addAchievement({
  title: 'Fearless Checkmate [Hard]',
  description: 'Defeat the level 7 opponent in Hon-Shougi [Hard] [Handicap 4]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 6],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422388',
  id: 375892,
})

set.addAchievement({
  title: `Grandmaster's Challenge [Any]`,
  description: 'Defeat the level 8 opponent in Hon-Shougi [Any] [No Handicap]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 7],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422389',
  id: 375893,
})

set.addAchievement({
  title: `Grandmaster's Challenge [Normal or Hard]`,
  description:
    'Defeat the level 8 opponent in Hon-Shougi [Normal or Hard] [No Handicap]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 7],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422390',
  id: 375894,
})

set.addAchievement({
  title: `Grandmaster's Challenge [Hard]`,
  description: 'Defeat the level 8 opponent in Hon-Shougi [Hard] [No Handicap]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 7],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422391',
  id: 375895,
})

set.addAchievement({
  title: `Sensei's Wisdom [Any]`,
  description: 'Defeat the level 8 opponent in Hon-Shougi [Any] [Handicap 1]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 7],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422392',
  id: 375896,
})

set.addAchievement({
  title: `Sensei's Wisdom [Normal or Hard]`,
  description:
    'Defeat the level 8 opponent in Hon-Shougi [Normal or Hard] [Handicap 1]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 7],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422393',
  id: 375897,
})

set.addAchievement({
  title: `Sensei's Wisdom [Hard]`,
  description: 'Defeat the level 8 opponent in Hon-Shougi [Hard] [Handicap 1]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 7],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422394',
  id: 375898,
})

set.addAchievement({
  title: 'Masterful Endgame [Any]',
  description: 'Defeat the level 8 opponent in Hon-Shougi [Any] [Handicap 2]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 7],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422395',
  id: 375899,
})

set.addAchievement({
  title: 'Masterful Endgame [Normal or Hard]',
  description:
    'Defeat the level 8 opponent in Hon-Shougi [Normal or Hard] [Handicap 2]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 7],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422396',
  id: 375900,
})

set.addAchievement({
  title: 'Masterful Endgame [Hard]',
  description: 'Defeat the level 8 opponent in Hon-Shougi [Hard] [Handicap 2]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 7],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422397',
  id: 375901,
})

set.addAchievement({
  title: 'Ultimate Showdown [Any]',
  description: 'Defeat the level 8 opponent in Hon-Shougi [Any] [Handicap 3]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 7],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422398',
  id: 375902,
})

set.addAchievement({
  title: 'Ultimate Showdown [Normal or Hard]',
  description:
    'Defeat the level 8 opponent in Hon-Shougi [Normal or Hard] [Handicap 3]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 7],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422399',
  id: 375903,
})

set.addAchievement({
  title: 'Ultimate Showdown [Hard]',
  description: 'Defeat the level 8 opponent in Hon-Shougi [Hard] [Handicap 3]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 7],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422400',
  id: 375904,
})

set.addAchievement({
  title: `Sensei's Apprentice [Any]`,
  description: 'Defeat the level 8 opponent in Hon-Shougi [Any] [Handicap 4]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 7],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422401',
  id: 375905,
})

set.addAchievement({
  title: `Sensei's Apprentice [Normal or Hard]`,
  description:
    'Defeat the level 8 opponent in Hon-Shougi [Normal or Hard] [Handicap 4]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 7],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422402',
  id: 375906,
})

set.addAchievement({
  title: `Sensei's Apprentice [Hard]`,
  description: 'Defeat the level 8 opponent in Hon-Shougi [Hard] [Handicap 4]',
  points: 10,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xba10, '=', 'Value', '', 7],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 200],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422403',
  id: 375907,
})

set.addAchievement({
  title: 'Tournament I [Any]',
  description:
    'Win a tournament of Hon-Shogi in a single session [Any] [No Handicap]',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200, 3],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 204],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 128],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
    ['ResetIf', 'Mem', '8bit', 0x208, '=', 'Value', '', 0],
    ['ResetIf', 'Mem', '8bit', 0x208, '=', 'Value', '', 33],
    ['ResetIf', 'Mem', '8bit', 0x208, '=', 'Value', '', 34],
  ),
  badge: '422263',
  id: 375766,
})

set.addAchievement({
  title: 'Tournament I [Normal or Hard]',
  description:
    'Win a tournament of Hon-Shogi in a single session [Normal or Hard] [No Handicap]',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['AndNext', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['AndNext', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200, 3],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 204],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 128],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
    ['ResetIf', 'Mem', '8bit', 0x208, '=', 'Value', '', 0],
    ['ResetIf', 'Mem', '8bit', 0x208, '=', 'Value', '', 33],
    ['ResetIf', 'Mem', '8bit', 0x208, '=', 'Value', '', 34],
  ),
  badge: '422264',
  id: 375767,
})

set.addAchievement({
  title: 'Tournament I [Hard]',
  description:
    'Win a tournament of Hon-Shogi in a single session [Hard] [No Handicap]',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['AndNext', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['AndNext', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0xba05, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200, 3],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 204],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 128],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422265',
  id: 375768,
})

set.addAchievement({
  title: 'Tournament II [Any]',
  description:
    'Win a tournament of Hon-Shogi in a single session [Any] [Handicap 1]',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200, 3],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 204],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 128],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422266',
  id: 375769,
})

set.addAchievement({
  title: 'Tournament II [Normal or Hard]',
  description:
    'Win a tournament of Hon-Shogi in a single session [Normal or Hard] [Handicap 1]',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['AndNext', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['AndNext', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200, 3],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 204],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 128],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422267',
  id: 375770,
})

set.addAchievement({
  title: 'Tournament II [Hard]',
  description:
    'Win a tournament of Hon-Shogi in a single session [Hard] [Handicap 1]',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['AndNext', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['AndNext', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0xba05, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200, 3],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 204],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 128],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422268',
  id: 375771,
})

set.addAchievement({
  title: 'Tournament III [Any]',
  description:
    'Win a tournament of Hon-Shogi in a single session [Any] [Handicap 2]',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['AndNext', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200, 3],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 204],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 128],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422269',
  id: 375772,
})

set.addAchievement({
  title: 'Tournament III [Normal or Hard]',
  description:
    'Win a tournament of Hon-Shogi in a single session [Normal or Hard] [Handicap 2]',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['AndNext', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['AndNext', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200, 3],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 204],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 128],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422270',
  id: 375773,
})

set.addAchievement({
  title: 'Tournament III [Hard]',
  description:
    'Win a tournament of Hon-Shogi in a single session [Hard] [Handicap 2]',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['AndNext', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['AndNext', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0xba05, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200, 3],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 204],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 128],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422271',
  id: 375774,
})

set.addAchievement({
  title: 'Tournament IV [Any]',
  description:
    'Win a tournament of Hon-Shogi in a single session [Any] [Handicap 3]',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['AndNext', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200, 3],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 204],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 128],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422272',
  id: 375775,
})

set.addAchievement({
  title: 'Tournament IV [Normal or Hard]',
  description:
    'Win a tournament of Hon-Shogi in a single session [Normal or Hard] [Handicap 3]',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['AndNext', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['AndNext', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200, 3],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 204],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 128],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422273',
  id: 375776,
})

set.addAchievement({
  title: 'Tournament IV [Hard]',
  description:
    'Win a tournament of Hon-Shogi in a single session [Hard] [Handicap 3]',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['AndNext', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['AndNext', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0xba05, '=', 'Value', '', 3],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200, 3],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 204],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 128],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422274',
  id: 375777,
})

set.addAchievement({
  title: 'Tournament V [Any]',
  description:
    'Win a tournament of Hon-Shogi in a single session [Any] [Handicap 4]',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['AndNext', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200, 3],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 204],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 128],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422275',
  id: 375778,
})

set.addAchievement({
  title: 'Tournament V [Normal or Hard]',
  description:
    'Win a tournament of Hon-Shogi in a single session [Normal or Hard] [Handicap 4]',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['AndNext', 'Mem', '8bit', 0xb084, '>=', 'Value', '', 3],
    ['AndNext', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200, 3],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 204],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 128],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422276',
  id: 375779,
})

set.addAchievement({
  title: 'Tournament V [Hard]',
  description:
    'Win a tournament of Hon-Shogi in a single session [Hard] [Handicap 4]',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['AndNext', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['AndNext', 'Mem', '8bit', 0xba00, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xb0b7, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0xba05, '=', 'Value', '', 4],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 200, 3],
    ['AndNext', 'Delta', '8bit', 0x209, '=', 'Value', '', 196],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 204],
    ['ResetIf', 'Mem', '8bit', 0x209, '=', 'Value', '', 128],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422277',
  id: 375780,
})

set.addAchievement({
  title: 'Mawari Default Mode [Any]',
  description:
    'Win a game of Mawari Shogi as P1 (the rest have to be CPUs), with the default settings [Any]',
  points: 25,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 2],
    ['', 'Mem', 'Lower4', 0xbc0b, '=', 'Value', '', 14],
    ['', 'Mem', '8bit', 0xbcc0, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xbcc1, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xbcd4, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 164],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 164],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422278',
  id: 375781,
})

set.addAchievement({
  title: 'Mawari Default Mode [Normal or Hard]',
  description:
    'Win a game of Mawari Shogi as P1 (the rest have to be CPUs), with the default settings [Normal or Hard]',
  points: 25,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 2],
    ['', 'Mem', 'Lower4', 0xbc0b, '=', 'Value', '', 14],
    ['', 'Mem', '8bit', 0xbcc0, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xbcc1, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xbcd4, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 164],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 164],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422279',
  id: 375782,
})

set.addAchievement({
  title: 'Mawari Default Mode [Hard]',
  description:
    'Win a game of Mawari Shogi as P1 (the rest have to be CPUs), with the default settings [Hard]',
  points: 25,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 2],
    ['', 'Mem', 'Lower4', 0xbc0b, '=', 'Value', '', 14],
    ['', 'Mem', '8bit', 0xbcc0, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xbcc1, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xbcd4, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 164],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 164],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422280',
  id: 375783,
})

set.addAchievement({
  title: 'Mawari Non Default Mode [Any]',
  description:
    'Win a game of Mawari Shogi as P1 (the rest have to be CPUs), with all the no default settings [Any]',
  points: 25,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 2],
    ['', 'Mem', 'Lower4', 0xbc0b, '=', 'Value', '', 14],
    ['', 'Mem', '8bit', 0xbcc0, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xbcc1, '=', 'Value', '', 255],
    ['Trigger', 'Mem', '8bit', 0xbcd4, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 164],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 164],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422281',
  id: 375784,
})

set.addAchievement({
  title: 'Mawari Non Default Mode [Normal or Hard]',
  description:
    'Win a game of Mawari Shogi as P1 (the rest have to be CPUs), with all the no default settings [Normal or Hard]',
  points: 25,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '>=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 2],
    ['', 'Mem', 'Lower4', 0xbc0b, '=', 'Value', '', 14],
    ['', 'Mem', '8bit', 0xbcc0, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xbcc1, '=', 'Value', '', 255],
    ['Trigger', 'Mem', '8bit', 0xbcd4, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 164],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 164],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422282',
  id: 375785,
})

set.addAchievement({
  title: 'Mawari Non Default Mode [Hard]',
  description:
    'Win a game of Mawari Shogi as P1 (the rest have to be CPUs), with all the no default settings [Hard]',
  points: 25,
  conditions: $(
    ['', 'Mem', 'Lower4', 0xb084, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xba00, '=', 'Value', '', 2],
    ['', 'Mem', 'Lower4', 0xbc0b, '=', 'Value', '', 14],
    ['', 'Mem', '8bit', 0xbcc0, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xbcc1, '=', 'Value', '', 255],
    ['Trigger', 'Mem', '8bit', 0xbcd4, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x209, '!=', 'Value', '', 164],
    ['Trigger', 'Mem', '8bit', 0x209, '=', 'Value', '', 164],
    ['', 'Delta', '8bit', 0x208, '!=', 'Value', '', 33],
    ['ResetIf', 'Mem', '32bit', 0xfe30, '!=', 'Value', '', 0],
  ),
  badge: '422283',
  id: 375786,
})

export default set

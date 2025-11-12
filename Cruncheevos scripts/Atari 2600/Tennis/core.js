import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 13338, title: 'Tennis' })

set.addAchievement({
  title: 'Warning: Unknown Emulator',
  description: 'Hardcore unlocks cannot be earned using this emulator.',
  points: 0,
  conditions: '1=1.300.',
  badge: '00000',
  id: 101000001,
})

set.addAchievement({
  title: 'Rafael Nadal',
  description: 'Win your first game in Game Mode 1.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x0, '=', 'Value', '', 0],
    ['', 'Delta', '8bit', 0x47, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x47, '=', 'Value', '', 1],
  ),
  badge: '402677',
  id: 357456,
})

set.addAchievement({
  title: 'Novak Djokovic',
  description: 'Win your first game in Game Mode 3.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x0, '=', 'Value', '', 2],
    ['', 'Delta', '8bit', 0x47, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x47, '=', 'Value', '', 1],
  ),
  badge: '402678',
  id: 357457,
})

set.addAchievement({
  title: 'Roger Federer',
  description: 'Win 3 games in Game Mode 1.',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x0, '=', 'Value', '', 0],
    ['', 'Delta', '8bit', 0x47, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x47, '=', 'Value', '', 3],
  ),
  badge: '402679',
  id: 357458,
})

set.addAchievement({
  title: 'Andre Agassi',
  description: 'Win 3 games in Game Mode 3.',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x0, '=', 'Value', '', 2],
    ['', 'Delta', '8bit', 0x47, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x47, '=', 'Value', '', 3],
  ),
  badge: '402680',
  id: 357459,
})

set.addAchievement({
  title: 'Björn Borg',
  description: 'Win 6 games in Game Mode 1.',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x0, '=', 'Value', '', 0],
    ['', 'Delta', '8bit', 0x47, '=', 'Value', '', 5],
    ['', 'Mem', '8bit', 0x47, '=', 'Value', '', 6],
  ),
  badge: '402681',
  id: 357460,
})

set.addAchievement({
  title: 'Pete Sampras',
  description: 'Win 6 games in Game Mode 3.',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x0, '=', 'Value', '', 2],
    ['', 'Delta', '8bit', 0x47, '=', 'Value', '', 5],
    ['', 'Mem', '8bit', 0x47, '=', 'Value', '', 6],
  ),
  badge: '402682',
  id: 357461,
})

set.addAchievement({
  title: 'John McEnroe',
  description:
    'Win a set in Game Mode 1 (at least 6 games and be ahead by two games).',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x0, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x47, '>=', 'Value', '', 6],
    ['SubSource', 'Mem', '8bit', 0x48],
    ['', 'Mem', '8bit', 0x47, '>=', 'Value', '', 2],
    ['SubSource', 'Mem', '8bit', 0x48],
    ['', 'Mem', '8bit', 0x47, '<', 'Value', '', 255],
    ['', 'Mem', '8bit', 0x48, '<', 'Mem', '8bit', 0x47],
  ),
  badge: '402683',
  id: 357462,
})

set.addAchievement({
  title: 'Serena Williams',
  description:
    'Win a set in Game Mode 3 (at least 6 games and be ahead by two games).',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x0, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x47, '>=', 'Value', '', 6],
    ['SubSource', 'Mem', '8bit', 0x48],
    ['', 'Mem', '8bit', 0x47, '>=', 'Value', '', 2],
    ['SubSource', 'Mem', '8bit', 0x48],
    ['', 'Mem', '8bit', 0x47, '<', 'Value', '', 255],
    ['', 'Mem', '8bit', 0x48, '<', 'Mem', '8bit', 0x47],
  ),
  badge: '402684',
  id: 357463,
})

export default set

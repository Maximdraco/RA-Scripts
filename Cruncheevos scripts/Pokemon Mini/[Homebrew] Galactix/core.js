import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 15726, title: '~Homebrew~ Galactix' })

set.addAchievement({
  title: 'Warning: Unknown Emulator',
  description: 'Hardcore unlocks cannot be earned using this emulator.',
  points: 0,
  conditions: '1=1.300.',
  badge: '00000',
  id: 101000001,
})

set.addAchievement({
  title: 'No More Marcianito',
  description: 'Complete the game. No cheats allowed, except autofire.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4a1, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x4a1, '=', 'Value', '', 3],
    ['', 'Mem', 'Bit1', 0x490, '=', 'Value', '', 0],
    ['', 'Mem', 'Bit2', 0x490, '=', 'Value', '', 0],
    ['', 'Mem', 'Bit3', 0x490, '=', 'Value', '', 0],
  ),
  badge: '393697',
  id: 348415,
})

set.addAchievement({
  title: 'No Armor,',
  description:
    'Clear Wave 1 without being hit once. No cheats allowed, except autofire.',
  points: 3,
  conditions: $(
    ['ResetIf', 'Mem', '8bit', 0x490, '>', 'Value', '', 1],
    ['ResetIf', 'Mem', '8bit', 0x1022, '!=', 'Value', '', 3, 2],
    ['AndNext', 'Delta', '8bit', 0x1022, '<', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1022, '=', 'Value', '', 3, 1],
    ['AndNext', 'Delta', '8bit', 0x4a1, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x4a1, '=', 'Value', '', 1, 1],
    ['AndNext', 'Mem', 'Bit0', 0x1080, '=', 'Value', '', 0],
    ['AndNext', 'Delta', 'Bit0', 0x1080, '=', 'Value', '', 1],
    ['ResetIf', 'Mem', 'Bit4', 0x1080, '=', 'Value', '', 1, 1],
  ),
  badge: '169454',
  id: 151487,
})

set.addAchievement({
  title: 'No Shields,',
  description:
    'Clear Wave 2 without being hit once. No cheats allowed, except autofire.',
  points: 3,
  conditions: $(
    ['ResetIf', 'Mem', '8bit', 0x490, '>', 'Value', '', 1],
    ['ResetIf', 'Mem', '8bit', 0x1022, '!=', 'Value', '', 3, 10],
    ['AndNext', 'Delta', '8bit', 0x4a1, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x4a1, '=', 'Value', '', 1, 1],
    ['AndNext', 'Delta', '8bit', 0x4a1, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x4a1, '=', 'Value', '', 2, 1],
    ['AndNext', 'Mem', 'Bit0', 0x1080, '=', 'Value', '', 0],
    ['AndNext', 'Delta', 'Bit0', 0x1080, '=', 'Value', '', 1],
    ['ResetIf', 'Mem', 'Bit4', 0x1080, '=', 'Value', '', 1, 1],
  ),
  badge: '169455',
  id: 151488,
})

set.addAchievement({
  title: 'No Fear.',
  description:
    'Clear Wave 3 without being hit once. No cheats allowed, except autofire.',
  points: 4,
  conditions: $(
    ['ResetIf', 'Mem', '8bit', 0x490, '>', 'Value', '', 1],
    ['ResetIf', 'Mem', '8bit', 0x1022, '!=', 'Value', '', 3, 10],
    ['AndNext', 'Delta', '8bit', 0x4a1, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x4a1, '=', 'Value', '', 2, 1],
    ['AndNext', 'Delta', '8bit', 0x4a1, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x4a1, '=', 'Value', '', 3, 1],
    ['AndNext', 'Mem', 'Bit0', 0x1080, '=', 'Value', '', 0],
    ['AndNext', 'Delta', 'Bit0', 0x1080, '=', 'Value', '', 1],
    ['ResetIf', 'Mem', 'Bit4', 0x1080, '=', 'Value', '', 1, 1],
  ),
  badge: '169457',
  id: 151489,
})

set.addAchievement({
  title: `Earth's Defender`,
  description:
    'Clear Wave 1 with a score of 900 or more. No cheats allowed, except autofire.',
  points: 5,
  conditions: {
    core: $(
      ['ResetIf', 'Mem', '8bit', 0x490, '>', 'Value', '', 1],
      ['ResetIf', 'Mem', '8bit', 0x1022, '!=', 'Value', '', 3, 10],
      ['', 'Delta', '8bit', 0x4a1, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4a1, '=', 'Value', '', 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0x49f, '>=', 'Value', '', 132],
      ['', 'Mem', '8bit', 0x4a0, '=', 'Value', '', 3],
    ),
    alt2: $(['', 'Mem', '8bit', 0x4a0, '>=', 'Value', '', 4]),
  },
  badge: '169448',
  id: 151490,
})

set.addAchievement({
  title: 'Space Ace',
  description:
    'Clear Wave 2 with a score of 1750 or more. No cheats allowed, except autofire.',
  points: 5,
  conditions: {
    core: $(
      ['ResetIf', 'Mem', '8bit', 0x490, '>', 'Value', '', 1],
      ['ResetIf', 'Mem', '8bit', 0x1022, '!=', 'Value', '', 3, 10],
      ['', 'Delta', '8bit', 0x4a1, '=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x4a1, '=', 'Value', '', 2],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0x49f, '>=', 'Value', '', 214],
      ['', 'Mem', '8bit', 0x4a0, '=', 'Value', '', 6],
    ),
    alt2: $(['', 'Mem', '8bit', 0x4a0, '>=', 'Value', '', 7]),
  },
  badge: '169450',
  id: 151491,
})

set.addAchievement({
  title: 'Galaxy Fighter',
  description:
    'Clear Wave 3 with a score of 3000 or more. No cheats allowed, except autofire.',
  points: 10,
  conditions: {
    core: $(
      ['ResetIf', 'Mem', '8bit', 0x490, '>', 'Value', '', 1],
      ['ResetIf', 'Mem', '8bit', 0x1022, '!=', 'Value', '', 3, 10],
      ['', 'Delta', '8bit', 0x4a1, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0x4a1, '=', 'Value', '', 3],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0x49f, '>=', 'Value', '', 184],
      ['', 'Mem', '8bit', 0x4a0, '=', 'Value', '', 11],
    ),
    alt2: $(['', 'Mem', '8bit', 0x4a0, '>=', 'Value', '', 12]),
  },
  badge: '169451',
  id: 151492,
})

set.addLeaderboard({
  title: 'Top Earth Defender',
  description:
    'Get the highest score possible at game completion. No cheat codes allowed other than auto-fire.',
  lowerIsBetter: false,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0x1022, '=', 'Value', '', 3],
      ['', 'Delta', '8bit', 0x1022, '=', 'Value', '', 2],
    ),
    cancel: {
      core: $(),
      alt1: $(['', 'Mem', '8bit', 0x1022, '=', 'Value', '', 2]),
      alt2: $(['', 'Mem', '8bit', 0x1022, '=', 'Value', '', 1]),
      alt3: $(['', 'Mem', '8bit', 0x490, '>', 'Value', '', 1]),
    },
    submit: $(
      ['', 'Mem', '8bit', 0x4a1, '=', 'Value', '', 3],
      ['', 'Delta', '8bit', 0x4a1, '=', 'Value', '', 2],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0x4a0, '*', 'Value', '', 256],
      ['Measured', 'Mem', '8bit', 0x49f],
    ),
  },
  id: 29497,
})

export default set

import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 10808, title: 'Commin 5 in 1' })

set.addAchievement({
  title: 'Warning: Unknown Emulator',
  description: 'Hardcore unlocks cannot be earned using this emulator.',
  points: 0,
  conditions: '1=1.300.',
  badge: '00000',
  id: 101000001,
})

set.addAchievement({
  title: '[ST1] First Tower',
  description:
    'Break the High score in Easy, starting level and line 0 or higher.',
  points: 5,
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 8, 1],
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0xc4c6, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '16bit', 0xc4b9, '<', 'Value', '', 3000],
    ['', 'Mem', '16bit', 0xc4b9, '>=', 'Value', '', 3000],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 8],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 11],
    ['ResetIf', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 9],
  ),
  badge: '263574',
  id: 237532,
})

set.addAchievement({
  title: '[ST1] Advanced Builder',
  description:
    'Break the High score in Easy, starting level and line 5 or higher.',
  points: 5,
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 8, 1],
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 9],
    ['AndNext', 'Mem', '8bit', 0xc4c7, '>=', 'Value', '', 5],
    ['AndNext', 'Mem', '8bit', 0xc4c8, '>=', 'Value', '', 5],
    ['', 'Mem', '8bit', 0xc4c6, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '16bit', 0xc4b9, '<', 'Value', '', 3000],
    ['', 'Mem', '16bit', 0xc4b9, '>=', 'Value', '', 3000],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 8],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 11],
    ['ResetIf', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 9],
  ),
  badge: '263575',
  id: 237533,
})

set.addAchievement({
  title: '[ST1] Master Builder',
  description:
    'Break the High score in Easy, starting level 9 and line 5 or higher.',
  points: 10,
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 8, 1],
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 9],
    ['AndNext', 'Mem', '8bit', 0xc4c7, '=', 'Value', '', 9],
    ['AndNext', 'Mem', '8bit', 0xc4c8, '>=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0xc4c6, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '16bit', 0xc4b9, '<', 'Value', '', 3000],
    ['', 'Mem', '16bit', 0xc4b9, '>=', 'Value', '', 3000],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 8],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 11],
    ['ResetIf', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 9],
  ),
  badge: '263576',
  id: 237534,
})

set.addAchievement({
  title: '[ST1] Second Tower',
  description:
    'Break the High score in Normal, starting level and line 0 or higher.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 8, 1],
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0xc4c6, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '16bit', 0xc4b9, '<', 'Value', '', 3000],
    ['', 'Mem', '16bit', 0xc4b9, '>=', 'Value', '', 3000],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 8],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 11],
    ['ResetIf', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 9],
  ),
  badge: '263577',
  id: 237535,
})

set.addAchievement({
  title: '[ST1] Advanced Architect',
  description:
    'Break the High score in Normal, starting level and line 5 or higher.',
  points: 10,
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 8, 1],
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 9],
    ['AndNext', 'Mem', '8bit', 0xc4c7, '>=', 'Value', '', 5],
    ['AndNext', 'Mem', '8bit', 0xc4c8, '>=', 'Value', '', 5],
    ['', 'Mem', '8bit', 0xc4c6, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '16bit', 0xc4b9, '<', 'Value', '', 3000],
    ['', 'Mem', '16bit', 0xc4b9, '>=', 'Value', '', 3000],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 8],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 11],
    ['ResetIf', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 9],
  ),
  badge: '263578',
  id: 237536,
})

set.addAchievement({
  title: '[ST1] Master Architect',
  description:
    'Break the High score in Normal, starting level 9 and line 5 or higher.',
  points: 25,
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 8, 1],
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 9],
    ['AndNext', 'Mem', '8bit', 0xc4c7, '=', 'Value', '', 9],
    ['AndNext', 'Mem', '8bit', 0xc4c8, '>=', 'Value', '', 5],
    ['', 'Mem', '8bit', 0xc4c6, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '16bit', 0xc4b9, '<', 'Value', '', 3000],
    ['', 'Mem', '16bit', 0xc4b9, '>=', 'Value', '', 3000],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 8],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 11],
    ['ResetIf', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 9],
  ),
  badge: '263579',
  id: 237537,
})

set.addAchievement({
  title: '[ST1] Third Tower',
  description:
    'Break the High score in Hard, starting level and line 0 or higher.',
  points: 10,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 8, 1],
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0xc4c6, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '16bit', 0xc4b9, '<', 'Value', '', 3000],
    ['', 'Mem', '16bit', 0xc4b9, '>=', 'Value', '', 3000],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 8],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 11],
    ['ResetIf', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 9],
  ),
  badge: '263580',
  id: 237538,
})

set.addAchievement({
  title: '[ST1] Advanced Engineer',
  description:
    'Break the High score in Hard, starting level and line 5 or higher.',
  points: 10,
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 8, 1],
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 9],
    ['AndNext', 'Mem', '8bit', 0xc4c7, '>=', 'Value', '', 5],
    ['AndNext', 'Mem', '8bit', 0xc4c8, '>=', 'Value', '', 5],
    ['', 'Mem', '8bit', 0xc4c6, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '16bit', 0xc4b9, '<', 'Value', '', 3000],
    ['', 'Mem', '16bit', 0xc4b9, '>=', 'Value', '', 3000],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 8],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 11],
    ['ResetIf', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 9],
  ),
  badge: '263581',
  id: 237539,
})

set.addAchievement({
  title: '[ST1] Master Engineer',
  description:
    'Break the High score in Hard, starting level 9 and line 5 or higher.',
  points: 25,
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 8, 1],
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 9],
    ['AndNext', 'Mem', '8bit', 0xc4c7, '=', 'Value', '', 9],
    ['AndNext', 'Mem', '8bit', 0xc4c8, '>=', 'Value', '', 5],
    ['', 'Mem', '8bit', 0xc4c6, '=', 'Value', '', 2],
    ['AndNext', 'Delta', '16bit', 0xc4b9, '<', 'Value', '', 3000],
    ['', 'Mem', '16bit', 0xc4b9, '>=', 'Value', '', 3000],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 8],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 11],
    ['ResetIf', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 9],
  ),
  badge: '263582',
  id: 237540,
})

set.addAchievement({
  title: '[ST2] We Visited a Zoo That Was Partially Under Construction',
  description:
    'Break the High score in Easy, starting level and line 0 or higher.',
  points: 5,
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 12, 1],
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0xc4c6, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '16bit', 0xc4b9, '<', 'Value', '', 3000],
    ['', 'Mem', '16bit', 0xc4b9, '>=', 'Value', '', 3000],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 12],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 11],
    ['ResetIf', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 9],
  ),
  badge: '263583',
  id: 237541,
})

set.addAchievement({
  title: '[ST2] I Saw a Snake Wearing a Construction Hat',
  description:
    'Break the High score in Easy, starting level and line 5 or higher.',
  points: 5,
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 12, 1],
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 9],
    ['AndNext', 'Mem', '8bit', 0xc4c7, '>=', 'Value', '', 5],
    ['AndNext', 'Mem', '8bit', 0xc4c8, '>=', 'Value', '', 5],
    ['', 'Mem', '8bit', 0xc4c6, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '16bit', 0xc4b9, '<', 'Value', '', 3000],
    ['', 'Mem', '16bit', 0xc4b9, '>=', 'Value', '', 3000],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 12],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 11],
    ['ResetIf', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 9],
  ),
  badge: '263584',
  id: 237542,
})

set.addAchievement({
  title: '[ST2] I Guess That Was a Boa Constructor',
  description:
    'Break the High score in Easy, starting level 9 and line 5 or higher.',
  points: 10,
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 12, 1],
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 9],
    ['AndNext', 'Mem', '8bit', 0xc4c7, '=', 'Value', '', 9],
    ['AndNext', 'Mem', '8bit', 0xc4c8, '>=', 'Value', '', 5],
    ['', 'Mem', '8bit', 0xc4c6, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '16bit', 0xc4b9, '<', 'Value', '', 3000],
    ['', 'Mem', '16bit', 0xc4b9, '>=', 'Value', '', 3000],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 12],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 11],
    ['ResetIf', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 9],
  ),
  badge: '263585',
  id: 237543,
})

set.addAchievement({
  title: '[ST2] My Friend Was Offered a Job at a Construction in Egypt',
  description:
    'Break the High score in Normal or Hard, starting level and line 0 or higher.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 12, 1],
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0xc4c6, '>=', 'Value', '', 1],
    ['AndNext', 'Delta', '16bit', 0xc4b9, '<', 'Value', '', 3000],
    ['', 'Mem', '16bit', 0xc4b9, '>=', 'Value', '', 3000],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 12],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 11],
    ['ResetIf', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 9],
  ),
  badge: '263586',
  id: 237544,
})

set.addAchievement({
  title: '[ST2] But He Refused It Right Away',
  description:
    'Break the High score in Normal or Hard, starting level and line 5 or higher.',
  points: 10,
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 12, 1],
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 9],
    ['AndNext', 'Mem', '8bit', 0xc4c7, '>=', 'Value', '', 5],
    ['AndNext', 'Mem', '8bit', 0xc4c8, '>=', 'Value', '', 5],
    ['', 'Mem', '8bit', 0xc4c6, '>=', 'Value', '', 1],
    ['AndNext', 'Delta', '16bit', 0xc4b9, '<', 'Value', '', 3000],
    ['', 'Mem', '16bit', 0xc4b9, '>=', 'Value', '', 3000],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 12],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 11],
    ['ResetIf', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 9],
  ),
  badge: '263587',
  id: 237545,
})

set.addAchievement({
  title: '[ST2] It Turns Out That It Was a Pyramid Scheme',
  description:
    'Break the High score in Normal or Hard, starting level 9 and line 5 or higher.',
  points: 25,
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 12, 1],
    ['AndNext', 'Mem', '8bit', 0xc13b, '=', 'Value', '', 9],
    ['AndNext', 'Mem', '8bit', 0xc4c7, '=', 'Value', '', 9],
    ['AndNext', 'Mem', '8bit', 0xc4c8, '>=', 'Value', '', 5],
    ['', 'Mem', '8bit', 0xc4c6, '>=', 'Value', '', 1],
    ['AndNext', 'Delta', '16bit', 0xc4b9, '<', 'Value', '', 3000],
    ['', 'Mem', '16bit', 0xc4b9, '>=', 'Value', '', 3000],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 12],
    ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 11],
    ['ResetIf', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 9],
  ),
  badge: '263588',
  id: 237546,
})

set.addAchievement({
  title: '[TM] Acumulating Tais',
  description: 'Leave your opponent out of money or in debt (negative money).',
  points: 10,
  type: 'progression',
  conditions: {
    core: $(
      ['AndNext', 'Delta', '16bit', 0xc1bf, '<', 'Value', '', 55000],
      ['', 'Mem', '16bit', 0xc1bf, '>=', 'Value', '', 55000],
      ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 13],
      ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 14],
      ['PauseIf', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 16],
    ),
    alt1: $(['', 'Mem', '16bit', 0xc1bc, '=', 'Value', '', 0]),
    alt2: $(
      ['AndNext', 'Mem', '8bit', 0xc1be, '=', 'Value', '', 255],
      ['', 'Mem', '16bit', 0xc1bc, '>', 'Value', '', 0],
    ),
  },
  badge: '263592',
  id: 237550,
})

set.addAchievement({
  title: '[JM] Chiis, Pons and Kans',
  description: 'Leave your opponent out of money or in debt (negative money).',
  points: 10,
  type: 'progression',
  conditions: {
    core: $(
      ['AndNext', 'Delta', '16bit', 0xc1bf, '<', 'Value', '', 55000],
      ['', 'Mem', '16bit', 0xc1bf, '>=', 'Value', '', 55000],
      ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 4],
      ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 5],
      ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 7],
      ['PauseIf', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 6],
    ),
    alt1: $(['', 'Mem', '16bit', 0xc1bc, '=', 'Value', '', 0]),
    alt2: $(
      ['AndNext', 'Mem', '8bit', 0xc1be, '=', 'Value', '', 255],
      ['', 'Mem', '16bit', 0xc1bc, '>', 'Value', '', 0],
    ),
  },
  badge: '263593',
  id: 237551,
})

set.addAchievement({
  title: '[HM] From Sheungs to Sik',
  description: 'Leave your opponent out of money or in debt (negative money).',
  points: 10,
  type: 'progression',
  conditions: {
    core: $(
      ['AndNext', 'Delta', '16bit', 0xc1bf, '<', 'Value', '', 55000],
      ['', 'Mem', '16bit', 0xc1bf, '>=', 'Value', '', 55000],
      ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 1],
      ['AndNext', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 2],
      ['PauseIf', 'Mem', '8bit', 0xc13b, '!=', 'Value', '', 3],
    ),
    alt1: $(['', 'Mem', '16bit', 0xc1bc, '=', 'Value', '', 0]),
    alt2: $(
      ['AndNext', 'Mem', '8bit', 0xc1be, '=', 'Value', '', 255],
      ['', 'Mem', '16bit', 0xc1bc, '>', 'Value', '', 0],
    ),
  },
  badge: '263594',
  id: 237552,
})

export default set

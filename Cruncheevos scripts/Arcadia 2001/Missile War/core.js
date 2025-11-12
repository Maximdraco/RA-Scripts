import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 21599, title: 'Missile War' })

set.addAchievement({
  title: 'Warning: Unknown Emulator',
  description: 'Hardcore unlocks cannot be earned using this emulator.',
  points: 0,
  conditions: '1=1.300.',
  badge: '00000',
  id: 101000001,
})

set.addAchievement({
  title: `I Hope I Didn't Miss`,
  description: 'Use all your ammo from the left side.',
  points: 0,
  conditions: $(
    ['', 'Delta', 'Lower4', 0x2a3, '=', 'Value', '', 0],
    ['', 'Delta', 'Lower4', 0x2a4, '=', 'Value', '', 1],
    ['', 'Mem', 'Lower4', 0x2a3, '=', 'Value', '', 0],
    ['', 'Mem', 'Lower4', 0x2a4, '=', 'Value', '', 0],
  ),
  badge: '372972',
  id: 330532,
})

set.addAchievement({
  title: 'Well, That Was My Last Shot',
  description: 'Use all your ammo from the right side.',
  points: 0,
  conditions: $(
    ['', 'Delta', 'Lower4', 0x2ab, '=', 'Value', '', 0],
    ['', 'Delta', 'Lower4', 0x2ac, '=', 'Value', '', 1],
    ['', 'Mem', 'Lower4', 0x2ab, '=', 'Value', '', 0],
    ['', 'Mem', 'Lower4', 0x2ac, '=', 'Value', '', 0],
  ),
  badge: '372973',
  id: 330533,
})

set.addAchievement({
  title: 'We Did It Patrick, We Saved the City',
  description: 'Finish a round with at least 1 building intact.',
  points: 1,
  type: 'progression',
  conditions: $(
    ['', 'Delta', 'Lower4', 0x4, '=', 'Value', '', 0],
    ['', 'Delta', 'Lower4', 0x5, '=', 'Value', '', 0],
    ['', 'Delta', 'Lower4', 0x6, '=', 'Value', '', 0],
    ['', 'Mem', 'Lower4', 0x4, '!=', 'Value', '', 0],
  ),
  badge: '372974',
  id: 330534,
})

set.addAchievement({
  title: `I'm Getting Better at This`,
  description: 'Break your past record (different from 0).',
  points: 2,
  type: 'win_condition',
  conditions: $(
    ['AddSource', 'Mem', 'Lower4', 0xe, '*', 'Value', '', 10],
    ['AddSource', 'Mem', 'Lower4', 0xd, '*', 'Value', '', 100],
    ['AddSource', 'Mem', 'Lower4', 0xc, '*', 'Value', '', 1000],
    ['AddSource', 'Mem', 'Lower4', 0xb, '*', 'Value', '', 10000],
    ['', 'Mem', 'Lower4', 0xf, '!=', 'Value', '', 0],
    ['AddSource', 'Mem', 'Lower4', 0x5, '*', 'Value', '', 10],
    ['AddSource', 'Mem', 'Lower4', 0x4, '*', 'Value', '', 100],
    ['AddSource', 'Mem', 'Lower4', 0x3, '*', 'Value', '', 1000],
    ['AddSource', 'Mem', 'Lower4', 0x2, '*', 'Value', '', 10000],
    ['AddSource', 'Mem', 'Lower4', 0x6, '*', 'Value', '', 1],
    ['SubSource', 'Mem', 'Lower4', 0xe, '*', 'Value', '', 10],
    ['SubSource', 'Mem', 'Lower4', 0xd, '*', 'Value', '', 100],
    ['SubSource', 'Mem', 'Lower4', 0xc, '*', 'Value', '', 1000],
    ['SubSource', 'Mem', 'Lower4', 0xb, '*', 'Value', '', 10000],
    ['SubSource', 'Mem', 'Lower4', 0xf, '*', 'Value', '', 1],
    ['', 'Value', '', 0, '>', 'Value', '', 0],
    ['AddSource', 'Mem', 'Lower4', 0x5, '*', 'Value', '', 10],
    ['AddSource', 'Mem', 'Lower4', 0x4, '*', 'Value', '', 100],
    ['AddSource', 'Mem', 'Lower4', 0x3, '*', 'Value', '', 1000],
    ['AddSource', 'Mem', 'Lower4', 0x2, '*', 'Value', '', 10000],
    ['AddSource', 'Mem', 'Lower4', 0x6, '*', 'Value', '', 1],
    ['SubSource', 'Mem', 'Lower4', 0xe, '*', 'Value', '', 10],
    ['SubSource', 'Mem', 'Lower4', 0xd, '*', 'Value', '', 100],
    ['SubSource', 'Mem', 'Lower4', 0xc, '*', 'Value', '', 1000],
    ['SubSource', 'Mem', 'Lower4', 0xb, '*', 'Value', '', 10000],
    ['SubSource', 'Mem', 'Lower4', 0xf, '*', 'Value', '', 1],
    ['', 'Value', '', 0, '<', 'Value', '', 0xf000000],
  ),
  badge: '372975',
  id: 330535,
})

set.addAchievement({
  title: 'Maybe This Could Be More Complicated Than What You Think',
  description: 'Get 1000 points or more.',
  points: 3,
  type: 'progression',
  conditions: $(
    ['', 'Delta', 'Lower4', 0xc, '=', 'Value', '', 0],
    ['', 'Mem', 'Lower4', 0xc, '>=', 'Value', '', 1],
  ),
  badge: '372976',
  id: 330536,
})

set.addAchievement({
  title: '1K Again',
  description: 'Break a previous record of 1000 or more points.',
  points: 3,
  type: 'win_condition',
  conditions: $(
    ['AddSource', 'Mem', 'Lower4', 0xe, '*', 'Value', '', 10],
    ['AddSource', 'Mem', 'Lower4', 0xd, '*', 'Value', '', 100],
    ['AddSource', 'Mem', 'Lower4', 0xc, '*', 'Value', '', 1000],
    ['AddSource', 'Mem', 'Lower4', 0xb, '*', 'Value', '', 10000],
    ['', 'Mem', 'Lower4', 0xf, '>=', 'Value', '', 1000],
    ['AddSource', 'Mem', 'Lower4', 0x5, '*', 'Value', '', 10],
    ['AddSource', 'Mem', 'Lower4', 0x4, '*', 'Value', '', 100],
    ['AddSource', 'Mem', 'Lower4', 0x3, '*', 'Value', '', 1000],
    ['AddSource', 'Mem', 'Lower4', 0x2, '*', 'Value', '', 10000],
    ['AddSource', 'Mem', 'Lower4', 0x6, '*', 'Value', '', 1],
    ['SubSource', 'Mem', 'Lower4', 0xe, '*', 'Value', '', 10],
    ['SubSource', 'Mem', 'Lower4', 0xd, '*', 'Value', '', 100],
    ['SubSource', 'Mem', 'Lower4', 0xc, '*', 'Value', '', 1000],
    ['SubSource', 'Mem', 'Lower4', 0xb, '*', 'Value', '', 10000],
    ['SubSource', 'Mem', 'Lower4', 0xf, '*', 'Value', '', 1],
    ['', 'Value', '', 0, '>', 'Value', '', 0],
    ['AddSource', 'Mem', 'Lower4', 0x5, '*', 'Value', '', 10],
    ['AddSource', 'Mem', 'Lower4', 0x4, '*', 'Value', '', 100],
    ['AddSource', 'Mem', 'Lower4', 0x3, '*', 'Value', '', 1000],
    ['AddSource', 'Mem', 'Lower4', 0x2, '*', 'Value', '', 10000],
    ['AddSource', 'Mem', 'Lower4', 0x6, '*', 'Value', '', 1],
    ['SubSource', 'Mem', 'Lower4', 0xe, '*', 'Value', '', 10],
    ['SubSource', 'Mem', 'Lower4', 0xd, '*', 'Value', '', 100],
    ['SubSource', 'Mem', 'Lower4', 0xc, '*', 'Value', '', 1000],
    ['SubSource', 'Mem', 'Lower4', 0xb, '*', 'Value', '', 10000],
    ['SubSource', 'Mem', 'Lower4', 0xf, '*', 'Value', '', 1],
    ['', 'Value', '', 0, '<', 'Value', '', 0xf000000],
  ),
  badge: '372977',
  id: 330537,
})

set.addLeaderboard({
  title: 'High Score',
  description: 'Get the highest score in a single game.',
  lowerIsBetter: false,
  type: 'VALUE',
  conditions: {
    start: $(
      ['AddSource', 'Mem', 'Lower4', 0xb, '*', 'Value', '', 10000],
      ['AddSource', 'Mem', 'Lower4', 0xc, '*', 'Value', '', 1000],
      ['AddSource', 'Mem', 'Lower4', 0xd, '*', 'Value', '', 100],
      ['AddSource', 'Mem', 'Lower4', 0xe, '*', 'Value', '', 10],
      ['AddSource', 'Mem', 'Lower4', 0xf, '*', 'Value', '', 1],
      ['', 'Value', '', 0, '>', 'Value', '', 0],
      ['OrNext', 'Mem', 'Lower4', 0xb, '!=', 'Delta', 'Lower4', 0xb],
      ['OrNext', 'Mem', 'Lower4', 0xc, '!=', 'Delta', 'Lower4', 0xc],
      ['OrNext', 'Mem', 'Lower4', 0xd, '!=', 'Delta', 'Lower4', 0xd],
      ['OrNext', 'Mem', 'Lower4', 0xe, '!=', 'Delta', 'Lower4', 0xe],
      ['', 'Mem', 'Lower4', 0xf, '!=', 'Delta', 'Lower4', 0xf],
    ),
    cancel: '0=1',
    submit: '0=0',
    value: $(
      ['AddSource', 'Mem', 'Lower4', 0xb, '*', 'Value', '', 10000],
      ['AddSource', 'Mem', 'Lower4', 0xc, '*', 'Value', '', 1000],
      ['AddSource', 'Mem', 'Lower4', 0xd, '*', 'Value', '', 100],
      ['AddSource', 'Mem', 'Lower4', 0xe, '*', 'Value', '', 10],
      ['AddSource', 'Mem', 'Lower4', 0xf, '*', 'Value', '', 1],
      ['Measured', 'Value', '', 0],
    ),
  },
  id: 122538,
})

export default set

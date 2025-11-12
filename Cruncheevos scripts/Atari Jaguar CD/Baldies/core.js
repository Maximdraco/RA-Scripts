import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 21663, title: 'Baldies' })

set.addAchievement({
  title: 'Warning: Unknown Emulator',
  description: 'Hardcore unlocks cannot be earned using this emulator.',
  points: 0,
  conditions: '1=1.300.',
  badge: '00000',
  id: 101000001,
})

set.addAchievement({
  title: 'Pika !',
  description: 'Create a Large Electrocution',
  points: 0,
  conditions: {
    core: $(['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 3]),
    alt1: $(
      ['', 'Mem', '16bit', 0x27382, '=', 'Value', '', 6401],
      ['', 'Mem', '8bit', 0x27385, '=', 'Value', '', 1],
      ['', 'Delta', '8bit', 0x27385, '=', 'Value', '', 0],
    ),
    alt2: $(
      ['', 'Mem', '16bit', 0x2738a, '=', 'Value', '', 6401],
      ['', 'Mem', '8bit', 0x2738d, '=', 'Value', '', 1],
      ['', 'Delta', '8bit', 0x27395, '=', 'Value', '', 0],
    ),
    alt3: $(
      ['', 'Mem', '16bit', 0x27392, '=', 'Value', '', 6401],
      ['', 'Mem', '8bit', 0x27395, '=', 'Value', '', 1],
      ['', 'Delta', '8bit', 0x27395, '=', 'Value', '', 0],
    ),
    alt4: $(
      ['', 'Mem', '16bit', 0x2739a, '=', 'Value', '', 6401],
      ['', 'Mem', '8bit', 0x2739d, '=', 'Value', '', 1],
      ['', 'Delta', '8bit', 0x2739d, '=', 'Value', '', 0],
    ),
    alt5: $(
      ['', 'Mem', '16bit', 0x273a2, '=', 'Value', '', 6401],
      ['', 'Mem', '8bit', 0x273a5, '=', 'Value', '', 1],
      ['', 'Delta', '8bit', 0x273a5, '=', 'Value', '', 0],
    ),
    alt6: $(
      ['', 'Mem', '16bit', 0x273aa, '=', 'Value', '', 6401],
      ['', 'Mem', '8bit', 0x273ad, '=', 'Value', '', 1],
      ['', 'Delta', '8bit', 0x273ad, '=', 'Value', '', 0],
    ),
  },
  badge: '366034',
  id: 325942,
})

set.addAchievement({
  title: 'Pay Attention Where You Step',
  description: 'Create a Large Mine.',
  points: 1,
  conditions: {
    core: $(['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 3]),
    alt1: $(
      ['', 'Mem', '16bit', 0x27382, '=', 'Value', '', 513],
      ['', 'Delta', '8bit', 0x27385, '!=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x27385, '=', 'Value', '', 1],
    ),
    alt2: $(
      ['', 'Mem', '16bit', 0x2738a, '=', 'Value', '', 513],
      ['', 'Delta', '8bit', 0x2738d, '!=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x2738d, '=', 'Value', '', 1],
    ),
    alt3: $(
      ['', 'Mem', '16bit', 0x27392, '=', 'Value', '', 513],
      ['', 'Delta', '8bit', 0x27395, '!=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x27395, '=', 'Value', '', 1],
    ),
    alt4: $(
      ['', 'Mem', '16bit', 0x2739a, '=', 'Value', '', 513],
      ['', 'Delta', '8bit', 0x2739d, '!=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x2739d, '=', 'Value', '', 1],
    ),
    alt5: $(
      ['', 'Mem', '16bit', 0x273a2, '=', 'Value', '', 513],
      ['', 'Delta', '8bit', 0x273a5, '!=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x273a5, '=', 'Value', '', 1],
    ),
    alt6: $(
      ['', 'Mem', '16bit', 0x273aa, '=', 'Value', '', 513],
      ['', 'Delta', '8bit', 0x273ad, '!=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x273ad, '=', 'Value', '', 1],
    ),
  },
  badge: '364032',
  id: 325972,
})

set.addAchievement({
  title: 'Shortcut To Australia',
  description: 'Create a Large Pit',
  points: 1,
  conditions: {
    core: $(['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 3]),
    alt1: $(
      ['', 'Mem', '16bit', 0x27382, '=', 'Value', '', 3585],
      ['', 'Delta', '8bit', 0x27385, '!=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x27385, '=', 'Value', '', 1],
    ),
    alt2: $(
      ['', 'Mem', '16bit', 0x2738a, '=', 'Value', '', 3585],
      ['', 'Delta', '8bit', 0x2738d, '!=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x2738d, '=', 'Value', '', 1],
    ),
    alt3: $(
      ['', 'Mem', '16bit', 0x27392, '=', 'Value', '', 3585],
      ['', 'Delta', '8bit', 0x27395, '!=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x27395, '=', 'Value', '', 1],
    ),
    alt4: $(
      ['', 'Mem', '16bit', 0x2739a, '=', 'Value', '', 3585],
      ['', 'Delta', '8bit', 0x2739d, '!=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x2739d, '=', 'Value', '', 1],
    ),
    alt5: $(
      ['', 'Mem', '16bit', 0x273a2, '=', 'Value', '', 3585],
      ['', 'Delta', '8bit', 0x273a5, '!=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x273a5, '=', 'Value', '', 1],
    ),
    alt6: $(
      ['', 'Mem', '16bit', 0x273aa, '=', 'Value', '', 3585],
      ['', 'Delta', '8bit', 0x273ad, '!=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x273ad, '=', 'Value', '', 1],
    ),
  },
  badge: '364032',
  id: 326382,
})

set.addAchievement({
  title: 'Bouncing Baldies',
  description: 'Create a Large Catapult',
  points: 1,
  conditions: {
    core: $(['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 3]),
    alt1: $(
      ['', 'Mem', '16bit', 0x27382, '=', 'Value', '', 6145],
      ['', 'Delta', '8bit', 0x27385, '!=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x27385, '=', 'Value', '', 1],
    ),
    alt2: $(
      ['', 'Mem', '16bit', 0x2738a, '=', 'Value', '', 6145],
      ['', 'Delta', '8bit', 0x2738d, '!=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x2738d, '=', 'Value', '', 1],
    ),
    alt3: $(
      ['', 'Mem', '16bit', 0x27392, '=', 'Value', '', 6145],
      ['', 'Delta', '8bit', 0x27395, '!=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x27395, '=', 'Value', '', 1],
    ),
    alt4: $(
      ['', 'Mem', '16bit', 0x2739a, '=', 'Value', '', 6145],
      ['', 'Delta', '8bit', 0x2739d, '!=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x2739d, '=', 'Value', '', 1],
    ),
    alt5: $(
      ['', 'Mem', '16bit', 0x273a2, '=', 'Value', '', 6145],
      ['', 'Delta', '8bit', 0x273a5, '!=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x273a5, '=', 'Value', '', 1],
    ),
    alt6: $(
      ['', 'Mem', '16bit', 0x273aa, '=', 'Value', '', 6145],
      ['', 'Delta', '8bit', 0x273ad, '!=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x273ad, '=', 'Value', '', 1],
    ),
  },
  badge: '364783',
  id: 326820,
})

set.addAchievement({
  title: 'Plains - Level I',
  description: 'Clear Level 001',
  points: 1,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x4660, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4660, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
    ['', 'Mem', '8bit', 0x5e134, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x5e135, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x5e136, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x5e137, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x5e138, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x5e139, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x5e13a, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x5e13b, '=', 'Value', '', 0],
  ),
  badge: '362088',
  id: 324375,
})

set.addAchievement({
  title: 'Plains - Level II',
  description: 'Clear Level 002',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x4664, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4664, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362089',
  id: 324376,
})

set.addAchievement({
  title: 'Plains - Level III',
  description: 'Clear Level 003',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x4668, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4668, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362090',
  id: 324377,
})

set.addAchievement({
  title: 'Plains - Level IV',
  description: 'Clear Level 004',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x466c, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x466c, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362091',
  id: 324378,
})

set.addAchievement({
  title: 'Plains - Level V',
  description: 'Clear Level 005',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x4670, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4670, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362092',
  id: 324379,
})

set.addAchievement({
  title: 'Plains - Level VI',
  description: 'Clear Level 006',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x4674, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4674, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362093',
  id: 324380,
})

set.addAchievement({
  title: 'Plains - Level VII',
  description: 'Clear Level 007',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x4678, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4678, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362094',
  id: 324381,
})

set.addAchievement({
  title: 'Plains - Level VIII',
  description: 'Clear Level 008',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x467c, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x467c, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362095',
  id: 324382,
})

set.addAchievement({
  title: 'Plains - Level IX',
  description: 'Clear Level 009',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x4680, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4680, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362096',
  id: 324383,
})

set.addAchievement({
  title: 'Plains - Level X',
  description: 'Clear Level 010',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x4684, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4684, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362097',
  id: 324384,
})

set.addAchievement({
  title: 'Plains - Level XI',
  description: 'Clear Level 011',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x4688, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4688, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362098',
  id: 324385,
})

set.addAchievement({
  title: 'Plains - Level XII',
  description: 'Clear Level 012',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x468c, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x468c, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362099',
  id: 324386,
})

set.addAchievement({
  title: 'Plains - Level XIII',
  description: 'Clear Level 013',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x4690, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4690, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362100',
  id: 324387,
})

set.addAchievement({
  title: 'Plains - Level XIV',
  description: 'Clear Level 014',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x4694, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4694, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362101',
  id: 324388,
})

set.addAchievement({
  title: 'Plains - Level XV',
  description: 'Clear Level 015',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x4698, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4698, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362102',
  id: 324389,
})

set.addAchievement({
  title: 'Plains - Level XVI',
  description: 'Clear Level 016',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x469c, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x469c, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362103',
  id: 324390,
})

set.addAchievement({
  title: 'Plains - Level XVII',
  description: 'Clear Level 017',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x46a0, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46a0, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362104',
  id: 324391,
})

set.addAchievement({
  title: 'Plains - Level XVIII',
  description: 'Clear Level 018',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x46a4, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46a4, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362105',
  id: 324392,
})

set.addAchievement({
  title: 'Plains - Level XIX',
  description: 'Clear Level 019',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x46a8, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46a8, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362106',
  id: 324393,
})

set.addAchievement({
  title: 'Plains - Level XX',
  description: 'Clear Level 020',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x46ac, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46ac, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362107',
  id: 324394,
})

set.addAchievement({
  title: 'Artic - Level I',
  description: 'Clear Level 21',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 20],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x46b0, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46b0, '=', 'Value', '', 2],
  ),
  badge: '362169',
  id: 324437,
})

set.addAchievement({
  title: 'Artic - Level II',
  description: 'Clear Level 22',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 21],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x46b4, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46b4, '=', 'Value', '', 2],
  ),
  badge: '362170',
  id: 324438,
})

set.addAchievement({
  title: 'Artic - Level III',
  description: 'Clear Level 23',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 22],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x46b8, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46b8, '=', 'Value', '', 2],
  ),
  badge: '362171',
  id: 324439,
})

set.addAchievement({
  title: 'Artic - Level IV',
  description: 'Clear Level 24',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 23],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x46bc, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46bc, '=', 'Value', '', 2],
  ),
  badge: '362172',
  id: 324440,
})

set.addAchievement({
  title: 'Artic - Level V',
  description: 'Clear Level 25',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 24],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x46c0, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46c0, '=', 'Value', '', 2],
  ),
  badge: '362173',
  id: 324441,
})

set.addAchievement({
  title: 'Artic - Level VI',
  description: 'Clear Level 26',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 25],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x46c4, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46c4, '=', 'Value', '', 2],
  ),
  badge: '362174',
  id: 324442,
})

set.addAchievement({
  title: 'Artic - Level VII',
  description: 'Clear Level 27',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 26],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x46c8, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46c8, '=', 'Value', '', 2],
  ),
  badge: '362175',
  id: 324443,
})

set.addAchievement({
  title: 'Artic - Level VIII',
  description: 'Clear Level 28',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 27],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x46cc, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46cc, '=', 'Value', '', 2],
  ),
  badge: '362176',
  id: 324444,
})

set.addAchievement({
  title: 'Artic - Level IX',
  description: 'Clear Level 29',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 28],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x46d0, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46d0, '=', 'Value', '', 2],
  ),
  badge: '362177',
  id: 324445,
})

set.addAchievement({
  title: 'Artic - Level X',
  description: 'Clear Level 30',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 29],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x46d4, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46d4, '=', 'Value', '', 2],
  ),
  badge: '362178',
  id: 324446,
})

set.addAchievement({
  title: 'Artic - Level XI',
  description: 'Clear Level 31',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 30],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x46d8, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46d8, '=', 'Value', '', 2],
  ),
  badge: '362179',
  id: 324447,
})

set.addAchievement({
  title: 'Artic - Level XII',
  description: 'Clear Level 32',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 31],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x46dc, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46dc, '=', 'Value', '', 2],
  ),
  badge: '362180',
  id: 324448,
})

set.addAchievement({
  title: 'Artic - Level XIII',
  description: 'Clear Level 33',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 32],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x46e0, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46e0, '=', 'Value', '', 2],
  ),
  badge: '362181',
  id: 324449,
})

set.addAchievement({
  title: 'Artic - Level XIV',
  description: 'Clear Level 34',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 33],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x46e4, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46e4, '=', 'Value', '', 2],
  ),
  badge: '362182',
  id: 324450,
})

set.addAchievement({
  title: 'Artic - Level XV',
  description: 'Clear Level 35',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 34],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x46e8, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46e8, '=', 'Value', '', 2],
  ),
  badge: '362183',
  id: 324451,
})

set.addAchievement({
  title: 'Artic - Level XVI',
  description: 'Clear Level 36',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 35],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x46ec, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46ec, '=', 'Value', '', 2],
  ),
  badge: '362184',
  id: 324452,
})

set.addAchievement({
  title: 'Artic - Level XVII',
  description: 'Clear Level 37',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 36],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x46f0, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46f0, '=', 'Value', '', 2],
  ),
  badge: '362185',
  id: 324453,
})

set.addAchievement({
  title: 'Artic - Level XVIII',
  description: 'Clear Level 38',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 37],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x46f4, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46f4, '=', 'Value', '', 2],
  ),
  badge: '362186',
  id: 324454,
})

set.addAchievement({
  title: 'Artic - Level XIX',
  description: 'Clear Level 39',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 38],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x46f8, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46f8, '=', 'Value', '', 2],
  ),
  badge: '362187',
  id: 324455,
})

set.addAchievement({
  title: 'Artic - Level XX',
  description: 'Clear Level 40',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 39],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x46fc, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x46fc, '=', 'Value', '', 2],
  ),
  badge: '362188',
  id: 324456,
})

set.addAchievement({
  title: 'Circus - Level I',
  description: 'Clear Level 41',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 40],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4700, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4700, '=', 'Value', '', 2],
  ),
  badge: '362108',
  id: 324395,
})

set.addAchievement({
  title: 'Circus - Level II',
  description: 'Clear Level 42',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 41],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4704, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4704, '=', 'Value', '', 2],
  ),
  badge: '362109',
  id: 324396,
})

set.addAchievement({
  title: 'Circus - Level III',
  description: 'Clear Level 43',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 42],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4708, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4708, '=', 'Value', '', 2],
  ),
  badge: '362110',
  id: 324397,
})

set.addAchievement({
  title: 'Circus - Level IV',
  description: 'Clear Level 44',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 43],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x470c, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x470c, '=', 'Value', '', 2],
  ),
  badge: '362111',
  id: 324398,
})

set.addAchievement({
  title: 'Circus - Level V',
  description: 'Clear Level 45',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 44],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4710, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4710, '=', 'Value', '', 2],
  ),
  badge: '362112',
  id: 324399,
})

set.addAchievement({
  title: 'Circus - Level VI',
  description: 'Clear Level 46',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 45],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4714, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4714, '=', 'Value', '', 2],
  ),
  badge: '362113',
  id: 324400,
})

set.addAchievement({
  title: 'Circus - Level VII',
  description: 'Clear Level 47',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 46],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4718, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4718, '=', 'Value', '', 2],
  ),
  badge: '362114',
  id: 324401,
})

set.addAchievement({
  title: 'Circus - Level VIII',
  description: 'Clear Level 48',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 47],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x471c, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x471c, '=', 'Value', '', 2],
  ),
  badge: '362115',
  id: 324402,
})

set.addAchievement({
  title: 'Circus - Level IX',
  description: 'Clear Level 49',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 48],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4720, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4720, '=', 'Value', '', 2],
  ),
  badge: '362116',
  id: 324403,
})

set.addAchievement({
  title: 'Circus - Level X',
  description: 'Clear Level 50',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 49],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4724, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4724, '=', 'Value', '', 2],
  ),
  badge: '362117',
  id: 324404,
})

set.addAchievement({
  title: 'Circus - Level XI',
  description: 'Clear Level 51',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 50],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4728, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4728, '=', 'Value', '', 2],
  ),
  badge: '362118',
  id: 324405,
})

set.addAchievement({
  title: 'Circus - Level XII',
  description: 'Clear Level 52',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 51],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x472c, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x472c, '=', 'Value', '', 2],
  ),
  badge: '362119',
  id: 324406,
})

set.addAchievement({
  title: 'Circus - Level XIII',
  description: 'Clear Level 53',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 52],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4730, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4730, '=', 'Value', '', 2],
  ),
  badge: '362120',
  id: 324407,
})

set.addAchievement({
  title: 'Circus - Level XIV',
  description: 'Clear Level 54',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 53],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4734, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4734, '=', 'Value', '', 2],
  ),
  badge: '362121',
  id: 324408,
})

set.addAchievement({
  title: 'Circus - Level XV',
  description: 'Clear Level 55',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 54],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4738, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4738, '=', 'Value', '', 2],
  ),
  badge: '362122',
  id: 324409,
})

set.addAchievement({
  title: 'Circus - Level XVI',
  description: 'Clear Level 56',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 55],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x473c, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x473c, '=', 'Value', '', 2],
  ),
  badge: '362123',
  id: 324410,
})

set.addAchievement({
  title: 'Circus - Level XVII',
  description: 'Clear Level 57',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 56],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4740, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4740, '=', 'Value', '', 2],
  ),
  badge: '362124',
  id: 324411,
})

set.addAchievement({
  title: 'Circus - Level XVIII',
  description: 'Clear Level 58',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 57],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4744, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4744, '=', 'Value', '', 2],
  ),
  badge: '362125',
  id: 324412,
})

set.addAchievement({
  title: 'Circus - Level XIX',
  description: 'Clear Level 59',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 58],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4748, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4748, '=', 'Value', '', 2],
  ),
  badge: '362126',
  id: 324413,
})

set.addAchievement({
  title: 'Circus - Level XX',
  description: 'Clear Level 60',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 59],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x474c, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x474c, '=', 'Value', '', 2],
  ),
  badge: '362127',
  id: 324414,
})

set.addAchievement({
  title: 'Desert - Level I',
  description: 'Complete level 61.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 60],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4750, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4750, '=', 'Value', '', 2],
  ),
  badge: '362063',
  id: 324350,
})

set.addAchievement({
  title: 'Desert - Level II',
  description: 'Complete level 62.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 61],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4754, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4754, '=', 'Value', '', 2],
  ),
  badge: '362069',
  id: 324356,
})

set.addAchievement({
  title: 'Desert - Level III',
  description: 'Complete level 63.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 62],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4758, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4758, '=', 'Value', '', 2],
  ),
  badge: '362070',
  id: 324357,
})

set.addAchievement({
  title: 'Desert - Level IV',
  description: 'Complete level 64.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 63],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x475c, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x475c, '=', 'Value', '', 2],
  ),
  badge: '362071',
  id: 324358,
})

set.addAchievement({
  title: 'Desert - Level V',
  description: 'Complete level 65.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 64],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4760, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4760, '=', 'Value', '', 2],
  ),
  badge: '362072',
  id: 324359,
})

set.addAchievement({
  title: 'Desert - Level VI',
  description: 'Complete level 66.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 65],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4764, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4764, '=', 'Value', '', 2],
  ),
  badge: '362073',
  id: 324360,
})

set.addAchievement({
  title: 'Desert - Level VII',
  description: 'Complete level 67.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 66],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4768, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4768, '=', 'Value', '', 2],
  ),
  badge: '362074',
  id: 324361,
})

set.addAchievement({
  title: 'Desert - Level VIII',
  description: 'Complete level 68.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 67],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x476c, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x476c, '=', 'Value', '', 2],
  ),
  badge: '362075',
  id: 324362,
})

set.addAchievement({
  title: 'Desert - Level IX',
  description: 'Complete level 69.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 68],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4770, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4770, '=', 'Value', '', 2],
  ),
  badge: '362076',
  id: 324363,
})

set.addAchievement({
  title: 'Desert - Level X',
  description: 'Complete level 70.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 69],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4774, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4774, '=', 'Value', '', 2],
  ),
  badge: '362077',
  id: 324364,
})

set.addAchievement({
  title: 'Desert - Level XI',
  description: 'Complete level 71.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 70],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4778, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4778, '=', 'Value', '', 2],
  ),
  badge: '362078',
  id: 324365,
})

set.addAchievement({
  title: 'Desert - Level XII',
  description: 'Complete level 72.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 71],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x477c, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x477c, '=', 'Value', '', 2],
  ),
  badge: '362079',
  id: 324366,
})

set.addAchievement({
  title: 'Desert - Level XIII',
  description: 'Complete level 73.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 72],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4780, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4780, '=', 'Value', '', 2],
  ),
  badge: '362080',
  id: 324367,
})

set.addAchievement({
  title: 'Desert - Level IV',
  description: 'Complete level 74.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 73],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4784, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4784, '=', 'Value', '', 2],
  ),
  badge: '362081',
  id: 324368,
})

set.addAchievement({
  title: 'Desert - Level XV',
  description: 'Complete level 75.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 74],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4788, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4788, '=', 'Value', '', 2],
  ),
  badge: '362082',
  id: 324369,
})

set.addAchievement({
  title: 'Desert - Level XVI',
  description: 'Complete level 76.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 75],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x478c, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x478c, '=', 'Value', '', 2],
  ),
  badge: '362083',
  id: 324370,
})

set.addAchievement({
  title: 'Desert - Level XVII',
  description: 'Complete level 77.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 76],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4790, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4790, '=', 'Value', '', 2],
  ),
  badge: '362084',
  id: 324371,
})

set.addAchievement({
  title: 'Desert - Level XVIII',
  description: 'Complete level 78.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 77],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4794, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4794, '=', 'Value', '', 2],
  ),
  badge: '362085',
  id: 324372,
})

set.addAchievement({
  title: 'Desert - Level XIX',
  description: 'Complete level 79.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 78],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x4798, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x4798, '=', 'Value', '', 2],
  ),
  badge: '362086',
  id: 324373,
})

set.addAchievement({
  title: 'Desert - Level XX',
  description: 'Complete level 80.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 79],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x479c, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x479c, '=', 'Value', '', 2],
  ),
  badge: '362087',
  id: 324374,
})

set.addAchievement({
  title: 'Hell - Level I',
  description: 'Clear Level 081',
  points: 10,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x47a0, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x47a0, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362133',
  id: 324420,
})

set.addAchievement({
  title: 'Hell - Level II',
  description: 'Clear Level 082',
  points: 10,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x47a4, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x47a4, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362134',
  id: 324421,
})

set.addAchievement({
  title: 'Hell - Level III',
  description: 'Clear Level 083',
  points: 10,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x47a8, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x47a8, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362135',
  id: 324422,
})

set.addAchievement({
  title: 'Hell - Level IV',
  description: 'Clear Level 084',
  points: 10,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x47ac, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x47ac, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362136',
  id: 324423,
})

set.addAchievement({
  title: 'Hell - Level V',
  description: 'Clear Level 085',
  points: 10,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '32bit', 0x47b0, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x47b0, '=', 'Value', '', 2],
    ['PauseIf', 'Delta', '8bit', 0x4011, '=', 'Value', '', 255],
  ),
  badge: '362136',
  id: 324424,
})

set.addAchievement({
  title: 'Hell - Level VI',
  description: 'Clear Level 86',
  points: 10,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 85],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x47b4, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x47b4, '=', 'Value', '', 2],
  ),
  badge: '362189',
  id: 324457,
})

set.addAchievement({
  title: 'Hell - Level VII',
  description: 'Clear Level 87',
  points: 10,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 86],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x47b8, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x47b8, '=', 'Value', '', 2],
  ),
  badge: '362190',
  id: 324458,
})

set.addAchievement({
  title: 'Hell - Level VIII',
  description: 'Clear Level 88',
  points: 10,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 87],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x47bc, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x47bc, '=', 'Value', '', 2],
  ),
  badge: '362191',
  id: 324459,
})

set.addAchievement({
  title: 'Hell - Level IX',
  description: 'Clear Level 89',
  points: 10,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 88],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x47c0, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x47c0, '=', 'Value', '', 2],
  ),
  badge: '362192',
  id: 324460,
})

set.addAchievement({
  title: 'Hell - Level X',
  description: 'Clear Level 90',
  points: 10,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 89],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x47c4, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x47c4, '=', 'Value', '', 2],
  ),
  badge: '362193',
  id: 324461,
})

set.addAchievement({
  title: 'Hell - Level XI',
  description: 'Clear Level 91',
  points: 10,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 90],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x47c8, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x47c8, '=', 'Value', '', 2],
  ),
  badge: '362128',
  id: 324415,
})

set.addAchievement({
  title: 'Hell - Level XII',
  description: 'Clear Level 92',
  points: 10,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 91],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x47cc, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x47cc, '=', 'Value', '', 2],
  ),
  badge: '362129',
  id: 324416,
})

set.addAchievement({
  title: 'Hell - Level XIII',
  description: 'Clear Level 93',
  points: 10,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 92],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x47d0, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x47d0, '=', 'Value', '', 2],
  ),
  badge: '362130',
  id: 324417,
})

set.addAchievement({
  title: 'Hell - Level XIV',
  description: 'Clear Level 94',
  points: 10,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 93],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x47d4, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x47d4, '=', 'Value', '', 2],
  ),
  badge: '362131',
  id: 324418,
})

set.addAchievement({
  title: 'Hell - Level XV',
  description: 'Clear Level 95',
  points: 10,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Delta', '8bit', 0x4011, '=', 'Value', '', 94],
    ['AndNext', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x47d8, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x47d8, '=', 'Value', '', 2],
  ),
  badge: '362132',
  id: 324419,
})

set.addAchievement({
  title: 'Hell - Level XVI',
  description: 'Complete level 96.',
  points: 25,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 95],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x47dc, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x47dc, '=', 'Value', '', 2],
  ),
  badge: '362064',
  id: 324351,
})

set.addAchievement({
  title: 'Hell - Level XVII',
  description: 'Complete level 97.',
  points: 25,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 96],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x47e0, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x47e0, '=', 'Value', '', 2],
  ),
  badge: '362065',
  id: 324352,
})

set.addAchievement({
  title: 'Hell - Level XVIII',
  description: 'Complete level 98.',
  points: 25,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 97],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x47e4, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x47e4, '=', 'Value', '', 2],
  ),
  badge: '362066',
  id: 324353,
})

set.addAchievement({
  title: 'Hell - Level XIX',
  description: 'Complete level 99.',
  points: 25,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 98],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Delta', '32bit', 0x47e8, '=', 'Value', '', 1],
    ['', 'Mem', '32bit', 0x47e8, '=', 'Value', '', 2],
  ),
  badge: '362067',
  id: 324354,
})

set.addAchievement({
  title: 'Hell - Level XX',
  description: 'Complete level 100.',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Delta', '8bit', 0x4011, '=', 'Value', '', 99],
    ['', 'Delta', '8bit', 0x403b, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x403b, '=', 'Value', '', 2],
    ['', 'Mem', '32bit', 0x47ec, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x4050, '=', 'Value', '', 22],
    ['', 'Mem', '8bit', 0x4050, '=', 'Value', '', 5],
  ),
  badge: '362068',
  id: 324355,
})

export default set

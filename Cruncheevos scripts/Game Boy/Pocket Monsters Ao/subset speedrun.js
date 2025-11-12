import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({
  gameId: 15689,
  title: 'Pocket Monsters Ao [Subset - Speedrun]',
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
  title: '[Slowrun] First Badge',
  description:
    'Get your first Badge in no more than 37 minutes in game time (one session).',
  points: 5,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Delta', '8bit', 0xd123, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 37],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 0],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 1],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(['', 'Mem', '8bit', 0xd2dd, '>=', 'Value', '', 0]),
    alt2: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '207137',
  id: 186326,
})

set.addAchievement({
  title: '[Slowrun] Second Badge',
  description:
    'Get your second Badge in no more than 1 hour and 34 minutes minutes in game time (one session).',
  points: 5,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 1, 1],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 1],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 2],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 34],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 59],
    ),
    alt3: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '207154',
  id: 186343,
})

set.addAchievement({
  title: '[Slowrun] Third Badge',
  description:
    'Get your third Badge in no more than 1 hour and 56 minutes in game time (one session).',
  points: 5,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 2, 1],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 2],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 3],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 56],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 59],
    ),
    alt3: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '207155',
  id: 186344,
})

set.addAchievement({
  title: '[Slowrun] Fourth Badge',
  description:
    'Get your fourth Badge in no more than 3 hours and 28 minutes in game time (one session).',
  points: 5,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 3, 1],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 3],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 4],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 28],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0xd97d, '<=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 59],
    ),
    alt3: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '265040',
  id: 186345,
})

set.addAchievement({
  title: '[Slowrun] Fifth Badge',
  description:
    'Get your fifth Badge in no more than 3 hours and 45 minutes in game time (one session).',
  points: 5,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 4, 1],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 4],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 5],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 45],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0xd97d, '<=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 59],
    ),
    alt3: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '265041',
  id: 186346,
})

set.addAchievement({
  title: '[Slowrun] Sixth Badge',
  description:
    'Get your sixth Badge in no more than 4 hours and 5 minutes in game time (one session).',
  points: 5,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 5, 1],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 5],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 6],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 4],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 5],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0xd97d, '<=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 59],
    ),
    alt3: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '265042',
  id: 186347,
})

set.addAchievement({
  title: '[Slowrun] Seventh Badge',
  description:
    'Get your seventh Badge in no more than 4 hours and 6 minutes in game time (one session).',
  points: 5,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 6, 1],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 6],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 7],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 4],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 6],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0xd97d, '<=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 59],
    ),
    alt3: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '265043',
  id: 186348,
})

set.addAchievement({
  title: '[Slowrun] Eighth Badge',
  description:
    'Get your eighth Badge in no more than 4 hours and 20 minutes in game time (one session).',
  points: 5,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 7, 1],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 7],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 8],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 4],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 20],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0xd97d, '<=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 59],
    ),
    alt3: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '207160',
  id: 186349,
})

set.addAchievement({
  title: '[Slowrun] Kanto Pokemon League',
  description:
    'Defeat the Elite Four and the Champion in no more than 5 hours and 32 minutes in game time (one session).',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 8],
      ['Trigger', 'Mem', 'Bit1', 0xd7e2, '>', 'Delta', 'Bit1', 0xd7e2, 1],
      ['Trigger', 'Mem', 'Bit1', 0xd7e3, '>', 'Delta', 'Bit1', 0xd7e3, 1],
      ['Trigger', 'Mem', 'Bit1', 0xd7e4, '>', 'Delta', 'Bit1', 0xd7e4, 1],
      ['Trigger', 'Mem', 'Bit1', 0xd7e5, '>', 'Delta', 'Bit1', 0xd7e5, 1],
      ['Trigger', 'Mem', 'Bit1', 0xd7e6, '>', 'Delta', 'Bit1', 0xd7e6, 1],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 5],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 32],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0xd97d, '<=', 'Value', '', 4],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 59],
    ),
    alt3: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '207161',
  id: 186350,
})

set.addAchievement({
  title: '[Middlerun] First Badge',
  description:
    'Get your first Badge in no more than 26 minutes in game time (one session).',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Delta', '8bit', 0xd123, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 26],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 0],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 1],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
    alt2: $(['', 'Mem', '8bit', 0xd2dd, '>=', 'Value', '', 0]),
  },
  badge: '207136',
  id: 186325,
})

set.addAchievement({
  title: '[Middlerun] Second Badge',
  description:
    'Get your second Badge in no more than 1 hour and 13 minutes minutes in game time (one session).',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 1, 1],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 1],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 2],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 13],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 59],
    ),
    alt3: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '207146',
  id: 186335,
})

set.addAchievement({
  title: '[Middlerun] Third Badge',
  description:
    'Get your third Badge in no more than 1 hour and 31 minutes in game time (one session).',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 2, 1],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 2],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 3],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 31],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 59],
    ),
    alt3: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '207147',
  id: 186336,
})

set.addAchievement({
  title: '[Middlerun] Fourth Badge',
  description:
    'Get your fourth Badge in no more than 2 hours and 37 minutes in game time (one session).',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 3, 1],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 3],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 4],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 37],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0xd97d, '<=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 59],
    ),
    alt3: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '265044',
  id: 186337,
})

set.addAchievement({
  title: '[Middlerun] Fifth Badge',
  description:
    'Get your fifth Badge in no more than 3 hours and 8 minutes in game time (one session).',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 4, 1],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 4],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 5],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 8],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0xd97d, '<=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 59],
    ),
    alt3: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '265045',
  id: 186338,
})

set.addAchievement({
  title: '[Middlerun] Sixth Badge',
  description:
    'Get your sixth Badge in no more than 3 hours and 11 minutes in game time (one session).',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 5, 1],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 5],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 6],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 11],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0xd97d, '<=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 59],
    ),
    alt3: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '265046',
  id: 186339,
})

set.addAchievement({
  title: '[Middlerun] Seventh Badge',
  description:
    'Get your seventh Badge in no more than 3 hours and 19 minutes in game time (one session).',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 6, 1],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 6],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 7],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 19],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0xd97d, '<=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 59],
    ),
    alt3: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '265047',
  id: 186340,
})

set.addAchievement({
  title: '[Middlerun] Eighth Badge',
  description:
    'Get your eighth Badge in no more than 3 hours and 27 minutes in game time (one session).',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 7, 1],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 7],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 8],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 27],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0xd97d, '<=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 59],
    ),
    alt3: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '207152',
  id: 186341,
})

set.addAchievement({
  title: '[Middlerun] Kanto Pokemon League',
  description:
    'Defeat the Elite Four and the Champion in no more than 4 hours and 29 minutes in game time (one session).',
  points: 25,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 8],
      ['Trigger', 'Mem', 'Bit1', 0xd7e2, '>', 'Delta', 'Bit1', 0xd7e2, 1],
      ['Trigger', 'Mem', 'Bit1', 0xd7e3, '>', 'Delta', 'Bit1', 0xd7e3, 1],
      ['Trigger', 'Mem', 'Bit1', 0xd7e4, '>', 'Delta', 'Bit1', 0xd7e4, 1],
      ['Trigger', 'Mem', 'Bit1', 0xd7e5, '>', 'Delta', 'Bit1', 0xd7e5, 1],
      ['Trigger', 'Mem', 'Bit1', 0xd7e6, '>', 'Delta', 'Bit1', 0xd7e6, 1],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 4],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 29],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0xd97d, '<=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 59],
    ),
    alt3: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '207153',
  id: 186342,
})

set.addAchievement({
  title: '[Fastrun] First Badge',
  description:
    'Get your first Badge in no more than 15 minutes in game time (one session).',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Delta', '8bit', 0xd123, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 15],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 0],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 1],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
    alt2: $(['', 'Mem', '8bit', 0xd2dd, '>=', 'Value', '', 0]),
  },
  badge: '207135',
  id: 186324,
})

set.addAchievement({
  title: '[Fastrun] Second Badge',
  description:
    'Get your second Badge in no more than 55 minutes in game time (one session).',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 55],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 1, 1],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 1],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 2],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
    alt2: $(['', 'Mem', '8bit', 0xd2dd, '>=', 'Value', '', 0]),
  },
  badge: '207138',
  id: 186327,
})

set.addAchievement({
  title: '[Fastrun] Third Badge',
  description:
    'Get your third Badge in no more than 1 hour and 8 minutes in game time (one session).',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 2, 1],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 2],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 3],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 8],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 59],
    ),
    alt3: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '207139',
  id: 186328,
})

set.addAchievement({
  title: '[Fastrun] Fourth Badge',
  description:
    'Get your fourth Badge in no more than 2 hours and 23 minutes in game time (one session).',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 3, 1],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 3],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 4],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 23],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0xd97d, '<=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 59],
    ),
    alt3: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '207141',
  id: 186330,
})

set.addAchievement({
  title: '[Fastrun] Fifth Badge',
  description:
    'Get your fifth Badge in no more than 2 hours and 23 minutes in game time (one session).',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 4, 1],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 4],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 5],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 23],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0xd97d, '<=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 59],
    ),
    alt3: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '207140',
  id: 186329,
})

set.addAchievement({
  title: '[Fastrun] Sixth Badge',
  description:
    'Get your sixth Badge in no more than 2 hours and 34 minutes in game time (one session).',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 5, 1],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 5],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 6],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 34],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0xd97d, '<=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 59],
    ),
    alt3: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '265048',
  id: 186331,
})

set.addAchievement({
  title: '[Fastrun] Seventh Badge',
  description:
    'Get your seventh Badge in no more than 2 hours and 41 minutes in game time (one session).',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 6, 1],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 6],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 7],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 41],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0xd97d, '<=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 59],
    ),
    alt3: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '265049',
  id: 186332,
})

set.addAchievement({
  title: '[Fastrun] Eighth Badge',
  description:
    'Get your eighth Badge in no more than 2 hours and 45 minutes in game time (one session).',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 7, 1],
      ['AndNext', 'Delta', 'BitCount', 0xd2d5, '=', 'Value', '', 7],
      ['Trigger', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 8],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 45],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0xd97d, '<=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 59],
    ),
    alt3: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '207144',
  id: 186333,
})

set.addAchievement({
  title: '[Fastrun] Kanto Pokemon League',
  description:
    'Defeat the Elite Four and the Champion in no more than 3 hours and 29 minutes in game time (one session).',
  points: 25,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xd123, '>', 'Delta', '8bit', 0xd123],
      ['', 'Mem', '8bit', 0xd123, '=', 'Value', '', 1, 1],
      ['', 'Mem', 'BitCount', 0xd2d5, '=', 'Value', '', 8],
      ['Trigger', 'Mem', 'Bit1', 0xd7e2, '>', 'Delta', 'Bit1', 0xd7e2, 1],
      ['Trigger', 'Mem', 'Bit1', 0xd7e3, '>', 'Delta', 'Bit1', 0xd7e3, 1],
      ['Trigger', 'Mem', 'Bit1', 0xd7e4, '>', 'Delta', 'Bit1', 0xd7e4, 1],
      ['Trigger', 'Mem', 'Bit1', 0xd7e5, '>', 'Delta', 'Bit1', 0xd7e5, 1],
      ['Trigger', 'Mem', 'Bit1', 0xd7e6, '>', 'Delta', 'Bit1', 0xd7e6, 1],
      ['AndNext', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9],
      ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 239],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '!=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xd980, '!=', 'Value', '', 0, 1],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 29],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0xd97d, '<=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0xd97f, '<=', 'Value', '', 59],
    ),
    alt3: $(
      ['AndNext', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['ResetIf', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 255],
    ),
  },
  badge: '207145',
  id: 186334,
})

set.addLeaderboard({
  title: 'Rolling Boulder',
  description: 'How fast can you get the Boulder Badge.',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '!=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd980, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 0, 1],
      ['', 'Mem', 'Bit0', 0xd2d5, '=', 'Value', '', 1],
    ),
    cancel: $(
      ['', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
    ),
    submit: $(['', 'Mem', 'Bit0', 0xd2d5, '=', 'Value', '', 1]),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xd97d, '*', 'Value', '', 0x34bc0],
      ['AddSource', 'Mem', '8bit', 0xd97f, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xd980, '*', 'Value', '', 60],
      ['Measured', 'Mem', '8bit', 0xd981, '*', 'Value', '', 1],
    ),
  },
  id: 28472,
})

set.addLeaderboard({
  title: 'Swift Cascade',
  description: 'How fast can you get the Cascade Badge.',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '!=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd980, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 0, 1],
      ['', 'Mem', 'Bit1', 0xd2d5, '=', 'Value', '', 1],
    ),
    cancel: $(
      ['', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
    ),
    submit: $(['', 'Mem', 'Bit1', 0xd2d5, '=', 'Value', '', 1]),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xd97d, '*', 'Value', '', 0x34bc0],
      ['AddSource', 'Mem', '8bit', 0xd97f, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xd980, '*', 'Value', '', 60],
      ['Measured', 'Mem', '8bit', 0xd981, '*', 'Value', '', 1],
    ),
  },
  id: 28473,
})

set.addLeaderboard({
  title: 'As Fast As the Thunder',
  description: 'How fast can you get the Thunder Badge.',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '!=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd980, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 0, 1],
      ['', 'Mem', 'Bit2', 0xd2d5, '=', 'Value', '', 1],
    ),
    cancel: $(
      ['', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
    ),
    submit: $(['', 'Mem', 'Bit2', 0xd2d5, '=', 'Value', '', 1]),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xd97d, '*', 'Value', '', 0x34bc0],
      ['AddSource', 'Mem', '8bit', 0xd97f, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xd980, '*', 'Value', '', 60],
      ['Measured', 'Mem', '8bit', 0xd981, '*', 'Value', '', 1],
    ),
  },
  id: 28474,
})

set.addLeaderboard({
  title: 'Speedy Rainbow',
  description: 'How fast can you get the Rainbow Badge.',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '!=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd980, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 0, 1],
      ['', 'Mem', 'Bit3', 0xd2d5, '=', 'Value', '', 1],
    ),
    cancel: $(
      ['', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
    ),
    submit: $(['', 'Mem', 'Bit3', 0xd2d5, '=', 'Value', '', 1]),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xd97d, '*', 'Value', '', 0x34bc0],
      ['AddSource', 'Mem', '8bit', 0xd97f, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xd980, '*', 'Value', '', 60],
      ['Measured', 'Mem', '8bit', 0xd981, '*', 'Value', '', 1],
    ),
  },
  id: 28475,
})

set.addLeaderboard({
  title: 'Soul of the Runner',
  description: 'How fast can you get the Soul Badge.',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '!=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd980, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 0, 1],
      ['', 'Mem', 'Bit4', 0xd2d5, '=', 'Value', '', 1],
    ),
    cancel: $(
      ['', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
    ),
    submit: $(['', 'Mem', 'Bit4', 0xd2d5, '=', 'Value', '', 1]),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xd97d, '*', 'Value', '', 0x34bc0],
      ['AddSource', 'Mem', '8bit', 0xd97f, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xd980, '*', 'Value', '', 60],
      ['Measured', 'Mem', '8bit', 0xd981, '*', 'Value', '', 1],
    ),
  },
  id: 28476,
})

set.addLeaderboard({
  title: 'Marsh Sprint',
  description: 'How fast can you get the Marsh Badge.',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '!=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd980, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 0, 1],
      ['', 'Mem', 'Bit5', 0xd2d5, '=', 'Value', '', 1],
    ),
    cancel: $(
      ['', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
    ),
    submit: $(['', 'Mem', 'Bit5', 0xd2d5, '=', 'Value', '', 1]),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xd97d, '*', 'Value', '', 0x34bc0],
      ['AddSource', 'Mem', '8bit', 0xd97f, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xd980, '*', 'Value', '', 60],
      ['Measured', 'Mem', '8bit', 0xd981, '*', 'Value', '', 1],
    ),
  },
  id: 28477,
})

set.addLeaderboard({
  title: 'Running Away from the Volcano',
  description: 'How fast can you get the Volcano Badge.',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '!=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd980, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 0, 1],
      ['', 'Mem', 'Bit6', 0xd2d5, '=', 'Value', '', 1],
    ),
    cancel: $(
      ['', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
    ),
    submit: $(['', 'Mem', 'Bit6', 0xd2d5, '=', 'Value', '', 1]),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xd97d, '*', 'Value', '', 0x34bc0],
      ['AddSource', 'Mem', '8bit', 0xd97f, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xd980, '*', 'Value', '', 60],
      ['Measured', 'Mem', '8bit', 0xd981, '*', 'Value', '', 1],
    ),
  },
  id: 28478,
})

set.addLeaderboard({
  title: 'Do You Know How Fast the Earth Is?',
  description: 'How fast can you get the Earth Badge.',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '!=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd980, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 0, 1],
      ['', 'Mem', 'Bit7', 0xd2d5, '=', 'Value', '', 1],
    ),
    cancel: $(
      ['', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
    ),
    submit: $(['', 'Mem', 'Bit7', 0xd2d5, '=', 'Value', '', 1]),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xd97d, '*', 'Value', '', 0x34bc0],
      ['AddSource', 'Mem', '8bit', 0xd97f, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xd980, '*', 'Value', '', 60],
      ['Measured', 'Mem', '8bit', 0xd981, '*', 'Value', '', 1],
    ),
  },
  id: 28479,
})

set.addLeaderboard({
  title: 'Primordial Waters Speedrun',
  description:
    'How fast can you beat the champion with all medals in one sesion.',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0xc070, '=', 'Value', '', 9, 1],
      ['AndNext', 'Mem', '8bit', 0xcfb1, '!=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd981, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd980, '=', 'Value', '', 0],
      ['AndNext', 'Mem', '8bit', 0xd97f, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xd97d, '=', 'Value', '', 0, 1],
    ),
    cancel: $(
      ['', 'Mem', '8bit', 0xcfb1, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xc026, '=', 'Value', '', 195],
    ),
    submit: $(
      ['', 'Mem', 'Bit0', 0xd2d5, '=', 'Value', '', 1],
      ['', 'Mem', 'Bit1', 0xd2d5, '=', 'Value', '', 1],
      ['', 'Mem', 'Bit2', 0xd2d5, '=', 'Value', '', 1],
      ['', 'Mem', 'Bit4', 0xd2d5, '=', 'Value', '', 1],
      ['', 'Mem', 'Bit3', 0xd2d5, '=', 'Value', '', 1],
      ['', 'Mem', 'Bit6', 0xd2d5, '=', 'Value', '', 1],
      ['', 'Mem', 'Bit5', 0xd2d5, '=', 'Value', '', 1],
      ['', 'Mem', 'Bit7', 0xd2d5, '=', 'Value', '', 1],
      ['', 'Mem', 'Bit1', 0xd7e2, '=', 'Value', '', 1],
      ['', 'Mem', 'Bit1', 0xd7e3, '=', 'Value', '', 1],
      ['', 'Mem', 'Bit1', 0xd7e4, '=', 'Value', '', 1],
      ['', 'Mem', 'Bit1', 0xd7e5, '=', 'Value', '', 1],
      ['', 'Mem', 'Bit1', 0xd7e6, '=', 'Value', '', 1],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xd97d, '*', 'Value', '', 0x34bc0],
      ['AddSource', 'Mem', '8bit', 0xd97f, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xd980, '*', 'Value', '', 60],
      ['Measured', 'Mem', '8bit', 0xd981, '*', 'Value', '', 1],
    ),
  },
  id: 28218,
})

export default set

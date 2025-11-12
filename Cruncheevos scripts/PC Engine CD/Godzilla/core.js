import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 6204, title: 'Godzilla' })

set.addAchievement({
  title: 'Warning: Unknown Emulator',
  description: 'Hardcore unlocks cannot be earned using this emulator.',
  points: 0,
  conditions: '1=1.300.',
  badge: '00000',
  id: 101000001,
})

set.addAchievement({
  title: 'Godzilla Raids Again [Easy]',
  description: 'Defeat Anguirus in Normal Game, easy difficulty or higher.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 0],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448252',
  id: 396191,
})

set.addAchievement({
  title: 'Godzilla Raids Again [Normal]',
  description: 'Defeat Anguirus in Normal Game, normal difficulty or higher.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 0],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448253',
  id: 396192,
})

set.addAchievement({
  title: 'Godzilla Raids Again [Hard]',
  description: 'Defeat Anguirus in Normal Game, hard difficulty.',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 0],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448254',
  id: 396193,
})

set.addAchievement({
  title: 'Rodan [Easy]',
  description: 'Defeat Rodan in Normal Game, easy difficulty or higher.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448255',
  id: 396194,
})

set.addAchievement({
  title: 'Rodan [Normal]',
  description: 'Defeat Rodan in Normal Game, normal difficulty or higher.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448256',
  id: 396195,
})

set.addAchievement({
  title: 'Rodan [Hard]',
  description: 'Defeat Rodan in Normal Game, hard difficulty.',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448257',
  id: 396196,
})

set.addAchievement({
  title: 'Godzilla vs. Gigan [Easy]',
  description: 'Defeat Gigan in Normal Game, easy difficulty or higher.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 2],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448258',
  id: 396197,
})

set.addAchievement({
  title: 'Godzilla vs. Gigan [Normal]',
  description: 'Defeat Gigan in Normal Game, normal difficulty or higher.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 2],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448259',
  id: 396198,
})

set.addAchievement({
  title: 'Godzilla vs. Gigan [Hard]',
  description: 'Defeat Gigan in Normal Game, hard difficulty.',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 2],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448260',
  id: 396199,
})

set.addAchievement({
  title: 'Ghidorah, the Three-Headed Monster [Easy]',
  description: 'Defeat Ghidorah in Normal Game, easy difficulty or higher.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 3],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448261',
  id: 396200,
})

set.addAchievement({
  title: 'Ghidorah, the Three-Headed Monster [Normal]',
  description: 'Defeat Ghidorah in Normal Game, normal difficulty or higher.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 3],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448262',
  id: 396201,
})

set.addAchievement({
  title: 'Ghidorah, the Three-Headed Monster [Hard]',
  description: 'Defeat Ghidorah in Normal Game, hard difficulty.',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 3],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448263',
  id: 396202,
})

set.addAchievement({
  title: 'Godzilla vs. Hedorah [Easy]',
  description: 'Defeat Hedorah in Normal Game, easy difficulty or higher.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448264',
  id: 396203,
})

set.addAchievement({
  title: 'Godzilla vs. Hedorah [Normal]',
  description: 'Defeat Hedorah in Normal Game, normal difficulty or higher.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448265',
  id: 396204,
})

set.addAchievement({
  title: 'Godzilla vs. Hedorah [Hard]',
  description: 'Defeat Hedorah in Normal Game, hard difficulty.',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448266',
  id: 396205,
})

set.addAchievement({
  title: 'Godzilla vs. Megalon [Easy]',
  description: 'Defeat Megalon in Normal Game, easy difficulty or higher.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 5],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448267',
  id: 396206,
})

set.addAchievement({
  title: 'Godzilla vs. Megalon [Normal]',
  description: 'Defeat Megalon in Normal Game, normal difficulty or higher.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 5],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448268',
  id: 396207,
})

set.addAchievement({
  title: 'Godzilla vs. Megalon [Hard]',
  description: 'Defeat Megalon in Normal Game, hard difficulty.',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 5],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448269',
  id: 396208,
})

set.addAchievement({
  title: 'Godzilla vs. Mechagodzilla [Easy]',
  description:
    'Defeat Mechagodzilla I in Normal Game, easy difficulty or higher.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 6],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448270',
  id: 396209,
})

set.addAchievement({
  title: 'Godzilla vs. Mechagodzilla [Normal]',
  description:
    'Defeat Mechagodzilla I in Normal Game, normal difficulty or higher.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 6],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448271',
  id: 396210,
})

set.addAchievement({
  title: 'Godzilla vs. Mechagodzilla [Hard]',
  description: 'Defeat Mechagodzilla I in Normal Game, hard difficulty.',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 6],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448272',
  id: 396211,
})

set.addAchievement({
  title: 'Godzilla vs. Biollante [Easy]',
  description: 'Defeat Biollante in Normal Game, easy difficulty or higher.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 7],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448273',
  id: 396212,
})

set.addAchievement({
  title: 'Godzilla vs. Biollante [Normal]',
  description: 'Defeat Biollante in Normal Game, normal difficulty or higher.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 7],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448274',
  id: 396213,
})

set.addAchievement({
  title: 'Godzilla vs. Biollante [Hard]',
  description: 'Defeat Biollante in Normal Game, hard difficulty.',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 7],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448275',
  id: 396214,
})

set.addAchievement({
  title: 'The Great Monster War [Easy]',
  description:
    'Defeat King Ghidorah in Normal Game, easy difficulty or higher.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 8],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448276',
  id: 396215,
})

set.addAchievement({
  title: 'The Great Monster War [Normal]',
  description:
    'Defeat King Ghidorah in Normal Game, normal difficulty or higher.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 8],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448277',
  id: 396216,
})

set.addAchievement({
  title: 'The Great Monster War [Hard]',
  description: 'Defeat King Ghidorah in Normal Game, hard difficulty.',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 8],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448278',
  id: 396217,
})

set.addAchievement({
  title: 'Godzilla vs. Mothra [Easy]',
  description: 'Defeat Battra in Normal Game, easy difficulty or higher.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 9],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448279',
  id: 396218,
})

set.addAchievement({
  title: 'Godzilla vs. Mothra [Normal]',
  description: 'Defeat Battra in Normal Game, normal difficulty or higher.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 9],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448280',
  id: 396219,
})

set.addAchievement({
  title: 'Godzilla vs. Mothra [Hard]',
  description: 'Defeat Battra in Normal Game, hard difficulty.',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 9],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448281',
  id: 396220,
})

set.addAchievement({
  title: 'Sūpā Ekkusu Tsū [Easy]',
  description: 'Defeat Super XII in Normal Game, easy difficulty or higher.',
  points: 5,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 10],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448282',
  id: 396221,
})

set.addAchievement({
  title: 'Sūpā Ekkusu Tsū [Normal]',
  description: 'Defeat Super XII in Normal Game, normal difficulty or higher.',
  points: 10,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 10],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448283',
  id: 396222,
})

set.addAchievement({
  title: 'Sūpā Ekkusu Tsū [Hard]',
  description: 'Defeat Super XII in Normal Game, hard difficulty.',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 10],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448284',
  id: 396223,
})

set.addAchievement({
  title: 'Godzilla vs. Mechagodzilla II [Easy]',
  description:
    'Defeat Mechagodzilla II in Normal Game, easy difficulty or higher.',
  points: 5,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 11],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448285',
  id: 396224,
})

set.addAchievement({
  title: 'Godzilla vs. Mechagodzilla II [Normal]',
  description:
    'Defeat Mechagodzilla II in Normal Game, normal difficulty or higher.',
  points: 10,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 11],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448286',
  id: 396225,
})

set.addAchievement({
  title: 'Godzilla vs. Mechagodzilla II [Hard]',
  description: 'Defeat Mechagodzilla II in Normal Game, hard difficulty.',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 11],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448287',
  id: 396226,
})

set.addAchievement({
  title: 'Giant Plant Monster [Easy]',
  description:
    'Defeat Biollante (round 6) in Normal Game, easy difficulty or higher.',
  points: 5,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 12],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448288',
  id: 396227,
})

set.addAchievement({
  title: 'Giant Plant Monster [Normal]',
  description:
    'Defeat Biollante (round 6) in Normal Game, normal difficulty or higher.',
  points: 10,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 12],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448289',
  id: 396228,
})

set.addAchievement({
  title: 'Giant Plant Monster [Hard]',
  description: 'Defeat Biollante (round 6) in Normal Game, hard difficulty.',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 12],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448290',
  id: 396229,
})

set.addAchievement({
  title: 'I always come back [Easy]',
  description:
    'Defeat Mecha-King Ghidorah in Normal Game, easy difficulty or higher.',
  points: 5,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 13],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448291',
  id: 396230,
})

set.addAchievement({
  title: 'I always come back [Normal]',
  description:
    'Defeat Mecha-King Ghidorah in Normal Game, normal difficulty or higher.',
  points: 10,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 13],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448292',
  id: 396231,
})

set.addAchievement({
  title: 'I always come back [Hard]',
  description: 'Defeat Mecha-King Ghidorah in Normal Game, hard difficulty.',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 13],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448293',
  id: 396232,
})

set.addAchievement({
  title: 'Battra, again [Easy]',
  description:
    'Defeat Battra (round 6) in Normal Game, easy difficulty or higher.',
  points: 5,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 14],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448294',
  id: 396233,
})

set.addAchievement({
  title: 'Battra, again [Normal]',
  description:
    'Defeat Battra (round 6) in Normal Game, normal difficulty or higher.',
  points: 10,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 14],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448295',
  id: 396234,
})

set.addAchievement({
  title: 'Battra, again [Hard]',
  description: 'Defeat Battra (round 6) in Normal Game, hard difficulty.',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 14],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448296',
  id: 396235,
})

set.addAchievement({
  title: `G-Force's Ultimate Weapon [Easy]`,
  description:
    'Defeat Super Mechagodzilla in Normal Game, easy difficulty or higher.',
  points: 5,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 15],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448297',
  id: 396236,
})

set.addAchievement({
  title: `G-Force's Ultimate Weapon [Normal]`,
  description:
    'Defeat Super Mechagodzilla in Normal Game, normal difficulty or higher.',
  points: 10,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 15],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448298',
  id: 396237,
})

set.addAchievement({
  title: `G-Force's Ultimate Weapon [Hard]`,
  description: 'Defeat Super Mechagodzilla in Normal Game, hard difficulty.',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 15],
    ['', 'Delta', '8bit', 0x6ce, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x6ce, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['', 'Mem', '8bit', 0x6cd, '!=', 'Value', '', 0],
  ),
  badge: '448299',
  id: 396238,
})

set.addAchievement({
  title: 'The King of Monsters [Easy]',
  description:
    'Win Normal Game without using continues, easy difficulty or higher.',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '>=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 0, 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 1, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 2, 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 3, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 4, 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 5, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 6, 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 7, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 8, 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 9, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 10, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 11, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 12, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 13, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 14, 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 15, 1],
    ['AndNext', 'Delta', '8bit', 0x20, '!=', 'Value', '', 33],
    ['', 'Mem', '8bit', 0x20, '=', 'Value', '', 33],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['ResetIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 0],
    ['PauseIf', 'Mem', '8bit', 0x5b, '>=', 'Value', '', 1],
  ),
  badge: '448300',
  id: 396239,
})

set.addAchievement({
  title: 'The King of Monsters [Normal]',
  description:
    'Win Normal Game without using continues, normal difficulty or higher.',
  points: 25,
  conditions: $(
    ['ResetIf', 'Mem', '8bit', 0x59, '<', 'Value', '', 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 0, 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 1, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 2, 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 3, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 4, 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 5, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 6, 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 7, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 8, 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 9, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 10, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 11, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 12, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 13, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 14, 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 15, 1],
    ['AndNext', 'Delta', '8bit', 0x20, '!=', 'Value', '', 33],
    ['', 'Mem', '8bit', 0x20, '=', 'Value', '', 33],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['ResetIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 0],
    ['PauseIf', 'Mem', '8bit', 0x5b, '>=', 'Value', '', 1],
  ),
  badge: '448301',
  id: 396240,
})

set.addAchievement({
  title: 'The King of Monsters [Hard]',
  description: 'Win Normal Game without using continues, hard difficulty.',
  points: 50,
  conditions: $(
    ['ResetIf', 'Mem', '8bit', 0x59, '<', 'Value', '', 2],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 0, 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 1, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 2, 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 3, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 4, 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 5, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 6, 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 7, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 8, 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 9, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 10, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 11, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 12, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 13, 1],
    ['OrNext', 'Mem', '8bit', 0x40, '=', 'Value', '', 14, 1],
    ['', 'Mem', '8bit', 0x40, '=', 'Value', '', 15, 1],
    ['AndNext', 'Delta', '8bit', 0x20, '!=', 'Value', '', 33],
    ['', 'Mem', '8bit', 0x20, '=', 'Value', '', 33],
    ['AndNext', 'Delta', '8bit', 0x20, '=', 'Value', '', 34],
    ['ResetNextIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 128],
    ['PauseIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 34, 1],
    ['ResetIf', 'Mem', '8bit', 0x20, '=', 'Value', '', 0],
    ['PauseIf', 'Mem', '8bit', 0x5b, '>=', 'Value', '', 1],
  ),
  badge: '448302',
  id: 396241,
})

set.addLeaderboard({
  title: 'King of Kaijus [Easy]',
  description: 'Get as many points as possible at the end of Normal Game.',
  lowerIsBetter: false,
  type: 'VALUE',
  conditions: {
    start: $(
      ['OrNext', 'Mem', '8bit', 0x6bd, '!=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x6bf, '!=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['AndNext', 'Mem', '8bit', 0x6bd, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x6bf, '=', 'Value', '', 0],
    ),
    submit: $(['', 'Mem', '8bit', 0x20, '=', 'Value', '', 33]),
    value: $(
      ['AddSource', 'Mem', '8bit', 0x6bf, '*', 'Value', '', 25600],
      ['Measured', 'Mem', '8bit', 0x6bd, '*', 'Value', '', 100],
    ),
  },
  id: 88605,
})

set.addLeaderboard({
  title: 'King of Kaijus [Normal]',
  description: 'Get as many points as possible at the end of Normal Game.',
  lowerIsBetter: false,
  type: 'VALUE',
  conditions: {
    start: $(
      ['OrNext', 'Mem', '8bit', 0x6bd, '!=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x6bf, '!=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ),
    cancel: $(
      ['AndNext', 'Mem', '8bit', 0x6bd, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x6bf, '=', 'Value', '', 0],
    ),
    submit: $(['', 'Mem', '8bit', 0x20, '=', 'Value', '', 33]),
    value: $(
      ['AddSource', 'Mem', '8bit', 0x6bf, '*', 'Value', '', 25600],
      ['Measured', 'Mem', '8bit', 0x6bd, '*', 'Value', '', 100],
    ),
  },
  id: 88606,
})

set.addLeaderboard({
  title: 'King of Kaijus [Hard]',
  description: 'Get as many points as possible at the end of Normal Game.',
  lowerIsBetter: false,
  type: 'VALUE',
  conditions: {
    start: $(
      ['OrNext', 'Mem', '8bit', 0x6bd, '!=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x6bf, '!=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 2],
    ),
    cancel: $(
      ['AndNext', 'Mem', '8bit', 0x6bd, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x6bf, '=', 'Value', '', 0],
    ),
    submit: $(['', 'Mem', '8bit', 0x20, '=', 'Value', '', 33]),
    value: $(
      ['AddSource', 'Mem', '8bit', 0x6bf, '*', 'Value', '', 25600],
      ['Measured', 'Mem', '8bit', 0x6bd, '*', 'Value', '', 100],
    ),
  },
  id: 88607,
})

export default set

import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({
  gameId: 14952,
  title: 'Jigsaw Island: Japan Graffiti',
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
  title: 'Normal Puzzle Page 1 [24 Pieces]',
  description: 'Complete puzzles 1-1 to 1-5.',
  points: 1,
  conditions: $(
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
    ['AddSource', 'Mem', 'Bit0', 0x8eaac],
    ['AddSource', 'Mem', 'Bit1', 0x8eaac],
    ['AddSource', 'Mem', 'Bit2', 0x8eaac],
    ['AddSource', 'Mem', 'Bit3', 0x8eaac],
    ['', 'Mem', 'Bit4', 0x8eaac, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit0', 0x8eaac],
    ['AddSource', 'Delta', 'Bit1', 0x8eaac],
    ['AddSource', 'Delta', 'Bit2', 0x8eaac],
    ['AddSource', 'Delta', 'Bit3', 0x8eaac],
    ['', 'Delta', 'Bit4', 0x8eaac, '=', 'Value', '', 4],
  ),
  badge: '446900',
  id: 395259,
})

set.addAchievement({
  title: 'Normal Puzzle Page 2 [24 Pieces]',
  description: 'Complete puzzles 2-1 to 2-5.',
  points: 1,
  conditions: $(
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
    ['AddSource', 'Mem', 'Bit5', 0x8eaac],
    ['AddSource', 'Mem', 'Bit6', 0x8eaac],
    ['AddSource', 'Mem', 'Bit7', 0x8eaac],
    ['AddSource', 'Mem', 'Bit0', 0x8eaad],
    ['', 'Mem', 'Bit1', 0x8eaad, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit5', 0x8eaac],
    ['AddSource', 'Delta', 'Bit6', 0x8eaac],
    ['AddSource', 'Delta', 'Bit7', 0x8eaac],
    ['AddSource', 'Delta', 'Bit0', 0x8eaad],
    ['', 'Delta', 'Bit1', 0x8eaad, '=', 'Value', '', 4],
  ),
  badge: '446901',
  id: 395260,
})

set.addAchievement({
  title: 'Normal Puzzle Page 3 [24 Pieces]',
  description: 'Complete puzzles 3-1 to 3-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit2', 0x8eaad],
    ['AddSource', 'Mem', 'Bit3', 0x8eaad],
    ['AddSource', 'Mem', 'Bit4', 0x8eaad],
    ['AddSource', 'Mem', 'Bit5', 0x8eaad],
    ['', 'Mem', 'Bit6', 0x8eaad, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit2', 0x8eaad],
    ['AddSource', 'Delta', 'Bit3', 0x8eaad],
    ['AddSource', 'Delta', 'Bit4', 0x8eaad],
    ['AddSource', 'Delta', 'Bit5', 0x8eaad],
    ['', 'Delta', 'Bit6', 0x8eaad, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446902',
  id: 395261,
})

set.addAchievement({
  title: 'Normal Puzzle Page 4 [24 Pieces]',
  description: 'Complete puzzles 4-1 to 4-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit7', 0x8eaad],
    ['AddSource', 'Mem', 'Bit0', 0x8eaae],
    ['AddSource', 'Mem', 'Bit1', 0x8eaae],
    ['AddSource', 'Mem', 'Bit2', 0x8eaae],
    ['', 'Mem', 'Bit3', 0x8eaae, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit7', 0x8eaad],
    ['AddSource', 'Delta', 'Bit0', 0x8eaae],
    ['AddSource', 'Delta', 'Bit1', 0x8eaae],
    ['AddSource', 'Delta', 'Bit2', 0x8eaae],
    ['', 'Delta', 'Bit3', 0x8eaae, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446903',
  id: 395262,
})

set.addAchievement({
  title: 'Normal Puzzle Page 5 [24 Pieces]',
  description: 'Complete puzzles 5-1 to 5-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit4', 0x8eaae],
    ['AddSource', 'Mem', 'Bit5', 0x8eaae],
    ['AddSource', 'Mem', 'Bit6', 0x8eaae],
    ['AddSource', 'Mem', 'Bit7', 0x8eaae],
    ['', 'Mem', 'Bit0', 0x8eaaf, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit4', 0x8eaae],
    ['AddSource', 'Delta', 'Bit5', 0x8eaae],
    ['AddSource', 'Delta', 'Bit6', 0x8eaae],
    ['AddSource', 'Delta', 'Bit7', 0x8eaae],
    ['', 'Delta', 'Bit0', 0x8eaaf, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446904',
  id: 395263,
})

set.addAchievement({
  title: 'Normal Puzzle Page 6 [24 Pieces]',
  description: 'Complete puzzles 6-1 to 6-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit1', 0x8eaaf],
    ['AddSource', 'Mem', 'Bit2', 0x8eaaf],
    ['AddSource', 'Mem', 'Bit3', 0x8eaaf],
    ['AddSource', 'Mem', 'Bit4', 0x8eaaf],
    ['', 'Mem', 'Bit5', 0x8eaaf, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit1', 0x8eaaf],
    ['AddSource', 'Delta', 'Bit2', 0x8eaaf],
    ['AddSource', 'Delta', 'Bit3', 0x8eaaf],
    ['AddSource', 'Delta', 'Bit4', 0x8eaaf],
    ['', 'Delta', 'Bit5', 0x8eaaf, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446905',
  id: 395264,
})

set.addAchievement({
  title: 'Normal Puzzle Page 7 [24 Pieces]',
  description: 'Complete puzzles 7-1 to 7-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit6', 0x8eaaf],
    ['AddSource', 'Mem', 'Bit7', 0x8eaaf],
    ['AddSource', 'Mem', 'Bit0', 0x8eab0],
    ['AddSource', 'Mem', 'Bit1', 0x8eab0],
    ['', 'Mem', 'Bit2', 0x8eab0, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit6', 0x8eaaf],
    ['AddSource', 'Delta', 'Bit7', 0x8eaaf],
    ['AddSource', 'Delta', 'Bit0', 0x8eab0],
    ['AddSource', 'Delta', 'Bit1', 0x8eab0],
    ['', 'Delta', 'Bit2', 0x8eab0, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446906',
  id: 395265,
})

set.addAchievement({
  title: 'Normal Puzzle Page 8 [24 Pieces]',
  description: 'Complete puzzles 8-1 to 8-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit3', 0x8eab0],
    ['AddSource', 'Mem', 'Bit4', 0x8eab0],
    ['AddSource', 'Mem', 'Bit5', 0x8eab0],
    ['AddSource', 'Mem', 'Bit6', 0x8eab0],
    ['', 'Mem', 'Bit7', 0x8eab0, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit3', 0x8eab0],
    ['AddSource', 'Delta', 'Bit4', 0x8eab0],
    ['AddSource', 'Delta', 'Bit5', 0x8eab0],
    ['AddSource', 'Delta', 'Bit6', 0x8eab0],
    ['', 'Delta', 'Bit7', 0x8eab0, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446907',
  id: 395266,
})

set.addAchievement({
  title: 'Normal Puzzle Page 9 [24 Pieces]',
  description: 'Complete puzzles 9-1 to 9-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit0', 0x8eab1],
    ['AddSource', 'Mem', 'Bit1', 0x8eab1],
    ['AddSource', 'Mem', 'Bit2', 0x8eab1],
    ['AddSource', 'Mem', 'Bit3', 0x8eab1],
    ['', 'Mem', 'Bit4', 0x8eab1, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit0', 0x8eab1],
    ['AddSource', 'Delta', 'Bit1', 0x8eab1],
    ['AddSource', 'Delta', 'Bit2', 0x8eab1],
    ['AddSource', 'Delta', 'Bit3', 0x8eab1],
    ['', 'Delta', 'Bit4', 0x8eab1, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446908',
  id: 395267,
})

set.addAchievement({
  title: 'Normal Puzzle Page 10 [24 Pieces]',
  description: 'Complete puzzles 10-1 to 10-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit5', 0x8eab1],
    ['AddSource', 'Mem', 'Bit6', 0x8eab1],
    ['AddSource', 'Mem', 'Bit7', 0x8eab1],
    ['AddSource', 'Mem', 'Bit0', 0x8eab2],
    ['', 'Mem', 'Bit1', 0x8eab2, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit5', 0x8eab1],
    ['AddSource', 'Delta', 'Bit6', 0x8eab1],
    ['AddSource', 'Delta', 'Bit7', 0x8eab1],
    ['AddSource', 'Delta', 'Bit0', 0x8eab2],
    ['', 'Delta', 'Bit1', 0x8eab2, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446909',
  id: 395268,
})

set.addAchievement({
  title: 'Normal Puzzle Page 11 [24 Pieces]',
  description: 'Complete puzzles 11-1 to 11-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit2', 0x8eab2],
    ['AddSource', 'Mem', 'Bit3', 0x8eab2],
    ['AddSource', 'Mem', 'Bit4', 0x8eab2],
    ['AddSource', 'Mem', 'Bit5', 0x8eab2],
    ['', 'Mem', 'Bit6', 0x8eab2, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit2', 0x8eab2],
    ['AddSource', 'Delta', 'Bit3', 0x8eab2],
    ['AddSource', 'Delta', 'Bit4', 0x8eab2],
    ['AddSource', 'Delta', 'Bit5', 0x8eab2],
    ['', 'Delta', 'Bit6', 0x8eab2, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446910',
  id: 395269,
})

set.addAchievement({
  title: 'Normal Puzzle Page 12 [24 Pieces]',
  description: 'Complete puzzles 12-1 to 12-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit7', 0x8eab2],
    ['AddSource', 'Mem', 'Bit0', 0x8eab3],
    ['AddSource', 'Mem', 'Bit1', 0x8eab3],
    ['AddSource', 'Mem', 'Bit2', 0x8eab3],
    ['', 'Mem', 'Bit3', 0x8eab3, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit7', 0x8eab2],
    ['AddSource', 'Delta', 'Bit0', 0x8eab3],
    ['AddSource', 'Delta', 'Bit1', 0x8eab3],
    ['AddSource', 'Delta', 'Bit2', 0x8eab3],
    ['', 'Delta', 'Bit3', 0x8eab3, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446911',
  id: 395270,
})

set.addAchievement({
  title: 'Normal Puzzle Page 13 [24 Pieces]',
  description: 'Complete puzzles 13-1 to 13-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit4', 0x8eab3],
    ['AddSource', 'Mem', 'Bit5', 0x8eab3],
    ['AddSource', 'Mem', 'Bit6', 0x8eab3],
    ['AddSource', 'Mem', 'Bit7', 0x8eab3],
    ['', 'Mem', 'Bit0', 0x8eab4, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit4', 0x8eab3],
    ['AddSource', 'Delta', 'Bit5', 0x8eab3],
    ['AddSource', 'Delta', 'Bit6', 0x8eab3],
    ['AddSource', 'Delta', 'Bit7', 0x8eab3],
    ['', 'Delta', 'Bit0', 0x8eab4, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446912',
  id: 395271,
})

set.addAchievement({
  title: 'Normal Puzzle Page 14 [24 Pieces]',
  description: 'Complete puzzles 14-1 to 14-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit1', 0x8eab4],
    ['AddSource', 'Mem', 'Bit2', 0x8eab4],
    ['AddSource', 'Mem', 'Bit3', 0x8eab4],
    ['AddSource', 'Mem', 'Bit4', 0x8eab4],
    ['', 'Mem', 'Bit5', 0x8eab4, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit1', 0x8eab4],
    ['AddSource', 'Delta', 'Bit2', 0x8eab4],
    ['AddSource', 'Delta', 'Bit3', 0x8eab4],
    ['AddSource', 'Delta', 'Bit4', 0x8eab4],
    ['', 'Delta', 'Bit5', 0x8eab4, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446913',
  id: 395272,
})

set.addAchievement({
  title: 'Normal Puzzle Page 15 [24 Pieces]',
  description: 'Complete puzzles 15-1 to 15-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit6', 0x8eab4],
    ['AddSource', 'Mem', 'Bit7', 0x8eab4],
    ['AddSource', 'Mem', 'Bit0', 0x8eab5],
    ['AddSource', 'Mem', 'Bit1', 0x8eab5],
    ['', 'Mem', 'Bit2', 0x8eab5, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit6', 0x8eab4],
    ['AddSource', 'Delta', 'Bit7', 0x8eab4],
    ['AddSource', 'Delta', 'Bit0', 0x8eab5],
    ['AddSource', 'Delta', 'Bit1', 0x8eab5],
    ['', 'Delta', 'Bit2', 0x8eab5, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446914',
  id: 395273,
})

set.addAchievement({
  title: 'Normal Puzzle Page 16 [24 Pieces]',
  description: 'Complete puzzles 16-1 to 16-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit3', 0x8eab5],
    ['AddSource', 'Mem', 'Bit4', 0x8eab5],
    ['AddSource', 'Mem', 'Bit5', 0x8eab5],
    ['AddSource', 'Mem', 'Bit6', 0x8eab5],
    ['', 'Mem', 'Bit7', 0x8eab5, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit3', 0x8eab5],
    ['AddSource', 'Delta', 'Bit4', 0x8eab5],
    ['AddSource', 'Delta', 'Bit5', 0x8eab5],
    ['AddSource', 'Delta', 'Bit6', 0x8eab5],
    ['', 'Delta', 'Bit7', 0x8eab5, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446915',
  id: 395274,
})

set.addAchievement({
  title: 'Normal Puzzle Page 17 [24 Pieces]',
  description: 'Complete puzzles 17-1 to 17-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit0', 0x8eab6],
    ['AddSource', 'Mem', 'Bit1', 0x8eab6],
    ['AddSource', 'Mem', 'Bit2', 0x8eab6],
    ['AddSource', 'Mem', 'Bit3', 0x8eab6],
    ['', 'Mem', 'Bit4', 0x8eab6, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit0', 0x8eab6],
    ['AddSource', 'Delta', 'Bit1', 0x8eab6],
    ['AddSource', 'Delta', 'Bit2', 0x8eab6],
    ['AddSource', 'Delta', 'Bit3', 0x8eab6],
    ['', 'Delta', 'Bit4', 0x8eab6, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446916',
  id: 395275,
})

set.addAchievement({
  title: 'Normal Puzzle Page 18 [24 Pieces]',
  description: 'Complete puzzles 18-1 to 18-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit5', 0x8eab6],
    ['AddSource', 'Mem', 'Bit6', 0x8eab6],
    ['AddSource', 'Mem', 'Bit7', 0x8eab6],
    ['AddSource', 'Mem', 'Bit0', 0x8eab7],
    ['', 'Mem', 'Bit1', 0x8eab7, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit5', 0x8eab6],
    ['AddSource', 'Delta', 'Bit6', 0x8eab6],
    ['AddSource', 'Delta', 'Bit7', 0x8eab6],
    ['AddSource', 'Delta', 'Bit0', 0x8eab7],
    ['', 'Delta', 'Bit1', 0x8eab7, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446917',
  id: 395276,
})

set.addAchievement({
  title: 'Normal Puzzle Page 19 [24 Pieces]',
  description: 'Complete puzzles 19-1 to 19-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit2', 0x8eab7],
    ['AddSource', 'Mem', 'Bit3', 0x8eab7],
    ['AddSource', 'Mem', 'Bit4', 0x8eab7],
    ['AddSource', 'Mem', 'Bit5', 0x8eab7],
    ['', 'Mem', 'Bit6', 0x8eab7, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit2', 0x8eab7],
    ['AddSource', 'Delta', 'Bit3', 0x8eab7],
    ['AddSource', 'Delta', 'Bit4', 0x8eab7],
    ['AddSource', 'Delta', 'Bit5', 0x8eab7],
    ['', 'Delta', 'Bit6', 0x8eab7, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446918',
  id: 395277,
})

set.addAchievement({
  title: 'Normal Puzzle Page 20 [24 Pieces]',
  description: 'Complete puzzles 20-1 to 20-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit7', 0x8eab7],
    ['AddSource', 'Mem', 'Bit0', 0x8eab8],
    ['AddSource', 'Mem', 'Bit1', 0x8eab8],
    ['AddSource', 'Mem', 'Bit2', 0x8eab8],
    ['', 'Mem', 'Bit3', 0x8eab8, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit7', 0x8eab7],
    ['AddSource', 'Delta', 'Bit0', 0x8eab8],
    ['AddSource', 'Delta', 'Bit1', 0x8eab8],
    ['AddSource', 'Delta', 'Bit2', 0x8eab8],
    ['', 'Delta', 'Bit3', 0x8eab8, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446919',
  id: 395278,
})

set.addAchievement({
  title: 'Normal Puzzle Page 21 [24 Pieces]',
  description: 'Complete puzzles 21-1 to 21-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit4', 0x8eab8],
    ['AddSource', 'Mem', 'Bit5', 0x8eab8],
    ['AddSource', 'Mem', 'Bit6', 0x8eab8],
    ['AddSource', 'Mem', 'Bit7', 0x8eab8],
    ['', 'Mem', 'Bit0', 0x8eab9, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit4', 0x8eab8],
    ['AddSource', 'Delta', 'Bit5', 0x8eab8],
    ['AddSource', 'Delta', 'Bit6', 0x8eab8],
    ['AddSource', 'Delta', 'Bit7', 0x8eab8],
    ['', 'Delta', 'Bit0', 0x8eab9, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446920',
  id: 395279,
})

set.addAchievement({
  title: 'Normal Puzzle Page 22 [24 Pieces]',
  description: 'Complete puzzles 22-1 to 22-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit1', 0x8eab9],
    ['AddSource', 'Mem', 'Bit2', 0x8eab9],
    ['AddSource', 'Mem', 'Bit3', 0x8eab9],
    ['AddSource', 'Mem', 'Bit4', 0x8eab9],
    ['', 'Mem', 'Bit5', 0x8eab9, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit1', 0x8eab9],
    ['AddSource', 'Delta', 'Bit2', 0x8eab9],
    ['AddSource', 'Delta', 'Bit3', 0x8eab9],
    ['AddSource', 'Delta', 'Bit4', 0x8eab9],
    ['', 'Delta', 'Bit5', 0x8eab9, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446921',
  id: 395280,
})

set.addAchievement({
  title: 'Normal Puzzle Page 23 [24 Pieces]',
  description: 'Complete puzzles 23-1 to 23-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit6', 0x8eab9],
    ['AddSource', 'Mem', 'Bit7', 0x8eab9],
    ['AddSource', 'Mem', 'Bit0', 0x8eaba],
    ['AddSource', 'Mem', 'Bit1', 0x8eaba],
    ['', 'Mem', 'Bit2', 0x8eaba, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit6', 0x8eab9],
    ['AddSource', 'Delta', 'Bit7', 0x8eab9],
    ['AddSource', 'Delta', 'Bit0', 0x8eaba],
    ['AddSource', 'Delta', 'Bit1', 0x8eaba],
    ['', 'Delta', 'Bit2', 0x8eaba, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446922',
  id: 395281,
})

set.addAchievement({
  title: 'Normal Puzzle Page 24 [24 Pieces]',
  description: 'Complete puzzles 24-1 to 24-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit3', 0x8eaba],
    ['AddSource', 'Mem', 'Bit4', 0x8eaba],
    ['AddSource', 'Mem', 'Bit5', 0x8eaba],
    ['AddSource', 'Mem', 'Bit6', 0x8eaba],
    ['', 'Mem', 'Bit7', 0x8eaba, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit3', 0x8eaba],
    ['AddSource', 'Delta', 'Bit4', 0x8eaba],
    ['AddSource', 'Delta', 'Bit5', 0x8eaba],
    ['AddSource', 'Delta', 'Bit6', 0x8eaba],
    ['', 'Delta', 'Bit7', 0x8eaba, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446923',
  id: 395282,
})

set.addAchievement({
  title: 'Normal Puzzle Page 25 [24 Pieces]',
  description: 'Complete puzzles 25-1 to 25-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit0', 0x8eabb],
    ['AddSource', 'Mem', 'Bit1', 0x8eabb],
    ['AddSource', 'Mem', 'Bit2', 0x8eabb],
    ['AddSource', 'Mem', 'Bit3', 0x8eabb],
    ['', 'Mem', 'Bit4', 0x8eabb, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit0', 0x8eabb],
    ['AddSource', 'Delta', 'Bit1', 0x8eabb],
    ['AddSource', 'Delta', 'Bit2', 0x8eabb],
    ['AddSource', 'Delta', 'Bit3', 0x8eabb],
    ['', 'Delta', 'Bit4', 0x8eabb, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446924',
  id: 395283,
})

set.addAchievement({
  title: 'Normal Puzzle Page 26 [24 Pieces]',
  description: 'Complete puzzles 26-1 to 26-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit5', 0x8eabb],
    ['AddSource', 'Mem', 'Bit6', 0x8eabb],
    ['AddSource', 'Mem', 'Bit7', 0x8eabb],
    ['AddSource', 'Mem', 'Bit0', 0x8eabc],
    ['', 'Mem', 'Bit1', 0x8eabc, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit5', 0x8eabb],
    ['AddSource', 'Delta', 'Bit6', 0x8eabb],
    ['AddSource', 'Delta', 'Bit7', 0x8eabb],
    ['AddSource', 'Delta', 'Bit0', 0x8eabc],
    ['', 'Delta', 'Bit1', 0x8eabc, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446925',
  id: 395284,
})

set.addAchievement({
  title: 'Normal Puzzle Page 27 [24 Pieces]',
  description: 'Complete puzzles 27-1 to 27-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit2', 0x8eabc],
    ['AddSource', 'Mem', 'Bit3', 0x8eabc],
    ['AddSource', 'Mem', 'Bit4', 0x8eabc],
    ['AddSource', 'Mem', 'Bit5', 0x8eabc],
    ['', 'Mem', 'Bit6', 0x8eabc, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit2', 0x8eabc],
    ['AddSource', 'Delta', 'Bit3', 0x8eabc],
    ['AddSource', 'Delta', 'Bit4', 0x8eabc],
    ['AddSource', 'Delta', 'Bit5', 0x8eabc],
    ['', 'Delta', 'Bit6', 0x8eabc, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446926',
  id: 395285,
})

set.addAchievement({
  title: 'Normal Puzzle Page 28 [24 Pieces]',
  description: 'Complete puzzles 28-1 to 28-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit7', 0x8eabc],
    ['AddSource', 'Mem', 'Bit0', 0x8eabd],
    ['AddSource', 'Mem', 'Bit1', 0x8eabd],
    ['AddSource', 'Mem', 'Bit2', 0x8eabd],
    ['', 'Mem', 'Bit3', 0x8eabd, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit7', 0x8eabc],
    ['AddSource', 'Delta', 'Bit0', 0x8eabd],
    ['AddSource', 'Delta', 'Bit1', 0x8eabd],
    ['AddSource', 'Delta', 'Bit2', 0x8eabd],
    ['', 'Delta', 'Bit3', 0x8eabd, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446927',
  id: 395286,
})

set.addAchievement({
  title: 'Normal Puzzle Page 29 [24 Pieces]',
  description: 'Complete puzzles 29-1 to 29-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit4', 0x8eabd],
    ['AddSource', 'Mem', 'Bit5', 0x8eabd],
    ['AddSource', 'Mem', 'Bit6', 0x8eabd],
    ['AddSource', 'Mem', 'Bit7', 0x8eabd],
    ['', 'Mem', 'Bit0', 0x8eabe, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit4', 0x8eabd],
    ['AddSource', 'Delta', 'Bit5', 0x8eabd],
    ['AddSource', 'Delta', 'Bit6', 0x8eabd],
    ['AddSource', 'Delta', 'Bit7', 0x8eabd],
    ['', 'Delta', 'Bit0', 0x8eabe, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446928',
  id: 395287,
})

set.addAchievement({
  title: 'Normal Puzzle Page 30 [24 Pieces]',
  description: 'Complete puzzles 30-1 to 30-5.',
  points: 1,
  conditions: $(
    ['AddSource', 'Mem', 'Bit1', 0x8eabe],
    ['AddSource', 'Mem', 'Bit2', 0x8eabe],
    ['AddSource', 'Mem', 'Bit3', 0x8eabe],
    ['AddSource', 'Mem', 'Bit4', 0x8eabe],
    ['', 'Mem', 'Bit5', 0x8eabe, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit1', 0x8eabe],
    ['AddSource', 'Delta', 'Bit2', 0x8eabe],
    ['AddSource', 'Delta', 'Bit3', 0x8eabe],
    ['AddSource', 'Delta', 'Bit4', 0x8eabe],
    ['', 'Delta', 'Bit5', 0x8eabe, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446929',
  id: 395288,
})

set.addAchievement({
  title: 'Normal Puzzle Page 1 [96 Pieces]',
  description: 'Complete puzzles 1-1 to 1-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit0', 0x8eabf],
    ['AddSource', 'Mem', 'Bit1', 0x8eabf],
    ['AddSource', 'Mem', 'Bit2', 0x8eabf],
    ['AddSource', 'Mem', 'Bit3', 0x8eabf],
    ['', 'Mem', 'Bit4', 0x8eabf, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit0', 0x8eabf],
    ['AddSource', 'Delta', 'Bit1', 0x8eabf],
    ['AddSource', 'Delta', 'Bit2', 0x8eabf],
    ['AddSource', 'Delta', 'Bit3', 0x8eabf],
    ['', 'Delta', 'Bit4', 0x8eabf, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446930',
  id: 395289,
})

set.addAchievement({
  title: 'Normal Puzzle Page 2 [96 Pieces]',
  description: 'Complete puzzles 2-1 to 2-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit5', 0x8eabf],
    ['AddSource', 'Mem', 'Bit6', 0x8eabf],
    ['AddSource', 'Mem', 'Bit7', 0x8eabf],
    ['AddSource', 'Mem', 'Bit0', 0x8eac0],
    ['', 'Mem', 'Bit1', 0x8eac0, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit5', 0x8eabf],
    ['AddSource', 'Delta', 'Bit6', 0x8eabf],
    ['AddSource', 'Delta', 'Bit7', 0x8eabf],
    ['AddSource', 'Delta', 'Bit0', 0x8eac0],
    ['', 'Delta', 'Bit1', 0x8eac0, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446931',
  id: 395290,
})

set.addAchievement({
  title: 'Normal Puzzle Page 3 [96 Pieces]',
  description: 'Complete puzzles 3-1 to 3-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit2', 0x8eac0],
    ['AddSource', 'Mem', 'Bit3', 0x8eac0],
    ['AddSource', 'Mem', 'Bit4', 0x8eac0],
    ['AddSource', 'Mem', 'Bit5', 0x8eac0],
    ['', 'Mem', 'Bit6', 0x8eac0, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit2', 0x8eac0],
    ['AddSource', 'Delta', 'Bit3', 0x8eac0],
    ['AddSource', 'Delta', 'Bit4', 0x8eac0],
    ['AddSource', 'Delta', 'Bit5', 0x8eac0],
    ['', 'Delta', 'Bit6', 0x8eac0, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446932',
  id: 395291,
})

set.addAchievement({
  title: 'Normal Puzzle Page 4 [96 Pieces]',
  description: 'Complete puzzles 4-1 to 4-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit7', 0x8eac0],
    ['AddSource', 'Mem', 'Bit0', 0x8eac1],
    ['AddSource', 'Mem', 'Bit1', 0x8eac1],
    ['AddSource', 'Mem', 'Bit2', 0x8eac1],
    ['', 'Mem', 'Bit3', 0x8eac1, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit7', 0x8eac0],
    ['AddSource', 'Delta', 'Bit0', 0x8eac1],
    ['AddSource', 'Delta', 'Bit1', 0x8eac1],
    ['AddSource', 'Delta', 'Bit2', 0x8eac1],
    ['', 'Delta', 'Bit3', 0x8eac1, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446933',
  id: 395292,
})

set.addAchievement({
  title: 'Normal Puzzle Page 5 [96 Pieces]',
  description: 'Complete puzzles 5-1 to 5-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit4', 0x8eac1],
    ['AddSource', 'Mem', 'Bit5', 0x8eac1],
    ['AddSource', 'Mem', 'Bit6', 0x8eac1],
    ['AddSource', 'Mem', 'Bit7', 0x8eac1],
    ['', 'Mem', 'Bit0', 0x8eac2, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit4', 0x8eac1],
    ['AddSource', 'Delta', 'Bit5', 0x8eac1],
    ['AddSource', 'Delta', 'Bit6', 0x8eac1],
    ['AddSource', 'Delta', 'Bit7', 0x8eac1],
    ['', 'Delta', 'Bit0', 0x8eac2, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446934',
  id: 395293,
})

set.addAchievement({
  title: 'Normal Puzzle Page 6 [96 Pieces]',
  description: 'Complete puzzles 6-1 to 6-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit1', 0x8eac2],
    ['AddSource', 'Mem', 'Bit2', 0x8eac2],
    ['AddSource', 'Mem', 'Bit3', 0x8eac2],
    ['AddSource', 'Mem', 'Bit4', 0x8eac2],
    ['', 'Mem', 'Bit5', 0x8eac2, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit1', 0x8eac2],
    ['AddSource', 'Delta', 'Bit2', 0x8eac2],
    ['AddSource', 'Delta', 'Bit3', 0x8eac2],
    ['AddSource', 'Delta', 'Bit4', 0x8eac2],
    ['', 'Delta', 'Bit5', 0x8eac2, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446935',
  id: 395294,
})

set.addAchievement({
  title: 'Normal Puzzle Page 7 [96 Pieces]',
  description: 'Complete puzzles 7-1 to 7-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit6', 0x8eac2],
    ['AddSource', 'Mem', 'Bit7', 0x8eac2],
    ['AddSource', 'Mem', 'Bit0', 0x8eac3],
    ['AddSource', 'Mem', 'Bit1', 0x8eac3],
    ['', 'Mem', 'Bit2', 0x8eac3, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit6', 0x8eac2],
    ['AddSource', 'Delta', 'Bit7', 0x8eac2],
    ['AddSource', 'Delta', 'Bit0', 0x8eac3],
    ['AddSource', 'Delta', 'Bit1', 0x8eac3],
    ['', 'Delta', 'Bit2', 0x8eac3, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446936',
  id: 395295,
})

set.addAchievement({
  title: 'Normal Puzzle Page 8 [96 Pieces]',
  description: 'Complete puzzles 8-1 to 8-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit3', 0x8eac3],
    ['AddSource', 'Mem', 'Bit4', 0x8eac3],
    ['AddSource', 'Mem', 'Bit5', 0x8eac3],
    ['AddSource', 'Mem', 'Bit6', 0x8eac3],
    ['', 'Mem', 'Bit7', 0x8eac3, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit3', 0x8eac3],
    ['AddSource', 'Delta', 'Bit4', 0x8eac3],
    ['AddSource', 'Delta', 'Bit5', 0x8eac3],
    ['AddSource', 'Delta', 'Bit6', 0x8eac3],
    ['', 'Delta', 'Bit7', 0x8eac3, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446937',
  id: 395296,
})

set.addAchievement({
  title: 'Normal Puzzle Page 9 [96 Pieces]',
  description: 'Complete puzzles 9-1 to 9-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit0', 0x8eac4],
    ['AddSource', 'Mem', 'Bit1', 0x8eac4],
    ['AddSource', 'Mem', 'Bit2', 0x8eac4],
    ['AddSource', 'Mem', 'Bit3', 0x8eac4],
    ['', 'Mem', 'Bit4', 0x8eac4, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit0', 0x8eac4],
    ['AddSource', 'Delta', 'Bit1', 0x8eac4],
    ['AddSource', 'Delta', 'Bit2', 0x8eac4],
    ['AddSource', 'Delta', 'Bit3', 0x8eac4],
    ['', 'Delta', 'Bit4', 0x8eac4, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446938',
  id: 395297,
})

set.addAchievement({
  title: 'Normal Puzzle Page 10 [96 Pieces]',
  description: 'Complete puzzles 10-1 to 10-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit5', 0x8eac4],
    ['AddSource', 'Mem', 'Bit6', 0x8eac4],
    ['AddSource', 'Mem', 'Bit7', 0x8eac4],
    ['AddSource', 'Mem', 'Bit0', 0x8eac5],
    ['', 'Mem', 'Bit1', 0x8eac5, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit5', 0x8eac4],
    ['AddSource', 'Delta', 'Bit6', 0x8eac4],
    ['AddSource', 'Delta', 'Bit7', 0x8eac4],
    ['AddSource', 'Delta', 'Bit0', 0x8eac5],
    ['', 'Delta', 'Bit1', 0x8eac5, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446939',
  id: 395298,
})

set.addAchievement({
  title: 'Normal Puzzle Page 11 [96 Pieces]',
  description: 'Complete puzzles 11-1 to 11-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit2', 0x8eac5],
    ['AddSource', 'Mem', 'Bit3', 0x8eac5],
    ['AddSource', 'Mem', 'Bit4', 0x8eac5],
    ['AddSource', 'Mem', 'Bit5', 0x8eac5],
    ['', 'Mem', 'Bit6', 0x8eac5, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit2', 0x8eac5],
    ['AddSource', 'Delta', 'Bit3', 0x8eac5],
    ['AddSource', 'Delta', 'Bit4', 0x8eac5],
    ['AddSource', 'Delta', 'Bit5', 0x8eac5],
    ['', 'Delta', 'Bit6', 0x8eac5, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446940',
  id: 395299,
})

set.addAchievement({
  title: 'Normal Puzzle Page 12 [96 Pieces]',
  description: 'Complete puzzles 12-1 to 12-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit7', 0x8eac5],
    ['AddSource', 'Mem', 'Bit0', 0x8eac6],
    ['AddSource', 'Mem', 'Bit1', 0x8eac6],
    ['AddSource', 'Mem', 'Bit2', 0x8eac6],
    ['', 'Mem', 'Bit3', 0x8eac6, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit7', 0x8eac5],
    ['AddSource', 'Delta', 'Bit0', 0x8eac6],
    ['AddSource', 'Delta', 'Bit1', 0x8eac6],
    ['AddSource', 'Delta', 'Bit2', 0x8eac6],
    ['', 'Delta', 'Bit3', 0x8eac6, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446941',
  id: 395300,
})

set.addAchievement({
  title: 'Normal Puzzle Page 13 [96 Pieces]',
  description: 'Complete puzzles 13-1 to 13-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit4', 0x8eac6],
    ['AddSource', 'Mem', 'Bit5', 0x8eac6],
    ['AddSource', 'Mem', 'Bit6', 0x8eac6],
    ['AddSource', 'Mem', 'Bit7', 0x8eac6],
    ['', 'Mem', 'Bit0', 0x8eac7, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit4', 0x8eac6],
    ['AddSource', 'Delta', 'Bit5', 0x8eac6],
    ['AddSource', 'Delta', 'Bit6', 0x8eac6],
    ['AddSource', 'Delta', 'Bit7', 0x8eac6],
    ['', 'Delta', 'Bit0', 0x8eac7, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446942',
  id: 395301,
})

set.addAchievement({
  title: 'Normal Puzzle Page 14 [96 Pieces]',
  description: 'Complete puzzles 14-1 to 14-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit1', 0x8eac7],
    ['AddSource', 'Mem', 'Bit2', 0x8eac7],
    ['AddSource', 'Mem', 'Bit3', 0x8eac7],
    ['AddSource', 'Mem', 'Bit4', 0x8eac7],
    ['', 'Mem', 'Bit5', 0x8eac7, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit1', 0x8eac7],
    ['AddSource', 'Delta', 'Bit2', 0x8eac7],
    ['AddSource', 'Delta', 'Bit3', 0x8eac7],
    ['AddSource', 'Delta', 'Bit4', 0x8eac7],
    ['', 'Delta', 'Bit5', 0x8eac7, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446943',
  id: 395302,
})

set.addAchievement({
  title: 'Normal Puzzle Page 15 [96 Pieces]',
  description: 'Complete puzzles 15-1 to 15-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit6', 0x8eac7],
    ['AddSource', 'Mem', 'Bit7', 0x8eac7],
    ['AddSource', 'Mem', 'Bit0', 0x8eac8],
    ['AddSource', 'Mem', 'Bit1', 0x8eac8],
    ['', 'Mem', 'Bit2', 0x8eac8, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit6', 0x8eac7],
    ['AddSource', 'Delta', 'Bit7', 0x8eac7],
    ['AddSource', 'Delta', 'Bit0', 0x8eac8],
    ['AddSource', 'Delta', 'Bit1', 0x8eac8],
    ['', 'Delta', 'Bit2', 0x8eac8, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446944',
  id: 395303,
})

set.addAchievement({
  title: 'Normal Puzzle Page 16 [96 Pieces]',
  description: 'Complete puzzles 16-1 to 16-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit3', 0x8eac8],
    ['AddSource', 'Mem', 'Bit4', 0x8eac8],
    ['AddSource', 'Mem', 'Bit5', 0x8eac8],
    ['AddSource', 'Mem', 'Bit6', 0x8eac8],
    ['', 'Mem', 'Bit7', 0x8eac8, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit3', 0x8eac8],
    ['AddSource', 'Delta', 'Bit4', 0x8eac8],
    ['AddSource', 'Delta', 'Bit5', 0x8eac8],
    ['AddSource', 'Delta', 'Bit6', 0x8eac8],
    ['', 'Delta', 'Bit7', 0x8eac8, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446945',
  id: 395304,
})

set.addAchievement({
  title: 'Normal Puzzle Page 17 [96 Pieces]',
  description: 'Complete puzzles 17-1 to 17-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit0', 0x8eac9],
    ['AddSource', 'Mem', 'Bit1', 0x8eac9],
    ['AddSource', 'Mem', 'Bit2', 0x8eac9],
    ['AddSource', 'Mem', 'Bit3', 0x8eac9],
    ['', 'Mem', 'Bit4', 0x8eac9, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit0', 0x8eac9],
    ['AddSource', 'Delta', 'Bit1', 0x8eac9],
    ['AddSource', 'Delta', 'Bit2', 0x8eac9],
    ['AddSource', 'Delta', 'Bit3', 0x8eac9],
    ['', 'Delta', 'Bit4', 0x8eac9, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446946',
  id: 395305,
})

set.addAchievement({
  title: 'Normal Puzzle Page 18 [96 Pieces]',
  description: 'Complete puzzles 18-1 to 18-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit5', 0x8eac9],
    ['AddSource', 'Mem', 'Bit6', 0x8eac9],
    ['AddSource', 'Mem', 'Bit7', 0x8eac9],
    ['AddSource', 'Mem', 'Bit0', 0x8eaca],
    ['', 'Mem', 'Bit1', 0x8eaca, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit5', 0x8eac9],
    ['AddSource', 'Delta', 'Bit6', 0x8eac9],
    ['AddSource', 'Delta', 'Bit7', 0x8eac9],
    ['AddSource', 'Delta', 'Bit0', 0x8eaca],
    ['', 'Delta', 'Bit1', 0x8eaca, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446947',
  id: 395306,
})

set.addAchievement({
  title: 'Normal Puzzle Page 19 [96 Pieces]',
  description: 'Complete puzzles 19-1 to 19-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit2', 0x8eaca],
    ['AddSource', 'Mem', 'Bit3', 0x8eaca],
    ['AddSource', 'Mem', 'Bit4', 0x8eaca],
    ['AddSource', 'Mem', 'Bit5', 0x8eaca],
    ['', 'Mem', 'Bit6', 0x8eaca, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit2', 0x8eaca],
    ['AddSource', 'Delta', 'Bit3', 0x8eaca],
    ['AddSource', 'Delta', 'Bit4', 0x8eaca],
    ['AddSource', 'Delta', 'Bit5', 0x8eaca],
    ['', 'Delta', 'Bit6', 0x8eaca, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446948',
  id: 395307,
})

set.addAchievement({
  title: 'Normal Puzzle Page 20 [96 Pieces]',
  description: 'Complete puzzles 20-1 to 20-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit7', 0x8eaca],
    ['AddSource', 'Mem', 'Bit0', 0x8eacb],
    ['AddSource', 'Mem', 'Bit1', 0x8eacb],
    ['AddSource', 'Mem', 'Bit2', 0x8eacb],
    ['', 'Mem', 'Bit3', 0x8eacb, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit7', 0x8eaca],
    ['AddSource', 'Delta', 'Bit0', 0x8eacb],
    ['AddSource', 'Delta', 'Bit1', 0x8eacb],
    ['AddSource', 'Delta', 'Bit2', 0x8eacb],
    ['', 'Delta', 'Bit3', 0x8eacb, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446949',
  id: 395308,
})

set.addAchievement({
  title: 'Normal Puzzle Page 21 [96 Pieces]',
  description: 'Complete puzzles 21-1 to 21-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit4', 0x8eacb],
    ['AddSource', 'Mem', 'Bit5', 0x8eacb],
    ['AddSource', 'Mem', 'Bit6', 0x8eacb],
    ['AddSource', 'Mem', 'Bit7', 0x8eacb],
    ['', 'Mem', 'Bit0', 0x8eacc, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit4', 0x8eacb],
    ['AddSource', 'Delta', 'Bit5', 0x8eacb],
    ['AddSource', 'Delta', 'Bit6', 0x8eacb],
    ['AddSource', 'Delta', 'Bit7', 0x8eacb],
    ['', 'Delta', 'Bit0', 0x8eacc, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446950',
  id: 395309,
})

set.addAchievement({
  title: 'Normal Puzzle Page 22 [96 Pieces]',
  description: 'Complete puzzles 22-1 to 22-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit1', 0x8eacc],
    ['AddSource', 'Mem', 'Bit2', 0x8eacc],
    ['AddSource', 'Mem', 'Bit3', 0x8eacc],
    ['AddSource', 'Mem', 'Bit4', 0x8eacc],
    ['', 'Mem', 'Bit5', 0x8eacc, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit1', 0x8eacc],
    ['AddSource', 'Delta', 'Bit2', 0x8eacc],
    ['AddSource', 'Delta', 'Bit3', 0x8eacc],
    ['AddSource', 'Delta', 'Bit4', 0x8eacc],
    ['', 'Delta', 'Bit5', 0x8eacc, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446951',
  id: 395310,
})

set.addAchievement({
  title: 'Normal Puzzle Page 23 [96 Pieces]',
  description: 'Complete puzzles 23-1 to 23-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit6', 0x8eacc],
    ['AddSource', 'Mem', 'Bit7', 0x8eacc],
    ['AddSource', 'Mem', 'Bit0', 0x8eacd],
    ['AddSource', 'Mem', 'Bit1', 0x8eacd],
    ['', 'Mem', 'Bit2', 0x8eacd, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit6', 0x8eacc],
    ['AddSource', 'Delta', 'Bit7', 0x8eacc],
    ['AddSource', 'Delta', 'Bit0', 0x8eacd],
    ['AddSource', 'Delta', 'Bit1', 0x8eacd],
    ['', 'Delta', 'Bit2', 0x8eacd, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446952',
  id: 395311,
})

set.addAchievement({
  title: 'Normal Puzzle Page 24 [96 Pieces]',
  description: 'Complete puzzles 24-1 to 24-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit3', 0x8eacd],
    ['AddSource', 'Mem', 'Bit4', 0x8eacd],
    ['AddSource', 'Mem', 'Bit5', 0x8eacd],
    ['AddSource', 'Mem', 'Bit6', 0x8eacd],
    ['', 'Mem', 'Bit7', 0x8eacd, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit3', 0x8eacd],
    ['AddSource', 'Delta', 'Bit4', 0x8eacd],
    ['AddSource', 'Delta', 'Bit5', 0x8eacd],
    ['AddSource', 'Delta', 'Bit6', 0x8eacd],
    ['', 'Delta', 'Bit7', 0x8eacd, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446953',
  id: 395312,
})

set.addAchievement({
  title: 'Normal Puzzle Page 25 [96 Pieces]',
  description: 'Complete puzzles 25-1 to 25-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit0', 0x8eace],
    ['AddSource', 'Mem', 'Bit1', 0x8eace],
    ['AddSource', 'Mem', 'Bit2', 0x8eace],
    ['AddSource', 'Mem', 'Bit3', 0x8eace],
    ['', 'Mem', 'Bit4', 0x8eace, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit0', 0x8eace],
    ['AddSource', 'Delta', 'Bit1', 0x8eace],
    ['AddSource', 'Delta', 'Bit2', 0x8eace],
    ['AddSource', 'Delta', 'Bit3', 0x8eace],
    ['', 'Delta', 'Bit4', 0x8eace, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446954',
  id: 395313,
})

set.addAchievement({
  title: 'Normal Puzzle Page 26 [96 Pieces]',
  description: 'Complete puzzles 26-1 to 26-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit5', 0x8eace],
    ['AddSource', 'Mem', 'Bit6', 0x8eace],
    ['AddSource', 'Mem', 'Bit7', 0x8eace],
    ['AddSource', 'Mem', 'Bit0', 0x8eacf],
    ['', 'Mem', 'Bit1', 0x8eacf, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit5', 0x8eace],
    ['AddSource', 'Delta', 'Bit6', 0x8eace],
    ['AddSource', 'Delta', 'Bit7', 0x8eace],
    ['AddSource', 'Delta', 'Bit0', 0x8eacf],
    ['', 'Delta', 'Bit1', 0x8eacf, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446955',
  id: 395314,
})

set.addAchievement({
  title: 'Normal Puzzle Page 27 [96 Pieces]',
  description: 'Complete puzzles 27-1 to 27-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit2', 0x8eacf],
    ['AddSource', 'Mem', 'Bit3', 0x8eacf],
    ['AddSource', 'Mem', 'Bit4', 0x8eacf],
    ['AddSource', 'Mem', 'Bit5', 0x8eacf],
    ['', 'Mem', 'Bit6', 0x8eacf, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit2', 0x8eacf],
    ['AddSource', 'Delta', 'Bit3', 0x8eacf],
    ['AddSource', 'Delta', 'Bit4', 0x8eacf],
    ['AddSource', 'Delta', 'Bit5', 0x8eacf],
    ['', 'Delta', 'Bit6', 0x8eacf, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446956',
  id: 395315,
})

set.addAchievement({
  title: 'Normal Puzzle Page 28 [96 Pieces]',
  description: 'Complete puzzles 28-1 to 28-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit7', 0x8eacf],
    ['AddSource', 'Mem', 'Bit0', 0x8ead0],
    ['AddSource', 'Mem', 'Bit1', 0x8ead0],
    ['AddSource', 'Mem', 'Bit2', 0x8ead0],
    ['', 'Mem', 'Bit3', 0x8ead0, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit7', 0x8eacf],
    ['AddSource', 'Delta', 'Bit0', 0x8ead0],
    ['AddSource', 'Delta', 'Bit1', 0x8ead0],
    ['AddSource', 'Delta', 'Bit2', 0x8ead0],
    ['', 'Delta', 'Bit3', 0x8ead0, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446957',
  id: 395316,
})

set.addAchievement({
  title: 'Normal Puzzle Page 29 [96 Pieces]',
  description: 'Complete puzzles 29-1 to 29-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit4', 0x8ead0],
    ['AddSource', 'Mem', 'Bit5', 0x8ead0],
    ['AddSource', 'Mem', 'Bit6', 0x8ead0],
    ['AddSource', 'Mem', 'Bit7', 0x8ead0],
    ['', 'Mem', 'Bit0', 0x8ead1, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit4', 0x8ead0],
    ['AddSource', 'Delta', 'Bit5', 0x8ead0],
    ['AddSource', 'Delta', 'Bit6', 0x8ead0],
    ['AddSource', 'Delta', 'Bit7', 0x8ead0],
    ['', 'Delta', 'Bit0', 0x8ead1, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446958',
  id: 395317,
})

set.addAchievement({
  title: 'Normal Puzzle Page 30 [96 Pieces]',
  description: 'Complete puzzles 30-1 to 30-5.',
  points: 3,
  conditions: $(
    ['AddSource', 'Mem', 'Bit1', 0x8ead1],
    ['AddSource', 'Mem', 'Bit2', 0x8ead1],
    ['AddSource', 'Mem', 'Bit3', 0x8ead1],
    ['AddSource', 'Mem', 'Bit4', 0x8ead1],
    ['', 'Mem', 'Bit5', 0x8ead1, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit1', 0x8ead1],
    ['AddSource', 'Delta', 'Bit2', 0x8ead1],
    ['AddSource', 'Delta', 'Bit3', 0x8ead1],
    ['AddSource', 'Delta', 'Bit4', 0x8ead1],
    ['', 'Delta', 'Bit5', 0x8ead1, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446959',
  id: 395318,
})

set.addAchievement({
  title: 'Normal Puzzle Page 1 [150 Pieces]',
  description: 'Complete puzzles 1-1 to 1-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit0', 0x8ead2],
    ['AddSource', 'Mem', 'Bit1', 0x8ead2],
    ['AddSource', 'Mem', 'Bit2', 0x8ead2],
    ['AddSource', 'Mem', 'Bit3', 0x8ead2],
    ['', 'Mem', 'Bit4', 0x8ead2, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit0', 0x8ead2],
    ['AddSource', 'Delta', 'Bit1', 0x8ead2],
    ['AddSource', 'Delta', 'Bit2', 0x8ead2],
    ['AddSource', 'Delta', 'Bit3', 0x8ead2],
    ['', 'Delta', 'Bit4', 0x8ead2, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446960',
  id: 395319,
})

set.addAchievement({
  title: 'Normal Puzzle Page 2 [150 Pieces]',
  description: 'Complete puzzles 2-1 to 2-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit5', 0x8ead2],
    ['AddSource', 'Mem', 'Bit6', 0x8ead2],
    ['AddSource', 'Mem', 'Bit7', 0x8ead2],
    ['AddSource', 'Mem', 'Bit0', 0x8ead3],
    ['', 'Mem', 'Bit1', 0x8ead3, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit5', 0x8ead2],
    ['AddSource', 'Delta', 'Bit6', 0x8ead2],
    ['AddSource', 'Delta', 'Bit7', 0x8ead2],
    ['AddSource', 'Delta', 'Bit0', 0x8ead3],
    ['', 'Delta', 'Bit1', 0x8ead3, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446961',
  id: 395320,
})

set.addAchievement({
  title: 'Normal Puzzle Page 3 [150 Pieces]',
  description: 'Complete puzzles 3-1 to 3-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit2', 0x8ead3],
    ['AddSource', 'Mem', 'Bit3', 0x8ead3],
    ['AddSource', 'Mem', 'Bit4', 0x8ead3],
    ['AddSource', 'Mem', 'Bit5', 0x8ead3],
    ['', 'Mem', 'Bit6', 0x8ead3, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit2', 0x8ead3],
    ['AddSource', 'Delta', 'Bit3', 0x8ead3],
    ['AddSource', 'Delta', 'Bit4', 0x8ead3],
    ['AddSource', 'Delta', 'Bit5', 0x8ead3],
    ['', 'Delta', 'Bit6', 0x8ead3, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446962',
  id: 395321,
})

set.addAchievement({
  title: 'Normal Puzzle Page 4 [150 Pieces]',
  description: 'Complete puzzles 4-1 to 4-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit7', 0x8ead3],
    ['AddSource', 'Mem', 'Bit0', 0x8ead4],
    ['AddSource', 'Mem', 'Bit1', 0x8ead4],
    ['AddSource', 'Mem', 'Bit2', 0x8ead4],
    ['', 'Mem', 'Bit3', 0x8ead4, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit7', 0x8ead3],
    ['AddSource', 'Delta', 'Bit0', 0x8ead4],
    ['AddSource', 'Delta', 'Bit1', 0x8ead4],
    ['AddSource', 'Delta', 'Bit2', 0x8ead4],
    ['', 'Delta', 'Bit3', 0x8ead4, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446963',
  id: 395322,
})

set.addAchievement({
  title: 'Normal Puzzle Page 5 [150 Pieces]',
  description: 'Complete puzzles 5-1 to 5-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit4', 0x8ead4],
    ['AddSource', 'Mem', 'Bit5', 0x8ead4],
    ['AddSource', 'Mem', 'Bit6', 0x8ead4],
    ['AddSource', 'Mem', 'Bit7', 0x8ead4],
    ['', 'Mem', 'Bit0', 0x8ead5, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit4', 0x8ead4],
    ['AddSource', 'Delta', 'Bit5', 0x8ead4],
    ['AddSource', 'Delta', 'Bit6', 0x8ead4],
    ['AddSource', 'Delta', 'Bit7', 0x8ead4],
    ['', 'Delta', 'Bit0', 0x8ead5, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446964',
  id: 395323,
})

set.addAchievement({
  title: 'Normal Puzzle Page 6 [150 Pieces]',
  description: 'Complete puzzles 6-1 to 6-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit1', 0x8ead5],
    ['AddSource', 'Mem', 'Bit2', 0x8ead5],
    ['AddSource', 'Mem', 'Bit3', 0x8ead5],
    ['AddSource', 'Mem', 'Bit4', 0x8ead5],
    ['', 'Mem', 'Bit5', 0x8ead5, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit1', 0x8ead5],
    ['AddSource', 'Delta', 'Bit2', 0x8ead5],
    ['AddSource', 'Delta', 'Bit3', 0x8ead5],
    ['AddSource', 'Delta', 'Bit4', 0x8ead5],
    ['', 'Delta', 'Bit5', 0x8ead5, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446965',
  id: 395324,
})

set.addAchievement({
  title: 'Normal Puzzle Page 7 [150 Pieces]',
  description: 'Complete puzzles 7-1 to 7-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit6', 0x8ead5],
    ['AddSource', 'Mem', 'Bit7', 0x8ead5],
    ['AddSource', 'Mem', 'Bit0', 0x8ead6],
    ['AddSource', 'Mem', 'Bit1', 0x8ead6],
    ['', 'Mem', 'Bit2', 0x8ead6, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit6', 0x8ead5],
    ['AddSource', 'Delta', 'Bit7', 0x8ead5],
    ['AddSource', 'Delta', 'Bit0', 0x8ead6],
    ['AddSource', 'Delta', 'Bit1', 0x8ead6],
    ['', 'Delta', 'Bit2', 0x8ead6, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446966',
  id: 395325,
})

set.addAchievement({
  title: 'Normal Puzzle Page 8 [150 Pieces]',
  description: 'Complete puzzles 8-1 to 8-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit3', 0x8ead6],
    ['AddSource', 'Mem', 'Bit4', 0x8ead6],
    ['AddSource', 'Mem', 'Bit5', 0x8ead6],
    ['AddSource', 'Mem', 'Bit6', 0x8ead6],
    ['', 'Mem', 'Bit7', 0x8ead6, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit3', 0x8ead6],
    ['AddSource', 'Delta', 'Bit4', 0x8ead6],
    ['AddSource', 'Delta', 'Bit5', 0x8ead6],
    ['AddSource', 'Delta', 'Bit6', 0x8ead6],
    ['', 'Delta', 'Bit7', 0x8ead6, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446967',
  id: 395326,
})

set.addAchievement({
  title: 'Normal Puzzle Page 9 [150 Pieces]',
  description: 'Complete puzzles 9-1 to 9-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit0', 0x8ead7],
    ['AddSource', 'Mem', 'Bit1', 0x8ead7],
    ['AddSource', 'Mem', 'Bit2', 0x8ead7],
    ['AddSource', 'Mem', 'Bit3', 0x8ead7],
    ['', 'Mem', 'Bit4', 0x8ead7, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit0', 0x8ead7],
    ['AddSource', 'Delta', 'Bit1', 0x8ead7],
    ['AddSource', 'Delta', 'Bit2', 0x8ead7],
    ['AddSource', 'Delta', 'Bit3', 0x8ead7],
    ['', 'Delta', 'Bit4', 0x8ead7, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446968',
  id: 395327,
})

set.addAchievement({
  title: 'Normal Puzzle Page 10 [150 Pieces]',
  description: 'Complete puzzles 10-1 to 10-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit5', 0x8ead7],
    ['AddSource', 'Mem', 'Bit6', 0x8ead7],
    ['AddSource', 'Mem', 'Bit7', 0x8ead7],
    ['AddSource', 'Mem', 'Bit0', 0x8ead8],
    ['', 'Mem', 'Bit1', 0x8ead8, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit5', 0x8ead7],
    ['AddSource', 'Delta', 'Bit6', 0x8ead7],
    ['AddSource', 'Delta', 'Bit7', 0x8ead7],
    ['AddSource', 'Delta', 'Bit0', 0x8ead8],
    ['', 'Delta', 'Bit1', 0x8ead8, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446969',
  id: 395328,
})

set.addAchievement({
  title: 'Normal Puzzle Page 11 [150 Pieces]',
  description: 'Complete puzzles 11-1 to 11-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit2', 0x8ead8],
    ['AddSource', 'Mem', 'Bit3', 0x8ead8],
    ['AddSource', 'Mem', 'Bit4', 0x8ead8],
    ['AddSource', 'Mem', 'Bit5', 0x8ead8],
    ['', 'Mem', 'Bit6', 0x8ead8, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit2', 0x8ead8],
    ['AddSource', 'Delta', 'Bit3', 0x8ead8],
    ['AddSource', 'Delta', 'Bit4', 0x8ead8],
    ['AddSource', 'Delta', 'Bit5', 0x8ead8],
    ['', 'Delta', 'Bit6', 0x8ead8, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446970',
  id: 395329,
})

set.addAchievement({
  title: 'Normal Puzzle Page 12 [150 Pieces]',
  description: 'Complete puzzles 12-1 to 12-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit7', 0x8ead8],
    ['AddSource', 'Mem', 'Bit0', 0x8ead9],
    ['AddSource', 'Mem', 'Bit1', 0x8ead9],
    ['AddSource', 'Mem', 'Bit2', 0x8ead9],
    ['', 'Mem', 'Bit3', 0x8ead9, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit7', 0x8ead8],
    ['AddSource', 'Delta', 'Bit0', 0x8ead9],
    ['AddSource', 'Delta', 'Bit1', 0x8ead9],
    ['AddSource', 'Delta', 'Bit2', 0x8ead9],
    ['', 'Delta', 'Bit3', 0x8ead9, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446971',
  id: 395330,
})

set.addAchievement({
  title: 'Normal Puzzle Page 13 [150 Pieces]',
  description: 'Complete puzzles 13-1 to 13-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit4', 0x8ead9],
    ['AddSource', 'Mem', 'Bit5', 0x8ead9],
    ['AddSource', 'Mem', 'Bit6', 0x8ead9],
    ['AddSource', 'Mem', 'Bit7', 0x8ead9],
    ['', 'Mem', 'Bit0', 0x8eada, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit4', 0x8ead9],
    ['AddSource', 'Delta', 'Bit5', 0x8ead9],
    ['AddSource', 'Delta', 'Bit6', 0x8ead9],
    ['AddSource', 'Delta', 'Bit7', 0x8ead9],
    ['', 'Delta', 'Bit0', 0x8eada, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446972',
  id: 395331,
})

set.addAchievement({
  title: 'Normal Puzzle Page 14 [150 Pieces]',
  description: 'Complete puzzles 14-1 to 14-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit1', 0x8eada],
    ['AddSource', 'Mem', 'Bit2', 0x8eada],
    ['AddSource', 'Mem', 'Bit3', 0x8eada],
    ['AddSource', 'Mem', 'Bit4', 0x8eada],
    ['', 'Mem', 'Bit5', 0x8eada, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit1', 0x8eada],
    ['AddSource', 'Delta', 'Bit2', 0x8eada],
    ['AddSource', 'Delta', 'Bit3', 0x8eada],
    ['AddSource', 'Delta', 'Bit4', 0x8eada],
    ['', 'Delta', 'Bit5', 0x8eada, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446973',
  id: 395332,
})

set.addAchievement({
  title: 'Normal Puzzle Page 15 [150 Pieces]',
  description: 'Complete puzzles 15-1 to 15-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit6', 0x8eada],
    ['AddSource', 'Mem', 'Bit7', 0x8eada],
    ['AddSource', 'Mem', 'Bit0', 0x8eadb],
    ['AddSource', 'Mem', 'Bit1', 0x8eadb],
    ['', 'Mem', 'Bit2', 0x8eadb, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit6', 0x8eada],
    ['AddSource', 'Delta', 'Bit7', 0x8eada],
    ['AddSource', 'Delta', 'Bit0', 0x8eadb],
    ['AddSource', 'Delta', 'Bit1', 0x8eadb],
    ['', 'Delta', 'Bit2', 0x8eadb, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446974',
  id: 395333,
})

set.addAchievement({
  title: 'Normal Puzzle Page 16 [150 Pieces]',
  description: 'Complete puzzles 16-1 to 16-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit3', 0x8eadb],
    ['AddSource', 'Mem', 'Bit4', 0x8eadb],
    ['AddSource', 'Mem', 'Bit5', 0x8eadb],
    ['AddSource', 'Mem', 'Bit6', 0x8eadb],
    ['', 'Mem', 'Bit7', 0x8eadb, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit3', 0x8eadb],
    ['AddSource', 'Delta', 'Bit4', 0x8eadb],
    ['AddSource', 'Delta', 'Bit5', 0x8eadb],
    ['AddSource', 'Delta', 'Bit6', 0x8eadb],
    ['', 'Delta', 'Bit7', 0x8eadb, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446975',
  id: 395334,
})

set.addAchievement({
  title: 'Normal Puzzle Page 17 [150 Pieces]',
  description: 'Complete puzzles 17-1 to 17-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit0', 0x8eadc],
    ['AddSource', 'Mem', 'Bit1', 0x8eadc],
    ['AddSource', 'Mem', 'Bit2', 0x8eadc],
    ['AddSource', 'Mem', 'Bit3', 0x8eadc],
    ['', 'Mem', 'Bit4', 0x8eadc, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit0', 0x8eadc],
    ['AddSource', 'Delta', 'Bit1', 0x8eadc],
    ['AddSource', 'Delta', 'Bit2', 0x8eadc],
    ['AddSource', 'Delta', 'Bit3', 0x8eadc],
    ['', 'Delta', 'Bit4', 0x8eadc, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446976',
  id: 395335,
})

set.addAchievement({
  title: 'Normal Puzzle Page 18 [150 Pieces]',
  description: 'Complete puzzles 18-1 to 18-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit5', 0x8eadc],
    ['AddSource', 'Mem', 'Bit6', 0x8eadc],
    ['AddSource', 'Mem', 'Bit7', 0x8eadc],
    ['AddSource', 'Mem', 'Bit0', 0x8eadd],
    ['', 'Mem', 'Bit1', 0x8eadd, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit5', 0x8eadc],
    ['AddSource', 'Delta', 'Bit6', 0x8eadc],
    ['AddSource', 'Delta', 'Bit7', 0x8eadc],
    ['AddSource', 'Delta', 'Bit0', 0x8eadd],
    ['', 'Delta', 'Bit1', 0x8eadd, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446977',
  id: 395336,
})

set.addAchievement({
  title: 'Normal Puzzle Page 19 [150 Pieces]',
  description: 'Complete puzzles 19-1 to 19-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit2', 0x8eadd],
    ['AddSource', 'Mem', 'Bit3', 0x8eadd],
    ['AddSource', 'Mem', 'Bit4', 0x8eadd],
    ['AddSource', 'Mem', 'Bit5', 0x8eadd],
    ['', 'Mem', 'Bit6', 0x8eadd, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit2', 0x8eadd],
    ['AddSource', 'Delta', 'Bit3', 0x8eadd],
    ['AddSource', 'Delta', 'Bit4', 0x8eadd],
    ['AddSource', 'Delta', 'Bit5', 0x8eadd],
    ['', 'Delta', 'Bit6', 0x8eadd, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446978',
  id: 395337,
})

set.addAchievement({
  title: 'Normal Puzzle Page 20 [150 Pieces]',
  description: 'Complete puzzles 20-1 to 20-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit7', 0x8eadd],
    ['AddSource', 'Mem', 'Bit0', 0x8eade],
    ['AddSource', 'Mem', 'Bit1', 0x8eade],
    ['AddSource', 'Mem', 'Bit2', 0x8eade],
    ['', 'Mem', 'Bit3', 0x8eade, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit7', 0x8eadd],
    ['AddSource', 'Delta', 'Bit0', 0x8eade],
    ['AddSource', 'Delta', 'Bit1', 0x8eade],
    ['AddSource', 'Delta', 'Bit2', 0x8eade],
    ['', 'Delta', 'Bit3', 0x8eade, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446979',
  id: 395338,
})

set.addAchievement({
  title: 'Normal Puzzle Page 21 [150 Pieces]',
  description: 'Complete puzzles 21-1 to 21-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit4', 0x8eade],
    ['AddSource', 'Mem', 'Bit5', 0x8eade],
    ['AddSource', 'Mem', 'Bit6', 0x8eade],
    ['AddSource', 'Mem', 'Bit7', 0x8eade],
    ['', 'Mem', 'Bit0', 0x8eadf, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit4', 0x8eade],
    ['AddSource', 'Delta', 'Bit5', 0x8eade],
    ['AddSource', 'Delta', 'Bit6', 0x8eade],
    ['AddSource', 'Delta', 'Bit7', 0x8eade],
    ['', 'Delta', 'Bit0', 0x8eadf, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446980',
  id: 395339,
})

set.addAchievement({
  title: 'Normal Puzzle Page 22 [150 Pieces]',
  description: 'Complete puzzles 22-1 to 22-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit1', 0x8eadf],
    ['AddSource', 'Mem', 'Bit2', 0x8eadf],
    ['AddSource', 'Mem', 'Bit3', 0x8eadf],
    ['AddSource', 'Mem', 'Bit4', 0x8eadf],
    ['', 'Mem', 'Bit5', 0x8eadf, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit1', 0x8eadf],
    ['AddSource', 'Delta', 'Bit2', 0x8eadf],
    ['AddSource', 'Delta', 'Bit3', 0x8eadf],
    ['AddSource', 'Delta', 'Bit4', 0x8eadf],
    ['', 'Delta', 'Bit5', 0x8eadf, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446981',
  id: 395340,
})

set.addAchievement({
  title: 'Normal Puzzle Page 23 [150 Pieces]',
  description: 'Complete puzzles 23-1 to 23-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit6', 0x8eadf],
    ['AddSource', 'Mem', 'Bit7', 0x8eadf],
    ['AddSource', 'Mem', 'Bit0', 0x8eae0],
    ['AddSource', 'Mem', 'Bit1', 0x8eae0],
    ['', 'Mem', 'Bit2', 0x8eae0, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit6', 0x8eadf],
    ['AddSource', 'Delta', 'Bit7', 0x8eadf],
    ['AddSource', 'Delta', 'Bit0', 0x8eae0],
    ['AddSource', 'Delta', 'Bit1', 0x8eae0],
    ['', 'Delta', 'Bit2', 0x8eae0, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446982',
  id: 395341,
})

set.addAchievement({
  title: 'Normal Puzzle Page 24 [150 Pieces]',
  description: 'Complete puzzles 24-1 to 24-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit3', 0x8eae0],
    ['AddSource', 'Mem', 'Bit4', 0x8eae0],
    ['AddSource', 'Mem', 'Bit5', 0x8eae0],
    ['AddSource', 'Mem', 'Bit6', 0x8eae0],
    ['', 'Mem', 'Bit7', 0x8eae0, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit3', 0x8eae0],
    ['AddSource', 'Delta', 'Bit4', 0x8eae0],
    ['AddSource', 'Delta', 'Bit5', 0x8eae0],
    ['AddSource', 'Delta', 'Bit6', 0x8eae0],
    ['', 'Delta', 'Bit7', 0x8eae0, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446983',
  id: 395342,
})

set.addAchievement({
  title: 'Normal Puzzle Page 25 [150 Pieces]',
  description: 'Complete puzzles 25-1 to 25-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit0', 0x8eae1],
    ['AddSource', 'Mem', 'Bit1', 0x8eae1],
    ['AddSource', 'Mem', 'Bit2', 0x8eae1],
    ['AddSource', 'Mem', 'Bit3', 0x8eae1],
    ['', 'Mem', 'Bit4', 0x8eae1, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit0', 0x8eae1],
    ['AddSource', 'Delta', 'Bit1', 0x8eae1],
    ['AddSource', 'Delta', 'Bit2', 0x8eae1],
    ['AddSource', 'Delta', 'Bit3', 0x8eae1],
    ['', 'Delta', 'Bit4', 0x8eae1, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446984',
  id: 395343,
})

set.addAchievement({
  title: 'Normal Puzzle Page 26 [150 Pieces]',
  description: 'Complete puzzles 26-1 to 26-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit5', 0x8eae1],
    ['AddSource', 'Mem', 'Bit6', 0x8eae1],
    ['AddSource', 'Mem', 'Bit7', 0x8eae1],
    ['AddSource', 'Mem', 'Bit0', 0x8eae2],
    ['', 'Mem', 'Bit1', 0x8eae2, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit5', 0x8eae1],
    ['AddSource', 'Delta', 'Bit6', 0x8eae1],
    ['AddSource', 'Delta', 'Bit7', 0x8eae1],
    ['AddSource', 'Delta', 'Bit0', 0x8eae2],
    ['', 'Delta', 'Bit1', 0x8eae2, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446985',
  id: 395344,
})

set.addAchievement({
  title: 'Normal Puzzle Page 27 [150 Pieces]',
  description: 'Complete puzzles 27-1 to 27-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit2', 0x8eae2],
    ['AddSource', 'Mem', 'Bit3', 0x8eae2],
    ['AddSource', 'Mem', 'Bit4', 0x8eae2],
    ['AddSource', 'Mem', 'Bit5', 0x8eae2],
    ['', 'Mem', 'Bit6', 0x8eae2, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit2', 0x8eae2],
    ['AddSource', 'Delta', 'Bit3', 0x8eae2],
    ['AddSource', 'Delta', 'Bit4', 0x8eae2],
    ['AddSource', 'Delta', 'Bit5', 0x8eae2],
    ['', 'Delta', 'Bit6', 0x8eae2, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446986',
  id: 395345,
})

set.addAchievement({
  title: 'Normal Puzzle Page 28 [150 Pieces]',
  description: 'Complete puzzles 28-1 to 28-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit7', 0x8eae2],
    ['AddSource', 'Mem', 'Bit0', 0x8eae3],
    ['AddSource', 'Mem', 'Bit1', 0x8eae3],
    ['AddSource', 'Mem', 'Bit2', 0x8eae3],
    ['', 'Mem', 'Bit3', 0x8eae3, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit7', 0x8eae2],
    ['AddSource', 'Delta', 'Bit0', 0x8eae3],
    ['AddSource', 'Delta', 'Bit1', 0x8eae3],
    ['AddSource', 'Delta', 'Bit2', 0x8eae3],
    ['', 'Delta', 'Bit3', 0x8eae3, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446987',
  id: 395346,
})

set.addAchievement({
  title: 'Normal Puzzle Page 29 [150 Pieces]',
  description: 'Complete puzzles 29-1 to 29-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit4', 0x8eae3],
    ['AddSource', 'Mem', 'Bit5', 0x8eae3],
    ['AddSource', 'Mem', 'Bit6', 0x8eae3],
    ['AddSource', 'Mem', 'Bit7', 0x8eae3],
    ['', 'Mem', 'Bit0', 0x8eae4, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit4', 0x8eae3],
    ['AddSource', 'Delta', 'Bit5', 0x8eae3],
    ['AddSource', 'Delta', 'Bit6', 0x8eae3],
    ['AddSource', 'Delta', 'Bit7', 0x8eae3],
    ['', 'Delta', 'Bit0', 0x8eae4, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446988',
  id: 395347,
})

set.addAchievement({
  title: 'Normal Puzzle Page 30 [150 Pieces]',
  description: 'Complete puzzles 30-1 to 30-5.',
  points: 5,
  conditions: $(
    ['AddSource', 'Mem', 'Bit1', 0x8eae4],
    ['AddSource', 'Mem', 'Bit2', 0x8eae4],
    ['AddSource', 'Mem', 'Bit3', 0x8eae4],
    ['AddSource', 'Mem', 'Bit4', 0x8eae4],
    ['', 'Mem', 'Bit5', 0x8eae4, '=', 'Value', '', 5],
    ['AddSource', 'Delta', 'Bit1', 0x8eae4],
    ['AddSource', 'Delta', 'Bit2', 0x8eae4],
    ['AddSource', 'Delta', 'Bit3', 0x8eae4],
    ['AddSource', 'Delta', 'Bit4', 0x8eae4],
    ['', 'Delta', 'Bit5', 0x8eae4, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x8f494, '=', 'Value', '', 1],
  ),
  badge: '446989',
  id: 395348,
})

set.addAchievement({
  title: 'Round 1 [Easy+]',
  description: 'Defeat the first opponent in easy or higher mode.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 0],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 2],
  ),
  badge: '446990',
  id: 395349,
})

set.addAchievement({
  title: 'Round 2 [Easy+]',
  description: 'Defeat the second opponent in easy or higher mode.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 0],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 5],
  ),
  badge: '446991',
  id: 395350,
})

set.addAchievement({
  title: 'Round 3 [Easy+]',
  description: 'Defeat the third opponent in easy or higher mode.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 0],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 6],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 8],
  ),
  badge: '446992',
  id: 395351,
})

set.addAchievement({
  title: 'Round 4 [Easy+]',
  description: 'Defeat the fourth opponent in easy or higher mode.',
  points: 3,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 0],
    ),
    alt1: $(
      ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 10],
      ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 12],
    ),
    alt2: $(
      ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 19],
      ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 21],
    ),
  },
  badge: '446993',
  id: 395352,
})

set.addAchievement({
  title: 'Round 5 [Easy+]',
  description: 'Defeat the fifth opponent in easy or higher mode.',
  points: 3,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 0],
    ),
    alt1: $(
      ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 13],
      ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 15],
    ),
    alt2: $(
      ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 22],
      ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 24],
    ),
  },
  badge: '446994',
  id: 395353,
})

set.addAchievement({
  title: 'Round 6 [Easy+]',
  description: 'Defeat the sixth opponent in easy or higher mode.',
  points: 3,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 0],
    ),
    alt1: $(
      ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 16],
      ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 18],
    ),
    alt2: $(
      ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 25],
      ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 27],
    ),
  },
  badge: '446995',
  id: 395354,
})

set.addAchievement({
  title: 'Round 7 [Easy+]',
  description: 'Defeat the seventh opponent in easy or higher mode.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 0],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 28],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 30],
  ),
  badge: '446996',
  id: 395355,
})

set.addAchievement({
  title: 'Round 8 [Easy+]',
  description: 'Defeat the eighth opponent in easy or higher mode.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 0],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 31],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 33],
  ),
  badge: '446997',
  id: 395356,
})

set.addAchievement({
  title: 'Round 9 [Easy+]',
  description: 'Defeat the ninth opponent in easy or higher mode.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 0],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 34],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 36],
  ),
  badge: '446998',
  id: 395357,
})

set.addAchievement({
  title: 'Round 10 [Easy+]',
  description: 'Defeat the tenth opponent in easy or higher mode.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 0],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 37],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 39],
  ),
  badge: '446999',
  id: 395358,
})

set.addAchievement({
  title: 'Round 11 [Easy+]',
  description: 'Defeat the eleventh opponent in easy or higher mode.',
  points: 3,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 0],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 40],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 42],
  ),
  badge: '447000',
  id: 395359,
})

set.addAchievement({
  title: 'Round 12 [Easy+]',
  description: 'Defeat the twelfth opponent on easy or higher.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 0],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 43],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 45],
  ),
  badge: '447101',
  id: 395447,
})

set.addAchievement({
  title: 'Round 1 [Normal+]',
  description: 'Defeat the first opponent in normal or higher mode.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 2],
  ),
  badge: '447001',
  id: 395360,
})

set.addAchievement({
  title: 'Round 2 [Normal+]',
  description: 'Defeat the second opponent in normal or higher mode.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 5],
  ),
  badge: '447002',
  id: 395361,
})

set.addAchievement({
  title: 'Round 3 [Normal+]',
  description: 'Defeat the third opponent in normal or higher mode.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 6],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 8],
  ),
  badge: '447003',
  id: 395362,
})

set.addAchievement({
  title: 'Round 4 [Normal+]',
  description: 'Defeat the fourth opponent in normal or higher mode.',
  points: 5,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 1],
    ),
    alt1: $(
      ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 10],
      ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 12],
    ),
    alt2: $(
      ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 19],
      ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 21],
    ),
  },
  badge: '447004',
  id: 395363,
})

set.addAchievement({
  title: 'Round 5 [Normal+]',
  description: 'Defeat the fifth opponent in normal or higher mode.',
  points: 5,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 1],
    ),
    alt1: $(
      ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 13],
      ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 15],
    ),
    alt2: $(
      ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 22],
      ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 24],
    ),
  },
  badge: '447005',
  id: 395364,
})

set.addAchievement({
  title: 'Round 6 [Normal+]',
  description: 'Defeat the sixth opponent in normal or higher mode.',
  points: 5,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 1],
    ),
    alt1: $(
      ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 16],
      ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 18],
    ),
    alt2: $(
      ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 25],
      ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 27],
    ),
  },
  badge: '447006',
  id: 395365,
})

set.addAchievement({
  title: 'Round 7 [Normal+]',
  description: 'Defeat the seventh opponent in normal or higher mode.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 28],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 30],
  ),
  badge: '447007',
  id: 395366,
})

set.addAchievement({
  title: 'Round 8 [Normal+]',
  description: 'Defeat the eighth opponent in normal or higher mode.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 31],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 33],
  ),
  badge: '447008',
  id: 395367,
})

set.addAchievement({
  title: 'Round 9 [Normal+]',
  description: 'Defeat the ninth opponent in normal or higher mode.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 34],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 36],
  ),
  badge: '447009',
  id: 395368,
})

set.addAchievement({
  title: 'Round 10 [Normal+]',
  description: 'Defeat the tenth opponent in normal or higher mode.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 37],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 39],
  ),
  badge: '447010',
  id: 395369,
})

set.addAchievement({
  title: 'Round 11 [Normal+]',
  description: 'Defeat the eleventh opponent in normal or higher mode.',
  points: 5,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 40],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 42],
  ),
  badge: '447011',
  id: 395370,
})

set.addAchievement({
  title: 'Round 12 [Normal+]',
  description: 'Defeat the twelfth opponent in normal or higher mode.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '>=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 43],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 45],
  ),
  badge: '447102',
  id: 395448,
})

set.addAchievement({
  title: 'Round 1 [Hard]',
  description: 'Defeat the first opponent in hard mode.',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '=', 'Value', '', 2],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 2],
  ),
  badge: '447012',
  id: 395371,
})

set.addAchievement({
  title: 'Round 2 [Hard]',
  description: 'Defeat the second opponent in hard mode.',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '=', 'Value', '', 2],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 5],
  ),
  badge: '447013',
  id: 395372,
})

set.addAchievement({
  title: 'Round 3 [Hard]',
  description: 'Defeat the third opponent in hard mode.',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '=', 'Value', '', 2],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 6],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 8],
  ),
  badge: '447014',
  id: 395373,
})

set.addAchievement({
  title: 'Round 4 [Hard]',
  description: 'Defeat the fourth opponent in hard mode.',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0x8efaa, '=', 'Value', '', 2],
    ),
    alt1: $(
      ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 10],
      ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 12],
    ),
    alt2: $(
      ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 19],
      ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 21],
    ),
  },
  badge: '447015',
  id: 395374,
})

set.addAchievement({
  title: 'Round 5 [Hard]',
  description: 'Defeat the fifth opponent in hard mode.',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0x8efaa, '=', 'Value', '', 2],
    ),
    alt1: $(
      ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 13],
      ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 15],
    ),
    alt2: $(
      ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 22],
      ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 24],
    ),
  },
  badge: '447016',
  id: 395375,
})

set.addAchievement({
  title: 'Round 6 [Hard]',
  description: 'Defeat the sixth opponent in hard mode.',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0x8efaa, '=', 'Value', '', 2],
    ),
    alt1: $(
      ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 16],
      ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 18],
    ),
    alt2: $(
      ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 25],
      ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 27],
    ),
  },
  badge: '447017',
  id: 395376,
})

set.addAchievement({
  title: 'Round 7 [Hard]',
  description: 'Defeat the seventh opponent in hard mode.',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '=', 'Value', '', 2],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 28],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 30],
  ),
  badge: '447018',
  id: 395377,
})

set.addAchievement({
  title: 'Round 8 [Hard]',
  description: 'Defeat the eighth opponent in hard mode.',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '=', 'Value', '', 2],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 31],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 33],
  ),
  badge: '447019',
  id: 395378,
})

set.addAchievement({
  title: 'Round 9 [Hard]',
  description: 'Defeat the ninth opponent in hard mode.',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '=', 'Value', '', 2],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 34],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 36],
  ),
  badge: '447020',
  id: 395379,
})

set.addAchievement({
  title: 'Round 10 [Hard]',
  description: 'Defeat the tenth opponent in hard mode.',
  points: 25,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '=', 'Value', '', 2],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 37],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 39],
  ),
  badge: '447021',
  id: 395380,
})

set.addAchievement({
  title: 'Round 11 [Hard]',
  description: 'Defeat the eleventh opponent in hard mode.',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '=', 'Value', '', 2],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 40],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 42],
  ),
  badge: '447022',
  id: 395381,
})

set.addAchievement({
  title: 'Round 12 [Hard]',
  description: 'Defeat the twelfth opponent in hard mode.',
  points: 25,
  conditions: $(
    ['', 'Mem', '8bit', 0x8ea6c, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x8efaa, '=', 'Value', '', 2],
    ['', 'Delta', '8bit', 0x8efa2, '=', 'Value', '', 43],
    ['', 'Mem', '8bit', 0x8efa2, '=', 'Value', '', 45],
  ),
  badge: '447103',
  id: 395449,
})

export default set

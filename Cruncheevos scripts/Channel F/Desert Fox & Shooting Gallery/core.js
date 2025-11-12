import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({
  gameId: 10290,
  title: 'Videocart-02: Desert Fox & Shooting Gallery',
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
  title: 'If you play alone you are always the best',
  description: '[Desert Fox] Achieve your first point as player 2',
  points: 1,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x28, '=', 'Value', '', 8],
    ['AndNext', 'BCD', '8bit', 0x17, '>', 'Delta', '8bit', 0x17],
    ['', 'Mem', '8bit', 0x17, '=', 'Value', '', 1],
    ['ResetIf', 'Mem', '8bit', 0x13c, '=', 'Value', '', 3],
  ),
  badge: '360000',
  id: 322832,
})

set.addAchievement({
  title: 'Turbo for the win',
  description: '[Desert Fox] Get 100 points in Desert Fox as player 2',
  points: 2,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x28, '=', 'Value', '', 8],
    ['AndNext', 'Mem', '8bit', 0x17, '=', 'Value', '', 152, 1],
    ['AndNext', 'Delta', '8bit', 0x17, '=', 'Value', '', 153],
    ['', 'Mem', '8bit', 0x17, '=', 'Value', '', 0],
    ['ResetIf', 'Mem', '8bit', 0x13c, '=', 'Value', '', 3],
  ),
  badge: '360001',
  id: 322833,
})

set.addAchievement({
  title: 'Meet the Sniper',
  description: '[Shooting Gallery] Get your first point without missing',
  points: 2,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x28, '=', 'Value', '', 14],
    ['', 'Delta', '8bit', 0x16, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x16, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x17, '=', 'Value', '', 0],
  ),
  badge: '360004',
  id: 322836,
})

set.addAchievement({
  title: 'My Personal Record',
  description:
    '[Shooting Gallery] Get at least 30 points in 2 minutes [Mode 4]',
  points: 3,
  type: 'progression',
  conditions: $(
    ['ResetIf', 'Mem', '8bit', 0x28, '!=', 'Value', '', 14],
    ['', 'Mem', '8bit', 0x1c, '=', 'Value', '', 8],
    ['', 'Mem', '8bit', 0x16, '>=', 'Value', '', 48],
    ['AndNext', 'Mem', '8bit', 0x39, '=', 'Value', '', 2],
    ['AndNext', 'Mem', '8bit', 0x3a, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1f, '=', 'Value', '', 3, 1],
  ),
  badge: '360005',
  id: 322837,
})

set.addAchievement({
  title: 'Practice runs',
  description:
    '[Shooting Gallery] Get at least 20 points with a 25% or more accuracy and never missing more than 99 times',
  points: 5,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x28, '=', 'Value', '', 14],
    ['', 'Mem', '8bit', 0x16, '>=', 'Value', '', 32],
    ['ResetNextIf', 'Mem', '8bit', 0x1f, '=', 'Value', '', 0],
    ['PauseIf', 'Mem', '8bit', 0x17, '=', 'Value', '', 153, 1],
    ['AddSource', 'BCD', '8bit', 0x16, '*', 'Value', '', 100],
    ['SubSource', 'BCD', '8bit', 0x17, '*', 'Value', '', 25],
    ['', 'Value', '', 0, '<', 'Value', '', 0x80000000],
  ),
  badge: '360006',
  id: 322838,
})

set.addAchievement({
  title: 'Are you training for this?',
  description:
    '[Shooting Gallery] Get at least 20 points with a 50% or more accuracy and never missing more than 99 times',
  points: 10,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x28, '=', 'Value', '', 14],
    ['', 'Mem', '8bit', 0x16, '>=', 'Value', '', 32],
    ['ResetNextIf', 'Mem', '8bit', 0x1f, '=', 'Value', '', 0],
    ['PauseIf', 'Mem', '8bit', 0x17, '=', 'Value', '', 153, 1],
    ['AddSource', 'BCD', '8bit', 0x16, '*', 'Value', '', 100],
    ['SubSource', 'BCD', '8bit', 0x17, '*', 'Value', '', 50],
    ['', 'Value', '', 0, '<', 'Value', '', 0x80000000],
  ),
  badge: '360002',
  id: 322834,
})

set.addAchievement({
  title: `I won't gonna force you to be better than this`,
  description:
    '[Shooting Gallery] Get at least 20 points with a 75% or more accuracy and never missing more than 99 times',
  points: 10,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x28, '=', 'Value', '', 14],
    ['', 'Mem', '8bit', 0x16, '>=', 'Value', '', 32],
    ['ResetNextIf', 'Mem', '8bit', 0x1f, '=', 'Value', '', 0],
    ['PauseIf', 'Mem', '8bit', 0x17, '=', 'Value', '', 153, 1],
    ['AddSource', 'BCD', '8bit', 0x16, '*', 'Value', '', 100],
    ['SubSource', 'BCD', '8bit', 0x17, '*', 'Value', '', 75],
    ['', 'Value', '', 0, '<', 'Value', '', 0x80000000],
  ),
  badge: '360003',
  id: 322835,
})

export default set

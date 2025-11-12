import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({
  gameId: 6396,
  title: '~Homebrew~ ~Demo~ Metroid Dread',
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
  title: 'Demo, Completed!',
  description: 'Defeat the boss and complete the Demo.',
  points: 3,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0xc038, '=', 'Value', '', 16],
    ['', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 5],
    ['', 'Mem', '8bit', 0xcd50, '=', 'Value', '', 1],
    ['', 'Mem', 'Bit0', 0xcd01, '>', 'Delta', 'Bit0', 0xcd01],
  ),
  badge: '223915',
  id: 201647,
})

set.addAchievement({
  title: 'Demo, Mastered!',
  description: 'Defeat the boss and complete the Demo damageless.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0xc038, '=', 'Value', '', 16],
    ['AndNext', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 5],
    ['AndNext', 'Mem', '8bit', 0xcd50, '=', 'Value', '', 1],
    ['Trigger', 'Mem', 'Bit0', 0xcd01, '>', 'Delta', 'Bit0', 0xcd01],
    ['ResetNextIf', 'Mem', '8bit', 0xc038, '=', 'Value', '', 8],
    ['PauseIf', 'Mem', '8bit', 0xccf6, '<', 'Delta', '8bit', 0xccf6, 1],
  ),
  badge: '223916',
  id: 201648,
})

set.addAchievement({
  title: 'Central Unit Killer',
  description: 'Defeat the boss damageless.',
  points: 2,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc038, '=', 'Value', '', 16],
      ['', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 5],
      ['AndNext', 'Mem', '8bit', 0xcd50, '=', 'Value', '', 1],
      ['Trigger', 'Mem', 'Bit0', 0xcd01, '>', 'Delta', 'Bit0', 0xcd01],
      ['AndNext', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 5],
      ['PauseIf', 'Mem', '8bit', 0xccf6, '<', 'Delta', '8bit', 0xccf6, 1],
    ),
    alt1: $(['', 'Mem', '8bit', 0xc038, '>=', 'Value', '', 0]),
    alt2: $(['ResetIf', 'Mem', '8bit', 0xc038, '=', 'Value', '', 8]),
  },
  badge: '223917',
  id: 201649,
})

set.addAchievement({
  title: 'Missile Ammo Always at Max',
  description: 'Try to refill your missile ammo.',
  points: 1,
  conditions: $(
    ['', 'Mem', '8bit', 0xc038, '=', 'Value', '', 16],
    ['', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xc908, '=', 'Value', '', 80],
  ),
  badge: '223918',
  id: 201650,
})

set.addAchievement({
  title: 'Speedy Mercenary',
  description: 'Defeat the boss and complete the Demo in 5 minutes or less.',
  points: 2,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc038, '=', 'Value', '', 16],
      ['', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 5],
      ['', 'Mem', '8bit', 0xcd50, '=', 'Value', '', 1],
      ['', 'Mem', 'Bit0', 0xcd01, '>', 'Delta', 'Bit0', 0xcd01],
      ['PauseIf', 'Mem', '8bit', 0xc6ac, '!=', 'Delta', '8bit', 0xc6ac, 18001],
    ),
    alt1: $(['', 'Mem', '8bit', 0xc038, '>=', 'Value', '', 0]),
    alt2: $(['ResetIf', 'Mem', '8bit', 0xc038, '=', 'Value', '', 8]),
  },
  badge: '223919',
  id: 201651,
})

set.addAchievement({
  title: 'High Speed Mercenary',
  description: 'Defeat the boss and complete the Demo in 2:30 minutes or less.',
  points: 3,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc038, '=', 'Value', '', 16],
      ['', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 5],
      ['', 'Mem', '8bit', 0xcd50, '=', 'Value', '', 1],
      ['', 'Mem', 'Bit0', 0xcd01, '>', 'Delta', 'Bit0', 0xcd01],
      ['PauseIf', 'Mem', '8bit', 0xc6ac, '!=', 'Delta', '8bit', 0xc6ac, 9001],
    ),
    alt1: $(['', 'Mem', '8bit', 0xc038, '>=', 'Value', '', 0]),
    alt2: $(['ResetIf', 'Mem', '8bit', 0xc038, '=', 'Value', '', 8]),
  },
  badge: '223920',
  id: 201652,
})

set.addAchievement({
  title: 'Peaceful Mercenary',
  description:
    'Reach the final boss without killing or hurting any enemy (ignore E.M.M.Y).',
  points: 3,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc038, '=', 'Value', '', 16],
      ['', 'Delta', '8bit', 0xc6ae, '=', 'Value', '', 13],
      ['', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 5],
      ['PauseIf', 'Mem', '8bit', 0xcd67, '<', 'Delta', '8bit', 0xcd67, 1],
      ['PauseIf', 'Mem', '8bit', 0xcd68, '<', 'Delta', '8bit', 0xcd68, 1],
      ['PauseIf', 'Mem', '8bit', 0xcd6b, '<', 'Delta', '8bit', 0xcd6b, 1],
      ['PauseIf', 'Mem', '8bit', 0xcd80, '<', 'Delta', '8bit', 0xcd80, 1],
      ['PauseIf', 'Mem', '8bit', 0xcd81, '<', 'Delta', '8bit', 0xcd81, 1],
      ['PauseIf', 'Mem', '8bit', 0xcd8c, '<', 'Delta', '8bit', 0xcd8c, 1],
      ['PauseIf', 'Mem', '8bit', 0xcd8d, '<', 'Delta', '8bit', 0xcd8d, 1],
      ['PauseIf', 'Mem', '8bit', 0xcd8e, '<', 'Delta', '8bit', 0xcd8e, 1],
      ['PauseIf', 'Mem', '8bit', 0xcd8f, '<', 'Delta', '8bit', 0xcd8f, 1],
      ['PauseIf', 'Mem', '8bit', 0xcd90, '<', 'Delta', '8bit', 0xcd90, 1],
      ['PauseIf', 'Mem', '8bit', 0xcd91, '<', 'Delta', '8bit', 0xcd91, 1],
      ['PauseIf', 'Mem', '8bit', 0xcd92, '<', 'Delta', '8bit', 0xcd92, 1],
      ['PauseIf', 'Mem', '8bit', 0xcd93, '<', 'Delta', '8bit', 0xcd93, 1],
    ),
    alt1: $(['', 'Mem', '8bit', 0xc038, '>=', 'Value', '', 0]),
    alt2: $(['ResetIf', 'Mem', '8bit', 0xc038, '=', 'Value', '', 8]),
  },
  badge: '226615',
  id: 204343,
})

set.addAchievement({
  title: 'Genocidal Mercenary',
  description:
    'Reach the final boss after kill each enemy at least 1 time (ignore E.M.M.Y).',
  points: 2,
  conditions: $(
    ['', 'Mem', '8bit', 0xc038, '=', 'Value', '', 16],
    ['', 'Delta', '8bit', 0xc6ae, '=', 'Value', '', 13],
    ['', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 5],
    ['AndNext', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 7],
    ['AndNext', 'Mem', '8bit', 0xc148, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0xc176, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xc25c, '=', 'Value', '', 0, 1],
    ['AndNext', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 9],
    ['AndNext', 'Mem', '8bit', 0xc1a4, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xc1d2, '=', 'Value', '', 0, 1],
    ['AndNext', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 10],
    ['AndNext', 'Mem', '8bit', 0xc1a4, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0xc1d2, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0xc200, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0xc22e, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0xc25c, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0xc28a, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0xc2b8, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xc2e6, '=', 'Value', '', 0, 1],
    ['ResetIf', 'Mem', '8bit', 0xc038, '=', 'Value', '', 8],
  ),
  badge: '226616',
  id: 204344,
})

set.addLeaderboard({
  title: 'Metroid Dread demake speedrun',
  description: 'Complete the Demo as fast as possible',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(['', 'Mem', '8bit', 0xc038, '=', 'Value', '', 16]),
    cancel: $(['', 'Mem', '8bit', 0xc038, '=', 'Value', '', 8]),
    submit: $(
      ['', 'Mem', '8bit', 0xcd50, '=', 'Value', '', 1],
      ['', 'Mem', 'Bit0', 0xcd01, '>', 'Delta', 'Bit0', 0xcd01],
    ),
    value: $([
      'Measured',
      'Mem',
      '8bit',
      0xc6ac,
      '!=',
      'Delta',
      '8bit',
      0xc6ac,
    ]),
  },
  id: 31213,
})

export default set

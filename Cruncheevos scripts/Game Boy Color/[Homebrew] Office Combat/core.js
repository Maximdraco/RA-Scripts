import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({
  gameId: 7297,
  title: '~Homebrew~ Office Combat',
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
  title: 'Fight',
  description: 'Defeat your first opponent.',
  points: 1,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0xc6ae, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 13],
  ),
  badge: '347027',
  id: 313479,
})

set.addAchievement({
  title: 'Pelea',
  description: 'Defeat your second opponent.',
  points: 1,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0xc6ae, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 14],
  ),
  badge: '347028',
  id: 313480,
})

set.addAchievement({
  title: 'Combattimento',
  description: 'Defeat your third opponent.',
  points: 1,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0xc6ae, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 15],
  ),
  badge: '347029',
  id: 313481,
})

set.addAchievement({
  title: 'Streit',
  description: 'Defeat your fourth opponent.',
  points: 1,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0xc6ae, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 16],
  ),
  badge: '347030',
  id: 313482,
})

set.addAchievement({
  title: 'Lutar',
  description: 'Defeat your fifth opponent.',
  points: 1,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0xc6ae, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 17],
  ),
  badge: '347031',
  id: 313483,
})

set.addAchievement({
  title: 'Kenka',
  description: 'Defeat your sixth opponent.',
  points: 1,
  type: 'win_condition',
  conditions: $(
    ['', 'Delta', '8bit', 0xc6ae, '=', 'Value', '', 5],
    ['', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 20],
  ),
  badge: '347032',
  id: 313484,
})

set.addAchievement({
  title: 'Perfect Match',
  description: 'Complete the game without taking damage.',
  points: 3,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xc6ae, '=', 'Value', '', 5],
    ['Trigger', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 20],
    ['ResetNextIf', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 6],
    ['AndNext', 'Mem', '8bit', 0xc6ae, '!=', 'Value', '', 20],
    ['AndNext', 'Mem', '8bit', 0xcce4, '!=', 'Value', '', 0],
    ['PauseIf', 'Mem', '8bit', 0xcce4, '=', 'Value', '', 3, 1],
  ),
  badge: '347033',
  id: 313485,
})

set.addAchievement({
  title: 'Quick Duel',
  description: 'Beat the game in 2 minutes and 20 seconds or less.',
  points: 2,
  conditions: $(
    ['Trigger', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 20],
    ['ResetNextIf', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 6],
    ['PauseIf', 'Delta', '8bit', 0xcee6, '!=', 'Mem', '8bit', 0xcee6, 8401],
  ),
  badge: '347034',
  id: 313486,
})

set.addLeaderboard({
  title: 'Quick Duel',
  description: 'How fast can you beat the game?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(['', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 7]),
    cancel: $(['', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 6]),
    submit: $(['', 'Mem', '8bit', 0xc6ae, '=', 'Value', '', 20]),
    value: $([
      'Measured',
      'Delta',
      '8bit',
      0xcee6,
      '!=',
      'Mem',
      '8bit',
      0xcee6,
    ]),
  },
  id: 64572,
})

export default set

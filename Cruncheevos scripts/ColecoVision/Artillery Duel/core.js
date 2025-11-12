import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 17275, title: 'Artillery Duel' })

set.addAchievement({
  title: 'Warning: Unknown Emulator',
  description: 'Hardcore unlocks cannot be earned using this emulator.',
  points: 0,
  conditions: '1=1.300.',
  badge: '00000',
  id: 101000001,
})

set.addAchievement({
  title: `That Didn't Even Scratch Me!`,
  description: 'As player 1, hit your first shot against player 2.',
  points: 2,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0xab, '=', 'Value', '', 149],
    ['', 'Mem', '8bit', 0xcb, '>', 'Delta', '8bit', 0xcb],
    ['PauseIf', 'Mem', '8bit', 0xaf, '=', 'Value', '', 0],
  ),
  badge: '253465',
  id: 228465,
})

set.addAchievement({
  title: 'I Won the Battle, But Not the War',
  description: 'As player 1, win a battle.',
  points: 2,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0xab, '=', 'Value', '', 149],
    ['', 'Mem', '8bit', 0xc7, '>', 'Delta', '8bit', 0xc7],
    ['PauseIf', 'Mem', '8bit', 0xaf, '=', 'Value', '', 0],
  ),
  badge: '253466',
  id: 228466,
})

set.addAchievement({
  title: 'My First War',
  description: 'As player 1, win a war (5 battles according to the manual).',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0xab, '=', 'Value', '', 149],
    ['', 'Mem', '8bit', 0xc7, '>', 'Delta', '8bit', 0xc7, 5],
    ['', 'Mem', '8bit', 0xc7, '=', 'Value', '', 5],
    ['PauseIf', 'Mem', '8bit', 0xaf, '=', 'Value', '', 0],
    ['ResetIf', 'Mem', '8bit', 0xab, '=', 'Value', '', 128],
  ),
  badge: '253467',
  id: 228467,
})

set.addAchievement({
  title: `I'm the Captain Now`,
  description: `As player 1, win a war playing with the skill level of "Captain" or higher (player 2's skill level does not affect).`,
  points: 5,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0xab, '=', 'Value', '', 149],
    ['', 'Mem', '8bit', 0xc5, '>=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xc7, '>', 'Delta', '8bit', 0xc7, 5],
    ['', 'Mem', '8bit', 0xc7, '=', 'Value', '', 5],
    ['PauseIf', 'Mem', '8bit', 0xaf, '=', 'Value', '', 0],
    ['ResetIf', 'Mem', '8bit', 0xab, '=', 'Value', '', 128],
  ),
  badge: '253468',
  id: 228468,
})

set.addAchievement({
  title: 'Respect Your General',
  description: `As player 1, win a war playing with the skill level of "General" (player 2's skill level does not affect).`,
  points: 5,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0xab, '=', 'Value', '', 149],
    ['', 'Mem', '8bit', 0xc5, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xc7, '>', 'Delta', '8bit', 0xc7, 5],
    ['', 'Mem', '8bit', 0xc7, '=', 'Value', '', 5],
    ['PauseIf', 'Mem', '8bit', 0xaf, '=', 'Value', '', 0],
    ['ResetIf', 'Mem', '8bit', 0xab, '=', 'Value', '', 128],
  ),
  badge: '253469',
  id: 228469,
})

set.addAchievement({
  title: 'High Accuracy',
  description: 'As player 1, win a battle in 2 or less shots.',
  points: 3,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xab, '=', 'Value', '', 149],
      ['', 'Mem', '8bit', 0xc7, '>', 'Delta', '8bit', 0xc7],
      ['ResetNextIf', 'Mem', '8bit', 0xab, '=', 'Value', '', 128],
      ['PauseIf', 'Mem', '8bit', 0x117, '<', 'Delta', '8bit', 0x117, 3],
      ['PauseIf', 'Mem', '8bit', 0xaf, '=', 'Value', '', 0],
    ),
    alt1: $(['ResetIf', 'Mem', '8bit', 0xaa, '=', 'Value', '', 104]),
  },
  badge: '253470',
  id: 228470,
})

export default set

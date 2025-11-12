import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 24531, title: 'Champion Boxing' })

set.addAchievement({
  title: 'Warning: Unknown Emulator',
  description: 'Hardcore unlocks cannot be earned using this emulator.',
  points: 0,
  conditions: '1=1.300.',
  badge: '00000',
  id: 101000001,
})

set.addAchievement({
  title: 'The Start of Your Career',
  description: 'Beat your opponent in level 1.',
  points: 2,
  type: 'progression',
  conditions: $(
    ['PauseIf', 'Mem', '8bit', 0x214, '=', 'Value', '', 1],
    ['PauseIf', 'Delta', '8bit', 0x214, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x61, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1d6, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x219, '!=', 'Value', '', 66],
    ['', 'Mem', '8bit', 0x219, '=', 'Value', '', 66],
  ),
  badge: '379791',
  id: 336083,
})

set.addAchievement({
  title: `SEGA's Little Mac`,
  description: 'Beat your opponent in level 2.',
  points: 3,
  type: 'progression',
  conditions: $(
    ['PauseIf', 'Mem', '8bit', 0x214, '=', 'Value', '', 1],
    ['PauseIf', 'Delta', '8bit', 0x214, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x61, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1d6, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x219, '!=', 'Value', '', 66],
    ['', 'Mem', '8bit', 0x219, '=', 'Value', '', 66],
  ),
  badge: '379792',
  id: 336084,
})

set.addAchievement({
  title: 'This is Getting Complicated',
  description: 'Beat your opponent in level 3.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['PauseIf', 'Mem', '8bit', 0x214, '=', 'Value', '', 1],
    ['PauseIf', 'Delta', '8bit', 0x214, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x61, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1d6, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x219, '=', 'Value', '', 66],
    ['', 'Mem', '8bit', 0x219, '=', 'Value', '', 66],
  ),
  badge: '379793',
  id: 336085,
})

set.addAchievement({
  title: 'Punched Out',
  description: 'Beat your opponent in level 4.',
  points: 10,
  type: 'progression',
  conditions: $(
    ['PauseIf', 'Mem', '8bit', 0x214, '=', 'Value', '', 1],
    ['PauseIf', 'Delta', '8bit', 0x214, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x61, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0x1d6, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x219, '=', 'Value', '', 66],
    ['', 'Mem', '8bit', 0x219, '=', 'Value', '', 66],
  ),
  badge: '379794',
  id: 336086,
})

set.addAchievement({
  title: 'Hajime No Ippo',
  description: 'Beat your opponent in level 5.',
  points: 10,
  type: 'win_condition',
  conditions: $(
    ['PauseIf', 'Mem', '8bit', 0x214, '=', 'Value', '', 1],
    ['PauseIf', 'Delta', '8bit', 0x214, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x61, '=', 'Value', '', 5],
    ['', 'Mem', '8bit', 0x1d6, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x219, '=', 'Value', '', 66],
    ['', 'Mem', '8bit', 0x219, '=', 'Value', '', 66],
  ),
  badge: '379795',
  id: 336087,
})

set.addAchievement({
  title: 'King of Boxers',
  description: 'Defeat your opponent in the first round (any level).',
  points: 3,
  conditions: $(
    ['PauseIf', 'Mem', '8bit', 0x214, '=', 'Value', '', 1],
    ['PauseIf', 'Delta', '8bit', 0x214, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1d6, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0x39, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x219, '!=', 'Value', '', 66],
    ['', 'Mem', '8bit', 0x219, '=', 'Value', '', 66],
  ),
  badge: '379796',
  id: 336088,
})

export default set

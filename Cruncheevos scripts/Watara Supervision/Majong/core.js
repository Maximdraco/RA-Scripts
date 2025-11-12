import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 17648, title: 'Majong' })

set.addAchievement({
  title: 'Warning: Unknown Emulator',
  description: 'Hardcore unlocks cannot be earned using this emulator.',
  points: 0,
  conditions: '1=1.300.',
  badge: '00000',
  id: 101000001,
})

set.addAchievement({
  title: 'Wanna play Mahjong?',
  description: 'Defeat the first opponent (win all the money).',
  points: 10,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0x3b, '=', 'Value', '', 5],
    ['AndNext', 'Mem', '8bit', 0x3a, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x39, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0x3e, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0x3d, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x3c, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x62, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x62, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x63, '=', 'Value', '', 0],
  ),
  badge: '243515',
  id: 220159,
})

set.addAchievement({
  title: 'Mahjong Is So Cool',
  description: 'Defeat the second opponent (win all the money).',
  points: 10,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0x3b, '=', 'Value', '', 5],
    ['AndNext', 'Mem', '8bit', 0x3a, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x39, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0x3e, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0x3d, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x3c, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x62, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x62, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x63, '=', 'Value', '', 1],
  ),
  badge: '243516',
  id: 220160,
})

set.addAchievement({
  title: 'I use to play Mahjong with my Father',
  description: 'Defeat the third opponent (win all the money).',
  points: 10,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0x3b, '=', 'Value', '', 5],
    ['AndNext', 'Mem', '8bit', 0x3a, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x39, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0x3e, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0x3d, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x3c, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x62, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x62, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x63, '=', 'Value', '', 2],
  ),
  badge: '243517',
  id: 220161,
})

set.addAchievement({
  title: 'Go Fish',
  description: 'Defeat the fourth opponent (win all the money).',
  points: 10,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0x3b, '=', 'Value', '', 5],
    ['AndNext', 'Mem', '8bit', 0x3a, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x39, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0x3e, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0x3d, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x3c, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x62, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x62, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x63, '=', 'Value', '', 3],
  ),
  badge: '243518',
  id: 220162,
})

set.addAchievement({
  title: 'The Mysteries of Mahjong',
  description: 'Defeat the fifth opponent (win all the money).',
  points: 10,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0x3b, '=', 'Value', '', 5],
    ['AndNext', 'Mem', '8bit', 0x3a, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x39, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0x3e, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0x3d, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x3c, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x62, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x62, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x63, '=', 'Value', '', 4],
  ),
  badge: '243519',
  id: 220163,
})

set.addAchievement({
  title: 'Miss Jong',
  description: 'Defeat the sixth opponent (win all the money).',
  points: 10,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0x3b, '=', 'Value', '', 5],
    ['AndNext', 'Mem', '8bit', 0x3a, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x39, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0x3e, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0x3d, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x3c, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x62, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x62, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x63, '=', 'Value', '', 5],
  ),
  badge: '243520',
  id: 220164,
})

set.addAchievement({
  title: 'Mai Jong',
  description: 'Defeat the seventh opponent (win all the money).',
  points: 10,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0x3b, '=', 'Value', '', 5],
    ['AndNext', 'Mem', '8bit', 0x3a, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x39, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0x3e, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0x3d, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x3c, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x62, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x62, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x63, '=', 'Value', '', 6],
  ),
  badge: '243521',
  id: 220165,
})

set.addAchievement({
  title: 'The Elegance of Mahjong',
  description: 'Defeat the eighth opponent (win all the money).',
  points: 10,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0x3b, '=', 'Value', '', 5],
    ['AndNext', 'Mem', '8bit', 0x3a, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x39, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0x3e, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0x3d, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x3c, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '8bit', 0x62, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x62, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x63, '=', 'Value', '', 7],
  ),
  badge: '243522',
  id: 220166,
})

export default set

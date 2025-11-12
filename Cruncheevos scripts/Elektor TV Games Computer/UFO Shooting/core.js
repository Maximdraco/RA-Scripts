import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 24666, title: 'UFO Shooting' })

set.addAchievement({
  title: 'Warning: Unknown Emulator',
  description: 'Hardcore unlocks cannot be earned using this emulator.',
  points: 0,
  conditions: '1=1.300.',
  badge: '00000',
  id: 101000001,
})

set.addAchievement({
  title: 'El Duende',
  description: 'Destroy a UFO or Missile.',
  points: 1,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x1e8, '<', 'Prior', '8bit', 0x1e8],
    ['', 'Mem', '8bit', 0x3a5, '<', 'Delta', '8bit', 0x3a5],
  ),
  badge: '367299',
  id: 328229,
})

set.addAchievement({
  title: 'NO DRACULA!',
  description: 'Destroy a Missile.',
  points: 1,
  type: 'progression',
  conditions: $(
    ['SubSource', 'BCD', '8bit', 0x3a5],
    ['AddSource', 'Delta', 'Upper4', 0x3a5, '*', 'Value', '', 10],
    ['AddSource', 'Delta', 'Lower4', 0x3a5],
    ['', 'Value', '', 0, '=', 'Value', '', 3],
  ),
  badge: '367300',
  id: 328230,
})

set.addAchievement({
  title: 'NO MUMMY!',
  description: 'Destroy all UFOs.',
  points: 2,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x3a5, '=', 'Delta', '8bit', 0x3a5],
    ['', 'Mem', '8bit', 0x3a5, '=', 'Value', '', 0],
  ),
  badge: '367301',
  id: 328231,
})

set.addAchievement({
  title: 'NO ALIEN!',
  description:
    'Destroy all UFOs without using your last bullet (Ammo never reach 0).',
  points: 2,
  conditions: $(
    ['', 'Mem', '8bit', 0x1e8, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x3a5, '<', 'Delta', '8bit', 0x3a5],
    ['', 'Mem', '8bit', 0x3a5, '=', 'Value', '', 0],
  ),
  badge: '367302',
  id: 328232,
})

set.addAchievement({
  title: 'NO DUENDE!',
  description: 'Destroy all UFOS without having less than 10 bullets.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x1e8, '>=', 'Value', '', 16],
    ['', 'Mem', '8bit', 0x3a5, '<', 'Delta', '8bit', 0x3a5],
    ['', 'Mem', '8bit', 0x3a5, '=', 'Value', '', 0],
  ),
  badge: '367303',
  id: 328233,
})

set.addAchievement({
  title: 'NO MARCIANITO!',
  description: 'Destroy all UFOS without having less than 20 bullets.',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x1e8, '>=', 'Value', '', 32],
    ['', 'Mem', '8bit', 0x3a5, '<', 'Delta', '8bit', 0x3a5],
    ['', 'Mem', '8bit', 0x3a5, '=', 'Value', '', 0],
  ),
  badge: '367304',
  id: 328234,
})

export default set

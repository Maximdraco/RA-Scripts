import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 22375, title: 'Ancient Tribe' })

set.addAchievement({
  title: 'Warning: Unknown Emulator',
  description: 'Hardcore unlocks cannot be earned using this emulator.',
  points: 0,
  conditions: '1=1.300.',
  badge: '00000',
  id: 101000001,
})

set.addAchievement({
  title: 'Berserker',
  description: 'Unlock the Berserkers.',
  points: 1,
  conditions: $(
    ['', 'Mem', 'Bit0', 0x16b7fc, '>', 'Delta', 'Bit0', 0x16b7fc],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315169',
  id: 284323,
})

set.addAchievement({
  title: 'Small Army',
  description: 'Unlock the Warriors.',
  points: 3,
  conditions: $(
    ['', 'Mem', 'Bit0', 0x16b800, '>', 'Delta', 'Bit0', 0x16b800],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315170',
  id: 284324,
})

set.addAchievement({
  title: 'Rocks',
  description: 'Unlock the Slingers.',
  points: 1,
  conditions: $(
    ['', 'Mem', 'Bit0', 0x16b804, '>', 'Delta', 'Bit0', 0x16b804],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315171',
  id: 284325,
})

set.addAchievement({
  title: 'Boomerang Hunters',
  description: 'Unlock the Hunters.',
  points: 2,
  conditions: $(
    ['', 'Mem', 'Bit0', 0x16b808, '>', 'Delta', 'Bit0', 0x16b808],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315172',
  id: 284326,
})

set.addAchievement({
  title: 'Long Range Attack',
  description: 'Unlock the Spear man.',
  points: 3,
  conditions: $(
    ['', 'Mem', 'Bit0', 0x16b80c, '>', 'Delta', 'Bit0', 0x16b80c],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315173',
  id: 284327,
})

set.addAchievement({
  title: 'Shaman King',
  description: 'Unlock the Shamans.',
  points: 1,
  conditions: $(
    ['', 'Mem', 'Bit0', 0x16b810, '>', 'Delta', 'Bit0', 0x16b810],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315174',
  id: 284328,
})

set.addAchievement({
  title: 'Speedy Doctor',
  description: 'Unlock the Witch Doctors.',
  points: 1,
  conditions: $(
    ['', 'Mem', 'Bit0', 0x16b814, '>', 'Delta', 'Bit0', 0x16b814],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315175',
  id: 284329,
})

set.addAchievement({
  title: 'Mystic Buff',
  description: 'Unlock the Mystics.',
  points: 1,
  conditions: $(
    ['', 'Mem', 'Bit0', 0x16b818, '>', 'Delta', 'Bit0', 0x16b818],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315176',
  id: 284330,
})

set.addAchievement({
  title: 'Rain Dance',
  description: 'Unlock the Healing Rain power.',
  points: 1,
  conditions: $(
    ['', 'Mem', 'Bit0', 0x16b81c, '>', 'Delta', 'Bit0', 0x16b81c],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315177',
  id: 284331,
})

set.addAchievement({
  title: 'Air Bender',
  description: 'Unlock the Storm Wind power.',
  points: 2,
  conditions: $(
    ['', 'Mem', 'Bit0', 0x16b820, '>', 'Delta', 'Bit0', 0x16b820],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315178',
  id: 284332,
})

set.addAchievement({
  title: 'Thunder Storm',
  description: 'Unlock the Thunder power.',
  points: 3,
  conditions: $(
    ['', 'Mem', 'Bit0', 0x16b824, '>', 'Delta', 'Bit0', 0x16b824],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315179',
  id: 284333,
})

set.addAchievement({
  title: 'The Best Ground Type Move',
  description: 'Unlock the Earthquake power.',
  points: 4,
  conditions: $(
    ['', 'Mem', '8bit', 0x16b828, '>', 'Delta', '8bit', 0x16b828],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315180',
  id: 284334,
})

set.addAchievement({
  title: 'Oasis',
  description: 'Upgrade your village to level 2.',
  points: 1,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x16b7e8, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x16b7e8, '=', 'Value', '', 2],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315181',
  id: 284335,
})

set.addAchievement({
  title: 'Volcano',
  description: 'Upgrade your village to level 3.',
  points: 1,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x16b7e8, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x16b7e8, '=', 'Value', '', 3],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315182',
  id: 284336,
})

set.addAchievement({
  title: 'Winter Season',
  description: 'Upgrade your village to level 4.',
  points: 1,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x16b7e8, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x16b7e8, '=', 'Value', '', 4],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315183',
  id: 284337,
})

set.addAchievement({
  title: 'The Darkest Forest',
  description: 'Upgrade your village to level 5.',
  points: 1,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x16b7e8, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0x16b7e8, '=', 'Value', '', 5],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315184',
  id: 284338,
})

set.addAchievement({
  title: 'Another Desert',
  description: 'Upgrade your village to level 6.',
  points: 2,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x16b7e8, '=', 'Value', '', 5],
    ['', 'Mem', '8bit', 0x16b7e8, '=', 'Value', '', 6],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315185',
  id: 284339,
})

set.addAchievement({
  title: 'The Black Rock',
  description: 'Upgrade your village to level 7.',
  points: 2,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x16b7e8, '=', 'Value', '', 6],
    ['', 'Mem', '8bit', 0x16b7e8, '=', 'Value', '', 7],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315186',
  id: 284340,
})

set.addAchievement({
  title: 'Winter Season II: Electric Boogalu',
  description: 'Upgrade your village to level 8.',
  points: 3,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x16b7e8, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0x16b7e8, '=', 'Value', '', 8],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315187',
  id: 284341,
})

set.addAchievement({
  title: 'Forest of Shadows',
  description: 'Upgrade your village to level 9.',
  points: 3,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x16b7e8, '=', 'Value', '', 8],
    ['', 'Mem', '8bit', 0x16b7e8, '=', 'Value', '', 9],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315188',
  id: 284342,
})

set.addAchievement({
  title: 'The Dread Lands',
  description: 'Upgrade your village to level 10.',
  points: 4,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x16b7e8, '=', 'Value', '', 9],
    ['', 'Mem', '8bit', 0x16b7e8, '=', 'Value', '', 10],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315189',
  id: 284343,
})

set.addAchievement({
  title: 'Land of Flames',
  description: 'Upgrade your village to level 11.',
  points: 4,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x16b7e8, '=', 'Value', '', 10],
    ['', 'Mem', '8bit', 0x16b7e8, '=', 'Value', '', 11],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315190',
  id: 284344,
})

set.addAchievement({
  title: 'The Ice Peak',
  description: 'Upgrade your village to level 12.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x16b7e8, '=', 'Value', '', 11],
    ['', 'Mem', '8bit', 0x16b7e8, '=', 'Value', '', 12],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315191',
  id: 284345,
})

set.addAchievement({
  title: 'Another Forest',
  description: 'Upgrade your village to level 13.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x16b7e8, '=', 'Value', '', 12],
    ['', 'Mem', '8bit', 0x16b7e8, '=', 'Value', '', 13],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315192',
  id: 284346,
})

set.addAchievement({
  title: 'The Desert of the Dragon Bone',
  description: 'Upgrade your village to level 14.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x16b7e8, '=', 'Value', '', 13],
    ['', 'Mem', '8bit', 0x16b7e8, '=', 'Value', '', 14],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315193',
  id: 284347,
})

set.addAchievement({
  title: 'More Mountains',
  description: 'Upgrade your village to level 15.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x16b7e8, '=', 'Value', '', 14],
    ['', 'Mem', '8bit', 0x16b7e8, '=', 'Value', '', 15],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315194',
  id: 284348,
})

set.addAchievement({
  title: 'The Everest',
  description: 'Upgrade your village to level 16.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0x16b7e8, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x16b7e8, '=', 'Value', '', 16],
    ['PauseIf', 'Mem', '8bit', 0xb2840, '=', 'Value', '', 16],
  ),
  badge: '315195',
  id: 284349,
})

set.addAchievement({
  title: 'The Greatest God',
  description:
    'Keep a population of 5000 villagers or more during 3 days to complete your miracle.',
  points: 10,
  type: 'win_condition',
  conditions: $(
    ['PauseIf', 'Delta', '8bit', 0xb2840, '=', 'Value', '', 16],
    ['ResetIf', 'Mem', '16bit', 0x16b7e4, '<', 'Value', '', 5000],
    ['', 'Prior', '8bit', 0x16b7f0, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x16b7f0, '=', 'Value', '', 3],
  ),
  badge: '315196',
  id: 284350,
})

set.addLeaderboard({
  title: 'Completion Date',
  description: 'How fast can you complete your miracle?',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Prior', '8bit', 0x16b7f0, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0x16b7f0, '=', 'Value', '', 3],
      ['ResetIf', 'Mem', '16bit', 0x16b7e4, '<', 'Value', '', 5000],
    ),
    cancel: '1=5',
    submit: $(
      ['', 'Prior', '8bit', 0x16b7f0, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0x16b7f0, '=', 'Value', '', 3],
      ['ResetIf', 'Mem', '16bit', 0x16b7e4, '<', 'Value', '', 5000],
    ),
    value: $(['Measured', 'Mem', '16bit', 0x16b7d4, '=', 'Value', '', 5]),
  },
  id: 55224,
})

set.addLeaderboard({
  title: 'Total Population',
  description: 'How big your tribe can be before completing your miracle?',
  lowerIsBetter: false,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Prior', '8bit', 0x16b7f0, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0x16b7f0, '=', 'Value', '', 3],
      ['ResetIf', 'Mem', '16bit', 0x16b7e4, '<', 'Value', '', 5000],
    ),
    cancel: '1=5',
    submit: $(
      ['', 'Prior', '8bit', 0x16b7f0, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0x16b7f0, '=', 'Value', '', 3],
      ['ResetIf', 'Mem', '16bit', 0x16b7e4, '<', 'Value', '', 5000],
    ),
    value: $(['Measured', 'Mem', '16bit', 0x16b7e4, '=', 'Value', '', 16384]),
  },
  id: 55225,
})

set.addLeaderboard({
  title: 'Wood Recollected',
  description:
    'How much wood can you recollect before completing your miracle?',
  lowerIsBetter: false,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Prior', '8bit', 0x16b7f0, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0x16b7f0, '=', 'Value', '', 3],
      ['ResetIf', 'Mem', '16bit', 0x16b7e4, '<', 'Value', '', 5000],
    ),
    cancel: '1=5',
    submit: $(
      ['', 'Prior', '8bit', 0x16b7f0, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0x16b7f0, '=', 'Value', '', 3],
      ['ResetIf', 'Mem', '16bit', 0x16b7e4, '<', 'Value', '', 5000],
    ),
    value: $(['Measured', 'Mem', '16bit', 0x16b7dc, '=', 'Value', '', 0]),
  },
  id: 55226,
})

set.addLeaderboard({
  title: 'Stone Recollected',
  description:
    'How much stone can you recollect before completing your miracle?',
  lowerIsBetter: false,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Prior', '8bit', 0x16b7f0, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0x16b7f0, '=', 'Value', '', 3],
      ['ResetIf', 'Mem', '16bit', 0x16b7e4, '<', 'Value', '', 5000],
    ),
    cancel: '1=5',
    submit: $(
      ['', 'Prior', '8bit', 0x16b7f0, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0x16b7f0, '=', 'Value', '', 3],
      ['ResetIf', 'Mem', '16bit', 0x16b7e4, '<', 'Value', '', 5000],
    ),
    value: $(['Measured', 'Mem', '16bit', 0x16b7d8, '=', 'Value', '', 0]),
  },
  id: 55227,
})

set.addLeaderboard({
  title: 'Food Recollected',
  description:
    'How much food can you recollect before completing your miracle?',
  lowerIsBetter: false,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Prior', '8bit', 0x16b7f0, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0x16b7f0, '=', 'Value', '', 3],
      ['ResetIf', 'Mem', '16bit', 0x16b7e4, '<', 'Value', '', 5000],
    ),
    cancel: '1=5',
    submit: $(
      ['', 'Prior', '8bit', 0x16b7f0, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0x16b7f0, '=', 'Value', '', 3],
      ['ResetIf', 'Mem', '16bit', 0x16b7e4, '<', 'Value', '', 5000],
    ),
    value: $(['Measured', 'Mem', '16bit', 0x16b7e0, '=', 'Value', '', 65535]),
  },
  id: 55228,
})

set.addLeaderboard({
  title: 'Total Kills',
  description:
    'How many creatures can you kill before completing your miracle?',
  lowerIsBetter: false,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Prior', '8bit', 0x16b7f0, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0x16b7f0, '=', 'Value', '', 3],
      ['ResetIf', 'Mem', '16bit', 0x16b7e4, '<', 'Value', '', 5000],
    ),
    cancel: '1=5',
    submit: $(
      ['', 'Prior', '8bit', 0x16b7f0, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0x16b7f0, '=', 'Value', '', 3],
      ['ResetIf', 'Mem', '16bit', 0x16b7e4, '<', 'Value', '', 5000],
    ),
    value: $(['Measured', 'Mem', '16bit', 0x16b7ec, '=', 'Value', '', 4358]),
  },
  id: 55229,
})

export default set

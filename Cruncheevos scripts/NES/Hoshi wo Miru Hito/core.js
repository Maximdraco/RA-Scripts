import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 5140, title: 'Hoshi wo Miru Hito' })

set.addAchievement({
  title: 'Warning: Unknown Emulator',
  description: 'Hardcore unlocks cannot be earned using this emulator.',
  points: 0,
  conditions: '1=1.300.',
  badge: '00000',
  id: 101000001,
})

set.addAchievement({
  title: 'Not Even a Clue?',
  description: 'Find the city of Mamus.',
  points: 1,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x69, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x6a, '=', 'Value', '', 5],
    ['', 'Mem', '8bit', 0x6a, '=', 'Value', '', 0],
  ),
  badge: '217739',
  id: 195823,
})

set.addAchievement({
  title: 'Basic Healing',
  description: 'Create yours first Healing Potion.',
  points: 2,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0xb5, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xb5, '=', 'Value', '', 1],
  ),
  badge: '217740',
  id: 195824,
})

set.addAchievement({
  title: 'Local Doctor',
  description:
    'Talk to any citizen of Deus after bring the cure (A Healing Potion).',
  points: 1,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x69, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x6a, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb5, '>', 'Value', '', 0],
    ['', 'Mem', 'Bit5', 0x5c, '>', 'Delta', 'Bit5', 0x5c],
  ),
  badge: '217741',
  id: 195825,
})

set.addAchievement({
  title: 'The Shiba No Inu',
  description: 'Recruit Shiba in the Underpass.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x69, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x6a, '=', 'Value', '', 7],
    ['', 'Mem', 'Bit0', 0x313, '>', 'Delta', 'Bit0', 0x313],
  ),
  badge: '217742',
  id: 195826,
})

set.addAchievement({
  title: '$100 to My Pocket',
  description: 'Find the 100 gold in the Underpass, where you find Shiba.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x69, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x6a, '=', 'Value', '', 3],
    ['', 'Mem', 'Bit3', 0x5c, '>', 'Delta', 'Bit3', 0x5c],
  ),
  badge: '217743',
  id: 195827,
})

set.addAchievement({
  title: '$200 to My Pocket',
  description: 'Find the 200 gold in the Underpass, where you find Shiba.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x69, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x6a, '=', 'Value', '', 3],
    ['', 'Mem', 'Bit4', 0x5c, '>', 'Delta', 'Bit4', 0x5c],
  ),
  badge: '217744',
  id: 195828,
})

set.addAchievement({
  title: 'A Silver ID to My Pocket',
  description: 'Find the Silver ID in the Underpass, where you find Shiba.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x69, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x6a, '=', 'Value', '', 3],
    ['', 'Mem', 'Bit2', 0x5c, '>', 'Delta', 'Bit2', 0x5c],
  ),
  badge: '217745',
  id: 195829,
})

set.addAchievement({
  title: `It's Dangerous to Go Alone, Take This Silver Id Card`,
  description: `Get the Silver ID card from the old man in the Ark City Bridge's secret room.`,
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x69, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x6a, '=', 'Value', '', 6],
    ['', 'Mem', 'Bit0', 0x5d, '>', 'Delta', 'Bit0', 0x5c],
  ),
  badge: '217746',
  id: 195830,
})

set.addAchievement({
  title: 'The Psychic Girl',
  description: 'Recruit Ainu in the Residential Area of Ark City.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x69, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x6a, '=', 'Value', '', 2],
    ['', 'Mem', 'Bit0', 0x347, '>', 'Delta', 'Bit0', 0x347],
  ),
  badge: '217747',
  id: 195831,
})

set.addAchievement({
  title: `Obligatory Talk to ''x'' NPC Mission`,
  description:
    'Complete the mission to recruit Misa in one session (see comment).',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0x69, '=', 'Value', '', 2],
    ['AndNext', 'Mem', '8bit', 0x6a, '=', 'Value', '', 5],
    ['', 'Mem', 'Bit6', 0x5d, '>', 'Delta', 'Bit6', 0x60, 1],
    ['AndNext', 'Mem', '8bit', 0x69, '=', 'Value', '', 2],
    ['AndNext', 'Mem', '8bit', 0x6a, '=', 'Value', '', 1],
    ['', 'Mem', 'Bit1', 0x5d, '>', 'Delta', 'Bit1', 0x60, 1],
    ['AndNext', 'Mem', '8bit', 0x69, '=', 'Value', '', 2],
    ['AndNext', 'Mem', '8bit', 0x6a, '=', 'Value', '', 5],
    ['', 'Mem', 'Bit2', 0x5d, '>', 'Delta', 'Bit2', 0x60, 1],
    ['AndNext', 'Mem', '8bit', 0x69, '=', 'Value', '', 2],
    ['AndNext', 'Mem', '8bit', 0x6a, '=', 'Value', '', 2],
    ['', 'Mem', 'Bit3', 0x5d, '>', 'Delta', 'Bit3', 0x60, 1],
    ['', 'Mem', '8bit', 0x69, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x6a, '=', 'Value', '', 2],
    ['OrNext', 'Mem', '8bit', 0xc4, '=', 'Value', '', 3],
    ['OrNext', 'Mem', '8bit', 0xc5, '=', 'Value', '', 3],
    ['OrNext', 'Mem', '8bit', 0xc6, '=', 'Value', '', 3],
    ['OrNext', 'Mem', '8bit', 0xc7, '=', 'Value', '', 3],
    ['OrNext', 'Mem', '8bit', 0xc8, '=', 'Value', '', 3],
    ['OrNext', 'Mem', '8bit', 0xc9, '=', 'Value', '', 3],
    ['OrNext', 'Mem', '8bit', 0xca, '=', 'Value', '', 3],
    ['OrNext', 'Mem', '8bit', 0xcb, '=', 'Value', '', 3],
    ['OrNext', 'Mem', '8bit', 0xcc, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xcd, '=', 'Value', '', 3],
  ),
  badge: '217748',
  id: 195832,
})

set.addAchievement({
  title: 'Key Item to Continue',
  description: 'Get a Yellow ID card in the Government Area of Ark City.',
  points: 2,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x69, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x6a, '=', 'Value', '', 1],
    ['OrNext', 'Mem', '8bit', 0xc4, '=', 'Value', '', 6],
    ['OrNext', 'Mem', '8bit', 0xc5, '=', 'Value', '', 6],
    ['OrNext', 'Mem', '8bit', 0xc6, '=', 'Value', '', 6],
    ['OrNext', 'Mem', '8bit', 0xc7, '=', 'Value', '', 6],
    ['OrNext', 'Mem', '8bit', 0xc8, '=', 'Value', '', 6],
    ['OrNext', 'Mem', '8bit', 0xc9, '=', 'Value', '', 6],
    ['OrNext', 'Mem', '8bit', 0xca, '=', 'Value', '', 6],
    ['OrNext', 'Mem', '8bit', 0xcb, '=', 'Value', '', 6],
    ['OrNext', 'Mem', '8bit', 0xcc, '=', 'Value', '', 6],
    ['', 'Mem', '8bit', 0xcd, '=', 'Value', '', 6],
  ),
  badge: '217749',
  id: 195833,
})

set.addAchievement({
  title: 'The Troublemaker',
  description: `Complete Misa's mission and recruit her.`,
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x69, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x6a, '=', 'Value', '', 7],
    ['', 'Mem', 'Bit0', 0x32d, '>', 'Delta', 'Bit0', 0x32d],
  ),
  badge: '217750',
  id: 195834,
})

set.addAchievement({
  title: 'Important Hidden Item to the Story',
  description: 'Get the Oxygen Pipe hidden in the Exit Tunnels.',
  points: 3,
  type: 'progression',
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x69, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0x6a, '=', 'Value', '', 3],
    ),
    alt1: $(
      ['', 'Delta', '8bit', 0xc4, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xc4, '=', 'Value', '', 8],
    ),
    alt2: $(
      ['', 'Delta', '8bit', 0xc5, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xc5, '=', 'Value', '', 8],
    ),
    alt3: $(
      ['', 'Delta', '8bit', 0xc6, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xc6, '=', 'Value', '', 8],
    ),
    alt4: $(
      ['', 'Delta', '8bit', 0xc7, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xc7, '=', 'Value', '', 8],
    ),
    alt5: $(
      ['', 'Delta', '8bit', 0xc8, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xc8, '=', 'Value', '', 8],
    ),
    alt6: $(
      ['', 'Delta', '8bit', 0xc9, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xc9, '=', 'Value', '', 8],
    ),
    alt7: $(
      ['', 'Delta', '8bit', 0xca, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xca, '=', 'Value', '', 8],
    ),
    alt8: $(
      ['', 'Delta', '8bit', 0xcb, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xcb, '=', 'Value', '', 8],
    ),
    alt9: $(
      ['', 'Delta', '8bit', 0xcc, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xcc, '=', 'Value', '', 8],
    ),
    alt10: $(
      ['', 'Delta', '8bit', 0xcd, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xcd, '=', 'Value', '', 8],
    ),
  },
  badge: '217751',
  id: 195835,
})

set.addAchievement({
  title: 'No Boss Battle?!',
  description:
    'Talk to all the important Dolphins and see the ending in one session (see comment).',
  points: 10,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0x69, '=', 'Value', '', 3],
    ['AndNext', 'Mem', '8bit', 0x6a, '=', 'Value', '', 10],
    ['', 'Mem', 'Bit7', 0x5d, '>', 'Delta', 'Bit7', 0x5d, 1],
    ['AndNext', 'Mem', '8bit', 0x69, '=', 'Value', '', 3],
    ['AndNext', 'Mem', '8bit', 0x6a, '=', 'Value', '', 9],
    ['', 'Mem', 'Bit0', 0x5e, '>', 'Delta', 'Bit0', 0x5e, 1],
    ['AndNext', 'Mem', '8bit', 0x69, '=', 'Value', '', 3],
    ['AndNext', 'Mem', '8bit', 0x6a, '=', 'Value', '', 10],
    ['', 'Mem', 'Bit1', 0x5e, '>', 'Delta', 'Bit1', 0x5e, 1],
    ['', 'Mem', '8bit', 0x69, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x6a, '=', 'Value', '', 9],
    ['', 'Delta', '8bit', 0x9, '=', 'Value', '', 71],
    ['', 'Mem', '8bit', 0x9, '=', 'Value', '', 199],
  ),
  badge: '217752',
  id: 195836,
})

export default set

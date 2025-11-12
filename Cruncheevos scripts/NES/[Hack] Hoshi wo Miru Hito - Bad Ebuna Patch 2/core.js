import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({
  gameId: 11062,
  title: '~Hack~ Hoshi wo Miru Hito: Bad Ebuna Patch 2',
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
  title: 'Still No Clues?',
  description: 'Find the city of Mamus.',
  points: 1,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x69, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x6a, '=', 'Value', '', 5],
    ['', 'Mem', '8bit', 0x6a, '=', 'Value', '', 0],
  ),
  badge: '242482',
  id: 219223,
})

set.addAchievement({
  title: 'First Aids',
  description: 'Create your first Healing Potion.',
  points: 2,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0xb5, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xb5, '=', 'Value', '', 1],
  ),
  badge: '242483',
  id: 219224,
})

set.addAchievement({
  title: '1-UP Potion',
  description: 'Create your first Revive Potion.',
  points: 2,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0xb4, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xb4, '=', 'Value', '', 1],
  ),
  badge: '242484',
  id: 219225,
})

set.addAchievement({
  title: 'Local Healer',
  description:
    'Talk to any citizen of Deus after bring the cure (a Healing Potion).',
  points: 1,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x69, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x6a, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb5, '>', 'Value', '', 0],
    ['', 'Mem', 'Bit5', 0x5c, '>', 'Delta', 'Bit5', 0x5c],
  ),
  badge: '242485',
  id: 219226,
})

set.addAchievement({
  title: 'No One Will Defeat Us Together',
  description: 'Recruit Shiba in the Underpass.',
  points: 3,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x69, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x6a, '=', 'Value', '', 7],
    ['', 'Mem', 'Bit0', 0x313, '>', 'Delta', 'Bit0', 0x313],
  ),
  badge: '242486',
  id: 219227,
})

set.addAchievement({
  title: 'Look, 100 Coins!',
  description: 'Find the 100 gold in the Underpass, where you find Shiba.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x69, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x6a, '=', 'Value', '', 3],
    ['', 'Mem', 'Bit3', 0x5c, '>', 'Delta', 'Bit3', 0x5c],
  ),
  badge: '242487',
  id: 219228,
})

set.addAchievement({
  title: 'More Coins',
  description: 'Find the 200 gold in the Underpass, where you find Shiba.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x69, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x6a, '=', 'Value', '', 3],
    ['', 'Mem', 'Bit4', 0x5c, '>', 'Delta', 'Bit4', 0x5c],
  ),
  badge: '242488',
  id: 219229,
})

set.addAchievement({
  title: 'Who Lost an Id?',
  description: 'Find the Silver ID in the Underpass, where you find Shiba.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x69, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x6a, '=', 'Value', '', 3],
    ['', 'Mem', 'Bit2', 0x5c, '>', 'Delta', 'Bit2', 0x5c],
  ),
  badge: '242489',
  id: 219230,
})

set.addAchievement({
  title: 'Receiving Gifts from Strangers',
  description: `Get the Silver ID card from the old man in the Ark City Bridge's secret room.`,
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x69, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x6a, '=', 'Value', '', 6],
    ['', 'Mem', 'Bit0', 0x5d, '>', 'Delta', 'Bit0', 0x5c],
  ),
  badge: '242490',
  id: 219231,
})

set.addAchievement({
  title: 'The Little Medium',
  description: 'Recruit Ainu in the Residential Area of Ark City.',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x69, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x6a, '=', 'Value', '', 2],
    ['', 'Mem', 'Bit0', 0x347, '>', 'Delta', 'Bit0', 0x347],
  ),
  badge: '242491',
  id: 219232,
})

set.addAchievement({
  title: `Don't Forget This Item`,
  description: 'Get a Yellow ID card in the Government Area of Ark City.',
  points: 2,
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
  badge: '242492',
  id: 219233,
})

set.addAchievement({
  title: `The Classic "Talk to Everyone" Mission`,
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
  badge: '242493',
  id: 219234,
})

set.addAchievement({
  title: 'A Complete Team',
  description: `Complete Misa's mission and recruit her.`,
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x69, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x6a, '=', 'Value', '', 7],
    ['', 'Mem', 'Bit0', 0x32d, '>', 'Delta', 'Bit0', 0x32d],
  ),
  badge: '242494',
  id: 219235,
})

set.addAchievement({
  title: 'Why They Hide This?!',
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
      ['', 'Delta', '8bit', 0xcd, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xcd, '=', 'Value', '', 8],
    ),
    alt2: $(
      ['', 'Delta', '8bit', 0xcc, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xcc, '=', 'Value', '', 8],
    ),
    alt3: $(
      ['', 'Delta', '8bit', 0xcb, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xcb, '=', 'Value', '', 8],
    ),
    alt4: $(
      ['', 'Delta', '8bit', 0xca, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xca, '=', 'Value', '', 8],
    ),
    alt5: $(
      ['', 'Delta', '8bit', 0xc9, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xc9, '=', 'Value', '', 8],
    ),
    alt6: $(
      ['', 'Delta', '8bit', 0xc8, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xc8, '=', 'Value', '', 8],
    ),
    alt7: $(
      ['', 'Delta', '8bit', 0xc7, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xc7, '=', 'Value', '', 8],
    ),
    alt8: $(
      ['', 'Delta', '8bit', 0xc6, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xc6, '=', 'Value', '', 8],
    ),
    alt9: $(
      ['', 'Delta', '8bit', 0xc5, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xc5, '=', 'Value', '', 8],
    ),
    alt10: $(
      ['', 'Delta', '8bit', 0xc4, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xc4, '=', 'Value', '', 8],
    ),
  },
  badge: '242495',
  id: 219236,
})

set.addAchievement({
  title: 'The Best Boss Battle in the History of Video Games',
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
  badge: '242496',
  id: 219237,
})

set.addAchievement({
  title: 'They Grow Up So Fast I',
  description: 'Level up Minami to level 7.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x309, '=', 'Value', '', 6],
    ['', 'Mem', '8bit', 0x309, '=', 'Value', '', 7],
  ),
  badge: '242497',
  id: 219238,
})

set.addAchievement({
  title: 'They Grow Up So Fast II',
  description: 'Level up Shiba to level 7.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x323, '=', 'Value', '', 6],
    ['', 'Mem', '8bit', 0x323, '=', 'Value', '', 7],
    ['', 'Mem', 'Bit0', 0x313, '=', 'Value', '', 1],
  ),
  badge: '242498',
  id: 219239,
})

set.addAchievement({
  title: 'They Grow Up So Fast III',
  description: 'Level up Ainu to level 7.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x357, '=', 'Value', '', 6],
    ['', 'Mem', '8bit', 0x357, '=', 'Value', '', 7],
    ['', 'Mem', 'Bit0', 0x347, '=', 'Value', '', 1],
  ),
  badge: '242499',
  id: 219240,
})

set.addAchievement({
  title: 'They Grow Up So Fast IV',
  description: 'Level up Misa to level 7.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x33d, '=', 'Value', '', 6],
    ['', 'Mem', '8bit', 0x33d, '=', 'Value', '', 7],
    ['', 'Mem', 'Bit0', 0x32d, '=', 'Value', '', 1],
  ),
  badge: '242500',
  id: 219241,
})

set.addAchievement({
  title: 'Ready for Battle I',
  description: 'Level up Minami to level 14.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x309, '=', 'Value', '', 13],
    ['', 'Mem', '8bit', 0x309, '=', 'Value', '', 14],
  ),
  badge: '242501',
  id: 219242,
})

set.addAchievement({
  title: 'Ready for Battle II',
  description: 'Level up Shiba to level 14.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x323, '=', 'Value', '', 13],
    ['', 'Mem', '8bit', 0x323, '=', 'Value', '', 14],
    ['', 'Mem', 'Bit0', 0x313, '=', 'Value', '', 1],
  ),
  badge: '242502',
  id: 219243,
})

set.addAchievement({
  title: 'Ready for Battle III',
  description: 'Level up Ainu to level 14.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x357, '=', 'Value', '', 13],
    ['', 'Mem', '8bit', 0x357, '=', 'Value', '', 14],
    ['', 'Mem', 'Bit0', 0x347, '=', 'Value', '', 1],
  ),
  badge: '242503',
  id: 219244,
})

set.addAchievement({
  title: 'Ready for Battle IV',
  description: 'Level up Misa to level 14.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x59, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x33d, '=', 'Value', '', 13],
    ['', 'Mem', '8bit', 0x33d, '=', 'Value', '', 14],
    ['', 'Mem', 'Bit0', 0x32d, '=', 'Value', '', 1],
  ),
  badge: '242504',
  id: 219245,
})

export default set

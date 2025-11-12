import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({
  gameId: 6684,
  title: '~Hack~ Pokémon STRIKE! Yellow Version',
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
  title: 'Dark Silver Rock Gym',
  description: 'Defeat Brock and earn the Boulder Badge in Pewter City.',
  points: 10,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 54],
    ['', 'Delta', '8bit', 0xd35d, '=', 'Value', '', 54],
    ['', 'Mem', 'Bit0', 0xd355, '>', 'Delta', 'Bit0', 0xd355],
  ),
  badge: '331383',
  id: 28096,
})

set.addAchievement({
  title: 'The Strongest Rock',
  description:
    'Defeat Brock on Set Mode without opening the bag in battle and without using Pokémon above level 15 at the beginning of the battle.',
  points: 10,
  type: 'missable',
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 54],
    ['AndNext', 'Mem', 'Bit6', 0xd354, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xd18b, '<=', 'Value', '', 15, 1],
    ['AndNext', 'Mem', '8bit', 0xd1b7, '<=', 'Value', '', 15, 1],
    ['AndNext', 'Mem', '8bit', 0xd1e3, '<=', 'Value', '', 15, 1],
    ['AndNext', 'Mem', '8bit', 0xd20f, '<=', 'Value', '', 15, 1],
    ['AndNext', 'Mem', '8bit', 0xd23b, '<=', 'Value', '', 15, 1],
    ['AndNext', 'Mem', '8bit', 0xd267, '<=', 'Value', '', 15, 1],
    ['', 'Mem', 'Bit0', 0xd355, '>', 'Delta', 'Bit0', 0xd355],
    ['ResetIf', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 54],
    ['ResetNextIf', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 54],
    ['AndNext', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 54],
    ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 234],
    ['PauseIf', 'Mem', '8bit', 0xcf93, '=', 'Value', '', 3, 1],
  ),
  badge: '355385',
  id: 319432,
})

set.addAchievement({
  title: 'Sky Blue... Fire Gym?',
  description: 'Defeat Blaine and earn the Volcano Badge in Cerulean City.',
  points: 10,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 65],
    ['', 'Delta', '8bit', 0xd35d, '=', 'Value', '', 65],
    ['', 'Mem', 'Bit1', 0xd355, '>', 'Delta', 'Bit1', 0xd355],
  ),
  badge: '331384',
  id: 28097,
})

set.addAchievement({
  title: `You Shouldn't Be Here`,
  description:
    'Defeat Blaine on Set Mode without opening the bag in battle and without using Pokémon above level 25 at the beginning of the battle.',
  points: 10,
  type: 'missable',
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 65],
    ['AndNext', 'Mem', 'Bit6', 0xd354, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xd18b, '<=', 'Value', '', 25, 1],
    ['AndNext', 'Mem', '8bit', 0xd1b7, '<=', 'Value', '', 25, 1],
    ['AndNext', 'Mem', '8bit', 0xd1e3, '<=', 'Value', '', 25, 1],
    ['AndNext', 'Mem', '8bit', 0xd20f, '<=', 'Value', '', 25, 1],
    ['AndNext', 'Mem', '8bit', 0xd23b, '<=', 'Value', '', 25, 1],
    ['AndNext', 'Mem', '8bit', 0xd267, '<=', 'Value', '', 25, 1],
    ['', 'Mem', 'Bit1', 0xd355, '>', 'Delta', 'Bit1', 0xd355],
    ['ResetIf', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 65],
    ['ResetNextIf', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 65],
    ['AndNext', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 65],
    ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 234],
    ['PauseIf', 'Mem', '8bit', 0xcf93, '=', 'Value', '', 3, 1],
  ),
  badge: '355377',
  id: 319424,
})

set.addAchievement({
  title: 'Bright Red Electric Gym',
  description: 'Defeat Lt. Surge and earn the Thunder Badge in Vermilion City.',
  points: 10,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 92],
    ['', 'Delta', '8bit', 0xd35d, '=', 'Value', '', 92],
    ['', 'Mem', 'Bit2', 0xd355, '>', 'Delta', 'Bit2', 0xd355],
  ),
  badge: '331385',
  id: 28099,
})

set.addAchievement({
  title: 'Thunder Storm',
  description:
    'Defeat Lt. Surge on Set Mode without opening the bag in battle and without using Pokémon above level 36 at the beginning of the battle.',
  points: 10,
  type: 'missable',
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 92],
    ['AndNext', 'Mem', 'Bit6', 0xd354, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xd18b, '<=', 'Value', '', 36, 1],
    ['AndNext', 'Mem', '8bit', 0xd1b7, '<=', 'Value', '', 36, 1],
    ['AndNext', 'Mem', '8bit', 0xd1e3, '<=', 'Value', '', 36, 1],
    ['AndNext', 'Mem', '8bit', 0xd20f, '<=', 'Value', '', 36, 1],
    ['AndNext', 'Mem', '8bit', 0xd23b, '<=', 'Value', '', 36, 1],
    ['AndNext', 'Mem', '8bit', 0xd267, '<=', 'Value', '', 36, 1],
    ['', 'Mem', 'Bit2', 0xd355, '>', 'Delta', 'Bit2', 0xd355],
    ['ResetIf', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 92],
    ['ResetNextIf', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 92],
    ['AndNext', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 92],
    ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 234],
    ['PauseIf', 'Mem', '8bit', 0xcf93, '=', 'Value', '', 3, 1],
  ),
  badge: '355378',
  id: 319425,
})

set.addAchievement({
  title: 'Soft Green Grass Gym',
  description: 'Defeat Erika and earn the Rainbow Badge in Celadon City.',
  points: 10,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 134],
    ['', 'Delta', '8bit', 0xd35d, '=', 'Value', '', 134],
    ['', 'Mem', 'Bit3', 0xd355, '>', 'Delta', 'Bit3', 0xd355],
  ),
  badge: '331386',
  id: 28100,
})

set.addAchievement({
  title: 'Elegant Flower',
  description:
    'Defeat Erika on Set Mode without opening the bag in battle and without using Pokémon above level 47 at the beginning of the battle.',
  points: 10,
  type: 'missable',
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 134],
    ['AndNext', 'Mem', 'Bit6', 0xd354, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xd18b, '<=', 'Value', '', 47, 1],
    ['AndNext', 'Mem', '8bit', 0xd1b7, '<=', 'Value', '', 47, 1],
    ['AndNext', 'Mem', '8bit', 0xd1e3, '<=', 'Value', '', 47, 1],
    ['AndNext', 'Mem', '8bit', 0xd20f, '<=', 'Value', '', 47, 1],
    ['AndNext', 'Mem', '8bit', 0xd23b, '<=', 'Value', '', 47, 1],
    ['AndNext', 'Mem', '8bit', 0xd267, '<=', 'Value', '', 47, 1],
    ['', 'Mem', 'Bit3', 0xd355, '>', 'Delta', 'Bit3', 0xd355],
    ['ResetIf', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 134],
    ['ResetNextIf', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 134],
    ['AndNext', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 134],
    ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 234],
    ['PauseIf', 'Mem', '8bit', 0xcf93, '=', 'Value', '', 3, 1],
  ),
  badge: '355379',
  id: 319426,
})

set.addAchievement({
  title: 'Bold Pink Poison Gym',
  description: 'Defeat Koga and earn the Soul Badge in Fuchsia City.',
  points: 10,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 157],
    ['', 'Delta', '8bit', 0xd35d, '=', 'Value', '', 157],
    ['', 'Mem', 'Bit4', 0xd355, '>', 'Delta', 'Bit4', 0xd355],
  ),
  badge: '331387',
  id: 28102,
})

set.addAchievement({
  title: 'Poison Style: Toxic Jutsu!',
  description:
    'Defeat Koga on Set Mode without opening the bag in battle and without using Pokémon above level 58 at the beginning of the battle.',
  points: 10,
  type: 'missable',
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 157],
    ['AndNext', 'Mem', 'Bit6', 0xd354, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xd18b, '<=', 'Value', '', 58, 1],
    ['AndNext', 'Mem', '8bit', 0xd1b7, '<=', 'Value', '', 58, 1],
    ['AndNext', 'Mem', '8bit', 0xd1e3, '<=', 'Value', '', 58, 1],
    ['AndNext', 'Mem', '8bit', 0xd20f, '<=', 'Value', '', 58, 1],
    ['AndNext', 'Mem', '8bit', 0xd23b, '<=', 'Value', '', 58, 1],
    ['AndNext', 'Mem', '8bit', 0xd267, '<=', 'Value', '', 58, 1],
    ['', 'Mem', 'Bit4', 0xd355, '>', 'Delta', 'Bit4', 0xd355],
    ['ResetIf', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 157],
    ['ResetNextIf', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 157],
    ['AndNext', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 157],
    ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 234],
    ['PauseIf', 'Mem', '8bit', 0xcf93, '=', 'Value', '', 3, 1],
  ),
  badge: '355380',
  id: 319427,
})

set.addAchievement({
  title: 'Golden Yellow Psychic Gym',
  description: 'Defeat Sabrina and earn the Marsh Badge in Saffron City.',
  points: 10,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 178],
    ['', 'Delta', '8bit', 0xd35d, '=', 'Value', '', 178],
    ['', 'Mem', 'Bit5', 0xd355, '>', 'Delta', 'Bit5', 0xd355],
  ),
  badge: '331388',
  id: 28103,
})

set.addAchievement({
  title: 'I Can See Your Future',
  description:
    'Defeat Sabrina on Set Mode without opening the bag in battle and without using Pokémon above level 67 at the beginning of the battle.',
  points: 10,
  type: 'missable',
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 178],
    ['AndNext', 'Mem', 'Bit6', 0xd354, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xd18b, '<=', 'Value', '', 67, 1],
    ['AndNext', 'Mem', '8bit', 0xd1b7, '<=', 'Value', '', 67, 1],
    ['AndNext', 'Mem', '8bit', 0xd1e3, '<=', 'Value', '', 67, 1],
    ['AndNext', 'Mem', '8bit', 0xd20f, '<=', 'Value', '', 67, 1],
    ['AndNext', 'Mem', '8bit', 0xd23b, '<=', 'Value', '', 67, 1],
    ['AndNext', 'Mem', '8bit', 0xd267, '<=', 'Value', '', 67, 1],
    ['', 'Mem', 'Bit5', 0xd355, '>', 'Delta', 'Bit5', 0xd355],
    ['ResetIf', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 178],
    ['ResetNextIf', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 178],
    ['AndNext', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 178],
    ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 234],
    ['PauseIf', 'Mem', '8bit', 0xcf93, '=', 'Value', '', 3, 1],
  ),
  badge: '355381',
  id: 319428,
})

set.addAchievement({
  title: 'Earthy Orange... Water Gym?',
  description: 'Defeat Misty and earn the Cascade Badge on Cinnabar Island.',
  points: 10,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 166],
    ['', 'Delta', '8bit', 0xd35d, '=', 'Value', '', 166],
    ['', 'Mem', 'Bit6', 0xd355, '>', 'Delta', 'Bit6', 0xd355],
  ),
  badge: '331389',
  id: 28105,
})

set.addAchievement({
  title: `You Shouldn't Be Here, Either!`,
  description:
    'Defeat Misty on Set Mode without opening the bag in battle and without using Pokémon above level 80 at the beginning of the battle.',
  points: 10,
  type: 'missable',
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 166],
    ['AndNext', 'Mem', 'Bit6', 0xd354, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xd18b, '<=', 'Value', '', 80, 1],
    ['AndNext', 'Mem', '8bit', 0xd1b7, '<=', 'Value', '', 80, 1],
    ['AndNext', 'Mem', '8bit', 0xd1e3, '<=', 'Value', '', 80, 1],
    ['AndNext', 'Mem', '8bit', 0xd20f, '<=', 'Value', '', 80, 1],
    ['AndNext', 'Mem', '8bit', 0xd23b, '<=', 'Value', '', 80, 1],
    ['AndNext', 'Mem', '8bit', 0xd267, '<=', 'Value', '', 80, 1],
    ['', 'Mem', 'Bit6', 0xd355, '>', 'Delta', 'Bit6', 0xd355],
    ['ResetIf', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 166],
    ['ResetNextIf', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 166],
    ['AndNext', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 166],
    ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 234],
    ['PauseIf', 'Mem', '8bit', 0xcf93, '=', 'Value', '', 3, 1],
  ),
  badge: '355382',
  id: 319429,
})

set.addAchievement({
  title: 'Calm Green Ground Gym',
  description: 'Defeat Giovanni and earn the Earth Badge in Viridian City.',
  points: 10,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 45],
    ['', 'Delta', '8bit', 0xd35d, '=', 'Value', '', 45],
    ['', 'Mem', 'Bit7', 0xd355, '>', 'Delta', 'Bit7', 0xd355],
  ),
  badge: '331393',
  id: 28106,
})

set.addAchievement({
  title: 'My Name Is Giovanni Giorgio, but Everybody Calls Me Giorgio',
  description:
    'Defeat Giovanni on Set Mode without opening the bag in battle and without using Pokémon above level 88 at the beginning of the battle.',
  points: 10,
  type: 'missable',
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 45],
    ['AndNext', 'Mem', 'Bit6', 0xd354, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0xd18b, '<=', 'Value', '', 88, 1],
    ['AndNext', 'Mem', '8bit', 0xd1b7, '<=', 'Value', '', 88, 1],
    ['AndNext', 'Mem', '8bit', 0xd1e3, '<=', 'Value', '', 88, 1],
    ['AndNext', 'Mem', '8bit', 0xd20f, '<=', 'Value', '', 88, 1],
    ['AndNext', 'Mem', '8bit', 0xd23b, '<=', 'Value', '', 88, 1],
    ['AndNext', 'Mem', '8bit', 0xd267, '<=', 'Value', '', 88, 1],
    ['', 'Mem', 'Bit7', 0xd355, '>', 'Delta', 'Bit7', 0xd355],
    ['ResetIf', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 45],
    ['ResetNextIf', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 45],
    ['AndNext', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 45],
    ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 234],
    ['PauseIf', 'Mem', '8bit', 0xcf93, '=', 'Value', '', 3, 1],
  ),
  badge: '355383',
  id: 319430,
})

set.addAchievement({
  title: 'Pokémon Master!',
  description: 'Defeat the Elite Four and the Champion of the Pokémon League.',
  points: 25,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 118],
    ['', 'Delta', '8bit', 0xd35d, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd5a1, '>', 'Delta', '8bit', 0xd5a1],
  ),
  badge: '331390',
  id: 28108,
})

set.addAchievement({
  title: 'Becoming the Champion in Style',
  description:
    'In a single session, defeat the Elite Four and Champion on Set Mode without opening the bag in battle.',
  points: 50,
  conditions: $(
    ['', 'Mem', 'Bit6', 0xd354, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 245, 1],
    ['', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 246, 1],
    ['', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 247, 1],
    ['', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 113, 1],
    ['', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 120, 1],
    ['', 'Mem', '8bit', 0xd5a1, '>', 'Delta', '8bit', 0xd5a1],
    ['AndNext', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 245],
    ['AndNext', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 246],
    ['AndNext', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 247],
    ['AndNext', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 113],
    ['AndNext', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 118],
    ['ResetIf', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 120],
    ['AndNext', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 245],
    ['AndNext', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 246],
    ['AndNext', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 247],
    ['AndNext', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 113],
    ['AndNext', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 118],
    ['ResetNextIf', 'Mem', '8bit', 0xd35d, '!=', 'Value', '', 120],
    ['OrNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 243],
    ['OrNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 237],
    ['AndNext', 'Mem', '8bit', 0xc026, '=', 'Value', '', 234],
    ['PauseIf', 'Mem', '8bit', 0xcf93, '=', 'Value', '', 3, 1],
  ),
  badge: '355384',
  id: 319431,
})

set.addAchievement({
  title: 'Full Party',
  description: 'Assemble a full team of Pokémon.',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0xd162, '=', 'Value', '', 6],
    ['', 'Delta', '8bit', 0xd162, '=', 'Value', '', 5],
  ),
  badge: '331391',
  id: 28109,
})

set.addAchievement({
  title: `Catch 'em All: STRIKE!`,
  description: 'Catch all 151 Pokémon and complete the Pokédex.',
  points: 50,
  conditions: $(
    ['SubSource', 'Mem', 'Bit7', 0xd308],
    ['AddSource', 'Mem', 'BitCount', 0xd2f6],
    ['AddSource', 'Mem', 'BitCount', 0xd2f7],
    ['AddSource', 'Mem', 'BitCount', 0xd2f8],
    ['AddSource', 'Mem', 'BitCount', 0xd2f9],
    ['AddSource', 'Mem', 'BitCount', 0xd2fa],
    ['AddSource', 'Mem', 'BitCount', 0xd2fb],
    ['AddSource', 'Mem', 'BitCount', 0xd2fc],
    ['AddSource', 'Mem', 'BitCount', 0xd2fd],
    ['AddSource', 'Mem', 'BitCount', 0xd2fe],
    ['AddSource', 'Mem', 'BitCount', 0xd2ff],
    ['AddSource', 'Mem', 'BitCount', 0xd300],
    ['AddSource', 'Mem', 'BitCount', 0xd301],
    ['AddSource', 'Mem', 'BitCount', 0xd302],
    ['AddSource', 'Mem', 'BitCount', 0xd303],
    ['AddSource', 'Mem', 'BitCount', 0xd304],
    ['AddSource', 'Mem', 'BitCount', 0xd305],
    ['AddSource', 'Mem', 'BitCount', 0xd306],
    ['AddSource', 'Mem', 'BitCount', 0xd307],
    ['Measured', 'Mem', 'BitCount', 0xd308, '=', 'Value', '', 151],
    ['SubSource', 'Delta', 'Bit7', 0xd308],
    ['AddSource', 'Delta', 'BitCount', 0xd2f6],
    ['AddSource', 'Delta', 'BitCount', 0xd2f7],
    ['AddSource', 'Delta', 'BitCount', 0xd2f8],
    ['AddSource', 'Delta', 'BitCount', 0xd2f9],
    ['AddSource', 'Delta', 'BitCount', 0xd2fa],
    ['AddSource', 'Delta', 'BitCount', 0xd2fb],
    ['AddSource', 'Delta', 'BitCount', 0xd2fc],
    ['AddSource', 'Delta', 'BitCount', 0xd2fd],
    ['AddSource', 'Delta', 'BitCount', 0xd2fe],
    ['AddSource', 'Delta', 'BitCount', 0xd2ff],
    ['AddSource', 'Delta', 'BitCount', 0xd300],
    ['AddSource', 'Delta', 'BitCount', 0xd301],
    ['AddSource', 'Delta', 'BitCount', 0xd302],
    ['AddSource', 'Delta', 'BitCount', 0xd303],
    ['AddSource', 'Delta', 'BitCount', 0xd304],
    ['AddSource', 'Delta', 'BitCount', 0xd305],
    ['AddSource', 'Delta', 'BitCount', 0xd306],
    ['AddSource', 'Delta', 'BitCount', 0xd307],
    ['', 'Delta', 'BitCount', 0xd308, '<=', 'Value', '', 150],
    ['SubSource', 'Delta', 'Bit7', 0xd308],
    ['AddSource', 'Delta', 'BitCount', 0xd2f6],
    ['AddSource', 'Delta', 'BitCount', 0xd2f7],
    ['AddSource', 'Delta', 'BitCount', 0xd2f8],
    ['AddSource', 'Delta', 'BitCount', 0xd2f9],
    ['AddSource', 'Delta', 'BitCount', 0xd2fa],
    ['AddSource', 'Delta', 'BitCount', 0xd2fb],
    ['AddSource', 'Delta', 'BitCount', 0xd2fc],
    ['AddSource', 'Delta', 'BitCount', 0xd2fd],
    ['AddSource', 'Delta', 'BitCount', 0xd2fe],
    ['AddSource', 'Delta', 'BitCount', 0xd2ff],
    ['AddSource', 'Delta', 'BitCount', 0xd300],
    ['AddSource', 'Delta', 'BitCount', 0xd301],
    ['AddSource', 'Delta', 'BitCount', 0xd302],
    ['AddSource', 'Delta', 'BitCount', 0xd303],
    ['AddSource', 'Delta', 'BitCount', 0xd304],
    ['AddSource', 'Delta', 'BitCount', 0xd305],
    ['AddSource', 'Delta', 'BitCount', 0xd306],
    ['AddSource', 'Delta', 'BitCount', 0xd307],
    ['', 'Delta', 'BitCount', 0xd308, '>=', 'Value', '', 140],
  ),
  badge: '331392',
  id: 28110,
})

set.addLeaderboard({
  title: 'Yellow Strike Speedrun',
  description:
    'How fast can you beat this hack in in-game time? (The time is submited once you enter the Hall of Fame)',
  lowerIsBetter: true,
  type: 'MINUTES',
  conditions: {
    start: $(
      ['', 'Delta', '8bit', 0xd5a1, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 118],
      ['', 'Delta', '8bit', 0xd35d, '!=', 'Value', '', 0],
    ),
    cancel: '1=0',
    submit: $(['', 'Mem', '8bit', 0xd35d, '=', 'Value', '', 118]),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda40, '*', 'Value', '', 60],
      ['Measured', 'Mem', '8bit', 0xda42],
    ),
  },
  id: 65417,
})

export default set

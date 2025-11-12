import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({
  gameId: 21533,
  title:
    '~Hack~ Pokémon Regulation Red | Regulation Blue [Subset - Solo Challenge]',
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
  title: 'The Original Dual-Type Starter',
  description: 'Defeat the Pokémon League with only Bulbasaur [Code: 0100D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10001],
  ),
  badge: '302256',
  id: 273076,
})

set.addAchievement({
  title: 'A Floral Frog',
  description: 'Defeat the Pokémon League with only Ivysaur [Code: 0200D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10002],
  ),
  badge: '302257',
  id: 273077,
})

set.addAchievement({
  title: 'Rafflesiamon',
  description: 'Defeat the Pokémon League with only Venusaur [Code: 0300D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10003],
  ),
  badge: '302258',
  id: 273078,
})

set.addAchievement({
  title: 'Hard Mode',
  description:
    'Defeat the Pokémon League with only Charmander [Code: 0400D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10004],
  ),
  badge: '302259',
  id: 273079,
})

set.addAchievement({
  title: 'A Fiery Lizard',
  description:
    'Defeat the Pokémon League with only Charmeleon [Code: 0500D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10005],
  ),
  badge: '302260',
  id: 273080,
})

set.addAchievement({
  title: 'The Pokémon on the Red Box',
  description: 'Defeat the Pokémon League with only Charizard [Code: 0600D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10006],
  ),
  badge: '302261',
  id: 273081,
})

set.addAchievement({
  title: 'Mini Minogame',
  description: 'Defeat the Pokémon League with only Squirtle [Code: 0700D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10007],
  ),
  badge: '302262',
  id: 273082,
})

set.addAchievement({
  title: 'Warrior Tortoise',
  description: 'Defeat the Pokémon League with only Wartortle [Code: 0800D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10008],
  ),
  badge: '302263',
  id: 273083,
})

set.addAchievement({
  title: 'The Pokémon on the Blue Box',
  description: 'Defeat the Pokémon League with only Blastoise [Code: 0900D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10009],
  ),
  badge: '302264',
  id: 273084,
})

set.addAchievement({
  title: 'Tiny Swallowtail',
  description:
    'Defeat Brock, Misty, Surge and Erika with only Caterpie [Code: 0A00D115]',
  points: 100,
  conditions: $(
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Delta', 'BitCount', 0xd356, '=', 'Value', '', 3],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 15],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1000a],
    ['OrNext', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 92],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 134],
  ),
  badge: '302265',
  id: 273085,
})

set.addAchievement({
  title: 'No Moves for You',
  description:
    'Defeat Brock, Misty, Surge and Erika with only Metapod [Code: 0B00D1150021516A]',
  points: 100,
  conditions: $(
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Delta', 'BitCount', 0xd356, '=', 'Value', '', 3],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 15],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0x6a512100],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1000b],
    ['OrNext', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 92],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 134],
  ),
  badge: '302266',
  id: 273086,
})

set.addAchievement({
  title: 'The Beautiful Butterfly',
  description:
    'Defeat the Pokémon League with only Butterfree [Code: 0C00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1000c],
  ),
  badge: '302267',
  id: 273087,
})

set.addAchievement({
  title: 'Pain',
  description:
    'Defeat the Pokémon League with only Weedle (Items allowed) [Code: 0D00D11]',
  points: 100,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x10d1000d],
  ),
  badge: '302268',
  id: 273088,
})

set.addAchievement({
  title: `Pain Two: Now It's Personal`,
  description:
    'Defeat the Pokémon League with only Kakuna (Items allowed) [Code: 0E00D1100028516A]',
  points: 100,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x10d1000e],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0x6a512800],
  ),
  badge: '302269',
  id: 273089,
})

set.addAchievement({
  title: 'Ya Like Jazz?',
  description: 'Defeat the Pokémon League with only Beedrill [Code: 0F00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1000f],
  ),
  badge: '302270',
  id: 273090,
})

set.addAchievement({
  title: 'Baby Passerine',
  description: 'Defeat the Pokémon League with only Pidgey [Code: 1000D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10010],
  ),
  badge: '302271',
  id: 273091,
})

set.addAchievement({
  title: 'Juvenile Osprey',
  description: 'Defeat the Pokémon League with only Pidgeotto [Code: 1100D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10011],
  ),
  badge: '302272',
  id: 273092,
})

set.addAchievement({
  title: 'Golden Eagle',
  description: 'Defeat the Pokémon League with only Pidgeot [Code: 1200D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10012],
  ),
  badge: '302273',
  id: 273093,
})

set.addAchievement({
  title: 'Youngster Joey',
  description: 'Defeat the Pokémon League with only Rattata [Code: 1300D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10013],
  ),
  badge: '302274',
  id: 273094,
})

set.addAchievement({
  title: 'Master Splinter',
  description: 'Defeat the Pokémon League with only Raticate [Code: 1400D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10014],
  ),
  badge: '302275',
  id: 273095,
})

set.addAchievement({
  title: 'Spear-Beaked Sparrow',
  description: 'Defeat the Pokémon League with only Spearow [Code: 1500D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10015],
  ),
  badge: '302276',
  id: 273096,
})

set.addAchievement({
  title: 'Angry Bird',
  description: 'Defeat the Pokémon League with only Fearow [Code: 1600D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10016],
  ),
  badge: '302277',
  id: 273097,
})

set.addAchievement({
  title: 'Snake but Backwards',
  description: 'Defeat the Pokémon League with only Ekans [Code: 1700D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10017],
  ),
  badge: '302278',
  id: 273098,
})

set.addAchievement({
  title: 'Kobra but Backwards',
  description: 'Defeat the Pokémon League with only Arbok [Code: 1800D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10018],
  ),
  badge: '302279',
  id: 273099,
})

set.addAchievement({
  title: 'The Mascot Mouse',
  description: 'Defeat the Pokémon League with only Pikachu [Code: 1900D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10019],
  ),
  badge: '302280',
  id: 273100,
})

set.addAchievement({
  title: 'Weapon of War',
  description: 'Defeat the Pokémon League with only Raichu [Code: 1A00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001a],
  ),
  badge: '302281',
  id: 273101,
})

set.addAchievement({
  title: 'Earthen Armadillo',
  description: 'Defeat the Pokémon League with only Sandshrew [Code: 1B00D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001b],
  ),
  badge: '302282',
  id: 273102,
})

set.addAchievement({
  title: 'Prickly Pangolin',
  description: 'Defeat the Pokémon League with only Sandslash [Code: 1C00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001c],
  ),
  badge: '302283',
  id: 273103,
})

set.addAchievement({
  title: 'Little Princess',
  description: 'Defeat the Pokémon League with only Nidoran♀️ [Code: 1D00D115]',
  points: 50,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001d],
  ),
  badge: '302284',
  id: 273104,
})

set.addAchievement({
  title: 'Polite Young Lady',
  description: 'Defeat the Pokémon League with only Nidorina [Code: 1E00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001e],
  ),
  badge: '302285',
  id: 273105,
})

set.addAchievement({
  title: 'The Poison Queen',
  description: 'Defeat the Pokémon League with only Nidoqueen [Code: 1F00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001f],
  ),
  badge: '302286',
  id: 273106,
})

set.addAchievement({
  title: 'Little Prince',
  description: 'Defeat the Pokémon League with only Nidoran♂️ [Code: 2000D115]',
  points: 50,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10020],
  ),
  badge: '302287',
  id: 273107,
})

set.addAchievement({
  title: 'Handsome Young Gentleman',
  description: 'Defeat the Pokémon League with only Nidorino [Code: 2100D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10021],
  ),
  badge: '302288',
  id: 273108,
})

set.addAchievement({
  title: 'The Poison King',
  description: 'Defeat the Pokémon League with only Nidoking [Code: 2200D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10022],
  ),
  badge: '302289',
  id: 273109,
})

set.addAchievement({
  title: 'Lunar Aria',
  description: 'Defeat the Pokémon League with only Clefairy [Code: 2300D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10023],
  ),
  badge: '302290',
  id: 273110,
})

set.addAchievement({
  title: 'Moon Ariala',
  description: 'Defeat the Pokémon League with only Clefable [Code: 2400D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10024],
  ),
  badge: '302291',
  id: 273111,
})

set.addAchievement({
  title: 'Kurama',
  description: 'Defeat the Pokémon League with only Vulpix [Code: 2500D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10025],
  ),
  badge: '302292',
  id: 273112,
})

set.addAchievement({
  title: 'Kyuubi no Kitsune',
  description: 'Defeat the Pokémon League with only Ninetales [Code: 2600D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10026],
  ),
  badge: '302293',
  id: 273113,
})

set.addAchievement({
  title: 'Nursery Rhyme',
  description:
    'Defeat the Pokémon League with only Jigglypuff [Code: 2700D115]',
  points: 50,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10027],
  ),
  badge: '302294',
  id: 273114,
})

set.addAchievement({
  title: 'Do the Wave!',
  description:
    'Defeat the Pokémon League with only Wigglytuff [Code: 2800D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10028],
  ),
  badge: '302295',
  id: 273115,
})

set.addAchievement({
  title: 'Looking Mean',
  description: 'Defeat the Pokémon League with only Zubat [Code: 2900D115]',
  points: 50,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10029],
  ),
  badge: '302296',
  id: 273116,
})

set.addAchievement({
  title: 'Looking Terrifying',
  description: 'Defeat the Pokémon League with only Golbat [Code: 2A00D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002a],
  ),
  badge: '302297',
  id: 273117,
})

set.addAchievement({
  title: 'Mandrake Seedling',
  description: 'Defeat the Pokémon League with only Oddish [Code: 2B00D115]',
  points: 50,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002b],
  ),
  badge: '302298',
  id: 273118,
})

set.addAchievement({
  title: 'Smelly Bloom',
  description: 'Defeat the Pokémon League with only Gloom [Code: 2C00D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002c],
  ),
  badge: '302299',
  id: 273119,
})

set.addAchievement({
  title: 'Budding Rafflesia',
  description: 'Defeat the Pokémon League with only Vileplume [Code: 2D00D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002d],
  ),
  badge: '302300',
  id: 273120,
})

set.addAchievement({
  title: 'Insect Parasite',
  description: 'Defeat the Pokémon League with only Paras [Code: 2E00D115]',
  points: 50,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002e],
  ),
  badge: '302301',
  id: 273121,
})

set.addAchievement({
  title: 'Paraspectre',
  description: 'Defeat the Pokémon League with only Parasect [Code: 2F00D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002f],
  ),
  badge: '352477',
  id: 273122,
})

set.addAchievement({
  title: 'Venomous Mothling',
  description: 'Defeat the Pokémon League with only Venonat [Code: 3000D115]',
  points: 100,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10030],
  ),
  badge: '302303',
  id: 273123,
})

set.addAchievement({
  title: 'Mothra',
  description: 'Defeat the Pokémon League with only Venomoth [Code: 3100D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10031],
  ),
  badge: '302304',
  id: 273124,
})

set.addAchievement({
  title: 'Does It Have Feet?',
  description: 'Defeat the Pokémon League with only Diglett [Code: 3200D115]',
  points: 50,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10032],
  ),
  badge: '302305',
  id: 273125,
})

set.addAchievement({
  title: 'Three Times the Possible Feet',
  description: 'Defeat the Pokémon League with only Dugtrio [Code: 3300D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10033],
  ),
  badge: '302306',
  id: 273126,
})

set.addAchievement({
  title: 'Maneki-neko',
  description: 'Defeat the Pokémon League with only Meowth [Code: 3400D115]',
  points: 50,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10034],
  ),
  badge: '302307',
  id: 273127,
})

set.addAchievement({
  title: 'Prince of Persia',
  description: 'Defeat the Pokémon League with only Persian [Code: 3500D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10035],
  ),
  badge: '302308',
  id: 273128,
})

set.addAchievement({
  title: 'Rubber Ducky',
  description: 'Defeat the Pokémon League with only Psyduck [Code: 3600D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10036],
  ),
  badge: '302309',
  id: 273129,
})

set.addAchievement({
  title: 'Blue Kappa',
  description: 'Defeat the Pokémon League with only Golduck [Code: 3700D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10037],
  ),
  badge: '302310',
  id: 273130,
})

set.addAchievement({
  title: 'Pig-Tailed Macaque',
  description: 'Defeat the Pokémon League with only Mankey [Code: 3800D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10038],
  ),
  badge: '302311',
  id: 273131,
})

set.addAchievement({
  title: 'Boxing Baboon',
  description: 'Defeat the Pokémon League with only Primeape [Code: 3900D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10039],
  ),
  badge: '302312',
  id: 273132,
})

set.addAchievement({
  title: 'Little Flamie',
  description: 'Defeat the Pokémon League with only Growlithe [Code: 3A00D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003a],
  ),
  badge: '302313',
  id: 273133,
})

set.addAchievement({
  title: 'Blazing Guardian Lion',
  description: 'Defeat the Pokémon League with only Arcanine [Code: 3B00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003b],
  ),
  badge: '302314',
  id: 273134,
})

set.addAchievement({
  title: 'Hypnotic Polliwog',
  description: 'Defeat the Pokémon League with only Poliwag [Code: 3C00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003c],
  ),
  badge: '302315',
  id: 273135,
})

set.addAchievement({
  title: 'Glass Frog Belly',
  description: 'Defeat the Pokémon League with only Poliwhirl [Code: 3D00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003d],
  ),
  badge: '302316',
  id: 273136,
})

set.addAchievement({
  title: 'Boxer with a Crown',
  description: 'Defeat the Pokémon League with only Poliwrath [Code: 3E00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003e],
  ),
  badge: '302317',
  id: 273137,
})

set.addAchievement({
  title: 'Abracadabra',
  description: 'Defeat the Pokémon League with only Abra [Code: 3F00D115]',
  points: 100,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003f],
  ),
  badge: '302318',
  id: 273138,
})

set.addAchievement({
  title: 'Jrose11',
  description: 'Defeat the Pokémon League with only Kadabra [Code: 4000D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10040],
  ),
  badge: '302319',
  id: 273139,
})

set.addAchievement({
  title: 'The Sleeping Prophet',
  description: 'Defeat the Pokémon League with only Alakazam [Code: 4100D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10041],
  ),
  badge: '302320',
  id: 273140,
})

set.addAchievement({
  title: 'Kara-Tee',
  description: 'Defeat the Pokémon League with only Machop [Code: 4200D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10042],
  ),
  badge: '302321',
  id: 273141,
})

set.addAchievement({
  title: 'Kung-Foo',
  description: 'Defeat the Pokémon League with only Machoke [Code: 4300D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10043],
  ),
  badge: '302322',
  id: 273142,
})

set.addAchievement({
  title: 'Ju-Doh',
  description: 'Defeat the Pokémon League with only Machamp [Code: 4400D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10044],
  ),
  badge: '302323',
  id: 273143,
})

set.addAchievement({
  title: 'Little Pitcher',
  description:
    'Defeat the Pokémon League with only Bellsprout [Code: 4500D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10045],
  ),
  badge: '302324',
  id: 273144,
})

set.addAchievement({
  title: 'Utsubokazura',
  description:
    'Defeat the Pokémon League with only Weepinbell [Code: 4600D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10046],
  ),
  badge: '302325',
  id: 273145,
})

set.addAchievement({
  title: 'Nepenthes',
  description:
    'Defeat the Pokémon League with only Victreebel [Code: 4700D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10047],
  ),
  badge: '302326',
  id: 273146,
})

set.addAchievement({
  title: 'Comb Jelly',
  description: 'Defeat the Pokémon League with only Tentacool [Code: 4800D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10048],
  ),
  badge: '302327',
  id: 273147,
})

set.addAchievement({
  title: 'Manowar',
  description:
    'Defeat the Pokémon League with only Tentacruel [Code: 4900D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10049],
  ),
  badge: '302328',
  id: 273148,
})

set.addAchievement({
  title: 'Geode Guy',
  description: 'Defeat the Pokémon League with only Geodude [Code: 4A00D115]',
  points: 50,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004a],
  ),
  badge: '302329',
  id: 273149,
})

set.addAchievement({
  title: 'The Rolling Stone',
  description: 'Defeat the Pokémon League with only Graveler [Code: 4B00D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004b],
  ),
  badge: '302330',
  id: 273150,
})

set.addAchievement({
  title: 'Stone Golem',
  description: 'Defeat the Pokémon League with only Golem [Code: 4C00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004c],
  ),
  badge: '302331',
  id: 273151,
})

set.addAchievement({
  title: 'My Little Pony',
  description: 'Defeat the Pokémon League with only Ponyta [Code: 4D00D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004d],
  ),
  badge: '302332',
  id: 273152,
})

set.addAchievement({
  title: 'Spirit: Stallion of the Cimarron',
  description: 'Defeat the Pokémon League with only Rapidash [Code: 4E00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004e],
  ),
  badge: '302333',
  id: 273153,
})

set.addAchievement({
  title: 'A Johto Delicacy',
  description: 'Defeat the Pokémon League with only Slowpoke [Code: 4F00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004f],
  ),
  badge: '302334',
  id: 273154,
})

set.addAchievement({
  title: `Bro, I'm Slow`,
  description: 'Defeat the Pokémon League with only Slowbro [Code: 5000D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10050],
  ),
  badge: '302335',
  id: 273155,
})

set.addAchievement({
  title: 'Coil',
  description: 'Defeat the Pokémon League with only Magnemite [Code: 5100D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10051],
  ),
  badge: '302336',
  id: 273156,
})

set.addAchievement({
  title: 'Coil Times Three',
  description: 'Defeat the Pokémon League with only Magneton [Code: 5200D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10052],
  ),
  badge: '302337',
  id: 273157,
})

set.addAchievement({
  title: 'A Golden Opportunity',
  description: `Defeat the Pokémon League with only Farfetch'd [Code: 5300D115]`,
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10053],
  ),
  badge: '302338',
  id: 273158,
})

set.addAchievement({
  title: 'Two Heads Think Better Than One',
  description: 'Defeat the Pokémon League with only Doduo [Code: 5400D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10054],
  ),
  badge: '302339',
  id: 273159,
})

set.addAchievement({
  title: 'Three Heads Think Better Than Two',
  description: 'Defeat the Pokémon League with only Dodrio [Code: 5500D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10055],
  ),
  badge: '302340',
  id: 273160,
})

set.addAchievement({
  title: 'Baby Harp Seal',
  description: 'Defeat the Pokémon League with only Seel [Code: 5600D115]',
  points: 50,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10056],
  ),
  badge: '302341',
  id: 273161,
})

set.addAchievement({
  title: 'Beluga Narwhal Walrus',
  description: 'Defeat the Pokémon League with only Dewgong [Code: 5700D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10057],
  ),
  badge: '302342',
  id: 273162,
})

set.addAchievement({
  title: 'Toxic Waste',
  description: 'Defeat the Pokémon League with only Grimer [Code: 5800D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10058],
  ),
  badge: '302343',
  id: 273163,
})

set.addAchievement({
  title: 'Dorotabou',
  description: 'Defeat the Pokémon League with only Muk [Code: 5900D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10059],
  ),
  badge: '302344',
  id: 273164,
})

set.addAchievement({
  title: 'The Scallop Pokémon',
  description: 'Defeat the Pokémon League with only Shellder [Code: 5A00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005a],
  ),
  badge: '302345',
  id: 273165,
})

set.addAchievement({
  title: 'The Spondylus Pokémon',
  description: 'Defeat the Pokémon League with only Cloyster [Code: 5B00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005b],
  ),
  badge: '302346',
  id: 273166,
})

set.addAchievement({
  title: `Will-O'-the-Whisp`,
  description: 'Defeat the Pokémon League with only Gastly [Code: 5C00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005c],
  ),
  badge: '302347',
  id: 273167,
})

set.addAchievement({
  title: 'Spooky Spectre',
  description: 'Defeat the Pokémon League with only Haunter [Code: 5D00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005d],
  ),
  badge: '302348',
  id: 273168,
})

set.addAchievement({
  title: '~Hack~ Gengar',
  description: 'Defeat the Pokémon League with only Gengar [Code: 5E00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005e],
  ),
  badge: '302349',
  id: 273169,
})

set.addAchievement({
  title: 'Simply a Bad Pokémon',
  description: 'Defeat the Pokémon League with only Onix [Code: 5F00D115]',
  points: 50,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005f],
  ),
  badge: '302350',
  id: 273170,
})

set.addAchievement({
  title: 'Baku',
  description: 'Defeat the Pokémon League with only Drowzee [Code: 6000D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10060],
  ),
  badge: '302351',
  id: 273171,
})

set.addAchievement({
  title: 'The Great Hypnotist',
  description: 'Defeat the Pokémon League with only Hypno [Code: 6100D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10061],
  ),
  badge: '302352',
  id: 273172,
})

set.addAchievement({
  title: 'Bubbler Crab',
  description: 'Defeat the Pokémon League with only Krabby [Code: 6200D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10062],
  ),
  badge: '302353',
  id: 273173,
})

set.addAchievement({
  title: 'Samurai Crab',
  description: 'Defeat the Pokémon League with only Kingler [Code: 6300D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10063],
  ),
  badge: '302354',
  id: 273174,
})

set.addAchievement({
  title: 'You Won Voltorb Flip!',
  description: 'Defeat the Pokémon League with only Voltorb [Code: 6400D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10064],
  ),
  badge: '302355',
  id: 273175,
})

set.addAchievement({
  title: 'Just an Item',
  description: 'Defeat the Pokémon League with only Electrode [Code: 6500D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10065],
  ),
  badge: '302356',
  id: 273176,
})

set.addAchievement({
  title: 'An Unexpected Egg in This Trying Time',
  description: 'Defeat the Pokémon League with only Exeggcute [Code: 6600D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10066],
  ),
  badge: '302357',
  id: 273177,
})

set.addAchievement({
  title: 'The Jinmenju',
  description: 'Defeat the Pokémon League with only Exeggutor [Code: 6700D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10067],
  ),
  badge: '302358',
  id: 273178,
})

set.addAchievement({
  title: 'The Abandoned Child',
  description: 'Defeat the Pokémon League with only Cubone [Code: 6800D115]',
  points: 50,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10068],
  ),
  badge: '302359',
  id: 273179,
})

set.addAchievement({
  title: `Children's Guardian`,
  description: 'Defeat the Pokémon League with only Marowak [Code: 6900D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10069],
  ),
  badge: '302360',
  id: 273180,
})

set.addAchievement({
  title: 'Bruce Lee',
  description: 'Defeat the Pokémon League with only Hitmonlee [Code: 6A00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006a],
  ),
  badge: '302361',
  id: 273181,
})

set.addAchievement({
  title: 'Jackie Chan',
  description:
    'Defeat the Pokémon League with only Hitmonchan [Code: 6B00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006b],
  ),
  badge: '302362',
  id: 273182,
})

set.addAchievement({
  title: `This Thing Doesn't Learn Lick?`,
  description: 'Defeat the Pokémon League with only Lickitung [Code: 6C00D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006c],
  ),
  badge: '302363',
  id: 273183,
})

set.addAchievement({
  title: 'Toxic Gas',
  description: 'Defeat the Pokémon League with only Koffing [Code: 6D00D115]',
  points: 100,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006d],
  ),
  badge: '302364',
  id: 273184,
})

set.addAchievement({
  title: 'Polluted Air',
  description: 'Defeat the Pokémon League with only Weezing [Code: 6E00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006e],
  ),
  badge: '302365',
  id: 273185,
})

set.addAchievement({
  title: 'Tackles Without Tackle',
  description: 'Defeat the Pokémon League with only Rhyhorn [Code: 6F00D115]',
  points: 50,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006f],
  ),
  badge: '302366',
  id: 273186,
})

set.addAchievement({
  title: 'The First Ever Created',
  description: 'Defeat the Pokémon League with only Rhydon [Code: 7000D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10070],
  ),
  badge: '302367',
  id: 273187,
})

set.addAchievement({
  title: `Nurse Joy's Pokémon`,
  description: 'Defeat the Pokémon League with only Chansey [Code: 7100D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10071],
  ),
  badge: '302368',
  id: 273188,
})

set.addAchievement({
  title: 'Meduza',
  description: 'Defeat the Pokémon League with only Tangela [Code: 7200D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10072],
  ),
  badge: '302369',
  id: 273189,
})

set.addAchievement({
  title: 'The Motherly Pokémon',
  description:
    'Defeat the Pokémon League with only Kangaskhan [Code: 7300D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10073],
  ),
  badge: '302370',
  id: 273190,
})

set.addAchievement({
  title: 'Illegitimate Dragon Child',
  description: 'Defeat the Pokémon League with only Horsea [Code: 7400D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10074],
  ),
  badge: '302371',
  id: 273191,
})

set.addAchievement({
  title: 'Spiny Sea Dragon',
  description: 'Defeat the Pokémon League with only Seadra [Code: 7500D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10075],
  ),
  badge: '302372',
  id: 273192,
})

set.addAchievement({
  title: 'Tosakin Goldfish',
  description: 'Defeat the Pokémon League with only Goldeen [Code: 7600D115]',
  points: 50,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10076],
  ),
  badge: '302373',
  id: 273193,
})

set.addAchievement({
  title: 'King of the Sea',
  description: 'Defeat the Pokémon League with only Seaking [Code: 7700D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10077],
  ),
  badge: '302374',
  id: 273194,
})

set.addAchievement({
  title: 'Necklace Starfish',
  description: 'Defeat the Pokémon League with only Staryu [Code: 7800D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10078],
  ),
  badge: '302375',
  id: 273195,
})

set.addAchievement({
  title: 'Sunflower Sea Star',
  description: 'Defeat the Pokémon League with only Starmie [Code: 7900D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10079],
  ),
  badge: '302376',
  id: 273196,
})

set.addAchievement({
  title: 'Mx. Mime',
  description: 'Defeat the Pokémon League with only Mr. Mime [Code: 7A00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007a],
  ),
  badge: '302377',
  id: 273197,
})

set.addAchievement({
  title: 'Crits Galore',
  description: 'Defeat the Pokémon League with only Scyther [Code: 7B00D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007b],
  ),
  badge: '302378',
  id: 273198,
})

set.addAchievement({
  title: 'Icy Beauty',
  description: 'Defeat the Pokémon League with only Jynx [Code: 7C00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007c],
  ),
  badge: '302379',
  id: 273199,
})

set.addAchievement({
  title: 'Electric Fists',
  description:
    'Defeat the Pokémon League with only Electabuzz [Code: 7D00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007d],
  ),
  badge: '302380',
  id: 273200,
})

set.addAchievement({
  title: 'Magmatic Body',
  description: 'Defeat the Pokémon League with only Magmar [Code: 7E00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007e],
  ),
  badge: '302381',
  id: 273201,
})

set.addAchievement({
  title: 'Guillotine',
  description: 'Defeat the Pokémon League with only Pinsir [Code: 7F00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007f],
  ),
  badge: '302382',
  id: 273202,
})

set.addAchievement({
  title: 'Aldebaran',
  description: 'Defeat the Pokémon League with only Tauros [Code: 8000D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10080],
  ),
  badge: '302383',
  id: 273203,
})

set.addAchievement({
  title: 'Leaping the Dragon Gate',
  description:
    'Defeat Brock, Misty, Surge and Erika with only Magikarp [Code: 8100D115]',
  points: 100,
  conditions: $(
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Delta', 'BitCount', 0xd356, '=', 'Value', '', 3],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 15],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10081],
    ['OrNext', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 92],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 134],
  ),
  badge: '302384',
  id: 273204,
})

set.addAchievement({
  title: 'The Informal Dragon',
  description: 'Defeat the Pokémon League with only Gyarados [Code: 8200D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10082],
  ),
  badge: '302385',
  id: 273205,
})

set.addAchievement({
  title: 'Endangered Species',
  description: 'Defeat the Pokémon League with only Lapras [Code: 8300D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10083],
  ),
  badge: '302386',
  id: 273206,
})

set.addAchievement({
  title: 'I Can Be Anything',
  description: 'Defeat the Pokémon League with only Ditto [Code: 8400D115]',
  points: 100,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10084],
  ),
  badge: '302387',
  id: 273207,
})

set.addAchievement({
  title: 'I Can Be Many Things',
  description: 'Defeat the Pokémon League with only Eevee [Code: 8500D115]',
  points: 50,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10085],
  ),
  badge: '302388',
  id: 273208,
})

set.addAchievement({
  title: 'Aquatic Fae',
  description: 'Defeat the Pokémon League with only Vaporeon [Code: 8600D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10086],
  ),
  badge: '302389',
  id: 273209,
})

set.addAchievement({
  title: 'This Learns Pin Missile?',
  description: 'Defeat the Pokémon League with only Jolteon [Code: 8700D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10087],
  ),
  badge: '302390',
  id: 273210,
})

set.addAchievement({
  title: 'Flaming Fox',
  description: 'Defeat the Pokémon League with only Flareon [Code: 8800D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10088],
  ),
  badge: '302391',
  id: 273211,
})

set.addAchievement({
  title: 'Porygon.pk1',
  description: 'Defeat the Pokémon League with only Porygon [Code: 8900D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10089],
  ),
  badge: '302392',
  id: 273212,
})

set.addAchievement({
  title: 'Nautilus Shell',
  description: 'Defeat the Pokémon League with only Omanyte [Code: 8A00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008a],
  ),
  badge: '302393',
  id: 273213,
})

set.addAchievement({
  title: 'Lord Helix',
  description: 'Defeat the Pokémon League with only Omastar [Code: 8B00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008b],
  ),
  badge: '302394',
  id: 273214,
})

set.addAchievement({
  title: 'Always Protect Your Dome',
  description: 'Defeat the Pokémon League with only Kabuto [Code: 8C00D115]',
  points: 25,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008c],
  ),
  badge: '302395',
  id: 273215,
})

set.addAchievement({
  title: 'Eurypterid Lantis',
  description: 'Defeat the Pokémon League with only Kabutops [Code: 8D00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008d],
  ),
  badge: '302396',
  id: 273216,
})

set.addAchievement({
  title: 'Ptera Fossil',
  description:
    'Defeat the Pokémon League with only Aerodactyl [Code: 8E00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008e],
  ),
  badge: '302397',
  id: 273217,
})

set.addAchievement({
  title: 'A Sleepy Boy',
  description: 'Defeat the Pokémon League with only Snorlax [Code: 8F00D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008f],
  ),
  badge: '302398',
  id: 273218,
})

set.addAchievement({
  title: 'Chilly One',
  description: 'Defeat the Pokémon League with only Articuno [Code: 9000D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10090],
  ),
  badge: '302399',
  id: 273219,
})

set.addAchievement({
  title: 'Static Two',
  description: 'Defeat the Pokémon League with only Zapdos [Code: 9100D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10091],
  ),
  badge: '302400',
  id: 273220,
})

set.addAchievement({
  title: 'Flaming Three',
  description: 'Defeat the Pokémon League with only Moltres [Code: 9200D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10092],
  ),
  badge: '302401',
  id: 273221,
})

set.addAchievement({
  title: 'Baby Dragon',
  description: 'Defeat the Pokémon League with only Dratini [Code: 9300D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10093],
  ),
  badge: '302402',
  id: 273222,
})

set.addAchievement({
  title: 'Majestic Ryu',
  description: 'Defeat the Pokémon League with only Dragonair [Code: 9400D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10094],
  ),
  badge: '302403',
  id: 273223,
})

set.addAchievement({
  title: 'Guardian of the Sea',
  description: 'Defeat the Pokémon League with only Dragonite [Code: 9500D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10095],
  ),
  badge: '302404',
  id: 273224,
})

set.addAchievement({
  title: 'The Genetic Monster',
  description: 'Defeat the Pokémon League with only Mewtwo [Code: 9600D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10096],
  ),
  badge: '302405',
  id: 273225,
})

set.addAchievement({
  title: 'I Can Learn Anything',
  description: 'Defeat the Pokémon League with only Mew [Code: 9700D115]',
  points: 10,
  conditions: $(
    ['Trigger', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
    ['Trigger', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
    ['Trigger', 'Mem', '8bit', 0xd356, '=', 'Value', '', 255],
    ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
    ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10097],
  ),
  badge: '302406',
  id: 273226,
})

set.addLeaderboard({
  title: 'Bulbasaur Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10001],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10001],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52417,
})

set.addLeaderboard({
  title: 'Bulbasaur Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10001],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10001],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52568,
})

set.addLeaderboard({
  title: 'Ivysaur Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10002],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10002],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52418,
})

set.addLeaderboard({
  title: 'Ivysaur Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10002],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10002],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52569,
})

set.addLeaderboard({
  title: 'Venusaur Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10003],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10003],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52419,
})

set.addLeaderboard({
  title: 'Venusaur Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10003],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10003],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52570,
})

set.addLeaderboard({
  title: 'Charmander Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10004],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10004],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52420,
})

set.addLeaderboard({
  title: 'Charmander Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10004],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10004],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52571,
})

set.addLeaderboard({
  title: 'Charmeleon Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10005],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10005],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52421,
})

set.addLeaderboard({
  title: 'Charmeleon Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10005],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10005],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52572,
})

set.addLeaderboard({
  title: 'Charizard Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10006],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10006],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52422,
})

set.addLeaderboard({
  title: 'Charizard Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10006],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10006],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52573,
})

set.addLeaderboard({
  title: 'Squirtle Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10007],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10007],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52423,
})

set.addLeaderboard({
  title: 'Squirtle Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10007],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10007],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52574,
})

set.addLeaderboard({
  title: 'Wartortle Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10008],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10008],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52424,
})

set.addLeaderboard({
  title: 'Wartortle Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10008],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10008],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52575,
})

set.addLeaderboard({
  title: 'Blastoise Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10009],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10009],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52425,
})

set.addLeaderboard({
  title: 'Blastoise Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10009],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10009],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52576,
})

set.addLeaderboard({
  title: 'Caterpie Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1000a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', 'BitCount', 0xd356, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xd356, '=', 'Value', '', 15],
      ['OrNext', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 92],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 134],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1000a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', 'BitCount', 0xd356, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xd356, '=', 'Value', '', 15],
      ['OrNext', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 92],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 134],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52426,
})

set.addLeaderboard({
  title: 'Caterpie Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1000a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', 'BitCount', 0xd356, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xd356, '=', 'Value', '', 15],
      ['OrNext', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 92],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 134],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1000a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', 'BitCount', 0xd356, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xd356, '=', 'Value', '', 15],
      ['OrNext', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 92],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 134],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52577,
})

set.addLeaderboard({
  title: 'Metapod Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0x6a512100],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1000b],
      ['', 'Delta', 'BitCount', 0xd356, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xd356, '=', 'Value', '', 15],
      ['OrNext', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 92],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 134],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0x6a512100],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1000b],
      ['', 'Delta', 'BitCount', 0xd356, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xd356, '=', 'Value', '', 15],
      ['OrNext', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 92],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 134],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52427,
})

set.addLeaderboard({
  title: 'Metapod Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0x6a512100],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1000b],
      ['', 'Delta', 'BitCount', 0xd356, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xd356, '=', 'Value', '', 15],
      ['OrNext', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 92],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 134],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0x6a512100],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1000b],
      ['', 'Delta', 'BitCount', 0xd356, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xd356, '=', 'Value', '', 15],
      ['OrNext', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 92],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 134],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52578,
})

set.addLeaderboard({
  title: 'Butterfree Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1000c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1000c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52428,
})

set.addLeaderboard({
  title: 'Butterfree Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1000c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1000c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52579,
})

set.addLeaderboard({
  title: 'Weedle Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x10d1000d],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x10d1000d],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52429,
})

set.addLeaderboard({
  title: 'Weedle Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x10d1000d],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x10d1000d],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52580,
})

set.addLeaderboard({
  title: 'Kakuna Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x10d1000e],
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0x6a512800],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x10d1000e],
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0x6a512800],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52430,
})

set.addLeaderboard({
  title: 'Kakuna Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x10d1000e],
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0x6a512800],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x10d1000e],
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0x6a512800],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52581,
})

set.addLeaderboard({
  title: 'Beedrill Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1000f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1000f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52431,
})

set.addLeaderboard({
  title: 'Beedrill Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1000f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1000f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52582,
})

set.addLeaderboard({
  title: 'Pidgey Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10010],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10010],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52432,
})

set.addLeaderboard({
  title: 'Pidgey Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10010],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10010],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52583,
})

set.addLeaderboard({
  title: 'Pidgeotto Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10011],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10011],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52433,
})

set.addLeaderboard({
  title: 'Pidgeotto Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10011],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10011],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52584,
})

set.addLeaderboard({
  title: 'Pidgeot Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10012],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10012],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52434,
})

set.addLeaderboard({
  title: 'Pidgeot Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10012],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10012],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52585,
})

set.addLeaderboard({
  title: 'Rattata Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10013],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10013],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52435,
})

set.addLeaderboard({
  title: 'Rattata Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10013],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10013],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52586,
})

set.addLeaderboard({
  title: 'Raticate Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10014],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10014],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52436,
})

set.addLeaderboard({
  title: 'Raticate Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10014],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10014],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52587,
})

set.addLeaderboard({
  title: 'Spearow Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10015],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10015],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52437,
})

set.addLeaderboard({
  title: 'Spearow Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10015],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10015],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52588,
})

set.addLeaderboard({
  title: 'Fearow Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10016],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10016],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52438,
})

set.addLeaderboard({
  title: 'Fearow Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10016],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10016],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52589,
})

set.addLeaderboard({
  title: 'Ekans Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10017],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10017],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52439,
})

set.addLeaderboard({
  title: 'Ekans Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10017],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10017],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52590,
})

set.addLeaderboard({
  title: 'Arbok Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10018],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10018],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52440,
})

set.addLeaderboard({
  title: 'Arbok Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10018],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10018],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52591,
})

set.addLeaderboard({
  title: 'Pikachu Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10019],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10019],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52441,
})

set.addLeaderboard({
  title: 'Pikachu Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10019],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10019],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52592,
})

set.addLeaderboard({
  title: 'Raichu Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52442,
})

set.addLeaderboard({
  title: 'Raichu Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52593,
})

set.addLeaderboard({
  title: 'Sandshrew Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52443,
})

set.addLeaderboard({
  title: 'Sandshrew Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52594,
})

set.addLeaderboard({
  title: 'Sandslash Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52444,
})

set.addLeaderboard({
  title: 'Sandslash Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52595,
})

set.addLeaderboard({
  title: 'Nidoran♀️ Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52445,
})

set.addLeaderboard({
  title: 'Nidoran♀️ Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52596,
})

set.addLeaderboard({
  title: 'Nidorina Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52446,
})

set.addLeaderboard({
  title: 'Nidorina Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52597,
})

set.addLeaderboard({
  title: 'Nidoqueen Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52447,
})

set.addLeaderboard({
  title: 'Nidoqueen Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1001f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52598,
})

set.addLeaderboard({
  title: 'Nidoran♂️ Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10020],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10020],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52448,
})

set.addLeaderboard({
  title: 'Nidoran♂️ Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10020],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10020],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52599,
})

set.addLeaderboard({
  title: 'Nidorino Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10021],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10021],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52449,
})

set.addLeaderboard({
  title: 'Nidorino Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10021],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10021],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52600,
})

set.addLeaderboard({
  title: 'Nidoking Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10022],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10022],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52450,
})

set.addLeaderboard({
  title: 'Nidoking Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10022],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10022],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52601,
})

set.addLeaderboard({
  title: 'Clefairy Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10023],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10023],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52451,
})

set.addLeaderboard({
  title: 'Clefairy Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10023],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10023],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52602,
})

set.addLeaderboard({
  title: 'Clefable Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10024],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10024],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52452,
})

set.addLeaderboard({
  title: 'Clefable Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10024],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10024],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52603,
})

set.addLeaderboard({
  title: 'Vulpix Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10025],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10025],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52453,
})

set.addLeaderboard({
  title: 'Vulpix Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10025],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10025],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52604,
})

set.addLeaderboard({
  title: 'Ninetales Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10026],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10026],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52454,
})

set.addLeaderboard({
  title: 'Ninetales Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10026],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10026],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52605,
})

set.addLeaderboard({
  title: 'Jigglypuff Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10027],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10027],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52455,
})

set.addLeaderboard({
  title: 'Jigglypuff Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10027],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10027],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52606,
})

set.addLeaderboard({
  title: 'Wigglytuff Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10028],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10028],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52456,
})

set.addLeaderboard({
  title: 'Wigglytuff Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10028],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10028],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52607,
})

set.addLeaderboard({
  title: 'Zubat Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10029],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10029],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52457,
})

set.addLeaderboard({
  title: 'Zubat Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10029],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10029],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52608,
})

set.addLeaderboard({
  title: 'Golbat Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52458,
})

set.addLeaderboard({
  title: 'Golbat Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52609,
})

set.addLeaderboard({
  title: 'Oddish Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52459,
})

set.addLeaderboard({
  title: 'Oddish Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52610,
})

set.addLeaderboard({
  title: 'Gloom Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52460,
})

set.addLeaderboard({
  title: 'Gloom Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52611,
})

set.addLeaderboard({
  title: 'Vileplume Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52461,
})

set.addLeaderboard({
  title: 'Vileplume Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52612,
})

set.addLeaderboard({
  title: 'Paras Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52462,
})

set.addLeaderboard({
  title: 'Paras Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52613,
})

set.addLeaderboard({
  title: 'Parasect Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52463,
})

set.addLeaderboard({
  title: 'Parasect Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1002f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52614,
})

set.addLeaderboard({
  title: 'Venonat Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10030],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10030],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52464,
})

set.addLeaderboard({
  title: 'Venonat Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10030],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10030],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52615,
})

set.addLeaderboard({
  title: 'Venomoth Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10031],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10031],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52465,
})

set.addLeaderboard({
  title: 'Venomoth Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10031],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10031],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52616,
})

set.addLeaderboard({
  title: 'Diglett Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10032],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10032],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52466,
})

set.addLeaderboard({
  title: 'Diglett Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10032],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10032],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52617,
})

set.addLeaderboard({
  title: 'Dugtrio Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10033],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10033],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52467,
})

set.addLeaderboard({
  title: 'Dugtrio Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10033],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10033],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52618,
})

set.addLeaderboard({
  title: 'Meowth Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10034],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10034],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52468,
})

set.addLeaderboard({
  title: 'Meowth Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10034],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10034],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52619,
})

set.addLeaderboard({
  title: 'Persian Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10035],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10035],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52469,
})

set.addLeaderboard({
  title: 'Persian Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10035],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10035],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52620,
})

set.addLeaderboard({
  title: 'Psyduck Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10036],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10036],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52470,
})

set.addLeaderboard({
  title: 'Psyduck Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10036],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10036],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52621,
})

set.addLeaderboard({
  title: 'Golduck Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10037],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10037],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52471,
})

set.addLeaderboard({
  title: 'Golduck Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10037],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10037],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52622,
})

set.addLeaderboard({
  title: 'Mankey Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10038],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10038],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52472,
})

set.addLeaderboard({
  title: 'Mankey Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10038],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10038],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52623,
})

set.addLeaderboard({
  title: 'Primeape Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10039],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10039],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52473,
})

set.addLeaderboard({
  title: 'Primeape Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10039],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10039],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52624,
})

set.addLeaderboard({
  title: 'Growlithe Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52474,
})

set.addLeaderboard({
  title: 'Growlithe Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52625,
})

set.addLeaderboard({
  title: 'Arcanine Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52475,
})

set.addLeaderboard({
  title: 'Arcanine Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52626,
})

set.addLeaderboard({
  title: 'Poliwag Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52476,
})

set.addLeaderboard({
  title: 'Poliwag Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52627,
})

set.addLeaderboard({
  title: 'Poliwhirl Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52477,
})

set.addLeaderboard({
  title: 'Poliwhirl Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52628,
})

set.addLeaderboard({
  title: 'Poliwrath Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52478,
})

set.addLeaderboard({
  title: 'Poliwrath Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52629,
})

set.addLeaderboard({
  title: 'Abra Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52479,
})

set.addLeaderboard({
  title: 'Abra Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1003f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52630,
})

set.addLeaderboard({
  title: 'Kadabra Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10040],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10040],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52480,
})

set.addLeaderboard({
  title: 'Kadabra Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10040],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10040],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52631,
})

set.addLeaderboard({
  title: 'Alakazam Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10041],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10041],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52481,
})

set.addLeaderboard({
  title: 'Alakazam Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10041],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10041],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52632,
})

set.addLeaderboard({
  title: 'Machop Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10042],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10042],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52482,
})

set.addLeaderboard({
  title: 'Machop Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10042],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10042],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52633,
})

set.addLeaderboard({
  title: 'Machoke Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10043],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10043],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52483,
})

set.addLeaderboard({
  title: 'Machoke Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10043],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10043],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52634,
})

set.addLeaderboard({
  title: 'Machamp Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10044],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10044],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52484,
})

set.addLeaderboard({
  title: 'Machamp Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10044],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10044],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52635,
})

set.addLeaderboard({
  title: 'Bellsprout Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10045],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10045],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52485,
})

set.addLeaderboard({
  title: 'Bellsprout Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10045],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10045],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52636,
})

set.addLeaderboard({
  title: 'Weepinbell Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10046],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10046],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52486,
})

set.addLeaderboard({
  title: 'Weepinbell Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10046],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10046],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52637,
})

set.addLeaderboard({
  title: 'Victreebel Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10047],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10047],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52487,
})

set.addLeaderboard({
  title: 'Victreebel Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10047],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10047],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52638,
})

set.addLeaderboard({
  title: 'Tentacool Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10048],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10048],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52488,
})

set.addLeaderboard({
  title: 'Tentacool Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10048],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10048],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52639,
})

set.addLeaderboard({
  title: 'Tentacruel Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10049],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10049],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52489,
})

set.addLeaderboard({
  title: 'Tentacruel Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10049],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10049],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52640,
})

set.addLeaderboard({
  title: 'Geodude Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52490,
})

set.addLeaderboard({
  title: 'Geodude Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52641,
})

set.addLeaderboard({
  title: 'Graveler Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52491,
})

set.addLeaderboard({
  title: 'Graveler Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52642,
})

set.addLeaderboard({
  title: 'Golem Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52492,
})

set.addLeaderboard({
  title: 'Golem Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52643,
})

set.addLeaderboard({
  title: 'Ponyta Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52493,
})

set.addLeaderboard({
  title: 'Ponyta Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52644,
})

set.addLeaderboard({
  title: 'Rapidash Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52494,
})

set.addLeaderboard({
  title: 'Rapidash Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52645,
})

set.addLeaderboard({
  title: 'Slowpoke Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52495,
})

set.addLeaderboard({
  title: 'Slowpoke Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1004f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52646,
})

set.addLeaderboard({
  title: 'Slowbro Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10050],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10050],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52496,
})

set.addLeaderboard({
  title: 'Slowbro Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10050],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10050],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52647,
})

set.addLeaderboard({
  title: 'Magnemite Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10051],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10051],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52497,
})

set.addLeaderboard({
  title: 'Magnemite Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10051],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10051],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52648,
})

set.addLeaderboard({
  title: 'Magneton Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10052],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10052],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52498,
})

set.addLeaderboard({
  title: 'Magneton Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10052],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10052],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52649,
})

set.addLeaderboard({
  title: `Farfetch'd Speedrun`,
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10053],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10053],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52499,
})

set.addLeaderboard({
  title: `Farfetch'd Low Level`,
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10053],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10053],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52650,
})

set.addLeaderboard({
  title: 'Doduo Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10054],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10054],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52500,
})

set.addLeaderboard({
  title: 'Doduo Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10054],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10054],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52651,
})

set.addLeaderboard({
  title: 'Dodrio Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10055],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10055],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52501,
})

set.addLeaderboard({
  title: 'Dodrio Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10055],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10055],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52652,
})

set.addLeaderboard({
  title: 'Seel Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10056],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10056],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52502,
})

set.addLeaderboard({
  title: 'Seel Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10056],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10056],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52653,
})

set.addLeaderboard({
  title: 'Dewgong Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10057],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10057],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52503,
})

set.addLeaderboard({
  title: 'Dewgong Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10057],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10057],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52654,
})

set.addLeaderboard({
  title: 'Grimer Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10058],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10058],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52504,
})

set.addLeaderboard({
  title: 'Grimer Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10058],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10058],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52655,
})

set.addLeaderboard({
  title: 'Muk Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10059],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10059],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52505,
})

set.addLeaderboard({
  title: 'Muk Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10059],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10059],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52656,
})

set.addLeaderboard({
  title: 'Shellder Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52506,
})

set.addLeaderboard({
  title: 'Shellder Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52657,
})

set.addLeaderboard({
  title: 'Cloyster Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52507,
})

set.addLeaderboard({
  title: 'Cloyster Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52658,
})

set.addLeaderboard({
  title: 'Gastly Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52508,
})

set.addLeaderboard({
  title: 'Gastly Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52659,
})

set.addLeaderboard({
  title: 'Haunter Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52509,
})

set.addLeaderboard({
  title: 'Haunter Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52660,
})

set.addLeaderboard({
  title: 'Gengar Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52510,
})

set.addLeaderboard({
  title: 'Gengar Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52661,
})

set.addLeaderboard({
  title: 'Onix Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52511,
})

set.addLeaderboard({
  title: 'Onix Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1005f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52662,
})

set.addLeaderboard({
  title: 'Drowzee Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10060],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10060],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52512,
})

set.addLeaderboard({
  title: 'Drowzee Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10060],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10060],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52663,
})

set.addLeaderboard({
  title: 'Hypno Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10061],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10061],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52513,
})

set.addLeaderboard({
  title: 'Hypno Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10061],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10061],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52664,
})

set.addLeaderboard({
  title: 'Krabby Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10062],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10062],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52514,
})

set.addLeaderboard({
  title: 'Krabby Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10062],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10062],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52665,
})

set.addLeaderboard({
  title: 'Kingler Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10063],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10063],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52515,
})

set.addLeaderboard({
  title: 'Kingler Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10063],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10063],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52666,
})

set.addLeaderboard({
  title: 'Voltorb Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10064],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10064],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52516,
})

set.addLeaderboard({
  title: 'Voltorb Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10064],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10064],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52667,
})

set.addLeaderboard({
  title: 'Electrode Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10065],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10065],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52517,
})

set.addLeaderboard({
  title: 'Electrode Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10065],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10065],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52668,
})

set.addLeaderboard({
  title: 'Exeggcute Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10066],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10066],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52518,
})

set.addLeaderboard({
  title: 'Exeggcute Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10066],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10066],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52669,
})

set.addLeaderboard({
  title: 'Exeggutor Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10067],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10067],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52519,
})

set.addLeaderboard({
  title: 'Exeggutor Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10067],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10067],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52670,
})

set.addLeaderboard({
  title: 'Cubone Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10068],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10068],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52520,
})

set.addLeaderboard({
  title: 'Cubone Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10068],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10068],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52671,
})

set.addLeaderboard({
  title: 'Marowak Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10069],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10069],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52521,
})

set.addLeaderboard({
  title: 'Marowak Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10069],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10069],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52672,
})

set.addLeaderboard({
  title: 'Hitmonlee Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52522,
})

set.addLeaderboard({
  title: 'Hitmonlee Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52673,
})

set.addLeaderboard({
  title: 'Hitmonchan Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52523,
})

set.addLeaderboard({
  title: 'Hitmonchan Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52674,
})

set.addLeaderboard({
  title: 'Lickitung Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52524,
})

set.addLeaderboard({
  title: 'Lickitung Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52675,
})

set.addLeaderboard({
  title: 'Koffing Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52525,
})

set.addLeaderboard({
  title: 'Koffing Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52676,
})

set.addLeaderboard({
  title: 'Weezing Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52526,
})

set.addLeaderboard({
  title: 'Weezing Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52677,
})

set.addLeaderboard({
  title: 'Rhyhorn Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52527,
})

set.addLeaderboard({
  title: 'Rhyhorn Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1006f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52678,
})

set.addLeaderboard({
  title: 'Rhydon Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10070],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10070],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52528,
})

set.addLeaderboard({
  title: 'Rhydon Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10070],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10070],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52679,
})

set.addLeaderboard({
  title: 'Chansey Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10071],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10071],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52529,
})

set.addLeaderboard({
  title: 'Chansey Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10071],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10071],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52680,
})

set.addLeaderboard({
  title: 'Tangela Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10072],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10072],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52530,
})

set.addLeaderboard({
  title: 'Tangela Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10072],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10072],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52681,
})

set.addLeaderboard({
  title: 'Kangaskhan Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10073],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10073],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52531,
})

set.addLeaderboard({
  title: 'Kangaskhan Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10073],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10073],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52682,
})

set.addLeaderboard({
  title: 'Horsea Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10074],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10074],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52532,
})

set.addLeaderboard({
  title: 'Horsea Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10074],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10074],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52683,
})

set.addLeaderboard({
  title: 'Seadra Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10075],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10075],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52533,
})

set.addLeaderboard({
  title: 'Seadra Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10075],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10075],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52684,
})

set.addLeaderboard({
  title: 'Goldeen Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10076],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10076],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52534,
})

set.addLeaderboard({
  title: 'Goldeen Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10076],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10076],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52685,
})

set.addLeaderboard({
  title: 'Seaking Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10077],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10077],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52535,
})

set.addLeaderboard({
  title: 'Seaking Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10077],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10077],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52686,
})

set.addLeaderboard({
  title: 'Staryu Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10078],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10078],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52536,
})

set.addLeaderboard({
  title: 'Staryu Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10078],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10078],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52687,
})

set.addLeaderboard({
  title: 'Starmie Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10079],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10079],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52537,
})

set.addLeaderboard({
  title: 'Starmie Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10079],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10079],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52688,
})

set.addLeaderboard({
  title: 'Mr. Mime Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52538,
})

set.addLeaderboard({
  title: 'Mr. Mime Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52689,
})

set.addLeaderboard({
  title: 'Scyther Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52539,
})

set.addLeaderboard({
  title: 'Scyther Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52690,
})

set.addLeaderboard({
  title: 'Jynx Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52540,
})

set.addLeaderboard({
  title: 'Jynx Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52691,
})

set.addLeaderboard({
  title: 'Electabuzz Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52541,
})

set.addLeaderboard({
  title: 'Electabuzz Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52692,
})

set.addLeaderboard({
  title: 'Magmar Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52542,
})

set.addLeaderboard({
  title: 'Magmar Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52693,
})

set.addLeaderboard({
  title: 'Pinsir Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52543,
})

set.addLeaderboard({
  title: 'Pinsir Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1007f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52694,
})

set.addLeaderboard({
  title: 'Tauros Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10080],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10080],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52544,
})

set.addLeaderboard({
  title: 'Tauros Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10080],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10080],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52695,
})

set.addLeaderboard({
  title: 'Magikarp Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10081],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', 'BitCount', 0xd356, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xd356, '=', 'Value', '', 15],
      ['OrNext', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 92],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 134],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10081],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', 'BitCount', 0xd356, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xd356, '=', 'Value', '', 15],
      ['OrNext', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 92],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 134],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52545,
})

set.addLeaderboard({
  title: 'Magikarp Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10081],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', 'BitCount', 0xd356, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xd356, '=', 'Value', '', 15],
      ['OrNext', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 92],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 134],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10081],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', 'BitCount', 0xd356, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xd356, '=', 'Value', '', 15],
      ['OrNext', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 92],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 134],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52696,
})

set.addLeaderboard({
  title: 'Gyarados Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10082],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10082],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52546,
})

set.addLeaderboard({
  title: 'Gyarados Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10082],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10082],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52697,
})

set.addLeaderboard({
  title: 'Lapras Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10083],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10083],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52547,
})

set.addLeaderboard({
  title: 'Lapras Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10083],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10083],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52698,
})

set.addLeaderboard({
  title: 'Ditto Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10084],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10084],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52548,
})

set.addLeaderboard({
  title: 'Ditto Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10084],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10084],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52699,
})

set.addLeaderboard({
  title: 'Eevee Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10085],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10085],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52549,
})

set.addLeaderboard({
  title: 'Eevee Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10085],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10085],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52700,
})

set.addLeaderboard({
  title: 'Vaporeon Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10086],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10086],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52550,
})

set.addLeaderboard({
  title: 'Vaporeon Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10086],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10086],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52701,
})

set.addLeaderboard({
  title: 'Jolteon Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10087],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10087],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52551,
})

set.addLeaderboard({
  title: 'Jolteon Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10087],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10087],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52702,
})

set.addLeaderboard({
  title: 'Flareon Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10088],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10088],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52552,
})

set.addLeaderboard({
  title: 'Flareon Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10088],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10088],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52703,
})

set.addLeaderboard({
  title: 'Porygon Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10089],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10089],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52553,
})

set.addLeaderboard({
  title: 'Porygon Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10089],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10089],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52704,
})

set.addLeaderboard({
  title: 'Omanyte Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52554,
})

set.addLeaderboard({
  title: 'Omanyte Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008a],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52705,
})

set.addLeaderboard({
  title: 'Omastar Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52555,
})

set.addLeaderboard({
  title: 'Omastar Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008b],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52706,
})

set.addLeaderboard({
  title: 'Kabuto Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52556,
})

set.addLeaderboard({
  title: 'Kabuto Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008c],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52707,
})

set.addLeaderboard({
  title: 'Kabutops Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52557,
})

set.addLeaderboard({
  title: 'Kabutops Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008d],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52708,
})

set.addLeaderboard({
  title: 'Aerodactyl Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52558,
})

set.addLeaderboard({
  title: 'Aerodactyl Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008e],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52709,
})

set.addLeaderboard({
  title: 'Snorlax Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52559,
})

set.addLeaderboard({
  title: 'Snorlax Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d1008f],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52710,
})

set.addLeaderboard({
  title: 'Articuno Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10090],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10090],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52560,
})

set.addLeaderboard({
  title: 'Articuno Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10090],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10090],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52711,
})

set.addLeaderboard({
  title: 'Zapdos Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10091],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10091],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52561,
})

set.addLeaderboard({
  title: 'Zapdos Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10091],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10091],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52712,
})

set.addLeaderboard({
  title: 'Moltres Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10092],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10092],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52562,
})

set.addLeaderboard({
  title: 'Moltres Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10092],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10092],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52713,
})

set.addLeaderboard({
  title: 'Dratini Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10093],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10093],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52563,
})

set.addLeaderboard({
  title: 'Dratini Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10093],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10093],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52714,
})

set.addLeaderboard({
  title: 'Dragonair Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10094],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10094],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52564,
})

set.addLeaderboard({
  title: 'Dragonair Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10094],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10094],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52715,
})

set.addLeaderboard({
  title: 'Dragonite Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10095],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10095],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52565,
})

set.addLeaderboard({
  title: 'Dragonite Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10095],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10095],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52716,
})

set.addLeaderboard({
  title: 'Mewtwo Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10096],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10096],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52566,
})

set.addLeaderboard({
  title: 'Mewtwo Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10096],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10096],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52717,
})

set.addLeaderboard({
  title: 'Mew Speedrun',
  description: 'How fast can you beat this challenge?',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10097],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10097],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0xda44, '*', 'Value', '', 60],
      ['AddSource', 'Mem', '8bit', 0xda43, '*', 'Value', '', 3600],
      ['AddSource', 'Mem', '8bit', 0xda41, '*', 'Value', '', 0x34bc0],
      ['Measured', 'Mem', '8bit', 0xda45],
    ),
  },
  id: 52567,
})

set.addLeaderboard({
  title: 'Mew Low Level',
  description: 'Try to beat this challenge with the lowest possible level',
  lowerIsBetter: true,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10097],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    cancel: '0=1',
    submit: $(
      ['', 'Mem', '32bit', 0xd705, '=', 'Value', '', 0],
      ['', 'Mem', '16bit', 0xd709, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0xd701, '=', 'Value', '', 0x15d10097],
      ['', 'Mem', '8bit', 0xd539, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xd35e, '=', 'Value', '', 120],
      ['', 'Mem', '8bit', 0xd35e, '=', 'Value', '', 118],
    ),
    value: $(['Measured', 'Mem', '8bit', 0xd18c]),
  },
  id: 52718,
})

export default set

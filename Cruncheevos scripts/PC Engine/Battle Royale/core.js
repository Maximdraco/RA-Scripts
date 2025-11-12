import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 2273, title: 'Battle Royale' })

set.addAchievement({
  title: 'Warning: Unknown Emulator',
  description: 'Hardcore unlocks cannot be earned using this emulator.',
  points: 0,
  conditions: '1=1.300.',
  badge: '00000',
  id: 101000001,
})

set.addAchievement({
  title: 'Lone Warrior [Any]',
  description:
    'Win a match against 1 CPU Opponent (no Tournament), any difficulty.',
  points: 1,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 1],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1133, '=', 'Value', '', 2],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
  ),
  badge: '455327',
  id: 402409,
})

set.addAchievement({
  title: 'Lone Warrior [Intermediate or higher]',
  description:
    'Win a match against 1 CPU Opponent (no Tournament), intermediate or profressional difficulty.',
  points: 1,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1133, '=', 'Value', '', 2],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
  ),
  badge: '455328',
  id: 402410,
})

set.addAchievement({
  title: 'Lone Warrior [Professional]',
  description:
    'Win a match against 1 CPU Opponent (no Tournament), profressional difficulty.',
  points: 1,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1133, '=', 'Value', '', 2],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
  ),
  badge: '455329',
  id: 402411,
})

set.addAchievement({
  title: 'Tag Team Tussle [Any]',
  description:
    'Win a match against 2 CPU Opponent (no Tournament), any difficulty.',
  points: 2,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 1],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1133, '=', 'Value', '', 3],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
  ),
  badge: '455330',
  id: 402412,
})

set.addAchievement({
  title: 'Tag Team Tussle [Intermediate or higher]',
  description:
    'Win a match against 2 CPU Opponent (no Tournament), intermediate or profressional difficulty.',
  points: 2,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1133, '=', 'Value', '', 3],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
  ),
  badge: '455331',
  id: 402413,
})

set.addAchievement({
  title: 'Tag Team Tussle [Professional]',
  description:
    'Win a match against 2 CPU Opponent (no Tournament), profressional difficulty.',
  points: 2,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1133, '=', 'Value', '', 3],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
  ),
  badge: '455332',
  id: 402414,
})

set.addAchievement({
  title: 'Triple Threat Triumph [Any]',
  description:
    'Win a match against 3 CPU Opponent (no Tournament), any difficulty.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 1],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1133, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
  ),
  badge: '455333',
  id: 402415,
})

set.addAchievement({
  title: 'Triple Threat Triumph [Intermediate or higher]',
  description:
    'Win a match against 3 CPU Opponent (no Tournament), intermediate or profressional difficulty.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1133, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
  ),
  badge: '455334',
  id: 402416,
})

set.addAchievement({
  title: 'Triple Threat Triumph [Professional]',
  description:
    'Win a match against 3 CPU Opponent (no Tournament), profressional difficulty.',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1133, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
  ),
  badge: '455335',
  id: 402417,
})

set.addAchievement({
  title: 'Fatal Four-Way Conquest [Any]',
  description:
    'Win a match against 4 CPU Opponent (no Tournament), any difficulty.',
  points: 4,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 1],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1133, '=', 'Value', '', 5],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
  ),
  badge: '455336',
  id: 402418,
})

set.addAchievement({
  title: 'Fatal Four-Way Conquest [Intermediate or higher]',
  description:
    'Win a match against 4 CPU Opponent (no Tournament), intermediate or profressional difficulty.',
  points: 4,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1133, '=', 'Value', '', 5],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
  ),
  badge: '455337',
  id: 402419,
})

set.addAchievement({
  title: 'Fatal Four-Way Conquest [Professional]',
  description:
    'Win a match against 4 CPU Opponent (no Tournament), profressional difficulty.',
  points: 4,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1133, '=', 'Value', '', 5],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
  ),
  badge: '455338',
  id: 402420,
})

set.addAchievement({
  title: 'Decimation Dominance [Any]',
  description: 'Win a tournament as The Executioner, any difficulty.',
  points: 5,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 1],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 0],
  ),
  badge: '455339',
  id: 402421,
})

set.addAchievement({
  title: 'Decimation Dominance [Intermediate or higher]',
  description:
    'Win a tournament as The Executioner, intermediate or higher difficulty.',
  points: 5,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 0],
  ),
  badge: '455340',
  id: 402422,
})

set.addAchievement({
  title: 'Decimation Dominance [Professional]',
  description: 'Win a tournament as The Executioner, professional difficulty.',
  points: 10,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 0],
  ),
  badge: '455341',
  id: 402423,
})

set.addAchievement({
  title: 'Blaze of Glory [Any]',
  description: 'Win a tournament as Spitfire Spike, any difficulty.',
  points: 5,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 1],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 1],
  ),
  badge: '455342',
  id: 402424,
})

set.addAchievement({
  title: 'Blaze of Glory [Intermediate or higher]',
  description:
    'Win a tournament as Spitfire Spike, intermediate or higher difficulty.',
  points: 5,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 1],
  ),
  badge: '455343',
  id: 402425,
})

set.addAchievement({
  title: 'Blaze of Glory [Professional]',
  description: 'Win a tournament as Spitfire Spike, professional difficulty.',
  points: 10,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 1],
  ),
  badge: '455344',
  id: 402426,
})

set.addAchievement({
  title: 'Yokozuna Conquest [Any]',
  description: 'Win a tournament as Sumo Master, any difficulty.',
  points: 5,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 1],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 2],
  ),
  badge: '455345',
  id: 402427,
})

set.addAchievement({
  title: 'Yokozuna Conquest [Intermediate or higher]',
  description:
    'Win a tournament as Sumo Master, intermediate or higher difficulty.',
  points: 5,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 2],
  ),
  badge: '455346',
  id: 402428,
})

set.addAchievement({
  title: 'Yokozuna Conquest [Professional]',
  description: 'Win a tournament as Sumo Master, professional difficulty.',
  points: 10,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 2],
  ),
  badge: '455347',
  id: 402429,
})

set.addAchievement({
  title: `Carnivore's Triumph [Any]`,
  description: 'Win a tournament as The Meat-Eater, any difficulty.',
  points: 5,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 1],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 3],
  ),
  badge: '455348',
  id: 402430,
})

set.addAchievement({
  title: `Carnivore's Triumph [Intermediate or higher]`,
  description:
    'Win a tournament as The Meat-Eater, intermediate or higher difficulty.',
  points: 5,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 3],
  ),
  badge: '455349',
  id: 402431,
})

set.addAchievement({
  title: `Carnivore's Triumph [Professional]`,
  description: 'Win a tournament as The Meat-Eater, professional difficulty.',
  points: 10,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 3],
  ),
  badge: '455350',
  id: 402432,
})

set.addAchievement({
  title: `Barbarian's Conquest [Any]`,
  description: 'Win a tournament as Mongo Kahn, any difficulty.',
  points: 5,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 1],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 4],
  ),
  badge: '455351',
  id: 402433,
})

set.addAchievement({
  title: `Barbarian's Conquest [Intermediate or higher]`,
  description:
    'Win a tournament as Mongo Kahn, intermediate or higher difficulty.',
  points: 5,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 4],
  ),
  badge: '455352',
  id: 402434,
})

set.addAchievement({
  title: `Barbarian's Conquest [Professional]`,
  description: 'Win a tournament as Mongo Kahn, professional difficulty.',
  points: 10,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 4],
  ),
  badge: '455353',
  id: 402435,
})

set.addAchievement({
  title: 'Guillotine Glory [Any]',
  description:
    'Win a tournament as The Executioner, any difficulty, no rematches (reset game to retry).',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 1],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 0],
    ['ResetNextIf', 'Mem', '8bit', 0x48, '=', 'Value', '', 0],
    ['PauseIf', 'Mem', 'Bit0', 0x111f, '=', 'Value', '', 1, 1],
  ),
  badge: '455354',
  id: 402436,
})

set.addAchievement({
  title: 'Guillotine Glory [Intermediate or higher]',
  description:
    'Win a tournament as The Executioner, intermediate or higher difficulty, no rematch (reset game to retry).',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 0],
    ['ResetNextIf', 'Mem', '8bit', 0x48, '=', 'Value', '', 0],
    ['PauseIf', 'Mem', 'Bit0', 0x111f, '=', 'Value', '', 1, 1],
  ),
  badge: '455355',
  id: 402437,
})

set.addAchievement({
  title: 'Guillotine Glory [Professional]',
  description:
    'Win a tournament as The Executioner, professional difficulty, no rematches (reset game to retry).',
  points: 25,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 0],
    ['ResetNextIf', 'Mem', '8bit', 0x48, '=', 'Value', '', 0],
    ['PauseIf', 'Mem', 'Bit0', 0x111f, '=', 'Value', '', 1, 1],
  ),
  badge: '455356',
  id: 402438,
})

set.addAchievement({
  title: 'Inferno Triumph [Any]',
  description:
    'Win a tournament as Spitfire Spike, any difficulty, no rematches (reset game to retry).',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 1],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 1],
    ['ResetNextIf', 'Mem', '8bit', 0x48, '=', 'Value', '', 0],
    ['PauseIf', 'Mem', 'Bit0', 0x111f, '=', 'Value', '', 1, 1],
  ),
  badge: '455357',
  id: 402439,
})

set.addAchievement({
  title: 'Inferno Triumph [Intermediate or higher]',
  description:
    'Win a tournament as Spitfire Spike, intermediate or higher difficulty, no rematches (reset game to retry).',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 1],
    ['ResetNextIf', 'Mem', '8bit', 0x48, '=', 'Value', '', 0],
    ['PauseIf', 'Mem', 'Bit0', 0x111f, '=', 'Value', '', 1, 1],
  ),
  badge: '455358',
  id: 402440,
})

set.addAchievement({
  title: 'Inferno Triumph [Professional]',
  description:
    'Win a tournament as Spitfire Spike, professional difficulty, no rematches (reset game to retry).',
  points: 25,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 1],
    ['ResetNextIf', 'Mem', '8bit', 0x48, '=', 'Value', '', 0],
    ['PauseIf', 'Mem', 'Bit0', 0x111f, '=', 'Value', '', 1, 1],
  ),
  badge: '455359',
  id: 402441,
})

set.addAchievement({
  title: 'Zenith of Sumo [Any]',
  description:
    'Win a tournament as Sumo Master, any difficulty, no rematches (reset game to retry).',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 1],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 2],
    ['ResetNextIf', 'Mem', '8bit', 0x48, '=', 'Value', '', 0],
    ['PauseIf', 'Mem', 'Bit0', 0x111f, '=', 'Value', '', 1, 1],
  ),
  badge: '455360',
  id: 402442,
})

set.addAchievement({
  title: 'Zenith of Sumo [Intermediate or higher]',
  description:
    'Win a tournament as Sumo Master, intermediate or higher difficulty, no rematches (reset game to retry).',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 2],
    ['ResetNextIf', 'Mem', '8bit', 0x48, '=', 'Value', '', 0],
    ['PauseIf', 'Mem', 'Bit0', 0x111f, '=', 'Value', '', 1, 1],
  ),
  badge: '455361',
  id: 402443,
})

set.addAchievement({
  title: 'Zenith of Sumo [Professional]',
  description:
    'Win a tournament as Sumo Master, professional difficulty, no rematches (reset game to retry).',
  points: 25,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 2],
    ['ResetNextIf', 'Mem', '8bit', 0x48, '=', 'Value', '', 0],
    ['PauseIf', 'Mem', 'Bit0', 0x111f, '=', 'Value', '', 1, 1],
  ),
  badge: '455362',
  id: 402444,
})

set.addAchievement({
  title: 'Savage Supremacy [Any]',
  description:
    'Win a tournament as The Meat-Eater, any difficulty, no rematches (reset game to retry).',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 1],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 3],
    ['ResetNextIf', 'Mem', '8bit', 0x48, '=', 'Value', '', 0],
    ['PauseIf', 'Mem', 'Bit0', 0x111f, '=', 'Value', '', 1, 1],
  ),
  badge: '455363',
  id: 402445,
})

set.addAchievement({
  title: 'Savage Supremacy [Intermediate or higher]',
  description:
    'Win a tournament as The Meat-Eater, intermediate or higher difficulty, no rematches (reset game to retry).',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 3],
    ['ResetNextIf', 'Mem', '8bit', 0x48, '=', 'Value', '', 0],
    ['PauseIf', 'Mem', 'Bit0', 0x111f, '=', 'Value', '', 1, 1],
  ),
  badge: '455364',
  id: 402446,
})

set.addAchievement({
  title: 'Savage Supremacy [Professional]',
  description:
    'Win a tournament as The Meat-Eater, professional difficulty, no rematches (reset game to retry).',
  points: 25,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 3],
    ['ResetNextIf', 'Mem', '8bit', 0x48, '=', 'Value', '', 0],
    ['PauseIf', 'Mem', 'Bit0', 0x111f, '=', 'Value', '', 1, 1],
  ),
  badge: '455365',
  id: 402447,
})

set.addAchievement({
  title: 'Titan Triumph [Any]',
  description:
    'Win a tournament as Mongo Kahn, any difficulty, no rematches (reset game to retry).',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 1],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 4],
    ['ResetNextIf', 'Mem', '8bit', 0x48, '=', 'Value', '', 0],
    ['PauseIf', 'Mem', 'Bit0', 0x111f, '=', 'Value', '', 1, 1],
  ),
  badge: '455366',
  id: 402448,
})

set.addAchievement({
  title: 'Titan Triumph [Intermediate or higher]',
  description:
    'Win a tournament as Mongo Kahn, intermediate or higher difficulty, no rematches (reset game to retry).',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x1130, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 4],
    ['ResetNextIf', 'Mem', '8bit', 0x48, '=', 'Value', '', 0],
    ['PauseIf', 'Mem', 'Bit0', 0x111f, '=', 'Value', '', 1, 1],
  ),
  badge: '455367',
  id: 402449,
})

set.addAchievement({
  title: 'Titan Triumph [Professional]',
  description:
    'Win a tournament as Mongo Kahn, professional difficulty, no rematches (reset game to retry).',
  points: 25,
  conditions: $(
    ['', 'Mem', '8bit', 0x48, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x1130, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0x1131, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x1132, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xe78, '=', 'Value', '', 15],
    ['', 'Mem', '8bit', 0x12dd, '=', 'Mem', '8bit', 0x11f8],
    ['', 'Delta', '8bit', 0x1fe, '!=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x1fe, '=', 'Value', '', 39],
    ['', 'Mem', '8bit', 0x11f8, '=', 'Value', '', 4],
    ['ResetNextIf', 'Mem', '8bit', 0x48, '=', 'Value', '', 0],
    ['PauseIf', 'Mem', 'Bit0', 0x111f, '=', 'Value', '', 1, 1],
  ),
  badge: '455368',
  id: 402450,
})

export default set

import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 12343, title: 'Prehistoric Isle 2' })

set.addAchievement({
  title: 'Warning: Unknown Emulator',
  description: 'Hardcore unlocks cannot be earned using this emulator.',
  points: 0,
  conditions: '1=1.300.',
  badge: '00000',
  id: 101000001,
})

set.addAchievement({
  title: 'Pachycephalosaurus',
  description: 'Complete Stage 1.',
  points: 10,
  type: 'progression',
  conditions: {
    core: $(
      ['', 'Delta', '8bit', 0x8434, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 4],
    ),
    alt1: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 211]),
    alt2: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 225]),
  },
  badge: '487178',
  id: 431379,
})

set.addAchievement({
  title: 'Invincible I',
  description: 'Complete Stage 1 deadless.',
  points: 25,
  conditions: {
    core: $(
      ['', 'Delta', '8bit', 0x8434, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 4],
      ['AndNext', 'Mem', '8bit', 0x8434, '=', 'Value', '', 0],
      ['PauseIf', 'Delta', '8bit', 0x5054, '>', 'Mem', '8bit', 0x5054, 1],
    ),
    alt1: $(
      ['AndNext', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 211],
      ['AndNext', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 225],
      ['AndNext', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 242],
      ['ResetIf', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 240],
    ),
  },
  badge: '487198',
  id: 431399,
})

set.addAchievement({
  title: 'Pachycephalosaurus [Level 8]',
  description: 'Complete Stage 1 with Difficulty Level 8.',
  points: 10,
  conditions: {
    core: $(
      ['', 'Delta', '8bit', 0x8434, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 4],
      ['', 'Mem', '8bit', 0xfd8c, '=', 'Value', '', 7],
    ),
    alt1: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 211]),
    alt2: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 225]),
  },
  badge: '487184',
  id: 431385,
})

set.addAchievement({
  title: 'Just Doing My Job I',
  description:
    'Save all the civilians in Stage 1 (the civilians that go in a red helicopter).',
  points: 5,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0xe000, '<', 'Value', '', 20],
      ['', 'Mem', '8bit', 0xe000, '=', 'Value', '', 20],
    ),
    alt1: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 211]),
    alt2: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 225]),
  },
  badge: '487190',
  id: 431391,
})

set.addAchievement({
  title: 'No One Left Behind I',
  description: 'Get all the Rescue Bonus in level 1.',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0x5068, '<', 'Value', '', 5],
      ['', 'Mem', '8bit', 0x5068, '=', 'Value', '', 5],
    ),
    alt1: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 211]),
    alt2: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 225]),
  },
  badge: '487191',
  id: 431392,
})

set.addAchievement({
  title: 'What the hell is this?!',
  description: 'Complete Stage 2.',
  points: 10,
  type: 'progression',
  conditions: {
    core: $(
      ['', 'Delta', '8bit', 0x8434, '=', 'Value', '', 4],
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 8],
    ),
    alt1: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 211]),
    alt2: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 225]),
  },
  badge: '487179',
  id: 431380,
})

set.addAchievement({
  title: 'Invincible II',
  description: 'Complete Stage 2 deadless.',
  points: 25,
  conditions: {
    core: $(
      ['', 'Delta', '8bit', 0x8434, '=', 'Value', '', 4],
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 8],
      ['AndNext', 'Mem', '8bit', 0x8434, '=', 'Value', '', 4],
      ['PauseIf', 'Delta', '8bit', 0x5054, '>', 'Mem', '8bit', 0x5054, 1],
    ),
    alt1: $(
      ['AndNext', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 211],
      ['AndNext', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 225],
      ['AndNext', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 242],
      ['ResetIf', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 240],
    ),
  },
  badge: '487199',
  id: 431400,
})

set.addAchievement({
  title: 'What the hell is this?! [Level 8]',
  description: 'Complete Stage 2 with Difficulty Level 8.',
  points: 10,
  conditions: {
    core: $(
      ['', 'Delta', '8bit', 0x8434, '=', 'Value', '', 4],
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 8],
      ['', 'Mem', '8bit', 0xfd8c, '=', 'Value', '', 7],
    ),
    alt1: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 211]),
    alt2: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 225]),
  },
  badge: '487185',
  id: 431386,
})

set.addAchievement({
  title: 'Just Doing My Job II',
  description:
    'Save all the civilians in Stage 2 (the civilians that go in a red helicopter).',
  points: 5,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 4],
      ['', 'Delta', '8bit', 0xe000, '<', 'Value', '', 30],
      ['', 'Mem', '8bit', 0xe000, '=', 'Value', '', 30],
    ),
    alt1: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 211]),
    alt2: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 225]),
  },
  badge: '487192',
  id: 431393,
})

set.addAchievement({
  title: 'No One Left Behind II',
  description: 'Get all the Rescue Bonus in level 2.',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 4],
      ['', 'Delta', '8bit', 0x5068, '<', 'Value', '', 5],
      ['', 'Mem', '8bit', 0x5068, '=', 'Value', '', 5],
    ),
    alt1: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 211]),
    alt2: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 225]),
  },
  badge: '487193',
  id: 431394,
})

set.addAchievement({
  title: 'Bird Up',
  description: 'Complete Stage 3.',
  points: 10,
  type: 'progression',
  conditions: {
    core: $(
      ['', 'Delta', '8bit', 0x8434, '=', 'Value', '', 8],
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 12],
    ),
    alt1: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 211]),
    alt2: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 225]),
  },
  badge: '487180',
  id: 431381,
})

set.addAchievement({
  title: 'Invincible III',
  description: 'Complete Stage 3 deadless.',
  points: 25,
  conditions: {
    core: $(
      ['', 'Delta', '8bit', 0x8434, '=', 'Value', '', 8],
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 12],
      ['AndNext', 'Mem', '8bit', 0x8434, '=', 'Value', '', 8],
      ['PauseIf', 'Delta', '8bit', 0x5054, '>', 'Mem', '8bit', 0x5054, 1],
    ),
    alt1: $(
      ['AndNext', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 211],
      ['AndNext', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 225],
      ['AndNext', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 242],
      ['ResetIf', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 240],
    ),
  },
  badge: '487200',
  id: 431401,
})

set.addAchievement({
  title: 'Bird Up [Level 8]',
  description: 'Complete Stage 3 with Difficulty Level 8.',
  points: 10,
  conditions: {
    core: $(
      ['', 'Delta', '8bit', 0x8434, '=', 'Value', '', 8],
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 12],
      ['', 'Mem', '8bit', 0xfd8c, '=', 'Value', '', 7],
    ),
    alt1: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 211]),
    alt2: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 225]),
  },
  badge: '487186',
  id: 431387,
})

set.addAchievement({
  title: 'Aptenoperissus?',
  description: 'Complete Stage 4.',
  points: 10,
  type: 'progression',
  conditions: {
    core: $(
      ['', 'Delta', '8bit', 0x8434, '=', 'Value', '', 12],
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 16],
    ),
    alt1: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 211]),
    alt2: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 225]),
  },
  badge: '487181',
  id: 431382,
})

set.addAchievement({
  title: 'Invincible IV',
  description: 'Complete Stage 4 deadless.',
  points: 25,
  conditions: {
    core: $(
      ['', 'Delta', '8bit', 0x8434, '=', 'Value', '', 12],
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 16],
      ['AndNext', 'Mem', '8bit', 0x8434, '=', 'Value', '', 12],
      ['PauseIf', 'Delta', '8bit', 0x5054, '>', 'Mem', '8bit', 0x5054, 1],
    ),
    alt1: $(
      ['AndNext', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 211],
      ['AndNext', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 225],
      ['AndNext', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 242],
      ['ResetIf', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 240],
    ),
  },
  badge: '487201',
  id: 431402,
})

set.addAchievement({
  title: 'Aptenoperissus? [Level 8]',
  description: 'Complete Stage 4 with Difficulty Level 8.',
  points: 10,
  conditions: {
    core: $(
      ['', 'Delta', '8bit', 0x8434, '=', 'Value', '', 12],
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 16],
      ['', 'Mem', '8bit', 0xfd8c, '=', 'Value', '', 7],
    ),
    alt1: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 211]),
    alt2: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 225]),
  },
  badge: '487187',
  id: 431388,
})

set.addAchievement({
  title: 'Just Doing My Job III',
  description:
    'Save all the civilians in Stage 4 (the civilians that go in a red helicopter).',
  points: 5,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 12],
      ['', 'Delta', '8bit', 0xe000, '<', 'Value', '', 30],
      ['', 'Mem', '8bit', 0xe000, '=', 'Value', '', 30],
    ),
    alt1: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 211]),
    alt2: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 225]),
  },
  badge: '487194',
  id: 431395,
})

set.addAchievement({
  title: 'No One Left Behind III',
  description: 'Get all the Rescue Bonus in level 4.',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 12],
      ['', 'Delta', '8bit', 0x5068, '<', 'Value', '', 5],
      ['', 'Mem', '8bit', 0x5068, '=', 'Value', '', 5],
    ),
    alt1: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 211]),
    alt2: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 225]),
  },
  badge: '487195',
  id: 431396,
})

set.addAchievement({
  title: 'The Volcano Level',
  description: 'Complete Stage 5.',
  points: 10,
  type: 'progression',
  conditions: {
    core: $(
      ['', 'Delta', '8bit', 0x8434, '=', 'Value', '', 16],
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 20],
    ),
    alt1: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 211]),
    alt2: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 225]),
  },
  badge: '487182',
  id: 431383,
})

set.addAchievement({
  title: 'Invincible V',
  description: 'Complete Stage 5 deadless.',
  points: 25,
  conditions: {
    core: $(
      ['', 'Delta', '8bit', 0x8434, '=', 'Value', '', 16],
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 20],
      ['AndNext', 'Mem', '8bit', 0x8434, '=', 'Value', '', 16],
      ['PauseIf', 'Delta', '8bit', 0x5054, '>', 'Mem', '8bit', 0x5054, 1],
    ),
    alt1: $(
      ['AndNext', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 211],
      ['AndNext', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 225],
      ['AndNext', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 242],
      ['ResetIf', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 240],
    ),
  },
  badge: '487202',
  id: 431403,
})

set.addAchievement({
  title: 'The Volcano Level [Level 8]',
  description: 'Complete Stage 5 with Difficulty Level 8.',
  points: 10,
  conditions: {
    core: $(
      ['', 'Delta', '8bit', 0x8434, '=', 'Value', '', 16],
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 20],
      ['', 'Mem', '8bit', 0xfd8c, '=', 'Value', '', 7],
    ),
    alt1: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 211]),
    alt2: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 225]),
  },
  badge: '487188',
  id: 431389,
})

set.addAchievement({
  title: 'Just Doing My Job IV',
  description:
    'Save all the civilians in Stage 5 (the civilians that go in a red helicopter).',
  points: 5,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 16],
      ['', 'Delta', '8bit', 0xe000, '<', 'Value', '', 30],
      ['', 'Mem', '8bit', 0xe000, '=', 'Value', '', 30],
    ),
    alt1: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 211]),
    alt2: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 225]),
  },
  badge: '487196',
  id: 431397,
})

set.addAchievement({
  title: 'No One Left Behind IV',
  description: 'Get all the Rescue Bonus in level 5.',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 16],
      ['', 'Delta', '8bit', 0x5068, '<', 'Value', '', 5],
      ['', 'Mem', '8bit', 0x5068, '=', 'Value', '', 5],
    ),
    alt1: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 211]),
    alt2: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 225]),
  },
  badge: '487197',
  id: 431398,
})

set.addAchievement({
  title: 'Is this an Alien?',
  description: 'Complete Stage 6.',
  points: 10,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 20],
    ['', 'Delta', '8bit', 0x7503, '!=', 'Value', '', 242],
    ['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 242],
  ),
  badge: '487183',
  id: 431384,
})

set.addAchievement({
  title: 'Invincible VI',
  description: 'Complete Stage 6 deadless.',
  points: 25,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 20],
      ['', 'Delta', '8bit', 0x7503, '!=', 'Value', '', 242],
      ['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 242],
      ['AndNext', 'Mem', '8bit', 0x8434, '=', 'Value', '', 20],
      ['PauseIf', 'Delta', '8bit', 0x5054, '>', 'Mem', '8bit', 0x5054, 1],
    ),
    alt1: $(
      ['AndNext', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 211],
      ['AndNext', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 225],
      ['AndNext', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 242],
      ['ResetIf', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 240],
    ),
  },
  badge: '487203',
  id: 431404,
})

set.addAchievement({
  title: 'Is this an Alien? [Level 8]',
  description: 'Complete Stage 6 with Difficulty Level 8.',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 20],
    ['', 'Delta', '8bit', 0x7503, '!=', 'Value', '', 242],
    ['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 242],
    ['', 'Mem', '8bit', 0xfd8c, '=', 'Value', '', 7],
  ),
  badge: '487189',
  id: 431390,
})

set.addAchievement({
  title: 'Untouchable',
  description: 'Complete the game deadless.',
  points: 50,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x8434, '=', 'Value', '', 20],
      ['', 'Delta', '8bit', 0x7503, '!=', 'Value', '', 242],
      ['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 242],
      ['PauseIf', 'Delta', '8bit', 0x5054, '>', 'Mem', '8bit', 0x5054, 1],
    ),
    alt1: $(
      ['AndNext', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 211],
      ['AndNext', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 225],
      ['AndNext', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 242],
      ['ResetIf', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 240],
    ),
  },
  badge: '487204',
  id: 431405,
})

set.addLeaderboard({
  title: 'Best Pilot in the World',
  description: 'Get as many points as you can.',
  lowerIsBetter: false,
  type: 'VALUE',
  conditions: {
    start: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 242]),
    cancel: $(['', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 242]),
    submit: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 242]),
    value: $(
      ['AddSource', 'BCD', '8bit', 0xc1a6, '*', 'Value', '', 100],
      ['AddSource', 'BCD', '8bit', 0xc1a7, '*', 'Value', '', 10000],
      ['AddSource', 'BCD', '8bit', 0xc1a4, '*', 'Value', '', 0xf4240],
      ['AddSource', 'BCD', '8bit', 0xc1a5, '*', 'Value', '', 0x5f5e100],
      ['Measured', 'Value', '', 0],
    ),
  },
  id: 103550,
})

set.addLeaderboard({
  title: 'Medal Collector',
  description: 'Get as many medals as possible.',
  lowerIsBetter: false,
  type: 'VALUE',
  conditions: {
    start: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 242]),
    cancel: $(['', 'Mem', '8bit', 0x7503, '!=', 'Value', '', 242]),
    submit: $(['', 'Mem', '8bit', 0x7503, '=', 'Value', '', 242]),
    value: $(['Measured', 'Mem', '16bit', 0x506a]),
  },
  id: 103551,
})

export default set

import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({
  gameId: 21433,
  title: '~Homebrew~ Flappy Bird (jwarby)',
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
  title: 'First Flight',
  description: 'Survive for 5 Seconds',
  points: 1,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0xb, '=', 'Value', '', 1],
    ['', 'Value', '', 1, '=', 'Value', '', 1, 300],
    ['ResetIf', 'Mem', '8bit', 0xb, '=', 'Value', '', 2],
    ['ResetIf', 'Mem', '8bit', 0xb, '=', 'Value', '', 0],
  ),
  badge: '286764',
  id: 258965,
})

set.addAchievement({
  title: 'Flap Like Pingu',
  description: 'Survive for 10 Seconds',
  points: 2,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0xb, '=', 'Value', '', 1],
    ['', 'Value', '', 1, '=', 'Value', '', 1, 600],
    ['ResetIf', 'Mem', '8bit', 0xb, '=', 'Value', '', 2],
    ['ResetIf', 'Mem', '8bit', 0xb, '=', 'Value', '', 0],
  ),
  badge: '286779',
  id: 258966,
})

set.addAchievement({
  title: 'It is I, The Master of numbers who brings you this challenge',
  description: 'Survive for 30 seconds.',
  points: 3,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0xb, '=', 'Value', '', 1],
    ['', 'Value', '', 1, '=', 'Value', '', 1, 1800],
    ['ResetIf', 'Mem', '8bit', 0xb, '=', 'Value', '', 2],
    ['ResetIf', 'Mem', '8bit', 0xb, '=', 'Value', '', 0],
  ),
  badge: '286904',
  id: 258968,
})

set.addAchievement({
  title: 'BatFastard Flappy Bird',
  description: 'Survive for 60 Seconds without getting too hungry',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0xb, '=', 'Value', '', 1],
    ['', 'Value', '', 1, '=', 'Value', '', 1, 3600],
    ['ResetIf', 'Mem', '8bit', 0xb, '=', 'Value', '', 2],
    ['ResetIf', 'Mem', '8bit', 0xb, '=', 'Value', '', 0],
  ),
  badge: '286771',
  id: 258969,
})

set.addAchievement({
  title: 'W Collab 120 second edition',
  description: 'Survive for 2 mins',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0xb, '=', 'Value', '', 1],
    ['', 'Value', '', 1, '=', 'Value', '', 1, 7200],
    ['ResetIf', 'Mem', '8bit', 0xb, '=', 'Value', '', 2],
    ['ResetIf', 'Mem', '8bit', 0xb, '=', 'Value', '', 0],
  ),
  badge: '286777',
  id: 258970,
})

set.addAchievement({
  title: '5 Minute Flap',
  description: `Survive for 5 minutes. You're a sixth of the way there!`,
  points: 5,
  type: 'progression',
  conditions: $(
    ['ResetIf', 'Mem', '8bit', 0xb, '!=', 'Value', '', 1],
    ['', 'Value', '', 1, '=', 'Value', '', 1, 18000],
  ),
  badge: '286907',
  id: 258978,
})

set.addAchievement({
  title: '7 Minutes is all I Can Spare to Play With You',
  description: 'Survive for 420 seconds (EPIC CHALLENGE!).',
  points: 10,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0xb, '=', 'Value', '', 1],
    ['', 'Value', '', 1, '=', 'Value', '', 1, 25200],
    ['ResetIf', 'Mem', '8bit', 0xb, '=', 'Value', '', 2],
    ['ResetIf', 'Mem', '8bit', 0xb, '=', 'Value', '', 0],
  ),
  badge: '286908',
  id: 258977,
})

set.addAchievement({
  title: 'Hope the Game Doesn’t Crash by This Point',
  description: 'Survive ten whole minutes of exciting flapping action.',
  points: 10,
  type: 'win_condition',
  conditions: $(
    ['ResetIf', 'Mem', '8bit', 0xb, '!=', 'Value', '', 1],
    ['', 'Value', '', 1, '=', 'Value', '', 1, 36000],
  ),
  badge: '286775',
  id: 258974,
})

set.addAchievement({
  title: 'Clipped Wings',
  description:
    'Pass ten pipes without pressing the jump button more than 30 times.',
  points: 10,
  conditions: {
    core: $(
      ['AndNext', 'Mem', '8bit', 0xb, '=', 'Value', '', 1],
      ['AndNext', 'Delta', '8bit', 0xd, '>', 'Value', '', 48],
      ['Trigger', 'Mem', '8bit', 0xd, '<=', 'Value', '', 48, 10],
      ['AndNext', 'Mem', '8bit', 0xb, '=', 'Value', '', 1],
      ['AndNext', 'Delta', 'Bit7', 0xa, '=', 'Value', '', 0],
      ['PauseIf', 'Mem', 'Bit7', 0xa, '=', 'Value', '', 1, 31],
      ['', 'Mem', '8bit', 0xb, '=', 'Value', '', 1],
    ),
    alt1: $(
      ['ResetIf', 'Mem', '8bit', 0xb, '=', 'Value', '', 2],
      ['ResetIf', 'Mem', '8bit', 0xb, '=', 'Value', '', 0],
    ),
  },
  badge: '286905',
  id: 258973,
})

set.addAchievement({
  title: 'Icarus',
  description: 'Fly so high and fast than you fall to the Earth.',
  points: 2,
  conditions: $(
    ['', 'Mem', '8bit', 0xb, '=', 'Value', '', 1],
    ['', 'Delta', 'Upper4', 0x200, '=', 'Value', '', 0],
    ['', 'Mem', 'Upper4', 0x200, '=', 'Value', '', 2],
  ),
  badge: '286773',
  id: 258971,
})

set.addLeaderboard({
  title: 'Top Score - I Am the One Who Flaps',
  description: 'Get the highest score you can!',
  lowerIsBetter: false,
  type: 'VALUE',
  conditions: {
    start: $(
      ['', 'Delta', '8bit', 0xb, '!=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0xb, '=', 'Value', '', 1],
    ),
    cancel: $(['', 'Mem', '8bit', 0xb, '=', 'Value', '', 0]),
    submit: $(['', 'Mem', '8bit', 0xb, '=', 'Value', '', 2]),
    value: $(
      ['AndNext', 'Mem', '8bit', 0xb, '=', 'Value', '', 1],
      ['AndNext', 'Delta', '8bit', 0xd, '>', 'Value', '', 48],
      ['Measured', 'Mem', '8bit', 0xd, '<=', 'Value', '', 48],
    ),
  },
  id: 47638,
})

export default set

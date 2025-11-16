// Achievement definitions

export const ACHIEVEMENTS = {
  FIRST_TEST: {
    id: 'first_test',
    name: 'Getting Started',
    description: 'Complete your first practice test',
    icon: '🎯',
    condition: (stats) => stats.totalTests >= 1
  },
  FIRST_PASS: {
    id: 'first_pass',
    name: 'First Win!',
    description: 'Pass a practice test for the first time',
    icon: '🎉',
    condition: (stats) => stats.totalPassed >= 1
  },
  PERFECT_SCORE: {
    id: 'perfect_score',
    name: 'Perfect Score Queen',
    description: 'Get 100% on a test',
    icon: '👑',
    condition: (stats) => stats.bestScore === 100
  },
  STREAK_3: {
    id: 'streak_3',
    name: '3-Day Streak',
    description: 'Study for 3 days in a row',
    icon: '🔥',
    condition: (stats, streak) => streak >= 3
  },
  STREAK_7: {
    id: 'streak_7',
    name: 'Week Warrior',
    description: 'Study for 7 days in a row',
    icon: '⭐',
    condition: (stats, streak) => streak >= 7
  },
  FIVE_PASSES: {
    id: 'five_passes',
    name: 'Consistent Queen',
    description: 'Pass 5 practice tests',
    icon: '💯',
    condition: (stats) => stats.totalPassed >= 5
  },
  HIGH_SCORER: {
    id: 'high_scorer',
    name: 'High Scorer',
    description: 'Get 90% or higher on a test',
    icon: '🌟',
    condition: (stats) => stats.bestScore >= 90
  },
  DEDICATED: {
    id: 'dedicated',
    name: 'Dedicated Learner',
    description: 'Take 10 practice tests',
    icon: '📚',
    condition: (stats) => stats.totalTests >= 10
  },
  IMPROVING: {
    id: 'improving',
    name: 'Always Improving',
    description: 'Maintain an average score of 80% or higher',
    icon: '📈',
    condition: (stats) => stats.averageScore >= 80 && stats.totalTests >= 3
  }
}

export const checkNewAchievements = (stats, streak, currentAchievements) => {
  const newAchievements = []

  Object.values(ACHIEVEMENTS).forEach(achievement => {
    const hasIt = currentAchievements.some(a => a.id === achievement.id)
    if (!hasIt && achievement.condition(stats, streak)) {
      newAchievements.push(achievement)
    }
  })

  return newAchievements
}

export const MOTIVATIONAL_QUOTES = [
  "Period! You got this, bestie! 💅🏾",
  "That's hot! Keep going, queen! 👑",
  "Yasss! You're killing it! ✨",
  "Slaying this test like always! 💖",
  "Too blessed to be stressed! Keep it up! 🙌🏾",
  "You're that girl! Don't forget it! 💯",
  "Main character energy! Let's go! 🌟",
  "Boss moves only! You're doing amazing! 🔥",
  "Living rent free in success! 💸",
  "The blueprint! You're on your way! 🚗",
  "No cap, you're doing great! 🎯",
  "She's beauty, she's grace, she's passing this test! 👸🏾",
  "Unbothered. Moisturized. In your lane. Focused. Flourishing! ✨",
  "Hot girl summer means getting that license! ☀️",
  "City girl energy activated! Let's ride! 🏙️"
]

export const getRandomQuote = () => {
  return MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)]
}

// LocalStorage utility for tracking user progress

const STORAGE_KEYS = {
  SCORE_HISTORY: 'dsq_score_history',
  WRONG_ANSWERS: 'dsq_wrong_answers',
  ACHIEVEMENTS: 'dsq_achievements',
  STREAK: 'dsq_streak',
  LAST_STUDY_DATE: 'dsq_last_study',
  USER_STATS: 'dsq_stats',
  SOUND_ENABLED: 'dsq_sound_enabled'
}

// Score History
export const saveScore = (score, total, mode = 'test') => {
  const history = getScoreHistory()
  const newScore = {
    score,
    total,
    percentage: Math.round((score / total) * 100),
    mode,
    date: new Date().toISOString(),
    passed: score >= (total * 0.8)
  }
  history.push(newScore)
  localStorage.setItem(STORAGE_KEYS.SCORE_HISTORY, JSON.stringify(history))
  updateStats()
  return newScore
}

export const getScoreHistory = () => {
  const history = localStorage.getItem(STORAGE_KEYS.SCORE_HISTORY)
  return history ? JSON.parse(history) : []
}

export const clearScoreHistory = () => {
  localStorage.removeItem(STORAGE_KEYS.SCORE_HISTORY)
}

// Wrong Answers
export const saveWrongAnswer = (questionId) => {
  const wrongAnswers = getWrongAnswers()
  if (!wrongAnswers.includes(questionId)) {
    wrongAnswers.push(questionId)
    localStorage.setItem(STORAGE_KEYS.WRONG_ANSWERS, JSON.stringify(wrongAnswers))
  }
}

export const removeWrongAnswer = (questionId) => {
  const wrongAnswers = getWrongAnswers()
  const updated = wrongAnswers.filter(id => id !== questionId)
  localStorage.setItem(STORAGE_KEYS.WRONG_ANSWERS, JSON.stringify(updated))
}

export const getWrongAnswers = () => {
  const answers = localStorage.getItem(STORAGE_KEYS.WRONG_ANSWERS)
  return answers ? JSON.parse(answers) : []
}

export const clearWrongAnswers = () => {
  localStorage.removeItem(STORAGE_KEYS.WRONG_ANSWERS)
}

// Achievements
export const unlockAchievement = (achievementId) => {
  const achievements = getAchievements()
  if (!achievements.find(a => a.id === achievementId)) {
    achievements.push({
      id: achievementId,
      unlockedAt: new Date().toISOString()
    })
    localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(achievements))
    return true
  }
  return false
}

export const getAchievements = () => {
  const achievements = localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS)
  return achievements ? JSON.parse(achievements) : []
}

export const hasAchievement = (achievementId) => {
  const achievements = getAchievements()
  return achievements.some(a => a.id === achievementId)
}

// Study Streak
export const updateStreak = () => {
  const today = new Date().toDateString()
  const lastStudy = localStorage.getItem(STORAGE_KEYS.LAST_STUDY_DATE)
  const streak = getStreak()

  if (lastStudy === today) {
    // Already studied today
    return streak
  }

  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const yesterdayStr = yesterday.toDateString()

  let newStreak = streak
  if (lastStudy === yesterdayStr) {
    // Continuing streak
    newStreak = streak + 1
  } else if (lastStudy === null || lastStudy === undefined) {
    // First time
    newStreak = 1
  } else {
    // Streak broken
    newStreak = 1
  }

  localStorage.setItem(STORAGE_KEYS.STREAK, newStreak.toString())
  localStorage.setItem(STORAGE_KEYS.LAST_STUDY_DATE, today)

  return newStreak
}

export const getStreak = () => {
  const streak = localStorage.getItem(STORAGE_KEYS.STREAK)
  return streak ? parseInt(streak, 10) : 0
}

// User Stats
export const updateStats = () => {
  const history = getScoreHistory()
  const stats = {
    totalTests: history.length,
    totalPassed: history.filter(h => h.passed).length,
    averageScore: history.length > 0
      ? Math.round(history.reduce((sum, h) => sum + h.percentage, 0) / history.length)
      : 0,
    bestScore: history.length > 0
      ? Math.max(...history.map(h => h.percentage))
      : 0,
    lastUpdated: new Date().toISOString()
  }
  localStorage.setItem(STORAGE_KEYS.USER_STATS, JSON.stringify(stats))
  return stats
}

export const getStats = () => {
  const stats = localStorage.getItem(STORAGE_KEYS.USER_STATS)
  if (stats) {
    return JSON.parse(stats)
  }
  return {
    totalTests: 0,
    totalPassed: 0,
    averageScore: 0,
    bestScore: 0,
    lastUpdated: null
  }
}

// Sound Settings
export const setSoundEnabled = (enabled) => {
  localStorage.setItem(STORAGE_KEYS.SOUND_ENABLED, enabled.toString())
}

export const getSoundEnabled = () => {
  const enabled = localStorage.getItem(STORAGE_KEYS.SOUND_ENABLED)
  return enabled === null ? true : enabled === 'true'
}

// Calculate Level
export const getLevel = () => {
  const stats = getStats()
  const { totalTests, totalPassed, averageScore } = stats

  // XP calculation: tests passed * 100 + average score * 10
  const xp = (totalPassed * 100) + (averageScore * 10)

  if (xp < 100) return { name: 'Learner', level: 1, xp, nextLevel: 100 }
  if (xp < 500) return { name: 'Driver', level: 2, xp, nextLevel: 500 }
  if (xp < 1000) return { name: 'Road Boss', level: 3, xp, nextLevel: 1000 }
  return { name: 'Road Queen', level: 4, xp, nextLevel: null }
}

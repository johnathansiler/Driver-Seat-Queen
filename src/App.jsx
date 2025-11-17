import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import './App.css'
import { floridaQuestions, shuffleQuestions } from './data/questions'
import { QuestionRenderer } from './components/QuestionRenderer'
import { ACHIEVEMENTS, checkNewAchievements, getRandomQuote } from './data/achievements'
import * as storage from './utils/storage'

function App() {
  // Sound files array - use BASE_URL for correct paths in production
  const soundFiles = [
    `${import.meta.env.BASE_URL}sounds/ABSOLUTELY - AUDIO FROM JAYUZUMI.COM.mp3`,
    `${import.meta.env.BASE_URL}sounds/barbia.mp3`,
    `${import.meta.env.BASE_URL}sounds/calling-all-barbz-nicki-minaj.mp3`,
    `${import.meta.env.BASE_URL}sounds/I FEEL LIKE WE\'VE ELEVATED - AUDIO FROM JAYUZUMI.COM.mp3`,
    `${import.meta.env.BASE_URL}sounds/nicki-minaj-laughving.mp3`,
    `${import.meta.env.BASE_URL}sounds/nickis-kiss-kiss-sounds.mp3`,
    `${import.meta.env.BASE_URL}sounds/oh-my-gaawwd-nicki-minaj.mp3`,
    `${import.meta.env.BASE_URL}sounds/pink-wig-thick-ass-give-em-whiplash.mp3`,
    `${import.meta.env.BASE_URL}sounds/to-fly.mp3`,
    `${import.meta.env.BASE_URL}sounds/videoleap-9cde839e-2d8d-4945-a485-23d7f297cd9e-online-audio-converter.mp3`,
    `${import.meta.env.BASE_URL}sounds/YEAH - AUDIO FROM JAYUZUMI.COM.mp3`
  ]

  // Game State: welcome, mode-select, quiz, study, practice, review, results, dashboard, flashcards
  const [gameState, setGameState] = useState('welcome')
  const [quizMode, setQuizMode] = useState('test') // test, practice, review

  // Question Management
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)

  // Scoring & Tracking
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])

  // Study Mode
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [showAnswer, setShowAnswer] = useState(false)

  // Flashcard Mode
  const [isFlipped, setIsFlipped] = useState(false)
  const [knownCards, setKnownCards] = useState([])
  const [needStudyCards, setNeedStudyCards] = useState([])

  // Progress & Gamification
  const [streak, setStreak] = useState(0)
  const [userLevel, setUserLevel] = useState({ name: 'Learner', level: 1 })
  const [achievements, setAchievements] = useState([])
  const [newAchievements, setNewAchievements] = useState([])
  const [stats, setStats] = useState({})
  const [soundEnabled, setSoundEnabled] = useState(true)

  // Load data on mount
  useEffect(() => {
    setQuestions(shuffleQuestions(floridaQuestions).slice(0, 50))
    loadUserData()
  }, [])

  // Reset index when category filter changes to prevent out-of-bounds access
  useEffect(() => {
    if (gameState === 'study' || gameState === 'flashcards') {
      const filtered = categoryFilter === 'all' ? questions : questions.filter(q => q.category === categoryFilter)
      if (filtered.length === 0 && categoryFilter !== 'all') {
        // Reset to 'all' if current filter has no questions
        setCategoryFilter('all')
        setCurrentQuestionIndex(0)
      } else if (currentQuestionIndex >= filtered.length && filtered.length > 0) {
        setCurrentQuestionIndex(0)
      }
    }
  }, [categoryFilter, gameState, questions, currentQuestionIndex])

  const loadUserData = () => {
    const savedStreak = storage.getStreak()
    const savedAchievements = storage.getAchievements()
    const savedStats = storage.getStats()
    const savedLevel = storage.getLevel()
    const savedSound = storage.getSoundEnabled()

    setStreak(savedStreak)
    setAchievements(savedAchievements)
    setStats(savedStats)
    setUserLevel(savedLevel)
    setSoundEnabled(savedSound)
  }

  const playSound = (type) => {
    // DEBUG: Absolutely first thing - prove this function is called
    console.log('🎵 playSound CALLED - type:', type, 'soundEnabled:', soundEnabled)

    if (!soundEnabled) {
      console.log('❌ Sound is DISABLED - returning early')
      return
    }

    console.log('✅ Sound is ENABLED - proceeding to play')

    try {
      // Play random sound from the sound files array
      const randomSound = soundFiles[Math.floor(Math.random() * soundFiles.length)]
      console.log('🔊 Playing sound:', randomSound, 'for type:', type)

      const audio = new Audio(randomSound)
      audio.volume = 0.5 // Set volume to 50%

      // Play with proper promise handling
      const playPromise = audio.play()

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('✅ Sound PLAYED SUCCESSFULLY - type:', type)
          })
          .catch(err => {
            console.error('❌ Audio play FAILED - type:', type, 'Error:', err, 'Path:', randomSound)
          })
      } else {
        console.log('⚠️ playPromise is undefined')
      }

      // Visual feedback with confetti
      if (type === 'achievement' || type === 'correct') {
        console.log('🎉 playSound triggering confetti for type:', type)
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        })
      }
    } catch (error) {
      console.error('❌ EXCEPTION in playSound - type:', type, 'Error:', error)
    }
  }

  const fireConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF1493', '#9D00FF', '#00D9FF', '#FF69B4']
    })
  }

  // Mode Selection Functions
  const startTest = () => {
    playSound('mode')
    setQuizMode('test')
    setGameState('quiz')
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setUserAnswers([])
    setQuestions(shuffleQuestions(floridaQuestions).slice(0, 50))
    storage.updateStreak()
    setStreak(storage.getStreak())
  }

  const startPractice = () => {
    playSound('mode')
    setQuizMode('practice')
    setGameState('quiz')
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setUserAnswers([])
    // Random 15 questions for practice
    setQuestions(shuffleQuestions(floridaQuestions).slice(0, 15))
    storage.updateStreak()
    setStreak(storage.getStreak())
  }

  const startReview = () => {
    const wrongAnswerIds = storage.getWrongAnswers()
    if (wrongAnswerIds.length === 0) {
      alert("You haven't missed any questions yet! Take a test first, bestie! 💖")
      return
    }

    playSound('mode')
    const reviewQuestions = floridaQuestions.filter(q => wrongAnswerIds.includes(q.id))
    setQuizMode('review')
    setGameState('quiz')
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setUserAnswers([])
    setQuestions(shuffleQuestions(reviewQuestions))
    storage.updateStreak()
    setStreak(storage.getStreak())
  }

  const startStudy = () => {
    playSound('mode')
    setGameState('study')
    setCurrentQuestionIndex(0)
    setCategoryFilter('all')
    setShowAnswer(false)
    setQuestions(shuffleQuestions(floridaQuestions))
    storage.updateStreak()
    setStreak(storage.getStreak())
  }

  const viewDashboard = () => {
    playSound('mode')
    setStats(storage.getStats())
    setUserLevel(storage.getLevel())
    setGameState('dashboard')
  }

  const startFlashcards = () => {
    playSound('mode')
    setGameState('flashcards')
    setCurrentQuestionIndex(0)
    setCategoryFilter('all')
    setIsFlipped(false)
    setQuestions(shuffleQuestions(floridaQuestions))
    storage.updateStreak()
    setStreak(storage.getStreak())
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleFlashcardNext = (know = null) => {
    const filtered = getFilteredQuestions()
    if (filtered.length === 0) return
    const currentCard = filtered[currentQuestionIndex]
    if (!currentCard) return

    // Track if they know it or need to study
    if (know === true && !knownCards.includes(currentCard.id)) {
      setKnownCards([...knownCards, currentCard.id])
    } else if (know === false && !needStudyCards.includes(currentCard.id)) {
      setNeedStudyCards([...needStudyCards, currentCard.id])
    }

    if (currentQuestionIndex < filtered.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setIsFlipped(false)
    }
  }

  const handleFlashcardPrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setIsFlipped(false)
    }
  }

  // Question Handling
  const handleAnswerClick = (answerIndex, matchingData = null) => {
    if (selectedAnswer !== null) return

    setSelectedAnswer(answerIndex)
    const currentQuestion = questions[currentQuestionIndex]
    const questionType = currentQuestion.type || 'multiple-choice'

    let isCorrect = false
    if (questionType === 'multiple-choice') {
      isCorrect = answerIndex === currentQuestion.correct
    } else if (questionType === 'true-false') {
      const correctIndex = currentQuestion.correct ? 0 : 1
      isCorrect = answerIndex === correctIndex
    } else if (questionType === 'matching' || questionType === 'fill-in-blank' || questionType === 'multiple-select') {
      isCorrect = answerIndex === 1 // Passed from QuestionRenderer (1 = correct, 0 = incorrect)
    }

    if (isCorrect) {
      setScore(score + 1)
      // DEBUG: Very visible check
      document.title = `🔊 Sound: ${soundEnabled ? 'ON' : 'OFF'} - Calling playSound...`
      console.log('BEFORE playSound - soundEnabled:', soundEnabled)
      playSound('correct')
      console.log('AFTER playSound - called')
      fireConfetti()
    } else {
      playSound('wrong')
      // Save wrong answer for review
      storage.saveWrongAnswer(currentQuestion.id)
    }

    setUserAnswers([...userAnswers, {
      questionId: currentQuestion.id,
      selected: answerIndex,
      correct: isCorrect,
      matchingData
    }])
    setShowExplanation(true)
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      finishQuiz()
    }
  }

  const finishQuiz = () => {
    // Save score
    const savedScore = storage.saveScore(score, questions.length, quizMode)

    // Update stats and check achievements
    const newStats = storage.updateStats()
    const newStreak = storage.getStreak()
    const currentAchievements = storage.getAchievements()
    const unlockedAchievements = checkNewAchievements(newStats, newStreak, currentAchievements)

    // Unlock new achievements
    unlockedAchievements.forEach(achievement => {
      storage.unlockAchievement(achievement.id)
      playSound('achievement')
    })

    setNewAchievements(unlockedAchievements)
    setStats(newStats)
    setUserLevel(storage.getLevel())
    setGameState('results')
  }

  // Study Mode Functions
  const getFilteredQuestions = () => {
    if (categoryFilter === 'all') return questions
    return questions.filter(q => q.category === categoryFilter)
  }

  const handleStudyNext = () => {
    const filtered = getFilteredQuestions()
    if (filtered.length === 0) return
    if (currentQuestionIndex < filtered.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setShowAnswer(false)
    }
  }

  const handleStudyPrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setShowAnswer(false)
    }
  }

  const handleStudyAnswer = (answerIndex) => {
    const studyQuestion = getFilteredQuestions()[currentQuestionIndex]
    if (!studyQuestion) return
    const questionType = studyQuestion.type || 'multiple-choice'

    let isCorrect = false
    if (questionType === 'multiple-choice') {
      isCorrect = answerIndex === studyQuestion.correct
    } else if (questionType === 'true-false') {
      const correctIndex = studyQuestion.correct ? 0 : 1
      isCorrect = answerIndex === correctIndex
    } else if (questionType === 'matching' || questionType === 'fill-in-blank' || questionType === 'multiple-select') {
      isCorrect = answerIndex === 1 // Passed from QuestionRenderer
    }

    if (isCorrect) {
      fireConfetti()
    }

    setShowAnswer(true)
  }

  const handleCategoryChange = (category) => {
    setCategoryFilter(category)
    setCurrentQuestionIndex(0)
    setShowAnswer(false)
    setIsFlipped(false)
  }

  const toggleSound = () => {
    const newValue = !soundEnabled
    setSoundEnabled(newValue)
    storage.setSoundEnabled(newValue)
  }

  const getCategoryDisplay = (category) => {
    const categories = {
      'road-rules': '🚗 Road Rules',
      'road-signs': '🛑 Road Signs',
      'pavement-markings': '🛣️ Pavement Markings',
      'traffic-signals': '🚦 Traffic Signals',
      'safe-driving': '🦺 Safe Driving',
      'sharing-road': '🚴 Sharing the Road',
      'vehicle-equipment': '🔧 Vehicle Equipment',
      'emergency-situations': '🚨 Emergency Situations'
    }
    return categories[category] || category
  }

  // Render variables
  const currentQuestion = questions?.[currentQuestionIndex] || null
  const filteredQuestions = getFilteredQuestions()
  const studyQuestion = filteredQuestions?.[currentQuestionIndex] || null
  const passingScore = Math.ceil(questions.length * 0.8)
  const percentage = Math.round((score / questions.length) * 100)
  const passed = score >= passingScore

  return (
    <div className="app">
      {/* Sound Toggle - Always visible */}
      <button className="sound-toggle" onClick={toggleSound} title={soundEnabled ? 'Mute sounds' : 'Enable sounds'}>
        {soundEnabled ? '🔊' : '🔇'}
      </button>

      {/* Welcome Screen */}
      {gameState === 'welcome' && (
        <div className="welcome-screen">
          <div className="welcome-content">
            <h1 className="title">
              <span className="sparkle">👑</span> DRIVERS SEAT <span className="sparkle">👑</span>
              <br />
              QUEEN
              <br />
              <span className="subtitle">Florida Permit Test</span>
            </h1>
            <p className="tagline">
              Take the wheel, sis! Let's ace this test and get you on the road 💅🏾
            </p>

            {/* User Stats Banner */}
            {stats.totalTests > 0 && (
              <div className="stats-banner">
                <div className="stat-chip">
                  <span className="stat-icon">🔥</span>
                  <span>{streak} Day Streak</span>
                </div>
                <div className="stat-chip">
                  <span className="stat-icon">👑</span>
                  <span>Level {userLevel.level}: {userLevel.name}</span>
                </div>
                <div className="stat-chip">
                  <span className="stat-icon">⭐</span>
                  <span>{achievements.length} Badges</span>
                </div>
              </div>
            )}

            <div className="mode-selection">
              <button className="mode-card primary" onClick={startTest}>
                <div className="mode-icon">📝</div>
                <h3>Full Test</h3>
                <p>50 questions • Pass with 80%</p>
              </button>

              <button className="mode-card secondary" onClick={startPractice}>
                <div className="mode-icon">🎯</div>
                <h3>Practice Mode</h3>
                <p>15 random questions • Quick practice</p>
              </button>

              <button className="mode-card tertiary" onClick={startStudy}>
                <div className="mode-icon">📚</div>
                <h3>Study Mode</h3>
                <p>Browse all questions • Learn at your pace</p>
              </button>

              <button className="mode-card flashcard" onClick={startFlashcards}>
                <div className="mode-icon">🃏</div>
                <h3>Flashcards</h3>
                <p>Flip to learn • Track progress</p>
              </button>

              {storage.getWrongAnswers().length > 0 && (
                <button className="mode-card review" onClick={startReview}>
                  <div className="mode-icon">🔄</div>
                  <h3>Review Mistakes</h3>
                  <p>{storage.getWrongAnswers().length} questions to review</p>
                </button>
              )}

              {stats.totalTests > 0 && (
                <button className="mode-card dashboard" onClick={viewDashboard}>
                  <div className="mode-icon">📊</div>
                  <h3>Progress Dashboard</h3>
                  <p>View stats & achievements</p>
                </button>
              )}
            </div>

            <div className="quote-box">
              <p>"{getRandomQuote()}"</p>
            </div>
          </div>
        </div>
      )}

      {/* Quiz Error - No Questions */}
      {gameState === 'quiz' && !currentQuestion && (
        <div className="error-screen">
          <h2>Oops! No questions available 💔</h2>
          <p>Something went wrong loading the questions, babe!</p>
          <button className="home-button" onClick={() => setGameState('welcome')}>
            BACK TO HOME 🏠
          </button>
        </div>
      )}

      {/* Quiz/Practice/Review Mode */}
      {gameState === 'quiz' && currentQuestion && (
        <div className="quiz-screen">
          <div className="quiz-top-bar">
            <button className="back-button" onClick={() => setGameState('welcome')}>
              ← HOME
            </button>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          <div className="quiz-header">
            <div className="question-counter">
              {quizMode === 'practice' && <span className="mode-badge practice-badge">Practice</span>}
              {quizMode === 'review' && <span className="mode-badge review-badge">Review</span>}
            </div>
            <div className="score-display">
              Score: {score}/{currentQuestionIndex + (selectedAnswer !== null ? 1 : 0)}
            </div>
          </div>

          <div className="question-card">
            <div className="question-category">
              {getCategoryDisplay(currentQuestion.category)}
              {currentQuestion.type && currentQuestion.type !== 'multiple-choice' && (
                <span className="question-type-badge">{currentQuestion.type === 'true-false' ? 'True/False' : currentQuestion.type === 'matching' ? 'Matching' : currentQuestion.type === 'fill-in-blank' ? 'Fill-in' : 'Multi-Select'}</span>
              )}
            </div>
            <h2 className="question-text">{currentQuestion.question}</h2>

            <QuestionRenderer
              key={currentQuestionIndex}
              question={currentQuestion}
              onAnswer={handleAnswerClick}
              showExplanation={showExplanation}
              selectedAnswer={selectedAnswer}
              isStudyMode={false}
            />

            {showExplanation && (
              <div className={`explanation ${
                userAnswers[userAnswers.length - 1]?.correct ? 'correct-exp' : 'incorrect-exp'
              }`}>
                <div className="exp-header">
                  {userAnswers[userAnswers.length - 1]?.correct ? (
                    <span>✨ Yasss! That's correct! ✨</span>
                  ) : (
                    <span>Oops! Not quite, babe</span>
                  )}
                </div>
                <p className="exp-text">{currentQuestion.explanation}</p>
              </div>
            )}
          </div>

          {showExplanation && (
            <button className="next-button" onClick={handleNext}>
              {currentQuestionIndex < questions.length - 1 ? 'NEXT QUESTION →' : 'SEE MY RESULTS 👑'}
            </button>
          )}
        </div>
      )}

      {/* Study Error - No Questions */}
      {gameState === 'study' && !studyQuestion && (
        <div className="error-screen">
          <h2>No questions in this category 💔</h2>
          <p>Try selecting "All Categories" bestie!</p>
          <button className="home-button" onClick={() => {
            setCategoryFilter('all')
            setGameState('welcome')
          }}>
            BACK TO HOME 🏠
          </button>
        </div>
      )}

      {/* Study Mode - keeping your existing implementation */}
      {gameState === 'study' && studyQuestion && (
        <div className="study-screen">
          <div className="study-header">
            <button className="back-button" onClick={() => setGameState('welcome')}>
              ← BACK
            </button>
            <h2 className="study-title">STUDY MODE</h2>
          </div>

          <div className="category-filter">
            <select
              className="category-dropdown"
              value={categoryFilter}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="road-rules">🚗 Road Rules</option>
              <option value="road-signs">🛑 Road Signs</option>
              <option value="pavement-markings">🛣️ Pavement Markings</option>
              <option value="traffic-signals">🚦 Traffic Signals</option>
              <option value="safe-driving">🦺 Safe Driving</option>
              <option value="sharing-road">🚴 Sharing the Road</option>
              <option value="vehicle-equipment">🔧 Vehicle Equipment</option>
              <option value="emergency-situations">🚨 Emergency Situations</option>
            </select>
          </div>

          <div className="study-card">
            <div className="flashcard">
              <div className="question-category">
                {getCategoryDisplay(studyQuestion.category)}
                {studyQuestion.type && studyQuestion.type !== 'multiple-choice' && (
                  <span className="question-type-badge">{studyQuestion.type === 'true-false' ? 'True/False' : studyQuestion.type === 'matching' ? 'Matching' : studyQuestion.type === 'fill-in-blank' ? 'Fill-in' : 'Multi-Select'}</span>
                )}
              </div>
              <h2 className="question-text">{studyQuestion.question}</h2>

              <QuestionRenderer
                key={currentQuestionIndex}
                question={studyQuestion}
                onAnswer={handleStudyAnswer}
                showExplanation={showAnswer}
                selectedAnswer={null}
                isStudyMode={false}
              />

              {!showAnswer ? (
                <button className="reveal-button" onClick={() => setShowAnswer(true)}>
                  SHOW ANSWER 👀
                </button>
              ) : (
                <div className="explanation correct-exp">
                  <div className="exp-header">
                    ✨ The Correct Answer ✨
                  </div>
                  <p className="exp-text">{studyQuestion.explanation}</p>
                </div>
              )}
            </div>
          </div>

          <div className="study-navigation">
            <button
              className="nav-button prev-button"
              onClick={handleStudyPrev}
              disabled={currentQuestionIndex === 0}
            >
              ← PREVIOUS
            </button>
            <button
              className="nav-button next-button"
              onClick={handleStudyNext}
              disabled={currentQuestionIndex === filteredQuestions.length - 1}
            >
              NEXT →
            </button>
          </div>
        </div>
      )}

      {/* Results Screen */}
      {gameState === 'results' && (
        <div className="results-screen">
          <div className="results-content">
            {/* Achievement Notifications */}
            {newAchievements.length > 0 && (
              <div className="achievement-notification">
                <h3>🎉 NEW ACHIEVEMENTS UNLOCKED! 🎉</h3>
                <div className="achievements-list">
                  {newAchievements.map(ach => (
                    <div key={ach.id} className="achievement-item">
                      <span className="achievement-icon">{ACHIEVEMENTS[ach.id.toUpperCase()].icon}</span>
                      <div>
                        <div className="achievement-name">{ACHIEVEMENTS[ach.id.toUpperCase()].name}</div>
                        <div className="achievement-desc">{ACHIEVEMENTS[ach.id.toUpperCase()].description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={`results-badge ${passed ? 'passed' : 'failed'}`}>
              {passed ? '👑' : '💔'}
            </div>

            <h1 className="results-title">
              {passed ? (
                <>PERIODT! YOU PASSED! 🎉</>
              ) : (
                <>Not This Time, Boo 💅🏾</>
              )}
            </h1>

            <div className="level-display">
              <div className="level-badge">
                <span className="level-icon">👑</span>
                <span>Level {userLevel.level}: {userLevel.name}</span>
              </div>
            </div>

            <div className="results-score">
              <div className="big-score">{score}/{questions.length}</div>
              <div className="percentage">{percentage}%</div>
            </div>

            <div className="results-message">
              {passed ? (
                <p>
                  Okay miss thing! You killed it! You got {score} out of {questions.length} questions right.
                  You're ready to hit them roads! Now go schedule that test at the FLHSMV and show them what you got! 🚗💨
                </p>
              ) : (
                <p>
                  Don't stress it, babe! You got {score} out of {questions.length}. You needed {passingScore} to pass.
                  {quizMode === 'review'
                    ? " Keep reviewing and you'll get there! 💖"
                    : " Study a lil more and come back - we believe in you! You got this! 💪🏾💖"}
                </p>
              )}
            </div>

            <div className="results-stats">
              <div className="stat-item">
                <div className="stat-value">{userAnswers.filter(a => a.correct).length}</div>
                <div className="stat-label">Correct</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{userAnswers.filter(a => !a.correct).length}</div>
                <div className="stat-label">Incorrect</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{passingScore}</div>
                <div className="stat-label">Needed to Pass</div>
              </div>
            </div>

            <div className="results-actions">
              {quizMode === 'test' && (
                <button className="retry-button" onClick={startTest}>
                  TAKE TEST AGAIN 🔄
                </button>
              )}
              {quizMode === 'practice' && (
                <button className="retry-button" onClick={startPractice}>
                  MORE PRACTICE 🎯
                </button>
              )}
              {quizMode === 'review' && (
                <button className="retry-button" onClick={startReview}>
                  REVIEW AGAIN 🔄
                </button>
              )}
              <button className="home-button" onClick={() => setGameState('welcome')}>
                BACK TO HOME 🏠
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Flashcard Error - No Questions */}
      {gameState === 'flashcards' && !studyQuestion && (
        <div className="error-screen">
          <h2>No flashcards in this category 💔</h2>
          <p>Try selecting "All Categories" bestie!</p>
          <button className="home-button" onClick={() => {
            setCategoryFilter('all')
            setGameState('welcome')
          }}>
            BACK TO HOME 🏠
          </button>
        </div>
      )}

      {/* Flashcard Mode */}
      {gameState === 'flashcards' && studyQuestion && (
        <div className="flashcard-screen">
          <div className="flashcard-header">
            <button className="back-button" onClick={() => setGameState('welcome')}>
              ← BACK
            </button>
            <h2 className="flashcard-title">FLASHCARDS 🃏</h2>
          </div>

          <div className="category-filter">
            <select
              className="category-dropdown"
              value={categoryFilter}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="road-rules">🚗 Road Rules</option>
              <option value="road-signs">🛑 Road Signs</option>
              <option value="pavement-markings">🛣️ Pavement Markings</option>
              <option value="traffic-signals">🚦 Traffic Signals</option>
              <option value="safe-driving">🦺 Safe Driving</option>
              <option value="sharing-road">🚴 Sharing the Road</option>
              <option value="vehicle-equipment">🔧 Vehicle Equipment</option>
              <option value="emergency-situations">🚨 Emergency Situations</option>
            </select>
          </div>

          <div className="flashcard-progress">
            <div className="progress-text">
              Card {currentQuestionIndex + 1} / {filteredQuestions.length}
            </div>
            <div className="flashcard-stats">
              <span className="stat-know">✓ Know: {knownCards.length}</span>
              <span className="stat-study">📖 Study: {needStudyCards.length}</span>
            </div>
          </div>

          <div className={`flashcard-container ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="flashcard-inner">
              {/* Front of card */}
              <div className="flashcard-face flashcard-front">
                <div className="flashcard-category">
                  {getCategoryDisplay(studyQuestion.category)}
                </div>
                <h2 className="flashcard-question">{studyQuestion.question}</h2>
                <div className="flashcard-hint">Click to flip 🔄</div>
              </div>

              {/* Back of card */}
              <div className="flashcard-face flashcard-back">
                <div className="flashcard-label">ANSWER</div>
                <div className="flashcard-answer">
                  {studyQuestion.type === 'multiple-choice' && (
                    <div className="answer-display">
                      <span className="answer-letter">{String.fromCharCode(65 + studyQuestion.correct)}</span>
                      <span className="answer-text">{studyQuestion.options[studyQuestion.correct]}</span>
                    </div>
                  )}
                  {studyQuestion.type === 'true-false' && (
                    <div className="answer-display">
                      <span className="tf-answer">{studyQuestion.correct ? 'TRUE ✓' : 'FALSE ✗'}</span>
                    </div>
                  )}
                  {studyQuestion.type === 'matching' && (
                    <div className="matching-answers">
                      {studyQuestion.pairs.map((pair, idx) => (
                        <div key={idx} className="match-pair-answer">
                          {pair.left} → {pair.right}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flashcard-explanation">
                  <strong>Explanation:</strong><br />
                  {studyQuestion.explanation}
                </div>
                <div className="flashcard-hint">Click to flip back 🔄</div>
              </div>
            </div>
          </div>

          {isFlipped && (
            <div className="flashcard-actions">
              <button className="flashcard-btn know-btn" onClick={(e) => { e.stopPropagation(); handleFlashcardNext(false); }}>
                📖 NEED TO STUDY
              </button>
              <button className="flashcard-btn study-btn" onClick={(e) => { e.stopPropagation(); handleFlashcardNext(true); }}>
                ✓ I KNOW THIS
              </button>
            </div>
          )}

          <div className="flashcard-navigation">
            <button
              className="nav-button prev-button"
              onClick={handleFlashcardPrev}
              disabled={currentQuestionIndex === 0}
            >
              ← PREVIOUS
            </button>
            <button
              className="nav-button next-button"
              onClick={() => handleFlashcardNext()}
              disabled={currentQuestionIndex === filteredQuestions.length - 1}
            >
              NEXT →
            </button>
          </div>
        </div>
      )}

      {/* Dashboard Screen */}
      {gameState === 'dashboard' && (
        <div className="dashboard-screen">
          <div className="dashboard-content">
            <div className="dashboard-header">
              <button className="back-button" onClick={() => setGameState('welcome')}>
                ← BACK
              </button>
              <h2 className="dashboard-title">YOUR PROGRESS 📊</h2>
            </div>

            <div className="dashboard-grid">
              {/* Level Card */}
              <div className="dash-card level-card">
                <h3>Current Level</h3>
                <div className="big-level-badge">
                  <span className="big-level-icon">👑</span>
                  <div>
                    <div className="big-level-name">{userLevel.name}</div>
                    <div className="big-level-number">Level {userLevel.level}</div>
                  </div>
                </div>
                {userLevel.nextLevel && (
                  <div className="xp-progress">
                    <div className="xp-bar">
                      <div className="xp-fill" style={{ width: `${(userLevel.xp / userLevel.nextLevel) * 100}%` }}></div>
                    </div>
                    <p>{userLevel.xp} / {userLevel.nextLevel} XP</p>
                  </div>
                )}
              </div>

              {/* Streak Card */}
              <div className="dash-card streak-card">
                <h3>Study Streak</h3>
                <div className="streak-display">
                  <span className="streak-fire">🔥</span>
                  <span className="streak-number">{streak}</span>
                  <span className="streak-label">Days</span>
                </div>
                <p className="streak-message">
                  {streak === 0 && "Start your streak today!"}
                  {streak === 1 && "Great start! Keep it going!"}
                  {streak >= 2 && streak < 7 && "You're on fire! 🔥"}
                  {streak >= 7 && "Legendary streak! 👑"}
                </p>
              </div>

              {/* Stats Card */}
              <div className="dash-card stats-card">
                <h3>Test Stats</h3>
                <div className="stats-grid">
                  <div className="stat">
                    <div className="stat-number">{stats.totalTests}</div>
                    <div className="stat-name">Tests Taken</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">{stats.totalPassed}</div>
                    <div className="stat-name">Passed</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">{stats.averageScore}%</div>
                    <div className="stat-name">Avg Score</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">{stats.bestScore}%</div>
                    <div className="stat-name">Best Score</div>
                  </div>
                </div>
              </div>

              {/* Achievements Card */}
              <div className="dash-card achievements-card full-width">
                <h3>Achievements ({achievements.length}/{Object.keys(ACHIEVEMENTS).length})</h3>
                <div className="achievements-grid">
                  {Object.values(ACHIEVEMENTS).map(ach => {
                    const unlocked = achievements.some(a => a.id === ach.id)
                    return (
                      <div key={ach.id} className={`achievement-badge ${unlocked ? 'unlocked' : 'locked'}`}>
                        <div className="badge-icon">{unlocked ? ach.icon : '🔒'}</div>
                        <div className="badge-name">{ach.name}</div>
                        <div className="badge-desc">{ach.description}</div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Score History */}
              {storage.getScoreHistory().length > 0 && (
                <div className="dash-card history-card full-width">
                  <h3>Recent Tests</h3>
                  <div className="history-list">
                    {storage.getScoreHistory().slice(-5).reverse().map((test, index) => (
                      <div key={index} className={`history-item ${test.passed ? 'passed-test' : 'failed-test'}`}>
                        <span className="history-icon">{test.passed ? '✅' : '❌'}</span>
                        <span className="history-score">{test.score}/{test.total} ({test.percentage}%)</span>
                        <span className="history-mode">{test.mode}</span>
                        <span className="history-date">{new Date(test.date).toLocaleDateString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button className="home-button" onClick={() => setGameState('welcome')}>
              BACK TO HOME 🏠
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

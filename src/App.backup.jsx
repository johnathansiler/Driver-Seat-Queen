import { useState, useEffect } from 'react'
import './App.css'
import { floridaQuestions, shuffleQuestions } from './data/questions'

function App() {
  const [gameState, setGameState] = useState('welcome') // welcome, quiz, results, study
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [questions, setQuestions] = useState([])
  const [userAnswers, setUserAnswers] = useState([])
  const [categoryFilter, setCategoryFilter] = useState('all') // all, road-rules, road-signs
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    // Shuffle questions when component mounts
    setQuestions(shuffleQuestions(floridaQuestions).slice(0, 50))
  }, [])

  const startQuiz = () => {
    setGameState('quiz')
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setUserAnswers([])
    setQuestions(shuffleQuestions(floridaQuestions).slice(0, 50))
  }

  const startStudy = () => {
    setGameState('study')
    setCurrentQuestionIndex(0)
    setCategoryFilter('all')
    setShowAnswer(false)
    setQuestions(floridaQuestions)
  }

  const getFilteredQuestions = () => {
    if (categoryFilter === 'all') return questions
    return questions.filter(q => q.category === categoryFilter)
  }

  const filteredQuestions = getFilteredQuestions()
  const studyQuestion = filteredQuestions[currentQuestionIndex]

  const handleStudyNext = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
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

  const handleCategoryChange = (category) => {
    setCategoryFilter(category)
    setCurrentQuestionIndex(0)
    setShowAnswer(false)
  }

  const handleAnswerClick = (answerIndex) => {
    if (selectedAnswer !== null) return // Already answered

    setSelectedAnswer(answerIndex)
    const currentQuestion = questions[currentQuestionIndex]
    const isCorrect = answerIndex === currentQuestion.correct

    if (isCorrect) {
      setScore(score + 1)
    }

    setUserAnswers([...userAnswers, { questionId: currentQuestion.id, selected: answerIndex, correct: isCorrect }])
    setShowExplanation(true)
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setGameState('results')
    }
  }

  const currentQuestion = questions[currentQuestionIndex]
  const passingScore = 40 // Need 40/50 to pass (80%)
  const percentage = Math.round((score / questions.length) * 100)
  const passed = score >= passingScore

  return (
    <div className="app">
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
            <div className="info-box">
              <h3>The Tea ☕</h3>
              <ul>
                <li>50 questions total</li>
                <li>You need 40 correct answers (80%) to pass</li>
                <li>Based on the official Florida Driver's Handbook</li>
                <li>No boring vibes, we promise 💖</li>
              </ul>
            </div>
            <div className="welcome-buttons">
              <button className="start-button primary" onClick={startQuiz}>
                TAKE THE TEST 📝
              </button>
              <button className="start-button secondary" onClick={startStudy}>
                STUDY MODE 📚
              </button>
            </div>
          </div>
        </div>
      )}

      {gameState === 'quiz' && currentQuestion && (
        <div className="quiz-screen">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          <div className="quiz-header">
            <div className="question-counter">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
            <div className="score-display">
              Score: {score}/{currentQuestionIndex + (selectedAnswer !== null ? 1 : 0)}
            </div>
          </div>

          <div className="question-card">
            <div className="question-category">
              {currentQuestion.category === 'road-signs' ? '🚦 Road Signs' : '🚗 Road Rules'}
            </div>
            <h2 className="question-text">{currentQuestion.question}</h2>

            <div className="answers-grid">
              {currentQuestion.options.map((option, index) => {
                let buttonClass = 'answer-button'

                if (selectedAnswer !== null) {
                  if (index === currentQuestion.correct) {
                    buttonClass += ' correct'
                  } else if (index === selectedAnswer) {
                    buttonClass += ' incorrect'
                  } else {
                    buttonClass += ' disabled'
                  }
                }

                return (
                  <button
                    key={index}
                    className={buttonClass}
                    onClick={() => handleAnswerClick(index)}
                    disabled={selectedAnswer !== null}
                  >
                    <span className="answer-letter">{String.fromCharCode(65 + index)}</span>
                    <span className="answer-text">{option}</span>
                  </button>
                )
              })}
            </div>

            {showExplanation && (
              <div className={`explanation ${selectedAnswer === currentQuestion.correct ? 'correct-exp' : 'incorrect-exp'}`}>
                <div className="exp-header">
                  {selectedAnswer === currentQuestion.correct ? (
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

      {gameState === 'study' && studyQuestion && (
        <div className="study-screen">
          <div className="study-header">
            <button className="back-button" onClick={() => setGameState('welcome')}>
              ← BACK
            </button>
            <h2 className="study-title">STUDY MODE</h2>
          </div>

          <div className="category-filter">
            <button
              className={`filter-btn ${categoryFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('all')}
            >
              All ({floridaQuestions.length})
            </button>
            <button
              className={`filter-btn ${categoryFilter === 'road-rules' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('road-rules')}
            >
              🚗 Road Rules ({floridaQuestions.filter(q => q.category === 'road-rules').length})
            </button>
            <button
              className={`filter-btn ${categoryFilter === 'road-signs' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('road-signs')}
            >
              🚦 Signs ({floridaQuestions.filter(q => q.category === 'road-signs').length})
            </button>
          </div>

          <div className="study-card">
            <div className="study-counter">
              {currentQuestionIndex + 1} / {filteredQuestions.length}
            </div>

            <div className="flashcard">
              <div className="question-category">
                {studyQuestion.category === 'road-signs' ? '🚦 Road Signs' : '🚗 Road Rules'}
              </div>
              <h2 className="question-text">{studyQuestion.question}</h2>

              <div className="answers-grid study-answers">
                {studyQuestion.options.map((option, index) => {
                  let buttonClass = 'answer-button study-answer'

                  if (showAnswer && index === studyQuestion.correct) {
                    buttonClass += ' correct'
                  }

                  return (
                    <div key={index} className={buttonClass}>
                      <span className="answer-letter">{String.fromCharCode(65 + index)}</span>
                      <span className="answer-text">{option}</span>
                      {showAnswer && index === studyQuestion.correct && (
                        <span className="checkmark">✓</span>
                      )}
                    </div>
                  )
                })}
              </div>

              {!showAnswer ? (
                <button className="reveal-button" onClick={() => setShowAnswer(true)}>
                  SHOW ANSWER 👀
                </button>
              ) : (
                <div className="explanation correct-exp">
                  <div className="exp-header">
                    ✨ The Answer: {String.fromCharCode(65 + studyQuestion.correct)} ✨
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

      {gameState === 'results' && (
        <div className="results-screen">
          <div className="results-content">
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
                  Study a lil more and come back - we believe in you! You got this! 💪🏾💖
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
              <button className="retry-button" onClick={startQuiz}>
                TRY AGAIN 🔄
              </button>
              <button className="home-button" onClick={() => setGameState('welcome')}>
                BACK TO HOME 🏠
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

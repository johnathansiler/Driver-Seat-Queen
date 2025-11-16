import { useState } from 'react'

export const QuestionRenderer = ({ question, onAnswer, showExplanation, selectedAnswer, isStudyMode }) => {
  const [matchingAnswers, setMatchingAnswers] = useState({})
  const questionType = question.type || 'multiple-choice'

  // Multiple Choice
  if (questionType === 'multiple-choice') {
    return (
      <>
        <div className="answers-grid">
          {question.options.map((option, index) => {
            let buttonClass = 'answer-button'

            if (selectedAnswer !== null && selectedAnswer !== undefined) {
              if (index === question.correct) {
                buttonClass += ' correct'
              } else if (index === selectedAnswer) {
                buttonClass += ' incorrect'
              } else {
                buttonClass += ' disabled'
              }
            }

            if (isStudyMode) {
              buttonClass += ' study-answer'
              if (showExplanation && index === question.correct) {
                buttonClass = 'answer-button study-answer correct'
              }
            }

            return (
              <button
                key={index}
                className={buttonClass}
                onClick={() => !isStudyMode && onAnswer(index)}
                disabled={(selectedAnswer !== null && !isStudyMode) || isStudyMode}
              >
                <span className="answer-letter">{String.fromCharCode(65 + index)}</span>
                <span className="answer-text">{option}</span>
                {isStudyMode && showExplanation && index === question.correct && (
                  <span className="checkmark">✓</span>
                )}
              </button>
            )
          })}
        </div>
      </>
    )
  }

  // True/False
  if (questionType === 'true-false') {
    const options = ['True', 'False']
    const correctIndex = question.correct ? 0 : 1

    return (
      <div className="true-false-container">
        {options.map((option, index) => {
          let buttonClass = 'tf-button'

          if (selectedAnswer !== null && selectedAnswer !== undefined) {
            if (index === correctIndex) {
              buttonClass += ' correct'
            } else if (index === selectedAnswer) {
              buttonClass += ' incorrect'
            } else {
              buttonClass += ' disabled'
            }
          }

          if (isStudyMode) {
            buttonClass += ' study-answer'
            if (showExplanation && index === correctIndex) {
              buttonClass = 'tf-button study-answer correct'
            }
          }

          return (
            <button
              key={index}
              className={buttonClass}
              onClick={() => !isStudyMode && onAnswer(index)}
              disabled={(selectedAnswer !== null && !isStudyMode) || isStudyMode}
            >
              <span className="tf-icon">{option === 'True' ? '✓' : '✗'}</span>
              <span className="tf-text">{option}</span>
              {isStudyMode && showExplanation && index === correctIndex && (
                <span className="checkmark">✓</span>
              )}
            </button>
          )
        })}
      </div>
    )
  }

  // Matching
  if (questionType === 'matching') {
    const shuffledRight = isStudyMode && !showExplanation
      ? [...question.pairs.map(p => p.right)].sort(() => Math.random() - 0.5)
      : question.pairs.map(p => p.right)

    const handleMatch = (leftItem, rightItem) => {
      const newAnswers = { ...matchingAnswers, [leftItem]: rightItem }
      setMatchingAnswers(newAnswers)

      // Check if all matched
      if (Object.keys(newAnswers).length === question.pairs.length) {
        // Calculate score
        const correct = question.pairs.filter(pair => newAnswers[pair.left] === pair.right).length
        const isCorrect = correct === question.pairs.length
        onAnswer(isCorrect ? 1 : 0, newAnswers)
      }
    }

    return (
      <div className="matching-container">
        <div className="matching-grid">
          <div className="matching-column">
            <h4>Match:</h4>
            {question.pairs.map((pair, index) => (
              <div key={index} className="matching-item left-item">
                {pair.left}
              </div>
            ))}
          </div>
          <div className="matching-column">
            <h4>With:</h4>
            {(showExplanation ? question.pairs.map(p => p.right) : shuffledRight).map((rightItem, index) => {
              const isMatched = Object.values(matchingAnswers).includes(rightItem)
              const correctPair = question.pairs.find(p => p.right === rightItem)
              const isCorrectMatch = showExplanation && matchingAnswers[correctPair?.left] === rightItem

              return (
                <button
                  key={index}
                  className={`matching-item right-item ${isMatched ? 'matched' : ''} ${isCorrectMatch ? 'correct' : ''}`}
                  onClick={() => {
                    if (!showExplanation && !isStudyMode) {
                      // Find first unmatched left item
                      const unmatchedLeft = question.pairs.find(p => !matchingAnswers[p.left])
                      if (unmatchedLeft) {
                        handleMatch(unmatchedLeft.left, rightItem)
                      }
                    }
                  }}
                  disabled={isMatched || showExplanation || isStudyMode}
                >
                  {rightItem}
                  {isCorrectMatch && <span className="checkmark">✓</span>}
                </button>
              )
            })}
          </div>
        </div>
        {showExplanation && (
          <div className="matching-results">
            {question.pairs.map((pair, index) => (
              <div key={index} className={`match-pair ${matchingAnswers[pair.left] === pair.right ? 'correct-match' : 'incorrect-match'}`}>
                <span>{pair.left}</span> → <span>{pair.right}</span>
                {matchingAnswers[pair.left] === pair.right ? ' ✓' : ' ✗'}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  // Fill in the Blank / Numeric Input
  if (questionType === 'fill-in-blank') {
    const [userInput, setUserInput] = useState('')
    const correctAnswer = question.correctAnswer.toString().toLowerCase()

    const handleSubmit = () => {
      const normalizedInput = userInput.toString().toLowerCase().trim()
      const isCorrect = normalizedInput === correctAnswer
      onAnswer(isCorrect ? 1 : 0, userInput)
    }

    return (
      <div className="fill-blank-container">
        <input
          type="text"
          className="fill-blank-input"
          value={userInput}
          onChange={(e) => !showExplanation && setUserInput(e.target.value)}
          placeholder="Type your answer..."
          disabled={showExplanation || isStudyMode}
        />
        {!showExplanation && !isStudyMode && (
          <button
            className="submit-answer-btn"
            onClick={handleSubmit}
            disabled={!userInput.trim()}
          >
            SUBMIT ANSWER
          </button>
        )}
        {(showExplanation || isStudyMode) && (
          <div className={`fill-blank-result ${showExplanation && userInput.toLowerCase().trim() === correctAnswer ? 'correct' : 'incorrect'}`}>
            <strong>Correct Answer:</strong> {question.correctAnswer}
          </div>
        )}
      </div>
    )
  }

  // Multiple Select
  if (questionType === 'multiple-select') {
    const [selectedOptions, setSelectedOptions] = useState([])

    const toggleOption = (index) => {
      if (showExplanation || isStudyMode) return

      if (selectedOptions.includes(index)) {
        setSelectedOptions(selectedOptions.filter(i => i !== index))
      } else {
        setSelectedOptions([...selectedOptions, index])
      }
    }

    const handleSubmit = () => {
      const sortedSelected = [...selectedOptions].sort()
      const sortedCorrect = [...question.correctAnswers].sort()
      const isCorrect = JSON.stringify(sortedSelected) === JSON.stringify(sortedCorrect)
      onAnswer(isCorrect ? 1 : 0, selectedOptions)
    }

    return (
      <div className="multiple-select-container">
        <p className="select-instruction">Select all that apply:</p>
        <div className="answers-grid">
          {question.options.map((option, index) => {
            let buttonClass = 'answer-button multi-select'
            const isSelected = selectedOptions.includes(index)
            const isCorrectAnswer = question.correctAnswers.includes(index)

            if (isSelected) {
              buttonClass += ' selected'
            }

            if (showExplanation || isStudyMode) {
              if (isCorrectAnswer) {
                buttonClass += ' correct'
              } else if (isSelected && !isCorrectAnswer) {
                buttonClass += ' incorrect'
              }
            }

            return (
              <button
                key={index}
                className={buttonClass}
                onClick={() => toggleOption(index)}
                disabled={showExplanation || isStudyMode}
              >
                <span className="checkbox">{isSelected ? '☑' : '☐'}</span>
                <span className="answer-text">{option}</span>
                {(showExplanation || isStudyMode) && isCorrectAnswer && (
                  <span className="checkmark">✓</span>
                )}
              </button>
            )
          })}
        </div>
        {!showExplanation && !isStudyMode && (
          <button
            className="submit-answer-btn"
            onClick={handleSubmit}
            disabled={selectedOptions.length === 0}
          >
            SUBMIT ANSWER
          </button>
        )}
      </div>
    )
  }

  return <div>Unknown question type</div>
}

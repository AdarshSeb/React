import React, { useState } from 'react';
import './Quiz.css';

const questions = [
    { questionText: 'What is the capital of France?', answerOptions: [ { answerText: 'Berlin', isCorrect: false }, { answerText: 'Madrid', isCorrect: false }, { answerText: 'Paris', isCorrect: true }, { answerText: 'Lisbon', isCorrect: false }] },
    { questionText: 'What is 2 + 2?', answerOptions: [ { answerText: '3', isCorrect: false }, { answerText: '4', isCorrect: true }, { answerText: '5', isCorrect: false }, { answerText: '6', isCorrect: false }] },
    { questionText: 'Who wrote "Hamlet"?', answerOptions: [ { answerText: 'Charles Dickens', isCorrect: false }, { answerText: 'Mark Twain', isCorrect: false }, { answerText: 'William Shakespeare', isCorrect: true }, { answerText: 'Ernest Hemingway', isCorrect: false }] },
    { questionText: 'What is the largest planet in our solar system?', answerOptions: [ { answerText: 'Earth', isCorrect: false }, { answerText: 'Mars', isCorrect: false }, { answerText: 'Jupiter', isCorrect: true }, { answerText: 'Venus', isCorrect: false }] },
    { questionText: 'Which element has the chemical symbol "O"?', answerOptions: [ { answerText: 'Gold', isCorrect: false }, { answerText: 'Oxygen', isCorrect: true }, { answerText: 'Osmium', isCorrect: false }, { answerText: 'Oxide', isCorrect: false }] },
    { questionText: 'Who painted the "Mona Lisa"?', answerOptions: [ { answerText: 'Vincent van Gogh', isCorrect: false }, { answerText: 'Pablo Picasso', isCorrect: false }, { answerText: 'Leonardo da Vinci', isCorrect: true }, { answerText: 'Claude Monet', isCorrect: false }] },
    { questionText: 'What is the square root of 64?', answerOptions: [ { answerText: '6', isCorrect: false }, { answerText: '7', isCorrect: false }, { answerText: '8', isCorrect: true }, { answerText: '9', isCorrect: false }] },
    { questionText: 'Which ocean is the largest?', answerOptions: [ { answerText: 'Atlantic', isCorrect: false }, { answerText: 'Indian', isCorrect: false }, { answerText: 'Arctic', isCorrect: false }, { answerText: 'Pacific', isCorrect: true }] },
    { questionText: 'Which planet is closest to the sun?', answerOptions: [ { answerText: 'Venus', isCorrect: false }, { answerText: 'Earth', isCorrect: false }, { answerText: 'Mercury', isCorrect: true }, { answerText: 'Mars', isCorrect: false }] },
    { questionText: 'What is the powerhouse of the cell?', answerOptions: [ { answerText: 'Nucleus', isCorrect: false }, { answerText: 'Mitochondria', isCorrect: true }, { answerText: 'Ribosome', isCorrect: false }, { answerText: 'Chloroplast', isCorrect: false }] },
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [theme, setTheme] = useState('standard');

    const handleAnswerOptionClick = (index, isCorrect) => {
        setSelectedOption(index);
        if (isCorrect) {
            setScore(score + 1);
            setCorrectCount(correctCount + 1);
        }
    };

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedOption(null);
        } else {
            setShowResult(true);
        }
    };

    const handleRestartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setCorrectCount(0);
        setSelectedOption(null);
        setShowResult(false);
    };

    const toggleTheme = () => {
        setTheme(theme === 'standard' ? 'creative' : 'standard');
    };

    return (
        <div className={`quiz-container ${theme}`}>
            <button className="theme-switcher" onClick={toggleTheme}>
                Switch to {theme === 'standard' ? 'Creative' : 'Standard'} Theme
            </button>
            
            {showResult ? (
                <div className="result-section">
                    <h1>Quiz Completed!</h1>
                    <p>Total Questions: {questions.length}</p>
                    <p>Correct Answers: {correctCount}</p>
                    <p>Wrong Answers: {questions.length - correctCount}</p>
                    <p>Total Score: {score} / {questions.length}</p>
                    <p className="motivation-quote">
                        {score > 7
                            ? "Excellent job! Keep it up!"
                            : score > 4
                            ? "Good effort! You can do even better!"
                            : "Don’t give up! Keep practicing!"}
                    </p>
                    <button className="try-again-button" onClick={handleRestartQuiz}>
                        Try Again
                    </button>
                </div>
            ) : (
                <>
                    <h2>
                        Question {currentQuestion + 1}: {questions[currentQuestion].questionText}
                    </h2>
                    <div className="answer-options">
                        {questions[currentQuestion].answerOptions.map((option, index) => (
                            <button
                                key={index}
                                className={`answer-button ${selectedOption === index ? 'selected' : ''}`}
                                onClick={() => handleAnswerOptionClick(index, option.isCorrect)}
                            >
                                {option.answerText}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={handleNextQuestion}
                        disabled={selectedOption === null}
                        className="next-button"
                    >
                        {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next'}
                    </button>
                </>
            )}
        </div>
    );
};

export default Quiz;

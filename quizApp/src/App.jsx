// components/App.jsx
import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Scoreboard from './components/Scoreboard';
import './App.css';

const App = () => {
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    const handleScore = (score, totalQuestions) => {
        setScore(score);
        setQuizFinished(true);
    };

    return (
        <div className="app-container">
            {quizFinished ? (
                <Scoreboard score={score} totalQuestions={10} />
            ) : (
                <Quiz onScore={handleScore} />
            )}
        </div>
    );
};

export default App;

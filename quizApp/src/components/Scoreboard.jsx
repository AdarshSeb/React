// components/Scoreboard.jsx
import React from 'react';
import './Scoreboard.css';

const Scoreboard = ({ score, totalQuestions }) => {
    const totalWrong = totalQuestions - score;

    return (
        <div className="scoreboard-container">
            <h2>Quiz Results</h2>
            <p>Total Questions: {totalQuestions}</p>
            <p>Correct Answers: {score}</p>
            <p>Wrong Answers: {totalWrong}</p>
            <p>Your Score: {score}/{totalQuestions}</p>
            {score === totalQuestions ? (
                <p className="motivation">Great job! You scored full marks!</p>
            ) : (
                <p className="motivation">Keep trying! You can do better!</p>
            )}
        </div>
    );
};

export default Scoreboard;

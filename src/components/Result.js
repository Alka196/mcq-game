import React from 'react';
import { useNavigate } from 'react-router-dom';

const Result = ({ score, totalQuestions }) => {
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate('/question/0');
    window.location.reload(); // Simple way to reset state
  };

  return (
    <div className="result-container">
      <h2>Final Score</h2>
      <p>
        You scored {score} out of {totalQuestions}
      </p>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default Result;

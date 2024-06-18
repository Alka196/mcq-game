import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Question = ({ question, options, correctAnswer, questionIndex, totalQuestions, updateScore }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedOption === correctAnswer) {
      updateScore();
    }
    if (questionIndex < totalQuestions - 1) {
      navigate(`/question/${questionIndex + 1}`);
    } else {
      navigate('/result');
    }
  };

  return (
    <div className="question-container">
      <h2>{question}</h2>
      <div className="options">
        {options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default Question;

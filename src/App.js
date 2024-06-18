import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Question from './components/Question';
import Result from './components/Result';
import questions from './data/questions';

const App = () => {
  const [score, setScore] = useState(0);

  const updateScore = () => {
    setScore(score + 1);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigate to="/question/0" />} />
          {questions.map((q, index) => (
            <Route
              key={index}
              path={`/question/${index}`}
              element={
                <Question
                  question={q.question}
                  options={q.options}
                  correctAnswer={q.correctAnswer}
                  questionIndex={index}
                  totalQuestions={questions.length}
                  updateScore={updateScore}
                />
              }
            />
          ))}
          <Route path="/result" element={<Result score={score} totalQuestions={questions.length} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

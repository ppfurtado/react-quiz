import React from 'react';

//components
import QuestionCard from './components/QuestionCard';

const App = () => {
  const startTrivia = async () => {
    return {};
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    return {};
  };

  const nextQuestion = () => {
    return {};
  };

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className="start">start</button>
      <p className="score">Score</p>
      <p>Loading Question...</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;

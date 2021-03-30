import React from 'react';
import { fetchQuizQuestions } from './API';

//components
import QuestionCard from './components/QuestionCard';
//types
import { Difficulty } from './API';

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);
  const [number, setNumber] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

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
      <p className="score">Score:</p>
      <p>Loading Question ...</p>
      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answer}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;

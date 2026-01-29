import React, { useState } from 'react';
import './FocusQuiz.css';

const questions = [
  {
    question: "Which technique helps improve focus?",
    options: ["Multitasking", "Mindfulness meditation", "Overthinking", "Skipping breaks"],
    answer: "Mindfulness meditation"
  },
  {
    question: "What is a good practice for concentration?",
    options: ["Checking phone often", "Deep breathing", "Background TV", "Eating junk food"],
    answer: "Deep breathing"
  },
  {
    question: "Which of these games can improve attention span?",
    options: ["Card matching", "Auto clicker", "Fast scrolling", "None"],
    answer: "Card matching"
  },
  {
    question: "Which food supports brain health?",
    options: ["Broccoli", "Candy", "Soda", "Chips"],
    answer: "Broccoli"
  }
];

function FocusQuiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="focus-quiz">
      <h3>🧠 Focus Quiz</h3>
      {showScore ? (
        <div className="score">Your Score: {score} / {questions.length}</div>
      ) : (
        <div className="question-box">
          <h4>{questions[current].question}</h4>
          {questions[current].options.map((opt, i) => (
            <button key={i} onClick={() => handleAnswer(opt)}>{opt}</button>
          ))}
        </div>
      )}
    </div>
  );
}

export default FocusQuiz;

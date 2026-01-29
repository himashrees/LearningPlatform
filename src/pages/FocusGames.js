import React from 'react';
import './FocusGames.css';

const focusGames = [
  {
    title: "Memory Game",
    description: "Match cards with the same symbols to improve your memory.",
    link: "https://www.memozor.com/memory-games/for-adults/online-free",
  },
  {
    title: "Focus Dots",
    description: "Click only the blue dots — avoid distractions.",
    link: "https://www.focusdots.com",
  },
  {
    title: "Reaction Time Test",
    description: "Test your reaction speed and sharpen your attention.",
    link: "https://humanbenchmark.com/tests/reactiontime",
  },
  {
    title: "Number Hunt",
    description: "Click numbers from 1 to 50 as fast as possible.",
    link: "https://www.brainmetrix.com/numbers/",
  },
];

function FocusGames() {
  return (
    <div className="focus-games">
      <h3>🧠 Concentration Booster</h3>
      <ul>
        {focusGames.map((game, index) => (
          <li key={index}>
            <h4>{game.title}</h4>
            <p>{game.description}</p>
            <a href={game.link} target="_blank" rel="noopener noreferrer">Play Now</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FocusGames;

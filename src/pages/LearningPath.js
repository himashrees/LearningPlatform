// This file contains the main structure and placeholders for all requested features
// You can divide each feature into its own component file as your project scales

import React, { useState, useEffect } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import Confetti from 'react-confetti';
import Calendar from 'react-calendar';
import HeatMap from 'react-heatmap-grid';
import './LearningPath.css'; // Include all your CSS styles

const nodes = [
  { id: 'HTML' },
  { id: 'CSS' },
  { id: 'JavaScript' },
  { id: 'React' },
  { id: 'Node.js' }
];
const links = [
  { source: 'HTML', target: 'CSS' },
  { source: 'CSS', target: 'JavaScript' },
  { source: 'JavaScript', target: 'React' },
  { source: 'React', target: 'Node.js' }
];

const Flashcard = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="front">{front}</div>
      <div className="back">{back}</div>
    </div>
  );
};

const LearningPath = () => {
  const [checkedTopics, setCheckedTopics] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [theme, setTheme] = useState('light');

  const handleTopicToggle = (topic) => {
    const updated = checkedTopics.includes(topic)
      ? checkedTopics.filter(t => t !== topic)
      : [...checkedTopics, topic];
    setCheckedTopics(updated);
    if (updated.length === nodes.length) setShowConfetti(true);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="learning-path-container">
      {showConfetti && <Confetti />}

      <div className="theme-toggle">
        <label>🌙 Dark Mode</label>
        <input type="checkbox" onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      </div>

      <section className="knowledge-graph">
        <h2>Skill Map</h2>
        <ForceGraph2D
          graphData={{ nodes, links }}
          nodeLabel="id"
          nodeAutoColorBy="id"
          onNodeClick={(node) => alert(`Show resources for ${node.id}`)}
        />
      </section>

      <section className="progress-tracker">
        <h2>Track Your Progress</h2>
        {nodes.map(node => (
          <label key={node.id}>
            <input type="checkbox" checked={checkedTopics.includes(node.id)} onChange={() => handleTopicToggle(node.id)} />
            {node.id}
          </label>
        ))}
        <progress value={checkedTopics.length} max={nodes.length}></progress>
      </section>

      <section className="flashcards">
        <h2>Flashcards</h2>
        <Flashcard front="What is JSX?" back="JSX is a syntax extension for JavaScript used in React." />
      </section>

      <section className="calendar">
        <h2>Learning Schedule</h2>
        <Calendar onChange={setCalendarDate} value={calendarDate} />
      </section>

      <section className="resource-explorer">
        <h2>Resources</h2>
        <ul>
          <li><strong>React Docs</strong> - Beginner ⭐⭐⭐</li>
          <li><strong>JavaScript.info</strong> - Intermediate ⭐⭐⭐⭐</li>
        </ul>
      </section>

      <section className="heatmap">
        <h2>Skill Heatmap</h2>
        <HeatMap
          xLabels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
          yLabels={["HTML", "CSS", "JS", "React"]}
          data={[[1, 2, 0, 4, 0, 0, 2], [2, 0, 3, 1, 4, 1, 0], [1, 2, 2, 3, 2, 1, 0], [3, 1, 2, 0, 0, 0, 1]]}
        />
      </section>

      <section className="discussion">
        <h2>Peer Discussion</h2>
        <textarea placeholder="Share your doubts or tips..."></textarea>
        <button>Post</button>
      </section>

      <section className="mentor-matching">
        <h2>Find a Mentor</h2>
        <button>Request a Mentor Match</button>
      </section>
    </div>
  );
};

export default LearningPath;

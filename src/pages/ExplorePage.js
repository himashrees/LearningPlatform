


// import React, { useState } from 'react';
// import './ExplorePage.css';

// const allTopics = [
//   'Web Development', 'Machine Learning', 'Data Science', 'Cybersecurity', 'Blockchain', 'Cloud Computing',
//   'UI/UX Design', 'Mobile App Development', 'DevOps', 'Game Development', 'AI Ethics', 'Deep Learning',
//   'Augmented Reality', 'Virtual Reality', 'Software Testing', 'Natural Language Processing', 'Database Management',
//   'Quantum Computing', 'Edge Computing', 'IoT', 'Big Data', 'Agile', 'Scrum', 'Linux', 'Python', 'Java',
//   'C++', 'JavaScript', 'React', 'Angular', 'Vue', 'Node.js', 'Flask', 'Spring Boot', 'Django', 'TensorFlow',
//   'Keras', 'Pandas', 'NumPy', 'Rust', 'GoLang', 'PHP', 'Scala', 'TypeScript', 'Firebase', 'Docker',
//   'Kubernetes', 'CI/CD', 'Git', 'Jenkins', 'Figma', 'Adobe XD', 'Salesforce'
// ];

// function ExplorePage() {
//   const [goals, setGoals] = useState(['Become a Full Stack Developer']);
//   const [newGoal, setNewGoal] = useState('');
//   const [selectedContent, setSelectedContent] = useState([]);
//   const [skillLevel, setSkillLevel] = useState('Beginner');
//   const [selectedTopics, setSelectedTopics] = useState([]);
//   const [showPath, setShowPath] = useState(false);

//   const handleAddGoal = () => {
//     if (newGoal.trim()) {
//       setGoals([...goals, newGoal.trim()]);
//       setNewGoal('');
//     }
//   };

//   const toggleContent = (type) => {
//     setSelectedContent((prev) =>
//       prev.includes(type) ? prev.filter((c) => c !== type) : [...prev, type]
//     );
//   };

//   const toggleTopic = (topic) => {
//     setSelectedTopics((prev) =>
//       prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
//     );
//   };

//   const handleViewPath = () => {
//     if (goals.length > 0 && selectedTopics.length > 0 && selectedContent.length > 0) {
//       setShowPath(true);
//     } else {
//       alert('Please select at least one goal, topic, and content type.');
//     }
//   };

//   const generateLinks = (topic, selectedContent) => {
//     const encodedTopic = encodeURIComponent(topic);
//     const links = [];

//     if (selectedContent.includes('Courses')) {
//       links.push({
//         label: '⭐ Udemy (Best Rated)',
//         url: `https://www.udemy.com/courses/search/?q=${encodedTopic}&sort=highest-rated`
//       });
//       links.push({
//         label: '⭐ Coursera',
//         url: `https://www.coursera.org/search?query=${encodedTopic}`
//       });
//       links.push({
//         label: '⭐ edX',
//         url: `https://www.edx.org/search?q=${encodedTopic}`
//       });
//       links.push({
//         label: '⭐ Springboard',
//         url: `https://www.springboard.com/courses/search/?q=${encodedTopic}`
//       });
//       links.push({
//         label: '⭐ Microsoft Learn',
//         url: `https://learn.microsoft.com/en-us/search/?terms=${encodedTopic}`
//       });
//     }

//     if (selectedContent.includes('Lessons')) {
//       links.push({
//         label: '📚 GeeksforGeeks',
//         url: `https://www.geeksforgeeks.org/?s=${encodedTopic}`
//       });
//       links.push({
//         label: '📚 TutorialsPoint',
//         url: `https://www.tutorialspoint.com/index.htm#search=${encodedTopic}`
//       });
//       links.push({
//         label: '📚 W3Schools',
//         url: `https://www.w3schools.com/search/search_results.asp?search=${encodedTopic}`
//       });
//     }

//     if (selectedContent.includes('Videos')) {
//       links.push({
//         label: '🎬 YouTube',
//         url: `https://www.youtube.com/results?search_query=${encodedTopic}+tutorial`
//       });
//     }

//     if (selectedContent.includes('Podcasts')) {
//       links.push({
//         label: '🎧 Podcasts (Google)',
//         url: `https://www.google.com/search?q=${encodedTopic}+podcast`
//       });
//     }

//     return links;
//   };

//   return (
//     <div className="explore-container">
//       <nav className="navbar">
//         <div className="navbar-logo">📘 LearnHub</div>
//       </nav>

//       <div className="explore-content">
//         <h2>🎯 Your Learning Goals</h2>
//         <ul className="goal-list">
//           {goals.map((goal, index) => (
//             <li key={index}>{goal}</li>
//           ))}
//         </ul>
//         <input
//           type="text"
//           value={newGoal}
//           onChange={(e) => setNewGoal(e.target.value)}
//           placeholder="Add your learning goal..."
//         />
//         <button onClick={handleAddGoal}>Add Goal</button>

//         <h2>🎥 Preferred Content Type</h2>
//         <div className="content-types">
//           {['Videos', 'Courses', 'Lessons', 'Podcasts'].map((type) => (
//             <label key={type}>
//               <input
//                 type="checkbox"
//                 checked={selectedContent.includes(type)}
//                 onChange={() => toggleContent(type)}
//               />
//               {type}
//             </label>
//           ))}
//         </div>

//         <h2>📊 Skill Level</h2>
//         <select value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)}>
//           <option value="Beginner">Beginner</option>
//           <option value="Intermediate">Intermediate</option>
//           <option value="Advanced">Advanced</option>
//         </select>

//         <h2>📌 Select Topics</h2>
//         <div className="topics-container">
//           {allTopics.map((topic) => (
//             <label key={topic}>
//               <input
//                 type="checkbox"
//                 checked={selectedTopics.includes(topic)}
//                 onChange={() => toggleTopic(topic)}
//               />
//               {topic}
//             </label>
//           ))}
//         </div>

//         <button className="view-path-btn" onClick={handleViewPath}>
//           🚀 View Your Learning Path
//         </button>

//         {showPath && (
//           <div className="learning-path">
//             <h2>🧭 Your Personalized Learning Path</h2>
//             <p><strong>Goals:</strong> {goals.join(', ')}</p>
//             <p><strong>Skill Level:</strong> {skillLevel}</p>
//             <p><strong>Content:</strong> {selectedContent.join(', ')}</p>
//             <p><strong>Topics:</strong> {selectedTopics.join(', ')}</p>

//             <div className="path-suggestions">
//               {selectedTopics.slice(0, 3).map((topic, index) => (
//                 <div key={index} className="path-card">
//                   <h3>{topic}</h3>
//                   <ul>
//                     {generateLinks(topic, selectedContent).map((link, i) => (
//                       <li key={i}>
//                         <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ExplorePage;


import React, { useState, useEffect } from 'react';
import './ExplorePage.css';

const allTopics = [
  'Web Development', 'Machine Learning', 'Data Science', 'Cybersecurity', 'Blockchain', 'Cloud Computing',
  'UI/UX Design', 'Mobile App Development', 'DevOps', 'Game Development', 'AI Ethics', 'Deep Learning',
  'Augmented Reality', 'Virtual Reality', 'Software Testing', 'Natural Language Processing', 'Database Management',
  'Quantum Computing', 'Edge Computing', 'IoT', 'Big Data', 'Agile', 'Scrum', 'Linux', 'Python', 'Java',
  'C++', 'JavaScript', 'React', 'Angular', 'Vue', 'Node.js', 'Flask', 'Spring Boot', 'Django', 'TensorFlow',
  'Keras', 'Pandas', 'NumPy', 'Rust', 'GoLang', 'PHP', 'Scala', 'TypeScript', 'Firebase', 'Docker',
  'Kubernetes', 'CI/CD', 'Git', 'Jenkins', 'Figma', 'Adobe XD', 'Salesforce'
];

const textToVector = (text) => {
  const words = text.toLowerCase().match(/\b\w+\b/g);
  const freqMap = {};
  if (!words) return freqMap;
  words.forEach(word => {
    freqMap[word] = (freqMap[word] || 0) + 1;
  });
  return freqMap;
};

const computeCosineSimilarity = (text1, text2) => {
  const vec1 = textToVector(text1);
  const vec2 = textToVector(text2);
  const intersection = Object.keys(vec1).filter(k => k in vec2);
  let dotProduct = 0;
  intersection.forEach(key => {
    dotProduct += vec1[key] * vec2[key];
  });
  const magnitude1 = Math.sqrt(Object.values(vec1).reduce((acc, val) => acc + val * val, 0));
  const magnitude2 = Math.sqrt(Object.values(vec2).reduce((acc, val) => acc + val * val, 0));
  if (magnitude1 === 0 || magnitude2 === 0) return 0;
  return dotProduct / (magnitude1 * magnitude2);
};

function ExplorePage() {
  const [goals, setGoals] = useState(['Become a Full Stack Developer']);
  const [newGoal, setNewGoal] = useState('');
  const [selectedContent, setSelectedContent] = useState([]);
  const [skillLevel, setSkillLevel] = useState('Beginner');
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [recommendedTopics, setRecommendedTopics] = useState([]);
  const [showPath, setShowPath] = useState(false);

  const handleAddGoal = () => {
    if (newGoal.trim()) {
      setGoals([...goals, newGoal.trim()]);
      setNewGoal('');
    }
  };

  const toggleContent = (type) => {
    setSelectedContent((prev) =>
      prev.includes(type) ? prev.filter((c) => c !== type) : [...prev, type]
    );
  };

  const toggleTopic = (topic) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  const handleViewPath = () => {
    if (goals.length > 0 && selectedTopics.length > 0 && selectedContent.length > 0) {
      setShowPath(true);
    } else {
      alert('Please select at least one goal, topic, and content type.');
    }
  };

  const generateLinks = (topic, selectedContent) => {
    const encodedTopic = encodeURIComponent(topic);
    const links = [];

    if (selectedContent.includes('Courses')) {
      links.push({ label: '⭐ Udemy', url: `https://www.udemy.com/courses/search/?q=${encodedTopic}&sort=highest-rated` });
      links.push({ label: '⭐ Coursera', url: `https://www.coursera.org/search?query=${encodedTopic}` });
      links.push({ label: '⭐ edX', url: `https://www.edx.org/search?q=${encodedTopic}` });
      links.push({ label: '⭐ Springboard', url: `https://www.springboard.com/courses/search/?q=${encodedTopic}` });
      links.push({ label: '⭐ Microsoft Learn', url: `https://learn.microsoft.com/en-us/search/?terms=${encodedTopic}` });
    }

    if (selectedContent.includes('Lessons')) {
      links.push({ label: '📚 GeeksforGeeks', url: `https://www.geeksforgeeks.org/?s=${encodedTopic}` });
      links.push({ label: '📚 TutorialsPoint', url: `https://www.tutorialspoint.com/index.htm#search=${encodedTopic}` });
      links.push({ label: '📚 W3Schools', url: `https://www.w3schools.com/search/search_results.asp?search=${encodedTopic}` });
    }

    if (selectedContent.includes('Videos')) {
      links.push({ label: '🎬 YouTube', url: `https://www.youtube.com/results?search_query=${encodedTopic}+tutorial` });
    }

    if (selectedContent.includes('Podcasts')) {
      links.push({ label: '🎧 Podcasts', url: `https://www.google.com/search?q=${encodedTopic}+podcast` });
    }

    return links;
  };

  useEffect(() => {
    const userProfileText = [...goals, skillLevel, ...selectedTopics].join(' ');
    const rankedTopics = allTopics
      .map(topic => ({
        topic,
        score: computeCosineSimilarity(userProfileText, topic)
      }))
      .sort((a, b) => b.score - a.score)
      .filter(item => !selectedTopics.includes(item.topic))
      .slice(0, 5);

    setRecommendedTopics(rankedTopics);
  }, [goals, skillLevel, selectedTopics]);

  return (
    <div className="explore-container">
      <nav className="navbar">
        <div className="navbar-logo">📘 LearnHub</div>
      </nav>

      <div className="explore-content">
        <h2>🎯 Your Learning Goals</h2>
        <ul className="goal-list">
          {goals.map((goal, index) => <li key={index}>{goal}</li>)}
        </ul>
        <input
          type="text"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          placeholder="Add your learning goal..."
        />
        <button onClick={handleAddGoal}>Add Goal</button>

        <h2>🎥 Preferred Content Type</h2>
        <div className="content-types">
          {['Videos', 'Courses', 'Lessons', 'Podcasts'].map((type) => (
            <label key={type}>
              <input
                type="checkbox"
                checked={selectedContent.includes(type)}
                onChange={() => toggleContent(type)}
              />
              {type}
            </label>
          ))}
        </div>

        <h2>📊 Skill Level</h2>
        <select value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)}>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <h2>📌 Select Topics</h2>
        <div className="topics-container">
          {allTopics.map((topic) => (
            <label key={topic}>
              <input
                type="checkbox"
                checked={selectedTopics.includes(topic)}
                onChange={() => toggleTopic(topic)}
              />
              {topic}
            </label>
          ))}
        </div>

        <button className="view-path-btn" onClick={handleViewPath}>
          🚀 View Your Learning Path
        </button>

        {/* 🔥 Recommended Topics Section */}
        <div className="recommended-topics">
          <h2>🔥 Recommended Topics Based on Your Profile</h2>
          {recommendedTopics.length > 0 ? (
            <ul>
              {recommendedTopics.map(({ topic, score }) => (
                <li key={topic}>
                  <label>
                    <input
                      type="checkbox"
                      onChange={() => toggleTopic(topic)}
                      checked={selectedTopics.includes(topic)}
                    />
                    {topic} <span style={{ fontSize: '0.85em', color: '#888' }}>
                      (score: {score.toFixed(2)})
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          ) : (
            <p>No personalized recommendations available yet.</p>
          )}
        </div>

        {showPath && (
          <div className="learning-path">
            <h2>🧭 Your Personalized Learning Path</h2>
            <p><strong>Goals:</strong> {goals.join(', ')}</p>
            <p><strong>Skill Level:</strong> {skillLevel}</p>
            <p><strong>Content:</strong> {selectedContent.join(', ')}</p>
            <p><strong>Topics:</strong> {selectedTopics.join(', ')}</p>

            <div className="path-suggestions">
              {selectedTopics.slice(0, 3).map((topic, index) => (
                <div key={index} className="path-card">
                  <h3>{topic}</h3>
                  <ul>
                    {generateLinks(topic, selectedContent).map((link, i) => (
                      <li key={i}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExplorePage;

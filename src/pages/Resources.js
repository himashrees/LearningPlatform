import React, { useState } from 'react';
import './ResourcesPage.css';
import LibrarySection from './LibrarySection'; // Importing the new section

const featuredResources = [
  {
    title: 'React Official Docs', // Web Development
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    link: 'https://reactjs.org/',
  },
  {
    title: 'Fast.ai Courses', // AI/ML
    image: 'https://raw.githubusercontent.com/fastai/fastai/master/docs/images/logo.png',
    link: 'https://www.fast.ai/',
  },
  {
    title: 'GeeksForGeeks DSA', // Data Structures
    image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/logo-new-2.svg',
    link: 'https://www.geeksforgeeks.org/data-structures/',
  },
  {
    title: 'Figma Learn UI/UX', // UI/UX Design
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    link: 'https://help.figma.com/hc/en-us/articles/360040450373-Learn-design-with-Figma',
  },
  {
    title: 'CS50 Harvard Course', // CS Core
    image: 'https://cs50.harvard.edu/x/2023/images/cs50x.png',
    link: 'https://cs50.harvard.edu/x/',
  },
  {
    title: 'Khan Academy Computer Science', // Beginner CS
    image: 'https://www.khanacademy.org/images/logos/khan-logo-vertical-transparent.png',
    link: 'https://www.khanacademy.org/computing/computer-science',
  },
];

const recentlyViewed = [
  {
    title: 'W3Schools JavaScript',
    link: 'https://www.w3schools.com/js/',
  },
  {
    title: 'GeeksForGeeks DSA',
    link: 'https://www.geeksforgeeks.org/data-structures/',
  },
];

const allResources = [
  ...featuredResources,
  ...recentlyViewed,
  {
    title: 'CS50 Harvard Course',
    link: 'https://cs50.harvard.edu/',
  },
];

function ResourcesPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState('');

  const filteredResources = allResources.filter(res =>
    res.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`resources-page ${darkMode ? 'dark' : ''}`}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">📘 LearnHub</div>
        <ul className="navbar-links">
          <li><a href="/explore">Explore</a></li>
          <li><a href="#library">Library</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
        </button>
      </nav>

      <div className="main-content">
        {/* Featured */}
        <section id="explore">
          <h2> Featured Resources</h2>
          <div className="card-container">
            {featuredResources.map((res, index) => (
              <div className="card" key={index}>
                <img src={res.image} alt={res.title} />
                <h3>{res.title}</h3>
                <a href={res.link} target="_blank" rel="noopener noreferrer">Visit</a>
              </div>
            ))}
          </div>
        </section>

        {/* Recently Viewed */}
        <section>
          <h2>🕒 Recently Viewed</h2>
          <ul className="link-list">
            {recentlyViewed.map((res, index) => (
              <li key={index}>
                <a href={res.link} target="_blank" rel="noopener noreferrer">{res.title}</a>
              </li>
            ))}
          </ul>
        </section>

        {/* All Resources with Search */}
        <section>
          <h2>📚 All Resources</h2>
          <input
            type="text"
            placeholder="Search resources..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <ul className="link-list">
            {filteredResources.map((res, index) => (
              <li key={index}>
                <a href={res.link} target="_blank" rel="noopener noreferrer">{res.title}</a>
              </li>
            ))}
          </ul>
        </section>

        {/* Library Section */}
        <section id="library">
          <LibrarySection />
        </section>
      </div>
    </div>
  );
}

export default ResourcesPage;
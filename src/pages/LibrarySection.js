// LibrarySection.js
import React, { useState } from 'react';
import './LibrarySection.css';

function LibrarySection() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchBooks = async () => {
    if (!query) return;
    const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    const data = await res.json();
    setResults(data.docs.slice(0, 10)); // Show top 10 results
  };

  return (
    <div className="library-section">
      <h2>📚 Explore the Library</h2>
      <input
        type="text"
        placeholder="Search by topic, author, or title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button onClick={searchBooks} className="search-btn">Search</button>

      <div className="book-list">
        {results.map((book, index) => (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
            <a
              href={`https://openlibrary.org${book.key}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Book
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LibrarySection;
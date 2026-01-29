// src/pages/MentalWellness.js
import React from 'react';

function MentalWellness() {
  return (
    <div style={{
      padding: '16px',
      borderRadius: '12px',
      background: '#e8f5e9',
      color: '#2e7d32',
      marginTop: '20px'
    }}>
      <h3>🧘 Mental Wellness</h3>
      <p><strong>Tip:</strong> Take a 2-minute deep breathing break.</p>
      <p>“You don’t have to control your thoughts. You just have to stop letting them control you.”</p>
      <p style={{ fontSize: '0.9em', marginTop: '10px' }}>🔊 Try some <a href="https://www.youtube.com/watch?v=1ZYbU82GVz4" target="_blank" rel="noopener noreferrer">calm music</a></p>
    </div>
  );
}

export default MentalWellness;

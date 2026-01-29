import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import this
import Globe from 'react-globe.gl';
import './Homepage.css';
import { FaSignInAlt } from 'react-icons/fa';

const HomePage = () => {
  const navigate = useNavigate(); // ✅ Define it inside the component
  const globeEl = useRef();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const randomUsers = Array.from({ length: 40 }, () => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
    }));
    setUsers(randomUsers);
  }, []);

  return (
    <div className="homepage-wrapper">
      <header className="homepage-header">
        <div className="logo">🎓 LearnPath</div>
        <div className="login-button-container">
          <button className="login-button" onClick={() => navigate('/login')}>
            <FaSignInAlt className="login-icon" />
            <span>Login</span>
          </button>
        </div>
      </header>

      <div className="homepage-container">
        <div className="homepage-content">
          <h1>Personalized Learning Made Simple</h1>
          <p>
            Discover courses, tutorials, and resources tailored just for you.
            Learn at your pace with a custom path to success.
          </p>
         <button onClick={() => navigate('/dashboard')}>Get Started</button>

        </div>

        <div className="globe-container">
          <Globe
            ref={globeEl}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
            backgroundColor="rgba(0,0,0,0)"
            pointsData={users}
            pointLat="lat"
            pointLng="lng"
            pointAltitude={0.02}
            pointColor={() => '#00bcd4'}
            pointRadius={0.3}
            pointsMerge={true}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
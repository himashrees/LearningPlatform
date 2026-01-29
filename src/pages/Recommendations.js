import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Recommendations() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    axios.get(`http://localhost:8081/api/recommendations/${user.id}`)
      .then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h2>Recommended Resources</h2>
      {data.map(d => (
        <div key={d.id} className="card">
          <h3>{d.title}</h3>
          <p>Tags: {d.tags}</p>
          <a href={d.link} target="_blank" rel="noreferrer">View</a>
        </div>
      ))}
    </div>
  );
}

export default Recommendations;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [list, setList] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    axios.get(`http://localhost:8081/api/feedback/${user.id}`).then(res => setList(res.data));
  }, []);

  const handleSubmit = async () => {
    await axios.post('http://localhost:8081/api/feedback', {
      userId: user.id,
      message: feedback
    });
    setFeedback('');
    const res = await axios.get(`http://localhost:8081/api/feedback/${user.id}`);
    setList(res.data);
  };

  return (
    <div>
      <h2>Feedback</h2>
      <textarea
        placeholder="Enter feedback"
        value={feedback}
        onChange={e => setFeedback(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
      <h3>My Feedbacks</h3>
      {list.map((f, i) => <p key={i}>- {f.message}</p>)}
    </div>
  );
}

export default Feedback;

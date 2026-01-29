import React, { useState } from 'react';
import './AiAssistant.css';

const assistantName = 'PathWise';

const fallbackResponses = [
  "That's interesting! Could you tell me more?",
  "I see! Let's explore that together.",
  "Hmm, I'm learning more every day, but I don't have an answer to that yet.",
  "Great question! I'll keep that in mind.",
  "Sorry, I don't have the info right now, but I'm here to help with learning paths!",
  "Let's keep going. What else would you like to know?",
];

function getRandomFallback() {
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}

const AiAssistant = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: `Hi! I'm ${assistantName}, your personal learning assistant. Ask me anything about learning paths, courses, or resources!` }
  ]);
  const [input, setInput] = useState('');

  const getBotResponse = (inputText) => {
    const text = inputText.toLowerCase();

    if (text.includes('trending course')) {
      return 'Currently, courses on Artificial Intelligence, Machine Learning, and Cloud Computing are very popular.';
    }
    if (text.includes('hello') || text.includes('hi')) {
      return `Hello! How can I assist you with your learning today?`;
    }
    if (text.includes('help')) {
      return 'You can ask me about course recommendations, resources, or feedback.';
    }
    if (text.includes('thank')) {
      return 'You’re welcome! Happy learning!';
    }

    // If no specific keywords matched, reply with a fallback response
    return getRandomFallback();
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { from: 'user', text: input }]);

    setTimeout(() => {
      const botReply = getBotResponse(input);
      setMessages(prev => [...prev, { from: 'bot', text: botReply }]);
    }, 700);

    setInput('');
  };

  return (
    <div className="ai-assistant">
      <div className="chat-window">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.from}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={`Ask ${assistantName} anything...`}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default AiAssistant;
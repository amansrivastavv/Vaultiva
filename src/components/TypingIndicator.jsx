import React from 'react';
import { useChat } from '../context/ChatContext';

const TypingIndicator = ({ users }) => {
  if (!users || users.length === 0) return null;

  const typingMessage = users.length === 1 
    ? `${users[0]} is typing...` 
    : `${users[0]} and ${users.length - 1} others are typing...`;

  return (
    <div className="typing-indicator">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="message">{typingMessage}</span>
    </div>
  );
};

export default TypingIndicator;

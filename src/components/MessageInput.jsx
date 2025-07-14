import React, { useState, useRef } from 'react';
import { useChat } from '../context/ChatContext';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);
  const { sendMessage, startTyping, stopTyping } = useChat();

  const handleInputChange = (e) => {
    setMessage(e.target.value);
    if (e.target.value.trim()) {
      startTyping();
    } else {
      stopTyping();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
      inputRef.current?.blur();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-3 p-4 bg-white dark:bg-gray-800">
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={handleInputChange}
        ref={inputRef}
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
        autoComplete="off"
      />
      <button 
        type="submit" 
        className="px-4 py-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!message.trim()}
        aria-label="Send message"
      >
        Send
      </button>
    </form>
  );
};

export default MessageInput;

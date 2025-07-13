import React, { useRef, useEffect } from 'react';
import { useChat } from '../context/ChatContext';
import Message from './Message';
import TypingIndicator from './TypingIndicator';

const ChatBox = () => {
  const { messages, typingUsers } = useChat();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="h-full overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      <div ref={messagesEndRef} />
      {typingUsers.length > 0 && (
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="animate-pulse">...</span>
          <span>{typingUsers[0]} is typing...</span>
        </div>
      )}
    </div>
  );
};

export default ChatBox;

import React from 'react';
const Message = ({ message, isSent }) => {
  const time = new Date(message.timestamp).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className={`flex ${isSent ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[70%] rounded-lg px-4 py-3 ${
        isSent
          ? 'bg-primary-500 text-white'
          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200'
      }`}>
        <p className="text-sm">{message.text}</p>
        <span className="block text-xs mt-1 opacity-70">
          {time}
        </span>
      </div>
    </div>
  );
};

export default Message;

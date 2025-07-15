import React, { useState } from 'react';
import ChatBox from '../components/ChatBox';
import MessageInput from '../components/MessageInput';
import { useChat } from '../context/ChatContext';

const AnonymousChat = () => {
  const { activeRoom, setActiveRoom, socket } = useChat();
  const [error, setError] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">🔒 Anonymous Chat</h1>

        {error && (
          <div className="mb-6 p-4 bg-red-900/50 border border-red-700 text-red-300 rounded-lg">
            {error}
          </div>
        )}

        {!activeRoom ? (
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-gray-300 mb-4">Join Anonymous Chat</h2>
            <button 
              onClick={() => {
                if (!socket) {
                  setError('Socket connection not established');
                  return;
                }
                setActiveRoom('anonymous');
                socket.emit('joinRoom', { room: 'anonymous' });
              }}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-md"
            >
              <span className="flex items-center justify-center gap-2">
                🔄 Join Anonymous Chat
              </span>
            </button>
          </div>
        ) : (
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
            <div className="flex flex-col h-[60vh]">
              <ChatBox />
              <MessageInput />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnonymousChat;

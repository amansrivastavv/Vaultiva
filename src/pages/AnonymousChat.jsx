import React, { useState } from 'react';
import ChatBox from '../components/ChatBox';
import MessageInput from '../components/MessageInput';
import { useChat } from '../context/ChatContext';
import { motion, AnimatePresence } from 'framer-motion';

const AnonymousChat = () => {
  const { activeRoom, setActiveRoom, socket } = useChat();
  const [error, setError] = useState(null);

  const handleJoinRoom = () => {
    if (!socket) {
      setError('⚠️ Socket connection not established. Please try again later.');
      return;
    }
    setActiveRoom('anonymous');
    socket.emit('joinRoom', { room: 'anonymous' });
  };

  return (
<div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6 flex items-center justify-center pt-24 sm:pt-38 md:pt-22 lg:pt-22 xl:pt-24">
      <div className="w-full max-w-4xl space-y-8">

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🕵️ Anonymous Chat
        </motion.h1>

        {/* Info Box */}
        <motion.div
          className="bg-white/5 backdrop-blur-lg p-5 rounded-xl border border-white/10 shadow-md text-center text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-lg md:text-xl leading-relaxed">
            <strong>What is Anonymous Chat?</strong> <br />
            Vaultiva's Anonymous Chat mode allows you to connect privately with anyone — with zero data stored. 
            There's no login, no tracking, and everything disappears when either participant leaves. 
            Just click the button below to start a self-destructing, untraceable conversation.
          </p>
        </motion.div>

        {/* Error Display */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-red-800/60 border border-red-700 text-red-100 rounded-lg shadow-md"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Join Chat */}
        {!activeRoom ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl"
          >
            <h2 className="text-2xl font-semibold text-center text-gray-200 mb-5">
              Ready to chat anonymously?
            </h2>
            <button
              onClick={handleJoinRoom}
              className="w-full py-3 px-6 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white rounded-xl shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-500/40"
            >
              🚪 Join Anonymous Room
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-xl"
          >
            <div className="flex flex-col h-[65vh]">
              <ChatBox />
              <MessageInput />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AnonymousChat;

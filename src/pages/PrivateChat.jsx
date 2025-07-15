import React from "react";
import { useChat } from "../context/ChatContext";
import ChatBox from "../components/ChatBox";
import MessageInput from "../components/MessageInput";
import QRJoin from "../components/QRJoin";
import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { Card, CardContent } from "../components/Card";
import { SparklesCore } from "../components/Sparkles";
import { LampDemo } from "../components/Lamp";

const PrivateChat = () => {
  const { activeRoom, createRoom, joinRoom } = useChat();

  const handleCreateRoom = async () => {
    try {
      const room = await createRoom();
      // Handle room creation success
    } catch (error) {
      console.error("Error creating room:", error);
    }
  };

  const handleJoinRoom = async (roomId) => {
    try {
      const room = await joinRoom(roomId);
      // Handle room join success
    } catch (error) {
      console.error("Error joining room:", error);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white px-4 py-10 mt-10">
      <div className="absolute inset-0 z-0">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#ffffff"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
            🔒 Secure Private Chat
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Chat freely with zero trace — even we can't read your messages.
            End-to-end encryption, privacy-first.
          </p>
        </motion.div>

        {!activeRoom ? (
     <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  className="grid grid-cols-1 md:grid-cols-2 gap-8"
>
  {/* Create Room Card */}
  <motion.div
    whileHover={{ scale: 1.05, rotate: 0.5 }}
    whileTap={{ scale: 0.98 }}
    className="group bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 rounded-2xl border border-indigo-500/30 shadow-2xl p-[2px]"
  >
    <div className="bg-gray-900 rounded-[inherit] p-6 h-full text-center transition-all duration-500 group-hover:bg-black/60">
      <h3 className="text-2xl font-bold mb-4 text-indigo-300">🚀 Create a New Room</h3>
     <button
  onClick={handleCreateRoom}
  className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white rounded-xl transition-all duration-300 group bg-indigo-600 hover:bg-indigo-700 shadow-xl overflow-hidden"
>
  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-600 opacity-0 group-hover:opacity-100 blur-md transition duration-500 rounded-xl"></span>
  <span className="relative z-10 flex items-center gap-2">
    🚀 <span>Create Room</span>
  </span>
</button>

    </div>
  </motion.div>

  {/* Join Room Card */}
  <motion.div
    whileHover={{ scale: 1.05, rotate: -0.5 }}
    whileTap={{ scale: 0.98 }}
    className="group bg-gradient-to-br from-pink-800 via-purple-800 to-gray-900 rounded-2xl border border-pink-500/30 shadow-2xl p-[2px]"
  >
    <div className="bg-gray-900 rounded-[inherit] p-6 h-full text-center transition-all duration-500 group-hover:bg-black/60">
      <h3 className="text-2xl font-bold mb-4 text-pink-300">🔑 Join an Existing Room</h3>
      <button
        onClick={() => handleJoinRoom("room123")}
        className="relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-pink-600 rounded-xl shadow-md hover:bg-pink-500 transition-all duration-300 overflow-hidden"
      >
        <span className="z-10">Join Room</span>
        <span className="absolute inset-0 bg-pink-400 opacity-0 group-hover:opacity-20 rounded-xl transition-all duration-300 blur-xl"></span>
      </button>
    </div>
  </motion.div>
</motion.div>

        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10 bg-gray-800 rounded-xl p-6 shadow-xl"
          >
            <h3 className="text-lg text-gray-300 mb-4">
              🔗 Room ID: {activeRoom}
            </h3>
            <div className="flex flex-col h-[60vh]">
              <ChatBox />
              <MessageInput />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PrivateChat;

import React, { useState } from "react";
import { useChat } from "../context/ChatContext";
import { createRoom, joinRoom } from "../utils/api";
import ChatBox from "../components/ChatBox";
import MessageInput from "../components/MessageInput";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import CreateRoom from "../components/CreateRoom";
import JoinRoom from "../components/JoinRoom";
import { Button } from "../components/ui/button";

const PrivateChat = () => {
  const { activeRoom, setActiveRoom } = useChat();
  const [error, setError] = useState(null);
  const [joinId, setJoinId] = useState("");

  const handleCreateRoom = async () => {
    try {
      setError(null);
      const room = await createRoom("private");
      if (room && room.roomId) {
        setActiveRoom(room.roomId);
      } else {
        throw new Error("Invalid room response");
      }
    } catch (error) {
      console.error("Error creating room:", error);
      setError(error.message || "Failed to create room");
    }
  };

  const handleJoinRoom = async () => {
    try {
      setError(null);
      const room = await joinRoom(joinId);
      if (room) {
        setActiveRoom(room.roomId);
      }
    } catch (error) {
      console.error("Error joining room:", error);
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col pt-20 px-4 py-10">
      <Toaster position="top-center" reverseOrder={false} />
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
            <CreateRoom handleCreateRoom={handleCreateRoom} />
            <JoinRoom handleJoinRoom={handleJoinRoom} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10 bg-gray-800 rounded-xl p-6 shadow-xl"
          >
            <h3 className="text-lg text-gray-300 mb-4">🔗 Room ID: {activeRoom}</h3>
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

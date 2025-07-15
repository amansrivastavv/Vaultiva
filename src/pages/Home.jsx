import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white px-4 py-16 overflow-hidden pt-20">
      {/* Blurred Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-30 blur-3xl top-[-150px] left-[-150px] rounded-full animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 blur-2xl bottom-[-120px] right-[-120px] rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Heading */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          Welcome to Vaultiva
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-400"
        >
          Secure, Private & Ephemeral Communication
        </motion.p>

        {/* Value Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-3 text-gray-300 text-base md:text-lg"
        >
          <p>🔐 <strong>End-to-End Encrypted:</strong> Messages are fully encrypted. Not even Vaultiva can read them.</p>
          <p>🕵️ <strong>Truly Private:</strong> No signups, no tracking, no history.</p>
          <p>🧨 <strong>Self-Destructing Rooms:</strong> Anonymous chats vanish when you leave. Group chats expire in 24h.</p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="space-y-5"
        >
          <Link
            to="/chat-modes"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-xl text-lg font-semibold transition duration-300"
          >
            Get Started
          </Link>

          <div className="flex justify-center gap-4">
            <Link
              to="/private-chat"
              className="inline-block bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl text-base transition"
            >
              Private Chat
            </Link>
            <Link
              to="/anonymous-chat"
              className="inline-block bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl text-base transition"
            >
              Anonymous Chat
            </Link>
          </div>
        </motion.div>

        {/* Guide Link */}
        <div className="text-center pt-4">
          <Link
            to="/how-it-works"
            className="text-sm text-gray-400 hover:underline"
          >
            How it works
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

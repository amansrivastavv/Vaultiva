import React from 'react';
import { Link } from 'react-router-dom';
import { LockClosedIcon, UserGroupIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const modes = [
  {
    name: 'Private Chat',
    desc: 'Encrypted one-on-one messages with passcode protection.',
    to: '/private-chat',
    icon: LockClosedIcon,
    border: 'from-purple-500 via-pink-500 to-indigo-500',
  },
  {
    name: 'Anonymous Chat',
    desc: 'Identity-free, self-destructing messages.',
    to: '/anonymous-chat',
    icon: UserCircleIcon,
    border: 'from-red-500 via-pink-500 to-yellow-500',
  },
  {
    name: 'Group Chat',
    desc: 'Temporary group rooms with 24h expiry.',
    to: '/group-chat',
    icon: UserGroupIcon,
    border: 'from-blue-500 via-cyan-500 to-teal-500',
  },
];

const ChatModes = () => {
  return (
      <div className="min-h-screen bg-gray-950 text-white px-6 py-16 pt-28 md:pt-24 lg:pt-20 sm:pt-30">

      <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">
        Select Chat Mode
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {modes.map((mode, idx) => {
          const Icon = mode.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ scale: 1.04 }}
            >
              <Link
                to={mode.to}
                className={`relative p-1 rounded-xl group transition-transform duration-300 hover:scale-[1.02] bg-gradient-to-r ${mode.border}`}
              >
                <div className="relative bg-gray-900 rounded-xl p-6 backdrop-blur-lg border border-white/10 group-hover:shadow-xl transition">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20 mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{mode.name}</h3>
                  <p className="text-gray-400 text-sm">{mode.desc}</p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatModes;

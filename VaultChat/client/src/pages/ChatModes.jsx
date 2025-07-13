import React from 'react';
import { Link } from 'react-router-dom';
import {
  LockClosedIcon,
  UserGroupIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';

const ChatModes = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Choose Chat Mode</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link 
            to="/private-chat" 
            className="chat-mode-card bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4">
                <LockClosedIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Private Chat</h3>
              <p className="text-gray-400">One-on-one secure conversations</p>
            </div>
          </Link>
          <Link 
            to="/anonymous-chat" 
            className="chat-mode-card bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4">
                <UserCircleIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Anonymous Chat</h3>
              <p className="text-gray-400">Chat without revealing identity</p>
            </div>
          </Link>
          <Link 
            to="/group-chat" 
            className="chat-mode-card bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4">
                <UserGroupIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Group Chat</h3>
              <p className="text-gray-400">Chat with multiple people</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChatModes;

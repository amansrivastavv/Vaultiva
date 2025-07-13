import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import loadingLottie from './assets/loading.json';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <Lottie animationData={loadingLottie} loop={true} />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Welcome to Vaultiva
          </h1>
          <p className="text-xl text-gray-400">
            Your secure chat companion
          </p>
          <div className="space-y-4">
            <Link 
              to="/chat-modes" 
              className="inline-block bg-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 transition-colors"
            >
              Get Started
            </Link>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/private-chat" 
                className="inline-block bg-gray-700 px-6 py-3 rounded-lg text-lg hover:bg-gray-600 transition-colors"
              >
                Private Chat
              </Link>
              <Link 
                to="/anonymous-chat" 
                className="inline-block bg-gray-700 px-6 py-3 rounded-lg text-lg hover:bg-gray-600 transition-colors"
              >
                Anonymous Chat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

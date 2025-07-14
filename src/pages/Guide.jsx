import React from 'react';
import { Link } from 'react-router-dom';

const Guide = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <h1 className="text-4xl font-bold text-center">🔍 How Vaultiva Works</h1>

        <p className="text-lg text-gray-300 text-center">
          A quick guide to help you understand Vaultiva's secure, real-time chat features.
        </p>

        {/* 1. Getting Started */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-400">🚀 Getting Started</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Click <strong>Get Started</strong> on the homepage.</li>
            <li>Select a chat mode: Private, Anonymous, or Group.</li>
            <li>Enter or share a Room ID and Passcode.</li>
            <li>Start chatting securely — no sign-up required.</li>
          </ul>
        </section>

        {/* 2. Chat Modes */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-indigo-400">💬 Chat Modes</h2>
          <div className="text-gray-300 space-y-2">
            <p><strong>🔒 Private Chat:</strong> Stored messages, passcode-protected. Supports PDF export. Max 2 users.</p>
            <p><strong>🕵️ Anonymous Chat:</strong> Ephemeral — messages auto-destroy when someone leaves. Zero tracking.</p>
            <p><strong>👥 Group Chat:</strong> Temporary 24h rooms. Join via passcode or QR. Creator controls included.</p>
          </div>
        </section>

     <section className="space-y-4">
  <h2 className="text-2xl font-semibold text-indigo-400">🛡️ Key Features</h2>
  <ul className="list-disc list-inside text-gray-300 space-y-1">
    <li>Your messages are end-to-end encrypted — no one can read them, not even Vaultiva</li>
    <li>No account or personal data required — just enter a room and chat</li>
    <li>Chats are temporary and self-destruct based on the mode you choose</li>
    <li>Private rooms are secured with passcodes or QR codes only you can share</li>
    <li>Anonymous mode leaves no trace — chats vanish when you exit</li>
    <li>Group chats expire automatically after 24 hours</li>
  </ul>
</section>

        {/* Back to Home */}
        <div className="text-center pt-8">
          <Link
            to="/"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg text-lg font-medium transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Guide;

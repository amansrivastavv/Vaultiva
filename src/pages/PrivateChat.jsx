import React from 'react';
import { useChat } from '../context/ChatContext';
import ChatBox from '../components/ChatBox';
import MessageInput from '../components/MessageInput';
import QRJoin from '../components/QRJoin';

const PrivateChat = () => {
  const { activeRoom, createRoom, joinRoom } = useChat();

  const handleCreateRoom = async () => {
    try {
      const room = await createRoom();
      // Handle room creation success
    } catch (error) {
      console.error('Error creating room:', error);
    }
  };

  const handleJoinRoom = async (roomId) => {
    try {
      const room = await joinRoom(roomId);
      // Handle room join success
    } catch (error) {
      console.error('Error joining room:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-xl shadow-lg">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Private Chat</h2>
            
            {!activeRoom ? (
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <button 
                    onClick={handleCreateRoom} 
                    className="flex-1 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    Create Room
                  </button>
                  <button 
                    onClick={() => handleJoinRoom('room123')} 
                    className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Join Room
                  </button>
                </div>
                <div className="text-gray-400">
                  <p>Room ID: {activeRoom || 'Not joined'}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col h-full">
                <ChatBox />
                <MessageInput />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateChat;

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ClipboardDocumentIcon, QrCodeIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-toastify';
import { createRoom } from '../utils/api';

const RoomCard = ({ type, onJoin }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [roomId, setRoomId] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const generateRoom = async () => {
    setIsGenerating(true);
    try {
      const data = await createRoom(type);
      setRoomId(data.roomId);
      setQrCodeUrl(data.qrCode);
      toast.success('Room created successfully!');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(roomId);
    toast.success('Room ID copied to clipboard!');
  };

  const cardVariants = {
    hover: {
      scale: 1.05,
      rotate: -2,
      boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    initial: {
      scale: 1,
      rotate: 0,
      boxShadow: '0 0 5px rgba(0, 255, 255, 0.3)',
    }
  };

  return (
    <motion.div
      className="relative rounded-lg p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <h3 className="text-2xl font-bold text-white/90">{type === 'create' ? 'Create New Room' : 'Join Existing Room'}</h3>
        
        {type === 'create' ? (
          <div className="space-y-4">
            <button
              onClick={generateRoom}
              className="flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={isGenerating}
            >
              {isGenerating ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                'Create Room'
              )}
            </button>

            {roomId && (
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={roomId}
                    readOnly
                    className="px-4 py-2 text-sm text-white bg-transparent border border-white/20 rounded-lg"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <ClipboardDocumentIcon className="w-5 h-5" />
                  </button>
                </div>
                {qrCodeUrl && (
                  <div className="w-32 h-32">
                    <img src={qrCodeUrl} alt="Room QR Code" className="w-full h-full" />
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter Room ID"
              className="w-full px-4 py-2 text-sm text-white bg-transparent border border-white/20 rounded-lg placeholder-white/50 focus:outline-none focus:border-white/30"
            />
            <button
              onClick={onJoin}
              className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Join Room
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default RoomCard;

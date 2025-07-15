import { useState } from 'react';
import { motion } from 'framer-motion';
import RoomCard from './RoomCard';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { joinRoom } from '../utils/api';

const Rooms = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState('');
  const [passcode, setPasscode] = useState('');
  const [isJoining, setIsJoining] = useState(false);

  const handleJoinRoom = async () => {
    if (!roomId || !passcode) {
      toast.error('Please enter both Room ID and Passcode');
      return;
    }

    setIsJoining(true);
    try {
      const data = await joinRoom(roomId, passcode);
      
      // Navigate to chat room with room ID
      navigate(`/chat/${roomId}`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsJoining(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white/90 mb-2">VaultChat</h1>
          <p className="text-xl text-gray-300">Secure, Instant & Private Conversations</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <RoomCard type="create" />
          <RoomCard
            type="join"
            onJoin={handleJoinRoom}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Rooms;

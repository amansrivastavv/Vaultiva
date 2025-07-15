import React, { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';

const JoinRoom = ({ handleJoinRoom }) => {
  const [joinId, setJoinId] = useState('');
  const [error, setError] = useState(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05, rotate: -0.5 }}
          whileTap={{ scale: 0.98 }}
          className="group bg-gradient-to-br from-pink-800 via-purple-800 to-gray-900 rounded-2xl border border-pink-500/30 shadow-2xl p-[2px] cursor-pointer"
        >
          <div className="bg-gray-900 rounded-[inherit] p-6 text-center group-hover:bg-black/60 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-pink-300">🔑 Join an Existing Room</h3>
            <p className="text-sm text-gray-400">Enter Room ID to join a secure room.</p>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md w-full p-6 rounded-lg shadow-lg bg-gray-900 border border-pink-500/30">
        <DialogHeader>
          <DialogTitle className="text-pink-300 text-xl">Join a Room</DialogTitle>
          <DialogDescription className="text-gray-400">
            Enter the room ID below.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-2">
          <Input
            value={joinId}
            onChange={(e) => setJoinId(e.target.value)}
            placeholder="Enter Room ID"
            className="w-full"
          />
          <Button onClick={handleJoinRoom} className="w-full bg-pink-600 hover:bg-pink-700">
            🚪 Join Room
          </Button>
          {error && <p className="text-sm text-red-400 mt-1">{error}</p>}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JoinRoom;

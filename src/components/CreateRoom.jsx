import React from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '../components/ui/dialog';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';

const CreateRoom = ({ handleCreateRoom }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05, rotate: -0.5 }}
          whileTap={{ scale: 0.98 }}
          className="group bg-gradient-to-br from-purple-800 via-pink-800 to-gray-900 rounded-2xl border border-purple-500/30 shadow-2xl p-[2px] cursor-pointer"
        >
          <div className="bg-gray-900 rounded-[inherit] p-6 text-center group-hover:bg-black/60 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">✨ Create a New Room</h3>
            <p className="text-sm text-gray-400">Start a new secure chat room.</p>
          </div>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md w-full p-6 rounded-lg shadow-lg bg-gray-900 border border-purple-500/30">
        <DialogHeader>
          <DialogTitle className="text-purple-300 text-xl">Create New Room</DialogTitle>
          <DialogDescription className="text-gray-400">
            Create a new secure chat room with end-to-end encryption.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <Button onClick={handleCreateRoom} className="w-full bg-purple-600 hover:bg-purple-700">
            🚀 Create Room
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateRoom;

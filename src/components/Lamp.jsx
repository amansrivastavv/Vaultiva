import React from "react";
import { motion } from "framer-motion";

export const LampDemo = () => {
  return (
    <div className="relative flex justify-center items-center overflow-hidden py-16 sm:py-24 lg:py-32">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-1/2 w-[1200px] h-[1200px] -translate-x-1/2 bg-gradient-radial from-purple-500/20 via-pink-500/10 to-transparent rounded-full"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Vaultiva</h1>
        <p className="text-gray-400 text-lg">
          Ultra-secure messaging. Private. Encrypted. Anonymous.
        </p>
      </div>
    </div>
  );
};

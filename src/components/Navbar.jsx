import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { path: '/chat-modes', label: 'Chat Modes' },
  { path: '/private-chat', label: 'Private Chat' },
  { path: '/anonymous-chat', label: 'Anonymous Chat' },
  { path: '/group-chat', label: 'Group Chat' },
  { path: '/export-chat', label: 'Export Chat' },
  { path: '/how-it-works', label: 'How it Works' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-gray-950 shadow-lg backdrop-blur-md bg-opacity-80 border-b border-white/10 z-50 fixed top-0 left-0 w-full"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
        >
          Vaultiva
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative text-gray-300 hover:text-white transition-colors duration-300 text-lg group"
            >
              <span>{item.label}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-gray-900 px-6 py-4"
          >
            <div className="space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-lg text-gray-300 hover:text-white transition-colors"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

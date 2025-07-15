import React from 'react';

export const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`w-full px-4 py-2 bg-gray-800 text-white border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
      {...props}
    />
  );
};

import React from 'react';

export const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium text-white transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

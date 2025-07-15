import React from 'react';

export const Card = ({ children, className }) => {
  return (
    <div className={`bg-white dark:bg-gray-900 rounded-xl shadow-md ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

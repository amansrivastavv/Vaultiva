import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-switcher">
      <label className="theme-toggle">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <span className="slider"></span>
      </label>
      <span className="theme-label">
        {theme === 'light' ? 'Light' : 'Dark'} Mode
      </span>
    </div>
  );
};

export default ThemeSwitcher;

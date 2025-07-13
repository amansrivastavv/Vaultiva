import { useTheme } from '../context/ThemeContext';

export const useThemeHook = () => {
  const { theme, toggleTheme } = useTheme();

  const getThemeClass = () => {
    return theme === 'light' ? 'light-theme' : 'dark-theme';
  };

  const getThemeColor = (type) => {
    const colors = {
      primary: theme === 'light' ? '#2563eb' : '#3b82f6',
      secondary: theme === 'light' ? '#1e40af' : '#2563eb',
      background: theme === 'light' ? '#f8fafc' : '#1f2937',
      text: theme === 'light' ? '#1f2937' : '#f8fafc',
      border: theme === 'light' ? '#e2e8f0' : '#374151'
    };
    return colors[type] || colors.primary;
  };

  return {
    theme,
    toggleTheme,
    getThemeClass,
    getThemeColor
  };
};

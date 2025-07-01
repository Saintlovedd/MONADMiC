import React from 'react';
import { useTheme } from '../context/ThemeContext';
export const StatsBar = () => {
  const {
    isDarkMode
  } = useTheme();
  return <div className={`flex flex-wrap justify-between py-4 text-sm border-b transition-colors ${isDarkMode ? 'text-gray-400 border-gray-700' : 'text-gray-500 border-gray-200'}`}>
      <div>Global sentiment: 50/100</div>
      <div>Projects tracked: 14.41k</div>
    </div>;
};
import React, { useState } from 'react';
import { SearchIcon, MoonIcon, SunIcon } from 'lucide-react';
import { LoginModal } from './LoginModal';
import { useTheme } from '../context/ThemeContext';
export const Header = () => {
  const {
    isDarkMode,
    toggleDarkMode
  } = useTheme();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const handleNavClick = item => {
    alert(`Navigating to ${item}`);
  };
  return <header className="border-b border-gray-200 dark:border-gray-700 py-4 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center mr-8 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => handleNavClick('Home')}>
            <img src="/20250701_182638.jpg" alt="Monadmic logo" className="h-8 w-8 mr-2" />
            <span className="font-medium dark:text-white">Monadmic</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
              v1.0 alpha
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative cursor-pointer hover:opacity-80 transition-opacity" onClick={() => handleNavClick('Social')}>
              <a className="font-medium text-black dark:text-white">Social</a>
              <span className="absolute -top-2 -right-8 bg-purple-600 text-white text-xs px-1.5 rounded">
                New
              </span>
            </div>
            <div className="text-gray-400 dark:text-gray-500 cursor-not-allowed" title="Coming soon">
              <span>Mic leaderboard</span>
              <span className="text-xs ml-1">Soon</span>
            </div>
            <div className="flex items-center cursor-pointer hover:opacity-80 transition-opacity dark:text-white" onClick={() => handleNavClick('AI Agents')}>
              <span>AI Agents</span>
              <svg width="16" height="16" viewBox="0 0 24 24" className="ml-1" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
            <div className="text-gray-400 dark:text-gray-500 cursor-not-allowed" title="Coming soon">
              <span>Monadmic Research</span>
              <span className="text-xs ml-1">Soon</span>
            </div>
          </nav>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1.5 flex items-center">
            <SearchIcon className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
            <input type="text" placeholder="Search" className="bg-transparent border-none outline-none text-sm w-24 md:w-40 dark:text-white" />
          </div>
          <button className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer block" onClick={toggleDarkMode} aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
            {isDarkMode ? <SunIcon className="h-5 w-5 text-yellow-300" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          <button className="bg-purple-600 text-white px-4 py-1.5 rounded-full text-sm hover:bg-purple-700 transition-colors cursor-pointer" onClick={() => setIsLoginModalOpen(true)}>
            Log In
          </button>
        </div>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </header>;
};
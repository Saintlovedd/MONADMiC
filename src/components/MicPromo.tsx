import React from 'react';
import { useTheme } from '../context/ThemeContext';
export const MicPromo = () => {
  const {
    isDarkMode
  } = useTheme();
  const handlePromoClick = () => {
    alert('Learn more about MIC');
  };
  return <div className={`rounded-lg p-8 my-8 text-center relative overflow-hidden cursor-pointer transition-colors ${isDarkMode ? 'bg-purple-900 hover:bg-purple-800' : 'bg-purple-100 hover:bg-purple-200'}`} onClick={handlePromoClick}>
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L200,0 L200,100 L300,100 L300,0 L400,0 L400,200 L300,200 L300,300 L200,300 L200,200 L100,200 L100,300 L0,300 Z" fill="currentColor" />
          <path d="M500,100 L600,100 L600,0 L700,0 L700,100 L800,100 L800,200 L700,200 L700,300 L600,300 L600,200 L500,200 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="relative z-10">
        <div className="flex justify-center mb-4">
          <div className={`h-12 w-12 ${isDarkMode ? 'bg-purple-600' : 'bg-purple-500'} rounded-lg flex items-center justify-center`}>
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <h2 className={`text-3xl font-bold ml-2 ${isDarkMode ? 'text-white' : ''}`}>
            MIC
          </h2>
        </div>
        <h3 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : ''}`}>
          You have mindshare.
        </h3>
        <h3 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : ''}`}>
          But are you loud enough?
        </h3>
        <p className={`text-lg ${isDarkMode ? 'text-purple-200' : ''}`}>
          Check who's cashing in on mindshare.
        </p>
      </div>
    </div>;
};
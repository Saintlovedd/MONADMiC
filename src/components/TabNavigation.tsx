import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
export const TabNavigation = () => {
  const {
    isDarkMode
  } = useTheme();
  const [activeTab, setActiveTab] = useState('Projects');
  const tabs = [{
    name: 'Projects',
    available: true
  }, {
    name: 'Voices',
    available: true
  }, {
    name: 'Sectors',
    available: false
  }, {
    name: 'Pools',
    available: false
  }];
  return <div className={`border-b mt-6 overflow-x-auto transition-colors ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="flex whitespace-nowrap">
        {tabs.map(tab => <button key={tab.name} className={`px-6 py-3 font-medium transition-colors ${activeTab === tab.name ? `border-b-2 ${isDarkMode ? 'border-white text-white' : 'border-black'}` : tab.available ? isDarkMode ? 'text-gray-300 hover:text-white' : 'hover:text-gray-700' : isDarkMode ? 'text-gray-600' : 'text-gray-500'} cursor-pointer`} onClick={() => tab.available && setActiveTab(tab.name)}>
            {tab.name}
            {!tab.available && <span className={`ml-2 text-xs ${isDarkMode ? 'text-gray-500' : ''}`}>
                Coming soon
              </span>}
          </button>)}
      </div>
    </div>;
};
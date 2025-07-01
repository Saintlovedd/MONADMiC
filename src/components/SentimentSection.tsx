import React, { useState } from 'react';
import { ClockIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
export const SentimentSection = () => {
  const {
    isDarkMode
  } = useTheme();
  const [goodTimeFilter, setGoodTimeFilter] = useState('Now');
  const [badTimeFilter, setBadTimeFilter] = useState('Now');
  const timeFilters = ['Now', '7D', '1M', '3M', 'YTD'];
  const handleCryptoClick = (name, sentiment) => {
    alert(`Viewing details for ${name} (${sentiment} sentiment)`);
  };
  const goodSentimentData = [{
    name: 'XRP',
    value: '53.55K',
    color: isDarkMode ? 'bg-green-700' : 'bg-green-500'
  }, {
    name: 'USDT',
    value: '18.68K',
    color: isDarkMode ? 'bg-green-600' : 'bg-green-400'
  }, {
    name: 'AAVE',
    value: '10.44K',
    color: isDarkMode ? 'bg-green-500' : 'bg-green-300'
  }, {
    name: 'ADA',
    value: '12.88K',
    color: isDarkMode ? 'bg-green-400' : 'bg-green-200'
  }, {
    name: 'Anoma',
    value: '11.12K',
    color: isDarkMode ? 'bg-green-600' : 'bg-green-400'
  }, {
    name: 'KMNO',
    value: '10.41K',
    color: isDarkMode ? 'bg-green-800' : 'bg-green-600'
  }, {
    name: 'BGB',
    value: '23.07K',
    color: isDarkMode ? 'bg-green-700' : 'bg-green-500'
  }, {
    name: 'DOGE',
    value: '17.83K',
    color: isDarkMode ? 'bg-green-600' : 'bg-green-400'
  }, {
    name: 'DOG',
    value: '12.16K',
    color: isDarkMode ? 'bg-green-500' : 'bg-green-300'
  }, {
    name: 'SUI',
    value: '10.01K',
    color: isDarkMode ? 'bg-green-400' : 'bg-green-200'
  }, {
    name: 'RAY',
    value: '9.91K',
    color: isDarkMode ? 'bg-green-600' : 'bg-green-400'
  }, {
    name: 'Magical',
    value: '9.97K',
    color: isDarkMode ? 'bg-green-800' : 'bg-green-600'
  }, {
    name: 'FARTCOIN',
    value: '22.55K',
    color: isDarkMode ? 'bg-green-700' : 'bg-green-500'
  }, {
    name: 'Theoriq',
    value: '15.54K',
    color: isDarkMode ? 'bg-green-600' : 'bg-green-400'
  }, {
    name: 'TRX',
    value: '11.31K',
    color: isDarkMode ? 'bg-green-500' : 'bg-green-300'
  }, {
    name: 'LINK',
    value: '11.51K',
    color: isDarkMode ? 'bg-green-400' : 'bg-green-200'
  }, {
    name: 'Succinct',
    value: '57K',
    color: isDarkMode ? 'bg-green-600' : 'bg-green-400'
  }, {
    name: 'DOT',
    value: '9.99K',
    color: isDarkMode ? 'bg-green-800' : 'bg-green-600'
  }];
  const badSentimentData = [{
    name: 'QUBIC',
    value: '-3.75K',
    color: isDarkMode ? 'bg-red-700' : 'bg-red-500'
  }, {
    name: 'TIA',
    value: '-3.13K',
    color: isDarkMode ? 'bg-red-800' : 'bg-red-600'
  }, {
    name: 'ZK',
    value: '-2.34K',
    color: isDarkMode ? 'bg-red-900' : 'bg-red-700'
  }, {
    name: 'DEXE',
    value: '-1.65K',
    color: isDarkMode ? 'bg-red-700' : 'bg-red-500'
  }, {
    name: 'BERA',
    value: '-1.55K',
    color: isDarkMode ? 'bg-red-800' : 'bg-red-600'
  }, {
    name: 'MNT',
    value: '-3.63K',
    color: isDarkMode ? 'bg-red-700' : 'bg-red-500'
  }, {
    name: 'CHZ',
    value: '-2.25K',
    color: isDarkMode ? 'bg-red-800' : 'bg-red-600'
  }, {
    name: 'IP',
    value: '-4.41K',
    color: isDarkMode ? 'bg-red-900' : 'bg-red-700'
  }, {
    name: 'JTO',
    value: '-1.28K',
    color: isDarkMode ? 'bg-red-700' : 'bg-red-500'
  }, {
    name: 'FET',
    value: '-652.8',
    color: isDarkMode ? 'bg-red-800' : 'bg-red-600'
  }];
  return <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Good Sentiment */}
      <div className={`border rounded-lg overflow-hidden transition-colors ${isDarkMode ? 'border-green-700' : 'border-green-200'}`}>
        <div className={`p-4 flex flex-wrap justify-between items-center ${isDarkMode ? 'bg-green-900' : 'bg-green-50'}`}>
          <div className="flex items-center mb-2 sm:mb-0">
            <div className={`h-6 w-6 rounded-full flex items-center justify-center mr-2 ${isDarkMode ? 'bg-green-800' : 'bg-green-100'}`}>
              <span className="text-green-500 text-sm">↑</span>
            </div>
            <span className={`font-medium ${isDarkMode ? 'text-green-100' : ''}`}>
              Good sentiment
            </span>
          </div>
          <div className="flex items-center space-x-2 overflow-x-auto">
            {timeFilters.map(filter => <button key={filter} className={`px-3 py-1 rounded-full text-xs flex items-center whitespace-nowrap transition-colors cursor-pointer ${goodTimeFilter === filter ? isDarkMode ? 'bg-green-800' : 'bg-white' : isDarkMode ? 'hover:bg-green-800' : 'hover:bg-green-100'} ${isDarkMode ? 'text-green-100' : ''}`} onClick={() => setGoodTimeFilter(filter)}>
                {filter === 'Now' && <ClockIcon className="h-3 w-3 mr-1" />}
                {filter}
              </button>)}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-6">
          {goodSentimentData.map((item, index) => <div key={index} className={`${item.color} p-3 cursor-pointer hover:opacity-90 transition-opacity`} onClick={() => handleCryptoClick(item.name, 'good')}>
              <div className="text-white font-medium">{item.name}</div>
              <div className="text-white text-sm">{item.value}</div>
            </div>)}
        </div>
      </div>
      {/* Bad Sentiment */}
      <div className={`border rounded-lg overflow-hidden transition-colors ${isDarkMode ? 'border-red-700' : 'border-red-200'}`}>
        <div className={`p-4 flex flex-wrap justify-between items-center ${isDarkMode ? 'bg-red-900' : 'bg-red-50'}`}>
          <div className="flex items-center mb-2 sm:mb-0">
            <div className={`h-6 w-6 rounded-full flex items-center justify-center mr-2 ${isDarkMode ? 'bg-red-800' : 'bg-red-100'}`}>
              <span className="text-red-500 text-sm">↓</span>
            </div>
            <span className={`font-medium ${isDarkMode ? 'text-red-100' : ''}`}>
              Bad sentiment
            </span>
          </div>
          <div className="flex items-center space-x-2 overflow-x-auto">
            {timeFilters.map(filter => <button key={filter} className={`px-3 py-1 rounded-full text-xs flex items-center whitespace-nowrap transition-colors cursor-pointer ${badTimeFilter === filter ? isDarkMode ? 'bg-red-800' : 'bg-white' : isDarkMode ? 'hover:bg-red-800' : 'hover:bg-red-100'} ${isDarkMode ? 'text-red-100' : ''}`} onClick={() => setBadTimeFilter(filter)}>
                {filter === 'Now' && <ClockIcon className="h-3 w-3 mr-1" />}
                {filter}
              </button>)}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-4">
          {badSentimentData.map((item, index) => <div key={index} className={`${item.color} p-3 cursor-pointer hover:opacity-90 transition-opacity`} onClick={() => handleCryptoClick(item.name, 'bad')}>
              <div className="text-white font-medium">{item.name}</div>
              <div className="text-white text-sm">{item.value}</div>
            </div>)}
        </div>
      </div>
    </div>;
};
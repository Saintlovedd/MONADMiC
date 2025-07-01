import React, { useEffect, useState } from 'react';
import { useCryptoData } from '../hooks/useCryptoData';
import { useTheme } from '../context/ThemeContext';
export const MarketEventsSection = () => {
  const {
    isDarkMode
  } = useTheme();
  const {
    data: cryptoData,
    loading,
    error
  } = useCryptoData();
  const [displayData, setDisplayData] = useState([]);
  useEffect(() => {
    if (cryptoData && cryptoData.length > 0) {
      // Take the first 4 cryptocurrencies for display
      setDisplayData(cryptoData.slice(0, 4));
    }
  }, [cryptoData]);
  const handleCardClick = name => {
    alert(`Viewing details for ${name}`);
  };
  // Format market cap to readable format
  const formatMarketCap = marketCap => {
    if (marketCap >= 1e12) {
      return `${(marketCap / 1e12).toFixed(2)}T`;
    } else if (marketCap >= 1e9) {
      return `${(marketCap / 1e9).toFixed(2)}B`;
    } else if (marketCap >= 1e6) {
      return `${(marketCap / 1e6).toFixed(2)}M`;
    } else {
      return `${marketCap}`;
    }
  };
  // Generate random time for demo purposes
  const getRandomTime = () => {
    const times = ['a few minutes ago', '39 minutes ago', 'an hour ago', '2 hours ago'];
    return times[Math.floor(Math.random() * times.length)];
  };
  // Generate random news headlines for demo purposes
  const getNewsHeadline = name => {
    const headlines = [`${name} Hits New High as Institutional Adoption Grows`, `${name} Network Activity Surges to All-Time High`, `Major Exchange Adds Support for ${name} Staking`, `${name} Foundation Announces $100M Developer Fund`, `${name} Faces Regulatory Scrutiny in Key Markets`];
    return headlines[Math.floor(Math.random() * headlines.length)];
  };
  if (loading) {
    return <div className="py-6">
        <div className="flex items-center mb-4">
          <h2 className="text-xl font-semibold dark:text-white">
            Market events
          </h2>
          <img src="/20250701_182638.jpg" alt="Monadmic Research" className="h-6 w-6 ml-2" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => <div key={i} className={`p-4 rounded-lg animate-pulse ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <div className="flex items-center mb-4">
                <div className={`h-10 w-10 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                <div className="ml-3 space-y-1 flex-1">
                  <div className={`h-4 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} w-1/2`}></div>
                  <div className={`h-3 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} w-1/4`}></div>
                </div>
              </div>
              <div className={`h-4 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} w-full mb-4`}></div>
              <div className={`h-4 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} w-5/6`}></div>
            </div>)}
        </div>
      </div>;
  }
  if (error) {
    console.error('Error loading crypto data:', error);
  }
  return <div className="py-6">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold dark:text-white">Market events</h2>
        <img src="/20250701_182638.jpg" alt="Monadmic Research" className="h-6 w-6 ml-2" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayData.map((crypto, index) => <div key={index} className={`p-4 rounded-lg cursor-pointer hover:shadow-md transition-shadow ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`} onClick={() => handleCardClick(crypto.name)}>
            <div className="flex items-center mb-2">
              <div className={`h-8 w-8 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-white'} flex items-center justify-center mr-2`}>
                <img src={crypto.image} alt={crypto.name} className="h-6 w-6" />
              </div>
              <div>
                <h3 className={`font-medium ${isDarkMode ? 'text-white' : ''}`}>
                  {crypto.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {formatMarketCap(crypto.market_cap)}Cap
                </p>
              </div>
              <div className="ml-auto flex items-center">
                <span className={crypto.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}>
                  {crypto.price_change_percentage_24h >= 0 ? '▲' : '▼'}{' '}
                  {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}{' '}
                  (24h)
                </span>
                <div className="ml-2 w-16 h-6 bg-green-100 dark:bg-green-900">
                  <div className="h-full bg-green-500" style={{
                width: `${Math.min(Math.abs(crypto.price_change_percentage_24h) * 10, 100)}%`
              }}></div>
                </div>
              </div>
            </div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : ''}`}>
              {getNewsHeadline(crypto.name)}
            </p>
            <div className="flex mt-3">
              <div className="flex">
                {Array(4).fill(0).map((_, i) => <div key={i} className={`w-5 h-5 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} -ml-1 first:ml-0 border ${isDarkMode ? 'border-gray-800' : 'border-white'}`}></div>)}
              </div>
              <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">
                {getRandomTime()}
              </div>
            </div>
          </div>)}
      </div>
    </div>;
};
import React, { useEffect, useState } from 'react';
import { ClockIcon, ArrowDownIcon } from 'lucide-react';
import { useCryptoData } from '../hooks/useCryptoData';
import { useTheme } from '../context/ThemeContext';
export const MindshareTable = () => {
  const {
    isDarkMode
  } = useTheme();
  const {
    data: cryptoData,
    loading
  } = useCryptoData();
  const [timeFilter, setTimeFilter] = useState('Now');
  const [sortBy, setSortBy] = useState('mindshare');
  const [sortOrder, setSortOrder] = useState('desc');
  const [tableData, setTableData] = useState([]);
  const timeFilters = ['Now', '7D', '1M', '3M', 'YTD'];
  useEffect(() => {
    if (cryptoData && cryptoData.length > 0) {
      // Transform API data into the format we need for the table
      const transformedData = cryptoData.slice(0, 5).map((crypto, index) => {
        // Generate random values for demonstration
        const randomSentiment = Math.floor(Math.random() * 100000) + 5000;
        const randomMindshare = (Math.random() * 10 + 1).toFixed(1);
        const randomChange24h = (Math.random() * 5 - 2).toFixed(2);
        const randomChange7d = (Math.random() * 5 - 2).toFixed(2);
        return {
          id: index + 1,
          icon: crypto.image,
          name: crypto.name,
          symbol: crypto.symbol.toUpperCase(),
          mindshare: `${randomMindshare}%`,
          mindshare24h: parseFloat(randomChange24h) >= 0 ? `▲ ${randomChange24h}` : `▼ ${Math.abs(parseFloat(randomChange24h))}`,
          mindshare7d: parseFloat(randomChange7d) >= 0 ? `▲ ${randomChange7d}` : `▼ ${Math.abs(parseFloat(randomChange7d))}`,
          sentiment: `▲ ${randomSentiment.toLocaleString('en-US', {
            maximumFractionDigits: 2
          })}`,
          sentiment24h: `▼ ${Math.floor(randomSentiment * 0.3).toLocaleString('en-US', {
            maximumFractionDigits: 2
          })}`,
          sentiment7d: `▲ ${Math.floor(randomSentiment * 2.5).toLocaleString('en-US', {
            maximumFractionDigits: 2
          })}`,
          price: `$${crypto.current_price.toLocaleString('en-US', {
            maximumFractionDigits: 2
          })}`,
          marketCap: formatMarketCap(crypto.market_cap),
          marketCap24h: crypto.market_cap_change_percentage_24h >= 0 ? `▲ ${crypto.market_cap_change_percentage_24h.toFixed(2)}%` : `▼ ${Math.abs(crypto.market_cap_change_percentage_24h).toFixed(2)}%`,
          chart: crypto.price_change_percentage_24h >= 0 ? 'chart-up' : 'chart-down'
        };
      });
      setTableData(transformedData);
    }
  }, [cryptoData]);
  const handleSort = column => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
  };
  const handleRowClick = name => {
    alert(`Viewing details for ${name}`);
  };
  // Format market cap to readable format
  function formatMarketCap(marketCap) {
    if (marketCap >= 1e12) {
      return `$${(marketCap / 1e12).toFixed(2)}T`;
    } else if (marketCap >= 1e9) {
      return `$${(marketCap / 1e9).toFixed(2)}B`;
    } else if (marketCap >= 1e6) {
      return `$${(marketCap / 1e6).toFixed(2)}M`;
    } else {
      return `$${marketCap}`;
    }
  }
  if (loading) {
    return <div className="py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold dark:text-white">
            Mindshare Table
          </h2>
          <div className={`w-40 h-8 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse`}></div>
        </div>
        <div className={`w-full h-64 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} animate-pulse`}></div>
      </div>;
  }
  return <div className="py-6">
      <div className="flex flex-wrap items-center justify-between mb-4">
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <button className={`px-4 py-2 rounded-full text-sm flex items-center transition-colors cursor-pointer ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`} onClick={() => handleSort('mindshare')}>
            <span className="dark:text-white">Mindshare change</span>
            <ArrowDownIcon className={`h-4 w-4 ml-2 transition-transform ${sortOrder === 'asc' ? 'rotate-180' : ''}`} />
          </button>
          <button className={`px-4 py-2 rounded-full text-sm flex items-center transition-colors cursor-pointer ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`} onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3h18v18H3zM9 9l6 6M15 9l-6 6" />
            </svg>
            <span className="dark:text-white">
              {sortOrder === 'desc' ? 'Highest first' : 'Lowest first'}
            </span>
          </button>
        </div>
        <div className="flex items-center space-x-2 overflow-x-auto">
          {timeFilters.map(filter => <button key={filter} className={`px-3 py-1 rounded-full text-xs transition-colors cursor-pointer ${timeFilter === filter ? isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-gray-200' : isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} ${isDarkMode ? 'text-gray-300' : ''}`} onClick={() => setTimeFilter(filter)}>
              {filter === 'Now' && <ClockIcon className="h-3 w-3 mr-1 inline" />}
              {filter}
            </button>)}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className={`min-w-full divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
          <thead className={isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}>
            <tr>
              {['#', 'Name', 'Mindshare', '24h', '7d', 'Sentiment', '24h', '7d', 'Price', 'Market Cap', '24h', 'Last 7 days'].map((header, index) => <th key={index} scope="col" className={`px-6 py-3 text-left text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider cursor-pointer ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`} onClick={() => handleSort(header.toLowerCase().replace(' ', ''))}>
                  {header}
                </th>)}
            </tr>
          </thead>
          <tbody className={`divide-y ${isDarkMode ? 'divide-gray-700 bg-gray-900' : 'divide-gray-200 bg-white'}`}>
            {tableData.map(row => <tr key={row.id} className={`cursor-pointer transition-colors ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`} onClick={() => handleRowClick(row.name)}>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {row.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8">
                      <img className="h-8 w-8 rounded-full" src={row.icon} alt="" />
                    </div>
                    <div className="ml-4">
                      <div className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {row.name}
                      </div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {row.symbol}
                      </div>
                    </div>
                  </div>
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {row.mindshare}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${row.mindshare24h.includes('▲') ? 'text-green-500' : 'text-red-500'}`}>
                  {row.mindshare24h}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${row.mindshare7d.includes('▲') ? 'text-green-500' : 'text-red-500'}`}>
                  {row.mindshare7d}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${row.sentiment.includes('▲') ? 'text-green-500' : 'text-red-500'}`}>
                  {row.sentiment}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${row.sentiment24h.includes('▲') ? 'text-green-500' : 'text-red-500'}`}>
                  {row.sentiment24h}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${row.sentiment7d.includes('▲') ? 'text-green-500' : 'text-red-500'}`}>
                  {row.sentiment7d}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {row.price}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {row.marketCap}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm ${row.marketCap24h.includes('▲') ? 'text-green-500' : row.marketCap24h === 'Pre-TGE' ? isDarkMode ? 'text-gray-400' : 'text-gray-500' : 'text-red-500'}`}>
                  {row.marketCap24h}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`w-24 h-8 rounded ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}></div>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
};
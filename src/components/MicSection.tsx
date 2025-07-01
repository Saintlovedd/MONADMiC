import React, { useEffect, useState, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
export const MicSection = () => {
  const {
    isDarkMode
  } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sliderRef = useRef(null);
  const campaigns = [{
    name: 'vooi',
    handle: '@vooi_io',
    icon: 'v',
    iconBg: isDarkMode ? 'bg-yellow-800' : 'bg-yellow-100',
    snappers: 344,
    rewardText: '1.25% of Total Token Supply',
    rewardBg: isDarkMode ? 'bg-amber-900' : 'bg-amber-50',
    rewardTextColor: isDarkMode ? 'text-amber-300' : 'text-amber-600',
    buttonBg: isDarkMode ? 'bg-amber-600' : 'bg-amber-500'
  }, {
    name: 'Elympics',
    handle: '@elympics_ai',
    icon: 'E',
    iconBg: isDarkMode ? 'bg-gray-700' : 'bg-gray-100',
    snappers: 3670,
    rewardText: '$560K in $ELP',
    rewardBg: isDarkMode ? 'bg-pink-900' : 'bg-pink-50',
    rewardTextColor: isDarkMode ? 'text-pink-300' : 'text-pink-600',
    buttonBg: isDarkMode ? 'bg-pink-600' : 'bg-pink-500'
  }, {
    name: 'Recall',
    handle: '@recallnet',
    icon: 'R',
    iconBg: isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-800 text-white',
    snappers: 7170,
    rewardText: '0.5% of Total Token Supply',
    rewardBg: isDarkMode ? 'bg-blue-900' : 'bg-blue-50',
    rewardTextColor: isDarkMode ? 'text-blue-300' : 'text-blue-600',
    buttonBg: isDarkMode ? 'bg-blue-700' : 'bg-blue-600'
  }, {
    name: 'Solana',
    handle: '@solana',
    icon: 'S',
    iconBg: isDarkMode ? 'bg-purple-800' : 'bg-purple-100',
    snappers: 5280,
    rewardText: '2% of Total Token Supply',
    rewardBg: isDarkMode ? 'bg-purple-900' : 'bg-purple-50',
    rewardTextColor: isDarkMode ? 'text-purple-300' : 'text-purple-600',
    buttonBg: isDarkMode ? 'bg-purple-600' : 'bg-purple-500'
  }, {
    name: 'Ethereum',
    handle: '@ethereum',
    icon: 'E',
    iconBg: isDarkMode ? 'bg-blue-800' : 'bg-blue-100',
    snappers: 8920,
    rewardText: '$1.2M in $ETH',
    rewardBg: isDarkMode ? 'bg-blue-900' : 'bg-blue-50',
    rewardTextColor: isDarkMode ? 'text-blue-300' : 'text-blue-600',
    buttonBg: isDarkMode ? 'bg-blue-600' : 'bg-blue-500'
  }];
  const totalSlides = Math.ceil(campaigns.length / 3);
  const visibleCampaigns = campaigns.slice(currentIndex * 3, currentIndex * 3 + 3);
  const handlePrev = () => {
    setCurrentIndex(prev => prev > 0 ? prev - 1 : totalSlides - 1);
  };
  const handleNext = () => {
    setCurrentIndex(prev => prev < totalSlides - 1 ? prev + 1 : 0);
  };
  // Touch handlers for mobile swipe
  const handleTouchStart = e => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = e => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };
  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  const formatMicers = count => {
    return count >= 1000 ? `${(count / 1000).toFixed(2)}K` : count;
  };
  return <div className="py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : ''}`}>
          MIC campaigns
        </h2>
        <div className="flex space-x-2">
          <button className={`p-1 border rounded-md transition-colors cursor-pointer ${isDarkMode ? 'border-gray-600 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'}`} onClick={handlePrev} aria-label="Previous slide">
            <ChevronLeftIcon className={`h-5 w-5 ${isDarkMode ? 'text-gray-300' : ''}`} />
          </button>
          <button className={`p-1 border rounded-md transition-colors cursor-pointer ${isDarkMode ? 'border-gray-600 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'}`} onClick={handleNext} aria-label="Next slide">
            <ChevronRightIcon className={`h-5 w-5 ${isDarkMode ? 'text-gray-300' : ''}`} />
          </button>
        </div>
      </div>
      <div className="overflow-hidden" ref={sliderRef}>
        <div className="flex transition-transform duration-300 ease-in-out" style={{
        transform: `translateX(0%)`
      }} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {visibleCampaigns.map((campaign, idx) => <div key={idx} className={`border rounded-lg p-4 hover:shadow-md transition-shadow ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200'}`}>
                <div className="flex items-center mb-4">
                  <div className={`h-10 w-10 rounded-full ${campaign.iconBg} flex items-center justify-center mr-3`}>
                    <span className="font-bold">{campaign.icon}</span>
                  </div>
                  <div>
                    <h3 className={`font-bold ${isDarkMode ? 'text-white' : ''}`}>
                      {campaign.name}
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {campaign.handle}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <div className="flex">
                      {Array(8).fill(0).map((_, i) => <div key={i} className={`w-4 h-4 rounded-full -ml-1 border ${isDarkMode ? 'bg-gray-700 border-gray-800' : 'bg-gray-200 border-white'}`}></div>)}
                    </div>
                    <p className={`text-xs text-right mt-1 ${isDarkMode ? 'text-gray-400' : ''}`}>
                      {formatMicers(campaign.snappers)} unique MICERS
                    </p>
                  </div>
                </div>
                <div className={`${campaign.rewardBg} p-3 rounded-md`}>
                  <p className={`text-xs ${campaign.rewardTextColor}`}>
                    Total Reward pool
                  </p>
                  <p className={`text-lg font-bold ${campaign.rewardTextColor}`}>
                    {campaign.rewardText}
                  </p>
                </div>
                <button className={`w-full ${campaign.buttonBg} text-white py-2 rounded-md mt-3 font-medium hover:opacity-90 transition-opacity cursor-pointer`} onClick={() => alert(`Viewing ${campaign.name} campaign details`)}>
                  View
                </button>
              </div>)}
          </div>
        </div>
      </div>
      {/* Pagination indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array(totalSlides).fill(0).map((_, idx) => <button key={idx} onClick={() => setCurrentIndex(idx)} className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${currentIndex === idx ? isDarkMode ? 'bg-white' : 'bg-black' : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`} aria-label={`Go to slide ${idx + 1}`} />)}
      </div>
    </div>;
};
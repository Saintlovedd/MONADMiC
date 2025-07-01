import React, { useEffect, useState } from 'react';
interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  market_cap_change_percentage_24h: number;
}
export const useCryptoData = () => {
  const [data, setData] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        console.error('Error fetching crypto data:', err);
        setError('Failed to load cryptocurrency data. Using fallback data.');
        // Fallback data in case the API fails
        setData([{
          id: 'bitcoin',
          symbol: 'btc',
          name: 'Bitcoin',
          image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
          current_price: 106063,
          market_cap: 2100000000000,
          market_cap_change_percentage_24h: -1.43,
          price_change_percentage_24h: 2.09
        }, {
          id: 'ethereum',
          symbol: 'eth',
          name: 'Ethereum',
          image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
          current_price: 2424.66,
          market_cap: 292830000000,
          market_cap_change_percentage_24h: -2.07,
          price_change_percentage_24h: 2.14
        }, {
          id: 'solana',
          symbol: 'sol',
          name: 'Solana',
          image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
          current_price: 148.08,
          market_cap: 79130000000,
          market_cap_change_percentage_24h: -5.72,
          price_change_percentage_24h: 2.86
        }]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // Refresh data every 5 minutes
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);
  return {
    data,
    loading,
    error
  };
};
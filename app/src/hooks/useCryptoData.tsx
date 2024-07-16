import { useQuery } from 'react-query';
import axios from 'axios';
import { CryptoData } from './types';

const fetchCryptoData = async (code: string): Promise<CryptoData[]> => {
  const { data } = await axios.get<CryptoData[]>(`http://localhost:8002/api/v1/crypto/data/real-time/${code}`);
  return data;
};

export const useCryptoData = (symbol: string) => {
  return useQuery(['cryptoData', symbol], () => fetchCryptoData(symbol), {
    refetchInterval: 5000, // Refetch every 5 seconds
  });
};

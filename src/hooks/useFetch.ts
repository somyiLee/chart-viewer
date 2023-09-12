import { useEffect, useState } from 'react';
import httpClient from '@/api/client';
import { getChartData } from '@/utils';
import { useSetRecoilState } from 'recoil';
import { ChartState } from '@/recoil/atom';

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const setChartData = useSetRecoilState(ChartState);

  const loadData = async () => {
    setIsLoading(true);

    const responseData = await httpClient.loadData();
    if (!responseData) return;

    const fetchedChartData = getChartData(responseData);
    setChartData(fetchedChartData);

    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    isLoading,
  };
};

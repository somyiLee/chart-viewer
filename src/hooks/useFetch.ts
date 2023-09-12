import { ChartData } from 'chart.js';
import { useEffect, useState } from 'react';
import httpClient from '@/api/client';
import { ChartItem } from '@/types';
import { getChartData } from '@/utils';

interface ChartDataState extends ChartData<'bar' | 'line', ChartItem[]> {}

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [chartData, setChartData] = useState<ChartDataState>({ datasets: [] });

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);

      const responseData = await httpClient.loadData();

      if (!responseData) return;

      setChartData(getChartData(responseData));

      setIsLoading(false);
    };

    loadData();
  }, []);

  return {
    chartData,
    isLoading,
  };
};

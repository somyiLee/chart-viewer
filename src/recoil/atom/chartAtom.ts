import { atom } from 'recoil';
import { ChartDataState } from '@/types';

export const ChartState = atom<ChartDataState>({
  key: 'ChartData',
  default: { datasets: [] },
});

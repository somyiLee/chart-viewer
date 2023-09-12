import { AREA_KEY, BAR_KEY } from '@/constant';
import { ChartData } from 'chart.js';
import { ChartDataType } from '.';

export type LocationDataType = {
  id: string;
  [AREA_KEY]: number;
  [BAR_KEY]: number;
};

export type LocationDataKey = string;

export type ResponseData = {
  [t: LocationDataKey]: LocationDataType;
};

export type ResponseType = {
  type: string;
  version: number;
  response: ResponseData;
};

export interface ChartDataState extends ChartData<'bar' | 'line', ChartDataType[]> {}

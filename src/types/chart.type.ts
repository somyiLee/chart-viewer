import { X_KEY, Y_KEY } from '@/constant';
import { LocationDataType } from '.';

export type ChartDataType = {
  [X_KEY]: string;
  [Y_KEY]: LocationDataType;
};

export type filterListType = string[];

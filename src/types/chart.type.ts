import { X_KEY, Y_KEY } from '@/constant';
import { LocationDataType } from '.';

export type ChartItem = {
  [X_KEY]: string;
  [Y_KEY]: LocationDataType;
};

import { AREA_KEY, BAR_KEY, COLORS, X_KEY, Y_KEY } from '@/constant';
import { ChartItem, ResponseData } from '@/types';
import { dateToKr } from '.';

export const getAriaData = (data: ChartItem[]) => {
  return {
    type: 'line' as const,
    label: 'Area',
    data: data,
    parsing: {
      xAxisKey: X_KEY,
      yAxisKey: `${Y_KEY}.${AREA_KEY}`,
    },
    borderWidth: 2,
    yAxisID: 'area',
    borderColor: COLORS.blue.normal,
    backgroundColor: COLORS.blue.dark,
    pointBorderWidth: 0,
    pointHoverBorderColor: COLORS.blue.normal,
    pointHoverBorderWidth: 2,
    pointHoverBackgroundColor: COLORS.blue.normal,
    fill: true,
    order: 1,
  };
};

export const getBarData = (data: ChartItem[]) => {
  return {
    type: 'bar' as const,
    label: 'Bar',
    data: data,
    parsing: {
      xAxisKey: X_KEY,
      yAxisKey: `${Y_KEY}.${BAR_KEY}`,
    },
    yAxisID: 'bar',
    borderColor: COLORS.green.normal,
    backgroundColor: COLORS.green.normal,
    pointBorderWidth: 0,
    pointHoverBorderColor: COLORS.green.normal,
    pointHoverBorderWidth: 2,
    pointHoverBackgroundColor: COLORS.green.normal,
    fill: true,
    order: 1,
  };
};

export const getChartData = (res: ResponseData) => {
  const dataList = Object.entries(res).map(([time, data]) => ({
    [X_KEY]: dateToKr(time),
    [Y_KEY]: data,
  }));
  return {
    datasets: [getAriaData(dataList), getBarData(dataList)],
  };
};

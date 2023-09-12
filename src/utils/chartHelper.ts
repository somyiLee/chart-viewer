import { AREA_KEY, BAR_KEY, COLORS, X_KEY, Y_KEY } from '@/constant';
import { ChartDataType, ResponseData } from '@/types';
import { dateToKr } from '.';
import { ChartOptions, TooltipItem } from 'chart.js';

export const getAriaData = (data: ChartDataType[]) => {
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
    borderColor: COLORS.pink.normal,
    backgroundColor: COLORS.pink.dark,
    pointBorderWidth: 0,
    pointHoverBorderColor: COLORS.pink.normal,
    pointHoverBorderWidth: 2,
    pointHoverBackgroundColor: COLORS.pink.normal,
    fill: true,
    order: 1,
  };
};

export const getBarData = (data: ChartDataType[]) => {
  return {
    type: 'bar' as const,
    label: 'Bar',
    data: data,
    parsing: {
      xAxisKey: X_KEY,
      yAxisKey: `${Y_KEY}.${BAR_KEY}`,
    },
    yAxisID: 'bar',
    borderColor: COLORS.purple.normal,
    backgroundColor: COLORS.purple.normal,
    pointBorderWidth: 0,
    pointHoverBorderColor: COLORS.purple.normal,
    pointHoverBorderWidth: 2,
    pointHoverBackgroundColor: COLORS.purple.normal,
    fill: true,
    order: 1,
  };
};

interface CustomTooltipItem extends TooltipItem<'bar' | 'line'> {
  raw: ChartDataType;
}

const AREA_MAX = 180;

export const chartOption: ChartOptions<'bar' | 'line'> = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    area: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
      title: { display: true, text: 'Area' },
      max: AREA_MAX,
    },
    bar: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      title: { display: true, text: 'Bar' },
    },
  },
  parsing: {
    xAxisKey: X_KEY,
  },
  plugins: {
    tooltip: {
      callbacks: {
        afterTitle: function (this, [areaItem]: CustomTooltipItem[]) {
          return `지역 : ${areaItem.raw.y.id}`;
        },
      },
    },
  },
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

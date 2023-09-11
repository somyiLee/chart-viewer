import { ChartOptions, TooltipItem } from 'chart.js';
import { X_KEY } from '@/constant';
import { ChartItem } from '@/types';

interface CustomTooltipItem extends TooltipItem<'bar' | 'line'> {
  raw: ChartItem;
}

const AREA_MAX = 180;

const chartOption: ChartOptions<'bar' | 'line'> = {
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

export { chartOption };

/* eslint-disable react-refresh/only-export-components */
import { Chart } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import { forwardRef } from 'react';
import { ChartItem } from '@/types';

interface TimeSeriesChartProps {
  chartData: ChartData<'bar' | 'line', ChartItem[]>;
  chartOption: ChartOptions<'bar' | 'line'>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default forwardRef<any, TimeSeriesChartProps>(({ chartData, chartOption }, ref) => {
  return (
    <div>
      <Chart type="bar" data={chartData} options={chartOption} ref={ref} />
    </div>
  );
});

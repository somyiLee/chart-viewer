import { Chart } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import { MouseEventHandler, forwardRef } from 'react';
import { ChartDataType } from '@/types';

interface TimeSeriesChartProps {
  chartData: ChartData<'bar' | 'line', ChartDataType[]>;
  chartOption: ChartOptions<'bar' | 'line'>;
  handleFilter: MouseEventHandler<HTMLCanvasElement>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, react-refresh/only-export-components
export default forwardRef<any, TimeSeriesChartProps>(
  ({ chartData, chartOption, handleFilter }, ref) => {
    return (
      <div>
        <Chart type="bar" data={chartData} options={chartOption} ref={ref} onClick={handleFilter} />
      </div>
    );
  },
);

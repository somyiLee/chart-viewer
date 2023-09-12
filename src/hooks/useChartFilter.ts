import { useRef, MouseEventHandler } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Chart as ChartJS } from 'chart.js';
import { getElementAtEvent } from 'react-chartjs-2';
import { COLORS, Y_KEY } from '@/constant';
import { useRecoilState } from 'recoil';
import { ChartState } from '@/recoil/atom';

type DatasetStyleReturnType = {
  areaPointBorderWidth: number[];
  barBackgroundColor: string[];
};

export const useChartFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useRecoilState(ChartState);

  const highlightSelectedId = (id: string) => {
    const { areaPointBorderWidth, barBackgroundColor } =
      chartData.datasets[0].data.reduce<DatasetStyleReturnType>(
        (acc, curr) => {
          const currentDataId = curr[Y_KEY].id;
          const isIdMatched = currentDataId === id;
          const newBorderWidth = isIdMatched ? 2 : 0;
          const newColor = isIdMatched ? COLORS.purple.dark : COLORS.purple.normal;

          return {
            areaPointBorderWidth: [...acc.areaPointBorderWidth, newBorderWidth],
            barBackgroundColor: [...acc.barBackgroundColor, newColor],
          };
        },
        { areaPointBorderWidth: [], barBackgroundColor: [] },
      );

    setChartData(({ datasets }) => {
      const [areaDataset, barDataset] = datasets;
      return {
        datasets: [
          {
            ...areaDataset,
            pointBorderWidth: areaPointBorderWidth,
          },
          { ...barDataset, backgroundColor: barBackgroundColor },
        ],
      };
    });
  };

  const changePrams: MouseEventHandler<HTMLCanvasElement> = e => {
    if (!chartRef.current) return;

    const element = getElementAtEvent(chartRef.current, e);
    if (!element.length) return;

    const { datasetIndex, index } = element[0];
    const id = chartData.datasets[datasetIndex].data[index].y.id;
    setSearchParams(searchParams.has(id) ? '' : { id: [id] });

    highlightSelectedId(id);
  };

  return { chartRef, highlightSelectedId, changePrams };
};

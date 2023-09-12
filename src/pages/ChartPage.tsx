import { useChartFilter, useFetch } from '@/hooks';
import { chartOption } from '@/utils';
import ChartTable from '@/components/ChartTable';

import { useRecoilValue } from 'recoil';
import { ChartState } from '@/recoil/atom';
import styled from 'styled-components';
import FilterBox from '@/components/FilterBox';

const ChartPage = () => {
  const { isLoading } = useFetch();
  const chartData = useRecoilValue(ChartState);
  const { chartRef, changePrams } = useChartFilter();

  if (isLoading) return <div>Loading...</div>;

  return (
    <ChartContainer>
      <ChartTable
        chartData={chartData}
        chartOption={chartOption}
        ref={chartRef}
        handleFilter={changePrams}
      />
      <FilterBox />
    </ChartContainer>
  );
};

export default ChartPage;

const ChartContainer = styled.main`
  max-width: 1200px;
  margin: 30px auto 0;
`;

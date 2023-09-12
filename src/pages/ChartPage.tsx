import { useFetch } from '@/hooks';
import { chartOption } from '@/utils';
import ChartTable from '@/components/ChartTable';

const ChartPage = () => {
  const { chartData, isLoading } = useFetch();

  if (isLoading) return <div>Loading...</div>;

  return <ChartTable chartData={chartData} chartOption={chartOption} />;
};

export default ChartPage;

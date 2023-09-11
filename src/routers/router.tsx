import { createBrowserRouter } from 'react-router-dom';

import Chart from '@/pages/Chart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Chart />,
  },
]);

export default router;

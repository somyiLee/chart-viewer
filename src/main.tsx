import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import ChartPage from '@/pages/ChartPage';
import { registChartJS } from '@/utils';
import { RecoilRoot } from 'recoil';

registChartJS();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <ChartPage />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
);

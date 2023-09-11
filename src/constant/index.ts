export const BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:5173/' : '';

export const API_URL = '/data/chartList.json';

export const AREA_KEY = 'value_area';
export const BAR_KEY = 'value_bar';

export const X_KEY = 'x';
export const Y_KEY = 'y';

export const COLORS = {
  yellow: { normal: 'rgba(233, 209, 23, 0.31)', dark: 'rgba(233, 209, 23, 0.53)' },
  green: { normal: 'rgba(5, 209, 177, 0.4)', dark: 'rgba(5, 209, 177, 0.7)' },
  blue: { normal: 'rgba(76, 176, 234, 0.36)', dark: 'rgba(76, 176, 234, 0.7)' },
} as const;

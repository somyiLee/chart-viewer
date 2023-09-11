import { API_URL } from '@/constant';
import { ResponseData } from '@/types';

const httpClient = {
  async loadData(): Promise<ResponseData | null> {
    const response = await fetch(API_URL);
    const data = await response.json();
    if (!data || !data.response) return null;
    return data.response;
  },
};

export default httpClient;

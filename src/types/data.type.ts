import { AREA_KEY, BAR_KEY } from '@/constant';

export type LocationDataType = {
  id: string;
  [AREA_KEY]: number;
  [BAR_KEY]: number;
};

export type LocationDataKey = string;

export type ResponseData = {
  [k: LocationDataKey]: LocationDataType;
};

export type ResponseType = {
  type: string;
  version: number;
  response: ResponseData;
};

import axios, { AxiosPromise } from "axios";

import { wheater as weatherEndPoint } from "../endPoints";

export interface IDataGetWeather {
  coord: {
    lat: number;
    lon: number;
  };
  dt: number;
  main: {
    humidity: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
}

export interface IPropsGetWeather {
  city?: string;
  lat?: number;
  lon?: number;
}

export const getWheater = ({
  city,
  lat,
  lon,
}: IPropsGetWeather): AxiosPromise<IDataGetWeather> => {
  return axios.get(`${weatherEndPoint}/weather`, {
    params: {
      appid: "227ba46509e11302d5f75d2f457b8721",
      lang: "pt_br",
      units: "metric",
      q: city,
      lat,
      lon,
    },
  });
};

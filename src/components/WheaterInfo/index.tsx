import React from "react";
import { IDataGetWeather } from "../../api/services/wheater-service";
import {
  FaCloud,
  FaCloudRain,
  FaCloudShowersHeavy,
  FaCloudSun,
  FaSmog,
  FaSun,
} from "react-icons/fa";

import { Container, GridTem } from "./styles";

interface IWeatherInfoProps extends IDataGetWeather {
  dateTime: Date;
}

const WheaterInfo = (wheatherData: IWeatherInfoProps) => {
  const icons = new Map([
    ["algumas nuvens", <FaSmog style={{ fontSize: "6rem" }} />],
    ["nublado", <FaCloud style={{ fontSize: "6rem" }} />],
    ["nuvens dispersas", <FaCloudSun style={{ fontSize: "6rem" }} />],
    ["céu limpo", <FaSun style={{ fontSize: "6rem" }} />],
    [
      "chuviscos com intensidade de raios",
      <FaCloudShowersHeavy style={{ fontSize: "6rem" }} />,
    ],
    ["chuva leve", <FaCloudRain style={{ fontSize: "6rem" }} />],
  ]);

  return (
    <>
      {wheatherData && (
        <Container>
          <GridTem>
            <p className="hour">
              {new Date().toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p className="day">{new Date().toLocaleDateString("pt-BR")}</p>
          </GridTem>
          <GridTem>
            <div>
              {wheatherData.weather.length &&
                icons.get(wheatherData.weather[0].description)}
              <p className="weather-forecast">
                {wheatherData.weather.length &&
                  wheatherData.weather[0]?.description}
              </p>
            </div>
            <div className="temperature">
              <p>{wheatherData.main.temp.toFixed(1)}ºC</p>
            </div>
          </GridTem>
        </Container>
      )}
    </>
  );
};

export { WheaterInfo };

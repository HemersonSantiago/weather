import React from "react";

import { Container, Wrapper, Img, MobileImg, Temp } from "./styles";
import desktop from "../../assets/desktop.jpg";
import mobile from "../../assets/mobile.jpg";

interface IPropsWheaterImage {
  temperature?: number;
  name?: string;
}

const WeatherImage = ({ temperature, name }: IPropsWheaterImage) => {
  return (
    <Container>
      <Wrapper>
        <Img src={desktop} alt="Weather" />
        <MobileImg src={mobile} alt="teste2" />
        {temperature && (
          <Temp>
            <p>{temperature.toFixed(1)}ºC</p> <p>{name}</p>
          </Temp>
        )}
      </Wrapper>
    </Container>
  );
};

export { WeatherImage };

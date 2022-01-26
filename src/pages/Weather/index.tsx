import React, { useState, useEffect } from "react";
import {
  getWheater,
  IPropsGetWeather,
  IDataGetWeather,
} from "../../api/services/wheater-service";
import { Header } from "../../components/Header";
import { WeatherImage } from "../../components/WeatherImage";
import { WheaterInfo } from "../../components/WheaterInfo";
import { Container, Wrapper, Input, WrapperSearch, Button } from "./styles";
import { ToastContainer, toast } from "react-toast";

interface IPropsShowPosition {
  coords: {
    latitude: number;
    longitude: number;
  };
}

const Weather = () => {
  const [wheatherData, weatherData] = useState<IDataGetWeather | null>(null);
  const [city, setCity] = useState("");
  const [dateTime, setDateTime] = useState(new Date());

  const handleWeather = async ({ city, lat, lon }: IPropsGetWeather) => {
    try {
      const { data } = await getWheater({ city, lat, lon });
      weatherData(data);
      setDateTime(new Date());
    } catch (error) {
      weatherData(null);
      toast(`Nenhum dado encontrado para o lugar: ${city}`);
    }
  };

  const showPosition = (position: IPropsShowPosition) => {
    if (position?.coords) {
      const { latitude, longitude } = position.coords;

      handleWeather({ lat: latitude, lon: longitude });
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      toast("Geolocalização não suportada neste browser!");
    }
  };

  useEffect(() => {
    const latSp = -23.5489;
    const lonSp = -46.6388;
    handleWeather({ lat: latSp, lon: lonSp });
  }, []);

  return (
    <Container>
      <Header getLocation={getLocation} />
      <Wrapper>
        <WeatherImage
          temperature={wheatherData?.main?.temp}
          name={wheatherData?.name}
        />

        {wheatherData && <WheaterInfo {...wheatherData} dateTime={dateTime} />}
      </Wrapper>
      <WrapperSearch>
        <Input name="city" onChange={(e) => setCity(e.target.value)} />
        <Button
          onClick={(e) => {
            e.preventDefault();
            if (city) handleWeather({ city });
          }}
        >
          Pesquisar
        </Button>
      </WrapperSearch>
      <ToastContainer position="top-left" delay={2000} />
    </Container>
  );
};

export { Weather };

import React, { useState } from "react";
import { getWheater, IPropsGetWeather, IDataGetWeather } from "../../api/services/wheater-service";
import { Header } from "../../components/Header";
import { Container } from "../../components/Header/styles";

const Weather = () => {
  const [wheatherData, weatherData] = useState<IDataGetWeather | null>(null);
  const [city, setCity] = useState('');


  const handleWeather = async ({city, lat, lon}: IPropsGetWeather) => {
    try {
      const  { data }  = await getWheater({city, lat, lon});
      console.log("data >>>>.", data);
      weatherData(data);
    } catch (error) {
      weatherData(null);
      console.log("error");
    }
  }


	const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocalização não suportada neste browser!")
    }
  };
  const showPosition = (position: any) => {
    if (position?.coords) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      handleWeather({lat, lon});
    }
  };
  

  return (
    <Container>
      <Header getLocation={getLocation} />
      <input name="city" onChange={e => setCity(e.target.value)} />
      <button onClick={() => handleWeather({city})}>Pesquisar</button>
      <br />
      {wheatherData?.name}
      <br />
      {wheatherData && wheatherData.main.temp && `temperatura: ${wheatherData?.main.temp }`}
    </Container>
  );
};

export { Weather };

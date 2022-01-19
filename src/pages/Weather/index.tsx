import React from "react";
import { Header } from "../../components/Header";
import { Container } from "../../components/Header/styles";

const Weather = () => {
  //https://api.openweathermap.org/data/2.5/weather?q=itapevi&appid=227ba46509e11302d5f75d2f457b8721
  return (
    <Container>
      <Header />
    </Container>
  );
};

export { Weather };

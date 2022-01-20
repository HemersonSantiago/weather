import React from "react";

import { Container } from "./styles";

interface IpropsHeader {
  getLocation: () => void;
}

const Header = ({ getLocation }: IpropsHeader) => (
  <Container>
    <h1>The Weather Web</h1>
    <button onClick={() => getLocation()}>Obter Localização</button>
  </Container>
);

export { Header };

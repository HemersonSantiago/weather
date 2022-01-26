import React from "react";

import { Container, Title, Info, WrapperInfo,WrapperButton, Button  } from "./styles";

interface IpropsHeader {
  getLocation: () => void;
}

const Header = ({ getLocation }: IpropsHeader) => (
  <Container>
    <WrapperInfo>
      <Title>É sempre agradável saber a previsão do tempo!</Title>
      <Info>
        Obtenha relatórios meteorológicos de ocorrência com data e hora e <br />
        programa-se para cada situação.
      </Info>
    </WrapperInfo>
    <WrapperButton>
      <Button onClick={() => getLocation()}>Obter Localização</Button>
    </WrapperButton>
  </Container>
);

export { Header };

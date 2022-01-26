import React from "react";
import { FaBomb } from "react-icons/fa";

import { Container } from "./styles";

const NotFound404 = () => (
  <Container>
    <FaBomb  style={{ fontSize: "200px"}}/>
    <p>404 - Página não encontrada!</p>
  </Container>
);

export { NotFound404 };

import React from "react";
import { render, screen } from "@testing-library/react";

import { Header } from ".";

describe("<Header />", () => {
  const props = {
    getLocation: jest.fn(),
  };

  it("should render title and button", () => {
    render(<Header {...props} />);

    // screen.logTestingPlaygroundURL();
    expect(
      screen.getByRole("heading", {
        name: /é sempre agradável saber a previsão do tempo!/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /obtenha relatórios meteorológicos de ocorrência com data e hora e programa\-se para cada situação\./i
      )
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /obter localização/i })).toBeInTheDocument();
  });

});

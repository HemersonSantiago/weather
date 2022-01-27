import React from "react";
import { render, screen } from "@testing-library/react";
import  userEvent from "@testing-library/user-event"

import { Header } from ".";

describe("<Header />", () => {
  const props = {
    getLocation: jest.fn(),
  };

  it("should render title and button", () => {
    render(<Header {...props} />);
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

  it("should handle getLocation", () => {
    render(<Header {...props} />);

    const button = screen.getByRole("button", { name: /obter localização/i });
    userEvent.click(button)
    expect(props.getLocation).toHaveBeenCalled();

  });

});

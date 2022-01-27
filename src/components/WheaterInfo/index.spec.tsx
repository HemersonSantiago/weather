import React from "react";
import { render, screen } from "@testing-library/react";

import { WheaterInfo } from ".";

const mock = {
  dateTime: new Date(),
  coord: { lon: -46.6388, lat: -23.5489 },
  main: {
    temp: 29.69,
    temp_min: 26.04,
    temp_max: 30.16,
    humidity: 54,
  },
  name: "São Paulo",
  sys: {
    country: "BR",
  },
  weather: [
    { id: 801, main: "Clouds", description: "algumas nuvens", icon: "02d" },
  ],
};

describe("<WheaterInfo />", () => {
  it("should render content", () => {
    render(<WheaterInfo {...mock} />);

    expect(
      screen.getByText(
        mock.dateTime.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        })
      )
    ).toBeInTheDocument();
    expect(screen.getByText(mock.dateTime.toLocaleDateString("pt-BR"))).toBeInTheDocument();
    expect(screen.getByText(/algumas nuvens/i)).toBeInTheDocument();
    expect(screen.getByText(/29\.7ºc/i)).toBeInTheDocument();
  });
});

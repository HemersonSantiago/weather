import React from "react";
import { render, screen } from "@testing-library/react";

import { WheaterInfo } from ".";

const mock = {
  dateTime: new Date(),
  coord: { lon: -46.6388, lat: -23.5489 },
  weather: [
    { id: 801, main: "Clouds", description: "algumas nuvens", icon: "02d" },
  ],
  main: {
    temp: 29.69,
    feels_like: 31.21,
    temp_min: 26.04,
    temp_max: 30.16,
    pressure: 1011,
    humidity: 54,
  },
  visibility: 10000,
  wind: { speed: 4.63, deg: 310 },
  clouds: { all: 20 },
  dt: 1643228417,
  sys: {
    type: 1,
    id: 8394,
    country: "BR",
    sunrise: 1643186471,
    sunset: 1643234205,
  },
  timezone: -10800,
  id: 3448439,
  name: "São Paulo",
  cod: 200,
};

describe("<WheaterInfo />", () => {
  it("should render title", () => {
    render(<WheaterInfo {...mock} />);

    expect(screen.getByText(/notfound 404/i)).toBeInTheDocument();
  });
});

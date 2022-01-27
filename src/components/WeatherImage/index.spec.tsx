import React from "react";
import { render, screen } from "@testing-library/react";

import { WeatherImage } from ".";

describe("<WeatherImage />", () => {
  const props = {
    temperature: 29,
    name: "São Paulo",
  };
  it("should render img, temperature and place", () => {
    render(<WeatherImage {...props} />);

    expect(screen.getByRole("img", { name: /weather/i })).toBeInTheDocument();
    expect(screen.getByText(/29\.0ºc/i)).toBeInTheDocument();
    expect(screen.getByText(/são paulo/i)).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";

import { WeatherImage } from ".";

describe("<WeatherImage />", () => {
  it("should render title", () => {
    render(<WeatherImage />);

    expect(screen.getByText(/notfound 404/i)).toBeInTheDocument();
  });
});

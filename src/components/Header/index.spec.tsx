import React from "react";
import { render, screen } from "@testing-library/react";

import { Header } from ".";

describe("<Header />", () => {
  it("should render title", () => {
    render(<Header />);

    expect(screen.getByText(/header/i)).toBeInTheDocument();
  });
});

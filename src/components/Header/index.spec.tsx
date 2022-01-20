import React from "react";
import { render, screen } from "@testing-library/react";

import { Header } from ".";

describe("<Header />", () => {

  const props = {
    getLocation: jest.fn()
  }

  it("should render title", () => {
    render(<Header {...props} />);

    expect(screen.getByText(/header/i)).toBeInTheDocument();
  });
});

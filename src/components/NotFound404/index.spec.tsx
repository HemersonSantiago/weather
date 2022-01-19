import React from "react";
import { render, screen } from "@testing-library/react";

import { NotFound404 } from ".";

describe("<NotFound404 />", () => {
  it("should render title", () => {
    render(<NotFound404 />);

    expect(screen.getByText(/notfound 404/i)).toBeInTheDocument();
  });
});

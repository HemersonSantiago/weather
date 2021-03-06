import React from "react";
import { render, screen } from "@testing-library/react";

import { NotFound404 } from ".";

describe("<NotFound404 />", () => {
  it("should render title", () => {
    render(<NotFound404 />);
    expect(
      screen.getByText(/404 \- página não encontrada!/i)
    ).toBeInTheDocument();
  });
});

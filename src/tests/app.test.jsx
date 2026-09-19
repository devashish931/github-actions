import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../App";

test("renders App", () => {
  render(<App />);

  expect(screen.getByText("This is React")).toBeInTheDocument();
});

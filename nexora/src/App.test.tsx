import { render, screen } from "@testing-library/react";
import App from "./App";

describe("NEXORA application shell", () => {
  it("renders the brand and main content landmark", () => {
    render(<App />);

    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByText("NEXORA")).toBeInTheDocument();
  });
});

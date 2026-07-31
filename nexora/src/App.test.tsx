import { render, screen } from "@testing-library/react";
import App from "./App";

describe("NEXORA application shell", () => {
  it("renders the brand and main content landmark", () => {
    render(<App />);

    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getAllByText("NEXORA").length).toBeGreaterThan(0);
    expect(screen.getByRole("heading", { name: /one AI workspace for answers and action/i })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: /one connected workspace for your entire organization/i })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: /get started today/i })).toBeInTheDocument();
  });
});

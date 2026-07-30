import { render, screen } from "@testing-library/react";
import App from "./App";

describe("NEXORA application shell", () => {
  it("renders the brand and main content landmark", () => {
    render(<App />);

    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getAllByText("NEXORA").length).toBeGreaterThan(0);
    expect(
      screen.getByRole("region", { name: "From signal to decision." }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", {
        name: "Trusted when the network gets difficult.",
      }),
    ).toBeInTheDocument();
  });
});

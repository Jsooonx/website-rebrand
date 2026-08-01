import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("uses the dashboard-led composition with a wide live case surface", () => {
    render(<Hero />);

    expect(screen.getByRole("region", { name: "Live case" })).toHaveClass("hero--dashboard-led", "hero--centered");
    expect(screen.getByLabelText("Live case workspace")).toHaveClass("hero__case--wide");
  });
});

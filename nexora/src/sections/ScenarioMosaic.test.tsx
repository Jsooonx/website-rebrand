import { render, screen } from "@testing-library/react";
import { ScenarioMosaic } from "./ScenarioMosaic";

describe("ScenarioMosaic", () => {
  it("presents three operational cases as a mosaic", () => {
    render(<ScenarioMosaic />);

    expect(screen.getByRole("heading", { name: /three situations/i })).toBeVisible();
    expect(screen.getByText("Renewal risk")).toBeVisible();
    expect(screen.getByText("Incident response")).toBeVisible();
    expect(screen.getByText("Policy review")).toBeVisible();
    expect(screen.getByText(/different operating pressure/i)).toBeVisible();
  });
});

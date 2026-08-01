import { render, screen } from "@testing-library/react";
import { AdoptionPaths } from "./AdoptionPaths";

describe("AdoptionPaths", () => {
  it("shows operating paths without commercial pricing", () => {
    render(<AdoptionPaths />);

    expect(screen.getByText(/operating paths/i)).toBeVisible();
    expect(screen.getByRole("heading", { name: "Explore" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Coordinate" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Govern" })).toBeVisible();
    expect(screen.getByText("$29")).toBeVisible();
  });
});

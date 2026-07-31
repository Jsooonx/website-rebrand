import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ClosingCta } from "./ClosingCta";

describe("ClosingCta", () => {
  it("pairs the get-started action with the workspace and no terrain image", () => {
    render(<ClosingCta />);

    expect(
      screen.getByRole("heading", {
        name: "Get started today",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "NEXORA ask workspace" })).toBeInTheDocument();
    expect(screen.queryByAltText(/terrain/i)).not.toBeInTheDocument();
  });
});

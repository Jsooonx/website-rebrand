import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ClosingCta } from "./ClosingCta";

describe("ClosingCta", () => {
  it("pairs the launch action with a compact resolved case", () => {
    render(<ClosingCta />);

    expect(screen.getByRole("heading", { name: /turn questions.*next moves/i })).toBeInTheDocument();
    expect(screen.getByText(/resolved case/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /open the live case/i })).toBeInTheDocument();
    expect(screen.queryByAltText(/terrain/i)).not.toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ClosingCta } from "./ClosingCta";

describe("ClosingCta", () => {
  it("pairs the briefing action with the operator brief and product-posture signals", () => {
    render(<ClosingCta />);

    expect(
      screen.getByRole("heading", {
        name: "See the next move before it becomes urgent.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Operator Brief" })).toBeInTheDocument();
    expect(screen.getByText("Approval-aware workflows")).toBeInTheDocument();
    expect(screen.getByText("Traceable operational decisions")).toBeInTheDocument();
    expect(screen.getByText("Built for distributed teams")).toBeInTheDocument();
  });
});

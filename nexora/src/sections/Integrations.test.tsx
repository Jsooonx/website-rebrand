import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Integrations } from "./Integrations";

describe("Integrations", () => {
  it("presents the four AI-workspace system groups", () => {
    render(<Integrations />);

    expect(screen.getByRole("heading", { name: "Source connect" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Action runner" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Approval gate" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Audit and insights" })).toBeInTheDocument();
    expect(screen.getByTestId("integration-fan")).toHaveAttribute("aria-hidden", "true");
  });
});

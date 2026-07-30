import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Integrations } from "./Integrations";

describe("Integrations", () => {
  it("presents the four operational source groups", () => {
    render(<Integrations />);

    expect(screen.getByRole("heading", { name: "Warehouse systems" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Transport networks" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Orders and ERP" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Customer operations" })).toBeInTheDocument();
    expect(screen.getByTestId("integration-fan")).toHaveAttribute("aria-hidden", "true");
  });
});

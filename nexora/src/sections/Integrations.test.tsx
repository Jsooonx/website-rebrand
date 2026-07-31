import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Integrations } from "./Integrations";

describe("Integrations", () => {
  it("lets a visitor inspect a context-to-action route", async () => {
    const user = userEvent.setup();
    render(<Integrations />);

    expect(screen.getByRole("heading", { name: "Connect context" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Ground every answer" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Route the next action" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Learn from outcomes" })).toBeInTheDocument();

    const crm = screen.getByRole("button", { name: "Connect CRM" });
    expect(crm).toHaveClass("integration-flow__node--source-1");
    await user.click(crm);

    expect(crm).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("status")).toHaveTextContent("CRM context flows through NEXORA");
  });
});

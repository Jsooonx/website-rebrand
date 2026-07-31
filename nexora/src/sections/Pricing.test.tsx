import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Pricing } from "./Pricing";

describe("Pricing", () => {
  it("changes every numeric plan with one annual billing switch", async () => {
    const user = userEvent.setup();
    render(<Pricing />);

    const billingSwitch = screen.getByRole("switch", { name: "Use annual billing" });
    expect(billingSwitch).toHaveAttribute("aria-checked", "false");
    expect(screen.getByText("$39")).toBeInTheDocument();
    expect(screen.getByText("Free")).toBeInTheDocument();
    expect(screen.getByText("Custom")).toBeInTheDocument();

    await user.click(billingSwitch);

    expect(billingSwitch).toHaveAttribute("aria-checked", "true");
    expect(await screen.findByText("$32")).toBeInTheDocument();
    expect(screen.getByText("Free")).toBeInTheDocument();
    expect(screen.getByText("Custom")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { WhyNexora } from "./WhyNexora";

describe("Why NEXORA rail", () => {
  it("exposes non-wrapping rail controls and position state", async () => {
    const user = userEvent.setup();
    render(<WhyNexora />);
    const previous = screen.getByRole("button", {
      name: /previous reason/i,
    });
    const next = screen.getByRole("button", { name: /next reason/i });

    expect(previous).toBeDisabled();
    expect(screen.getByText("01 / 05")).toBeInTheDocument();
    await user.click(next);
    expect(previous).not.toBeDisabled();
    expect(screen.getByText("02 / 05")).toBeInTheDocument();
  });
});

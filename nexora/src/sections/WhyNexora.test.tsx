import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { WhyNexora } from "./WhyNexora";

describe("Why NEXORA rail", () => {
  it("moves between product-proof cards without wrapping", async () => {
    const user = userEvent.setup();
    render(<WhyNexora />);
    const previous = screen.getByRole("button", {
      name: /previous reason/i,
    });
    const next = screen.getByRole("button", { name: /next reason/i });

    expect(previous).toBeDisabled();
    expect(screen.getByText("Connected memory")).toBeInTheDocument();
    expect(screen.getByText("3 connected sources")).toBeInTheDocument();
    expect(screen.getByText("01 / 05")).toBeInTheDocument();
    await user.click(next);
    expect(previous).not.toBeDisabled();
    expect(screen.getByText("02 / 05")).toBeInTheDocument();
    expect(screen.getByText("Evidence inline")).toBeInTheDocument();
    expect(screen.getByText("Verified answer")).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Capabilities } from "./Capabilities";

describe("Capabilities", () => {
  it("changes product views from tabs and keyboard arrows", async () => {
    const user = userEvent.setup();
    render(<Capabilities />);

    expect(screen.getByRole("tab", { name: "Ask" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    await user.click(screen.getByRole("tab", { name: "Execute" }));
    expect(await screen.findByText("Approval required", {}, { timeout: 1500 })).toBeInTheDocument();

    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: "Measure" })).toHaveFocus();
  });

  it("cycles views from the chevron controls", async () => {
    const user = userEvent.setup();
    render(<Capabilities />);
    await user.click(
      screen.getByRole("button", { name: /show next capability/i }),
    );
    expect(screen.getByRole("tab", { name: "Verify" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Capabilities } from "./Capabilities";

describe("Capabilities", () => {
  it("changes product views from tabs and keyboard arrows", async () => {
    const user = userEvent.setup();
    render(<Capabilities />);

    expect(screen.getByRole("tab", { name: "Detect" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    await user.click(screen.getByRole("tab", { name: "Coordinate" }));
    expect(
      await screen.findByText("Response plan", {}, { timeout: 1500 }),
    ).toBeInTheDocument();

    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: "Learn" })).toHaveFocus();
  });

  it("cycles views from the chevron controls", async () => {
    const user = userEvent.setup();
    render(<Capabilities />);
    await user.click(
      screen.getByRole("button", { name: /show next capability/i }),
    );
    expect(screen.getByRole("tab", { name: "Explain" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });
});

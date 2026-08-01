import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SystemsIndex } from "./SystemsIndex";

describe("SystemsIndex", () => {
  it("activates only the directly hovered source-to-output route", async () => {
    const user = userEvent.setup();
    render(<SystemsIndex />);

    const row = screen.getByRole("button", { name: /docs to verified answer/i });
    expect(row).toHaveAttribute("data-active", "false");

    await user.hover(row);
    expect(row).toHaveAttribute("data-active", "true");
    await user.unhover(row);
    expect(row).toHaveAttribute("data-active", "false");
  });
});

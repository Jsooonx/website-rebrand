import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "./Header";

describe("Header", () => {
  it("uses dossier navigation labels and a compact live-case action", () => {
    render(<Header />);

    expect(screen.getByRole("link", { name: "Workflow" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Open case" })).toBeInTheDocument();
  });

  it("opens and closes the mobile navigation accessibly", async () => {
    const user = userEvent.setup();
    render(<Header />);
    const toggle = screen.getByRole("button", { name: /open navigation/i });

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    await waitFor(() => expect(screen.getByRole("navigation", { name: /mobile/i })).toBeVisible());

    await user.keyboard("{Escape}");
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});

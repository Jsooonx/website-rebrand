import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ScenarioStories } from "./ScenarioStories";

describe("ScenarioStories", () => {
  it("keeps workflow snapshots in a stable slider with accessible controls", async () => {
    const user = userEvent.setup();
    render(<ScenarioStories />);

    expect(screen.getByText(/^workflow snapshot$/i)).toBeVisible();
    const portrait = screen.getByRole("img", { name: /account lead portrait/i });
    expect(portrait).toHaveAttribute("src", "/images/scenario-lead.png");
    expect(screen.getByText(/story 1 of 3/i)).toBeVisible();

    await user.click(screen.getByRole("button", { name: /next scenario/i }));
    expect(screen.getByText(/story 2 of 3/i)).toBeVisible();
    expect(screen.getByRole("heading", { name: "Support operator" })).toBeVisible();
    expect(screen.getByRole("img", { name: /support operator portrait/i })).toHaveAttribute("src", "/images/scenario-support.png");
  });
});

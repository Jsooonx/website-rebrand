import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { WorkflowChapters } from "./WorkflowChapters";

describe("WorkflowChapters", () => {
  it("moves the visible case state to the selected chapter", async () => {
    const user = userEvent.setup();
    render(<WorkflowChapters />);

    await user.click(screen.getByRole("button", { name: /act/i }));

    expect(screen.getByRole("button", { name: /act/i })).toHaveAttribute("aria-current", "step");
    expect(document.querySelector(".workflow-chapter--act")).toHaveClass("is-active");
  });
});

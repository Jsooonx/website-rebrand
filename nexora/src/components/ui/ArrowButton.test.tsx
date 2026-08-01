import { render, screen } from "@testing-library/react";
import { ArrowButton } from "./ArrowButton";

describe("ArrowButton", () => {
  it("keeps one accessible label while rendering a second label for the hover roll", () => {
    const { container } = render(<ArrowButton href="#briefing">Get started</ArrowButton>);

    expect(screen.getByRole("link", { name: "Get started" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Get started" })).toHaveClass("arrow-button--cta");
    expect(container.querySelectorAll(".pill-action__label > span")).toHaveLength(2);
    expect(container.querySelector(".pill-action__label > span:nth-child(2)"))
      .toHaveAttribute("aria-hidden", "true");
    expect(container.querySelectorAll(".pill-action__arrow")).toHaveLength(2);
  });
});

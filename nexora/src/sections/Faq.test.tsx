import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Faq } from "./Faq";

describe("Faq", () => {
  it("keeps one answer open and resets to the first item after changing category", async () => {
    const user = userEvent.setup();
    render(<Faq />);

    const firstQuestion = screen.getByRole("button", {
      name: "What is NEXORA and how does it work?",
    });
    const secondQuestion = screen.getByRole("button", {
      name: "How long does it take to set up?",
    });

    expect(firstQuestion).toHaveAttribute("aria-expanded", "true");
    expect(secondQuestion).toHaveAttribute("aria-expanded", "false");

    await user.click(secondQuestion);

    expect(firstQuestion).toHaveAttribute("aria-expanded", "false");
    expect(secondQuestion).toHaveAttribute("aria-expanded", "true");

    await user.click(
      screen.getByRole("tab", { name: "AI & capabilities" }),
    );

    expect(
      screen.getByRole("button", { name: "How does NEXORA verify answers?" }),
    ).toHaveAttribute("aria-expanded", "true");
  });
});

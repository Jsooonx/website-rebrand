import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Faq } from "./Faq";

describe("Faq", () => {
  it("shows one field-notes index whose answers can be opened and closed", async () => {
    const user = userEvent.setup();
    render(<Faq />);

    const firstQuestion = screen.getByRole("button", { name: "What is Nexora?" });
    const secondQuestion = screen.getByRole("button", { name: /how does Nexora validate/i });

    expect(firstQuestion).toHaveAttribute("aria-expanded", "true");
    expect(secondQuestion).toHaveAttribute("aria-expanded", "false");

    await user.click(secondQuestion);

    expect(firstQuestion).toHaveAttribute("aria-expanded", "false");
    expect(secondQuestion).toHaveAttribute("aria-expanded", "true");

    await user.click(secondQuestion);

    expect(secondQuestion).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByText(/keep moving/i)).toBeInTheDocument();
    expect(screen.queryByRole("tablist", { name: "FAQ categories" })).not.toBeInTheDocument();

  });
});

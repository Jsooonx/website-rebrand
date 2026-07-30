import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Testimonials } from "./Testimonials";

describe("Testimonials", () => {
  it("changes stories only after the reader uses the controls", async () => {
    const user = userEvent.setup();
    render(<Testimonials />);

    expect(screen.getByText("Asha Raman")).toBeInTheDocument();
    expect(screen.getByText("Story 1 of 3")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Show Tomas Wren's story" }));

    expect(await screen.findByText("Tomas Wren")).toBeInTheDocument();
    expect(screen.getByText("Story 2 of 3")).toBeInTheDocument();
  });
});

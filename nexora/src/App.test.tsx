import { render, screen } from "@testing-library/react";
import App from "./App";

describe("NEXORA application shell", () => {
  it("renders the operational dossier sequence instead of the legacy testimonial page", () => {
    render(<App />);

    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Live case" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /collect/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /three situations/i })).toBeInTheDocument();
    expect(screen.getByText(/operating paths/i)).toBeInTheDocument();
    expect(screen.getByText(/^workflow snapshot$/i)).toBeInTheDocument();
    expect(screen.queryByText(/pricing plans/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/testimonials/i)).not.toBeInTheDocument();
  });
});

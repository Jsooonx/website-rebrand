import { render, screen } from "@testing-library/react";
import { WorkspaceShell } from "./WorkspaceShell";

describe("WorkspaceShell", () => {
  it("renders a verifiable answer with its connected sources", () => {
    render(<WorkspaceShell mode="verify" />);

    expect(screen.getByRole("heading", { name: "Verify" })).toBeInTheDocument();
    expect(screen.getByText("Sources connected")).toBeInTheDocument();
    expect(screen.getByText("CRM")).toBeInTheDocument();
  });
});

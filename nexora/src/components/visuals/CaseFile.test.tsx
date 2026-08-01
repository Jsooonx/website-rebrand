import { render, screen } from "@testing-library/react";
import { CaseFile } from "./CaseFile";

describe("CaseFile", () => {
  it("exposes the verified conclusion when the case is validating", () => {
    render(<CaseFile stage="validate" />);

    expect(screen.getByRole("heading", { name: /verified conclusion/i })).toBeVisible();
    expect(screen.getByText(/acme can renew/i)).toBeVisible();
  });

  it("exposes an action destination when the case is ready to act", () => {
    render(<CaseFile stage="act" />);

    expect(screen.getByRole("heading", { name: /action destination/i })).toBeVisible();
    expect(screen.getByText(/jordan lee/i)).toBeVisible();
  });

  it("shows a workspace overview alongside the active case", () => {
    render(<CaseFile stage="collect" />);
    expect(screen.getByLabelText(/nexora workspace overview/i)).toBeInTheDocument();
    expect(screen.getByText("Open threads")).toBeInTheDocument();
  });
});

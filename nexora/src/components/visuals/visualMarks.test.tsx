import { render, screen } from "@testing-library/react";
import { BrandMark } from "../ui/BrandMark";
import { CompanyMark } from "./CompanyMark";
import { IntegrationMark } from "./IntegrationMark";

describe("original NEXORA visual marks", () => {
  it("renders an accessible brand mark and decorative ecosystem marks", () => {
    const { container } = render(
      <>
        <BrandMark variant="full" />
        <IntegrationMark index={2} />
        <CompanyMark company="Northline Supply" />
      </>,
    );

    expect(screen.getByLabelText("NEXORA")).toBeInTheDocument();
    expect(container.querySelectorAll("svg")).toHaveLength(3);
  });
});

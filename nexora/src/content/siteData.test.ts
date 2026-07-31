import {
  faqGroups,
  plans,
  testimonials,
  workspaceModes,
} from "./siteData";

function expectUniqueIds(items: readonly { id: string }[]) {
  expect(new Set(items.map((item) => item.id)).size).toBe(items.length);
}

describe("NEXORA content model", () => {
  it("contains the approved section content with unique identities", () => {
    expect(workspaceModes).toHaveLength(4);
    expect(plans).toHaveLength(3);
    expect(faqGroups).toHaveLength(3);
    expect(testimonials).toHaveLength(3);

    [
      workspaceModes,
      plans,
      faqGroups,
      testimonials,
    ].forEach(expectUniqueIds);
  });

  it("uses the approved capability sequence", () => {
    expect(workspaceModes.map((tab) => tab.label)).toEqual([
      "Ask",
      "Verify",
      "Execute",
      "Measure",
    ]);
  });
});

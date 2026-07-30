import {
  capabilityTabs,
  faqGroups,
  plans,
  testimonials,
  whyCards,
} from "./siteData";

function expectUniqueIds(items: readonly { id: string }[]) {
  expect(new Set(items.map((item) => item.id)).size).toBe(items.length);
}

describe("NEXORA content model", () => {
  it("contains the approved section content with unique identities", () => {
    expect(capabilityTabs).toHaveLength(4);
    expect(whyCards).toHaveLength(5);
    expect(plans).toHaveLength(3);
    expect(faqGroups).toHaveLength(3);
    expect(testimonials).toHaveLength(3);

    [
      capabilityTabs,
      whyCards,
      plans,
      faqGroups,
      testimonials,
    ].forEach(expectUniqueIds);
  });

  it("uses the approved capability sequence", () => {
    expect(capabilityTabs.map((tab) => tab.label)).toEqual([
      "Detect",
      "Explain",
      "Coordinate",
      "Learn",
    ]);
  });
});

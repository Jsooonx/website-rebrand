import {
  adoptionPaths,
  caseFile,
  fieldNotes,
  practiceScenarios,
  scenarioStories,
  systemRows,
  workflowChapters,
} from "./siteData";

function expectUniqueIds(items: readonly { id: string }[]) {
  expect(new Set(items.map((item) => item.id)).size).toBe(items.length);
}

describe("Nexora operational dossier content", () => {
  it("models one case from evidence through an accountable action", () => {
    expect(caseFile.sources).toHaveLength(3);
    expect(caseFile.conclusion).toMatch(/verified/i);
    expect(caseFile.action).toMatch(/owner/i);

    expect(workflowChapters.map((chapter) => chapter.id)).toEqual([
      "collect",
      "validate",
      "act",
    ]);
  });

  it("provides unique fictional records for each dossier section", () => {
    [
      practiceScenarios,
      systemRows,
      adoptionPaths,
      fieldNotes,
      scenarioStories,
    ].forEach(expectUniqueIds);

    expect(adoptionPaths.map((path) => path.name)).toEqual([
      "Explore",
      "Coordinate",
      "Govern",
    ]);
  });
});

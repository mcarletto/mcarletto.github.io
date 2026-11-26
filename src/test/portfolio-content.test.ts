import { describe, expect, it } from "vitest";

import { profile, projects } from "@/content/portfolio";

describe("Portfolio identity", () => {
  it("uses the public-facing name Maria Carletto", () => {
    expect(profile.name).toBe("Maria Carletto");
  });

  it("presents medicine as background rather than a professional headline", () => {
    expect(profile.bio[0]).toContain("My background is in medicine");
    expect(profile).not.toHaveProperty("title");
  });
});

describe("Bus-driver scheduling project", () => {
  const project = projects.find((p) => p.slug === "bus-driver-scheduling");

  it("states the corridor study's real figures instead of placeholders", () => {
    if (!project) throw new Error("bus-driver-scheduling project is missing");

    expect(project.placeholder).toBeUndefined();
    expect(project.results).not.toMatch(/placeholder/i);
    expect(project.limitations).not.toMatch(/placeholder/i);
    expect(project.results).toContain("679");
    expect(project.results).toContain("348");
    expect(project.metrics.map((m) => m.label)).toContain("Scheduled departures");
  });
});

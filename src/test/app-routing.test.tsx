import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import App from "@/App";

describe("Portfolio navigation", () => {
  it("renders the six portfolio sections and their navigation links", () => {
    vi.stubGlobal("IntersectionObserver", class { observe() {} disconnect() {} });
    try {
      render(<App />);
      for (const id of ["about", "research", "projects", "work", "cv", "contact"]) {
        expect(document.getElementById(id)).not.toBeNull();
        expect(screen.getByRole("navigation", { name: "Primary" }).querySelector(`a[href="#${id}"]`)).not.toBeNull();
      }
    } finally { vi.unstubAllGlobals(); }
  });
});

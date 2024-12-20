import { describe, expect, it } from "@jest/globals";

import { getVisibilityClass } from "@/shared/utils/get-visibility-class";

describe("getVisibilityClass", () => {
  it("should return the correct class name for the dark theme", () => {
    expect(getVisibilityClass("dark")).toBe("hidden dark:block");
  });

  it("should return the correct class name for the light theme", () => {
    expect(getVisibilityClass("light")).toBe("dark:hidden");
  });
});

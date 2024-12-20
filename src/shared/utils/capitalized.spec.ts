import { describe, expect, it } from "@jest/globals";

import { capitalized } from "@/shared/utils/capitalized";

describe("capitalized", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalized("hello")).toBe("Hello");
  });
});

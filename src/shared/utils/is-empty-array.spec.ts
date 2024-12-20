import { describe, expect, it } from "@jest/globals";

import { isEmptyArray } from "@/shared/utils/is-empty-array";

describe("isEmptyArray", () => {
  it("should return true if the array is empty", () => {
    expect(isEmptyArray([])).toBe(true);
  });

  it("should return false if the array is not empty", () => {
    expect(isEmptyArray([1])).toBe(false);
  });
});

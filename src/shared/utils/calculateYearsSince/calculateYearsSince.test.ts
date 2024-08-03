import { calculateYearsSince } from "@/shared/utils";
import { describe, expect, it } from "@jest/globals";

describe("calculateYearsSince.ts", () => {
  it("should return 3 year", () => {
    expect(calculateYearsSince("10.09.2020 00:00")).toBe(3);
  });

  it("should return error", () => {
    expect(calculateYearsSince("10.09.2020 00:00")).not.toBe(4);
  })
});
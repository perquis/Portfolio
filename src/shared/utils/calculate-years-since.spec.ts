import { describe, expect, it } from "@jest/globals";

import { calculateYearsSince } from "@/shared/utils";

describe("calculateYearsSince", () => {
  it("should return 4 year", () => {
    expect(calculateYearsSince("10.09.2020 00:00")).toBe(4);
  });
});

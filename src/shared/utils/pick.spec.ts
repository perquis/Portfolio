import { describe, expect, it } from "@jest/globals";

import { pick } from "@/shared/utils/pick";

describe("pick", () => {
  it("should return a new object with the specified keys", () => {
    expect(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])).toEqual({ a: 1, c: 3 });
  });
});

import { describe, expect, it } from "@jest/globals";

import { omit } from "@/shared/utils/omit";

describe("omit", () => {
  it("should return a new object without the specified keys", () => {
    expect(omit({ a: 1, b: 2, c: 3 }, ["a", "c"])).toEqual({ b: 2 });
  });
});

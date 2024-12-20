import { describe, expect, it } from "@jest/globals";

import { getQueryParams } from "@/shared/utils/get-query-params";

describe("getQueryParams", () => {
  it("should return the correct query params", () => {
    expect(
      getQueryParams({
        key: "value",
        key2: null,
      }),
    ).toBe("key=value");
  });

  it("should return an empty string if there are no query params", () => {
    expect(getQueryParams({})).toBe("");
  });

  it("should return an empty string if all query params are null", () => {
    expect(
      getQueryParams({
        key: null,
        key2: null,
      }),
    ).toBe("");
  });
});

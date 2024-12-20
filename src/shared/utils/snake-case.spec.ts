import { describe, expect, it } from "@jest/globals";

import { snake_case } from "@/shared/utils/snake-case";

describe("snake_case", () => {
  it("should convert camelCase to snake_case", () => {
    expect(snake_case("camelCase")).toBe("camel_case");
  });
});

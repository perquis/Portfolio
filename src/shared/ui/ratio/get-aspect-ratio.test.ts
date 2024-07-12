import { describe, expect, it } from "@jest/globals";

import { getAspectRatio } from "@/shared/ui/ratio/get-aspect-ratio";

describe("getAspectRatio", () => {
  it("should return 1 / 1", () => {
    const result = getAspectRatio("1:1");
    expect(result).toEqual({ aspectRatio: "1 / 1" });
  });
});

import { describe, expect, it } from "@jest/globals";
import { renderHook } from "@testing-library/react";

import usePlatform from "./use-platform";

describe("use-platform", () => {
  it("should return null when the platform is not known", () => {
    const { platform } = renderHook(() => usePlatform()).result.current;

    expect(platform).toBeNull();
  });

  it("should return 'android' when the platform is Android", () => {
    jest.spyOn(window.navigator, "userAgent", "get").mockReturnValue("Android");
    const { platform } = renderHook(() => usePlatform()).result.current;

    expect(platform).toBe("Android");
  });
});

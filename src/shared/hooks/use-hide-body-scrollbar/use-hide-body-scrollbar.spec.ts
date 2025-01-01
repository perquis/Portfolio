import { describe, expect, it } from "@jest/globals";
import { renderHook } from "@testing-library/react";

import useHideBodyScrollbar from "./use-hide-body-scrollbar";

describe("use-hide-body-scrollbar", () => {
  it("should hide the body scrollbar", () => {
    renderHook(() => useHideBodyScrollbar(true));
    expect(document.body.style.overflow).toBe("hidden");
  });

  it("should show the body scrollbar", () => {
    renderHook(() => useHideBodyScrollbar(false));
    expect(document.body.style.overflow).toBe("auto");
  });
});

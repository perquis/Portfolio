import { describe, expect, it } from "@jest/globals";
import { renderHook } from "@testing-library/react";

import useMounted from "./use-mounted";

describe("use-mounted", () => {
  it("should return true when the component is mounted", () => {
    const { result } = renderHook(() => useMounted());

    expect(result.current).toBe(true);
  });
});

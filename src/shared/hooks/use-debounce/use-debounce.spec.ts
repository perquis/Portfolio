import { describe, expect, it } from "@jest/globals";
import { renderHook } from "@testing-library/react";

import useDebounce from "./use-debounce";

describe("use-debounce", () => {
  it("should execute the delayed function after the specified time", () => {
    const delayedFn = jest.fn();
    jest.useFakeTimers();

    renderHook(() => useDebounce(delayedFn));

    expect(delayedFn).not.toHaveBeenCalled();
    jest.advanceTimersByTime(500);
    expect(delayedFn).toHaveBeenCalledTimes(1);

    jest.useRealTimers();
  });
});

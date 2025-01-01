import { describe, expect, it } from "@jest/globals";
import { renderHook } from "@testing-library/react";
import { act } from "react";

import useOpen from "./use-open";

describe("use-open", () => {
  it("should open the hook", () => {
    const { result } = renderHook(() => useOpen());
    const [, [open]] = result.current;

    act(() => {
      open();
    });

    expect(result.current[0]).toBe(true);
  });

  it("should toggle the hook", () => {
    const { result } = renderHook(() => useOpen());
    const [, [, , toggle]] = result.current;

    act(() => {
      toggle();
    });

    expect(result.current[0]).toBe(true);

    act(() => {
      toggle();
    });

    expect(result.current[0]).toBe(false);
  });

  it("should close the hook", () => {
    const { result } = renderHook(() => useOpen());
    const [, [open, close]] = result.current;

    act(() => {
      open();
    });
    expect(result.current[0]).toBe(true);

    act(() => {
      close();
    });
    expect(result.current[0]).toBe(false);
  });

  it("should toggle the hook with a custom value", () => {
    const { result } = renderHook(() => useOpen(true));
    const [, [, , toggle]] = result.current;

    act(() => {
      toggle();
    });

    expect(result.current[0]).toBe(false);
  });
});

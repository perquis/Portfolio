import { describe, expect, it } from "@jest/globals";
import { fireEvent, renderHook } from "@testing-library/react";

import useKey from "./use-key";

describe("use-key", () => {
  it("should call the callback when the key is pressed", () => {
    const callback = jest.fn();

    renderHook(() => useKey("a", callback));
    fireEvent.keyDown(document.body, { key: "a" });

    expect(callback).toHaveBeenCalled();
  });

  it("should not call the callback when the key is not pressed", () => {
    const callback = jest.fn();

    renderHook(() => useKey("a", callback));
    fireEvent.keyDown(document.body, { key: "b" });

    expect(callback).not.toHaveBeenCalled();
  });

  it("should call the callback when the key is pressed with special keys", () => {
    const callback = jest.fn();

    renderHook(() => useKey("Enter", callback, "shiftKey"));
    fireEvent.keyDown(document.body, { key: "Enter", shiftKey: true });

    expect(callback).toHaveBeenCalled();
  });
});

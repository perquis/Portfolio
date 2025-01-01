import { describe, expect, it } from "@jest/globals";
import { fireEvent, render, renderHook } from "@testing-library/react";
import { useRef } from "react";

import useOutsideOnClick from "@/shared/hooks/use-outside-onclick/use-outside-onclick";

describe("use-outside-onclick", () => {
  it("should return false if the target is inside div", () => {
    const close = jest.fn();

    const { result } = renderHook(() => useRef<HTMLDivElement>(null));

    const { getByText } = render(
      <section>
        <div ref={result.current}>
          <button>Button</button>
          <a href="#">Link</a>
          <img src="#" alt="Image" />
        </div>
      </section>,
    );

    renderHook(() => useOutsideOnClick(result.current, close));

    fireEvent.click(getByText("Button"));

    expect(close).not.toHaveBeenCalled();
    expect(result.current.current).not.toBeNull();
    expect(result.current.current).toBeInstanceOf(HTMLDivElement);
  });

  it("should return true if the target is outside div", () => {
    const close = jest.fn();

    const { result } = renderHook(() => useRef<HTMLDivElement>(null));

    const { getByTestId } = render(
      <section data-testid="outside">
        <div ref={result.current}>
          <button>Button</button>
          <a href="#">Link</a>
          <img src="#" alt="Image" />
        </div>
      </section>,
    );

    renderHook(() => useOutsideOnClick(result.current, close));

    fireEvent.click(getByTestId("outside"));

    expect(close).toHaveBeenCalled();
    expect(result.current.current).not.toBeNull();
    expect(result.current.current).toBeInstanceOf(HTMLDivElement);
  });
});

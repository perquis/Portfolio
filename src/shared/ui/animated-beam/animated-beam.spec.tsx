import { expect, it } from "@jest/globals";
import { renderHook } from "@testing-library/react";
import { useRef } from "react";
import renderer from "react-test-renderer";

import AnimatedBeam from "./animated-beam";

describe("AnimatedBeam", () => {
  it("renders correctly", () => {
    const containerRef = renderHook(() => useRef<HTMLDivElement | null>(null)).result.current,
      fromRef = renderHook(() => useRef<HTMLDivElement | null>(null)).result.current,
      toRef = renderHook(() => useRef<HTMLDivElement | null>(null)).result.current;

    const tree = renderer.create(<AnimatedBeam containerRef={containerRef} fromRef={fromRef} toRef={toRef} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

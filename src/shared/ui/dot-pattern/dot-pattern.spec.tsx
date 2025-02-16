import { expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

import DotPattern from "./dot-pattern";

describe("AnimatedGradientText", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<DotPattern />);
    expect(asFragment()).toMatchSnapshot();
  });
});

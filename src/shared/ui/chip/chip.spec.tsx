import { expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

import Chip from "./chip";

describe("Chip", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Chip />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly with isActive set to true", () => {
    const { asFragment } = render(<Chip isActive />);
    expect(asFragment()).toMatchSnapshot();
  });
});

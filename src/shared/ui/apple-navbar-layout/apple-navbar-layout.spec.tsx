import { expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

import AppleNavbarLayout from "./apple-navbar-layout";

describe("AppleNavbarLayout", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<AppleNavbarLayout />);
    expect(asFragment()).toMatchSnapshot();
  });
});

import { expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

import Container from "./container";

describe("Container", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Container />);
    expect(asFragment()).toMatchSnapshot();
  });
});

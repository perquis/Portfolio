import { expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

import Checkbox from "./checkbox";

describe("Checkbox", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Checkbox />);
    expect(asFragment()).toMatchSnapshot();
  });
});

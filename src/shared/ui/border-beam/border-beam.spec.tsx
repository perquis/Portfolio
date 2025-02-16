import { expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

import BorderBeam from "./border-beam";

describe("BorderBeam", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<BorderBeam />);
    expect(asFragment()).toMatchSnapshot();
  });
});

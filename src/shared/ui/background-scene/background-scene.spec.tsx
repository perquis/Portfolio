import { expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

import BackgroundScene from "./background-scene";

jest.mock("../../ui", () => ({
  DotPattern: () => <svg id="dot-pattern" />,
}));

describe("BackgroundScene", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<BackgroundScene />);
    expect(asFragment()).toMatchSnapshot();
  });
});

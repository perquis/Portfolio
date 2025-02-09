import { expect, it } from "@jest/globals";
import renderer from "react-test-renderer";

import BackgroundScene from "./background-scene";

jest.mock("../../ui", () => ({
  DotPattern: () => <svg id="dot-pattern" />,
}));

describe("BackgroundScene", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<BackgroundScene />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

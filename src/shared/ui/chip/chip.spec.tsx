import { expect, it } from "@jest/globals";
import renderer from "react-test-renderer";

import Chip from "./chip";

describe("Chip", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Chip />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with isActive set to true", () => {
    const tree = renderer.create(<Chip isActive />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

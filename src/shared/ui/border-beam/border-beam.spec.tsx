import { expect, it } from "@jest/globals";
import renderer from "react-test-renderer";

import BorderBeam from "./border-beam";

describe("BorderBeam", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<BorderBeam />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

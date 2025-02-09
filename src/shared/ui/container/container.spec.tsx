import { expect, it } from "@jest/globals";
import renderer from "react-test-renderer";

import Container from "./container";

describe("Container", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Container />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

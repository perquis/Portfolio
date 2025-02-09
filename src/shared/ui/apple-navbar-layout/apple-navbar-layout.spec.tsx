import { expect, it } from "@jest/globals";
import renderer from "react-test-renderer";

import AppleNavbarLayout from "./apple-navbar-layout";

describe("AppleNavbarLayout", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<AppleNavbarLayout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

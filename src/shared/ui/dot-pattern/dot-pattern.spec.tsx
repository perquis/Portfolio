import { expect, it } from "@jest/globals";
import renderer from "react-test-renderer";

import DotPattern from "./dot-pattern";

describe("AnimatedGradientText", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<DotPattern />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

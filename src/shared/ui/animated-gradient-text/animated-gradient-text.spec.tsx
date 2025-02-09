import { expect, it } from "@jest/globals";
import renderer from "react-test-renderer";

import AnimatedGradientText from "./animated-gradient-text";

describe("AnimatedGradientText", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<AnimatedGradientText>children</AnimatedGradientText>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

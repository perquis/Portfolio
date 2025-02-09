import { expect, it } from "@jest/globals";
import renderer from "react-test-renderer";

import AnimatedShinyText from "./animated-shiny-text";

describe("AnimatedShinyText", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<AnimatedShinyText>children</AnimatedShinyText>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

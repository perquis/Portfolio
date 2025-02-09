import { expect, it } from "@jest/globals";
import renderer from "react-test-renderer";

import Divider from "./divider";

jest.mock("../../hooks", () => ({
  useEventCallback: jest.fn(),
}));

describe("Divider", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Divider />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

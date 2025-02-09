import { expect, it } from "@jest/globals";
import renderer from "react-test-renderer";

import ArrowLink from "./arrow-link";

jest.mock("next-intl/navigation", () => ({
  createSharedPathnamesNavigation: () => ({
    Link: "a",
  }),
}));

describe("ArrowLink", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ArrowLink href="http://example.com" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

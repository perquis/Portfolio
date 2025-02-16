import { expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

import ArrowLink from "./arrow-link";

jest.mock("next-intl/navigation", () => ({
  createSharedPathnamesNavigation: () => ({
    Link: "a",
  }),
}));

describe("ArrowLink", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<ArrowLink href="http://example.com" />);
    expect(asFragment()).toMatchSnapshot();
  });
});

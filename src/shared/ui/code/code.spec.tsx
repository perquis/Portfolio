import { expect } from "@jest/globals";
import { render } from "@testing-library/react";

import Code from "./code";

jest.mock("../../packages", () => ({
  highlightCode: jest.fn().mockReturnValue(
    Promise.resolve([
      {
        __html: "Sample code",
        theme: "light",
      },
    ]),
  ),
}));

jest.mock("../../utils", () => ({
  getVisibilityClass: jest.fn().mockReturnValue("light"),
}));

jest.mock("../../ui", () => ({
  CopyToClipboard: () => <div></div>,
}));

describe("Code", () => {
  it("should render correctly", () => {
    const { asFragment } = render(<Code code="Sample code" />);
    expect(asFragment()).toMatchSnapshot();
  });
});

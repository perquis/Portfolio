import { expect } from "@jest/globals";
import { render } from "@testing-library/react";

import { CodeWrapper } from "./ui-code-wrapper";

jest.mock("../../ui", () => ({
  CopyToClipboard: () => <div></div>,
  Section: () => <section></section>,
  SegmentedControl: () => <div></div>,
}));

jest.mock("./provider-code-block", () => ({
  useCode: jest.fn().mockReturnValue({
    selected: "selected",
    setSelected: jest.fn(),
  }),
}));

jest.mock("../../utils", () => ({
  getVisibilityClass: jest.fn(),
}));

describe("CodeWrapper", () => {
  it("should render correctly", () => {
    const { asFragment } = render(<CodeWrapper controls={[]} snippets={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

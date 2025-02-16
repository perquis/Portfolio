import { expect } from "@jest/globals";
import { render } from "@testing-library/react";

import Dialog from "./dialog";

jest.mock("../../hooks", () => ({
  useHideBodyScrollbar: jest.fn(),
  useKey: jest.fn(),
  useOutsideOnClick: jest.fn(),
}));

jest.mock("../../ui", () => ({
  Section: () => <div></div>,
  IconButton: () => <div></div>,
}));

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  createPortal: jest.fn((element) => element),
}));

describe("Dialog", () => {
  it("should render correctly", () => {
    const { asFragment } = render(<Dialog close={jest.fn()} isOpen />);
    expect(asFragment()).toMatchSnapshot();
  });
});

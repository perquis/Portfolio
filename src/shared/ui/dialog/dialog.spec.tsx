import { expect, it } from "@jest/globals";
import type { ComponentProps } from "react";
import renderer from "react-test-renderer";

import type { Alignment } from "@/interfaces/variants";

import Dialog from "./dialog";

jest.mock("../../hooks", () => ({
  useHideBodyScrollbar: jest.fn(),
  useKey: jest.fn(),
  useOutsideOnClick: jest.fn(),
}));

jest.mock("react-dom", () => ({
  createPortal: jest.fn((element) => element),
}));

jest.mock("../../ui", () => ({
  IconButton: (props: ComponentProps<"button">) => <button {...props} />,
  Section: (props: ComponentProps<"div">) => <div {...props} />,
}));

describe("Dialog", () => {
  it.each([
    "bottom",
    "bottom-left",
    "bottom-right",
    "center",
    "left",
    "right",
    "top",
    "top-left",
    "top-right",
  ] as Alignment[])("render with alignment: %s", (alignment) => {
    const tree = renderer.create(<Dialog close={jest.fn()} isOpen={true} alignment={alignment} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import { expect } from "@jest/globals";
import renderer from "react-test-renderer";

import Accordion from "./accordion";

jest.mock("../../hooks", () => ({
  useOpen: () => [false, [false, false, () => {}]],
}));

jest.mock("../../icons/generals", () => ({
  ArrowLeft: () => <div>ArrowLeft</div>,
}));

jest.mock("../../ui", () => ({
  Paragraph: ({ children }: { children: string }) => <div>{children}</div>,
}));

describe("Accordion", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Accordion question="Question" answer="Answer" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

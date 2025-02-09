import { expect, it } from "@jest/globals";
import renderer from "react-test-renderer";

import CopyToClipboard from "./copy-to-clipboard";

jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

jest.mock("../../hooks", () => ({
  useOpen: () => [false, [jest.fn(), jest.fn()]],
}));

jest.mock("../../ui", () => ({
  Tooltip: ({ children }: { children: React.ReactNode }) => children,
}));

describe("CopyToClipboard", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<CopyToClipboard code="let isActive;" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

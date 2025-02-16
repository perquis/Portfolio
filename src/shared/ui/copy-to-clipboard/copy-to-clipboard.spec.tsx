import { expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

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
    const { asFragment } = render(<CopyToClipboard code="let isActive;" />);
    expect(asFragment()).toMatchSnapshot();
  });
});

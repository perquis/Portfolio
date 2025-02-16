import { expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import type { ComponentProps } from "react";

import CodeSandbox from "./code-sandbox";

jest.mock("next-themes", () => ({
  useTheme: () => ({ systemTheme: "dark" }),
}));

jest.mock("@codesandbox/sandpack-react", () => ({
  Sandpack: (props: ComponentProps<"div">) => <div {...props} />,
}));

describe("CodeSandbox", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<CodeSandbox />);
    expect(asFragment()).toMatchSnapshot();
  });
});

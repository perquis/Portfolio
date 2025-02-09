import { expect, it } from "@jest/globals";
import type { ComponentProps } from "react";
import renderer from "react-test-renderer";

import CodeSandbox from "./code-sandbox";

jest.mock("next-themes", () => ({
  useTheme: () => ({ systemTheme: "dark" }),
}));

jest.mock("@codesandbox/sandpack-react", () => ({
  Sandpack: (props: ComponentProps<"div">) => <div {...props} />,
}));

describe("CodeSandbox", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<CodeSandbox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import { expect, it } from "@jest/globals";
import type { PropsWithChildren } from "react";
import renderer from "react-test-renderer";

import Callout, { type ICallout } from "./callout";

jest.mock("../../ui", () => ({
  Section: ({ children }: PropsWithChildren) => <section>{children}</section>,
  Title: ({ children }: PropsWithChildren) => <h1>{children}</h1>,
}));

describe("Callout", () => {
  it.each([
    {
      title: "Info",
      variants: "info",
    },
    {
      title: "Warning",
      variants: "warning",
    },
    {
      title: "Error",
      variants: "error",
    },
    {
      title: "Success",
      variants: "success",
    },
  ] as ICallout[])("should match snapshot", (props) => {
    const tree = renderer.create(<Callout {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

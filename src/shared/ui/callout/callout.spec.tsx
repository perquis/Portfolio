import { expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import type { PropsWithChildren } from "react";

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
    const { asFragment } = render(<Callout {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

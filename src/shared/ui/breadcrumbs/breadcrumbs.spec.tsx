import { expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import type { PropsWithChildren } from "react";

import links from "../../../data/links";
import Breadcrumbs from "./breadcrumbs";

jest.mock("../../ui", () => ({
  Link: ({ children }: PropsWithChildren) => <a>{children}</a>,
  Section: ({ children }: PropsWithChildren) => <section>{children}</section>,
}));

describe("Breadcrumbs", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Breadcrumbs links={links} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with no links", () => {
    const { asFragment } = render(<Breadcrumbs links={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });
});

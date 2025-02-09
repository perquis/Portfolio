import { expect, it } from "@jest/globals";
import type { PropsWithChildren } from "react";
import renderer from "react-test-renderer";

import links from "../../../data/links";
import Breadcrumbs from "./breadcrumbs";

jest.mock("../../ui", () => ({
  Link: ({ children }: PropsWithChildren) => <a>{children}</a>,
  Section: ({ children }: PropsWithChildren) => <section>{children}</section>,
}));

describe("Breadcrumbs", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Breadcrumbs links={links} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders with no links", () => {
    const tree = renderer.create(<Breadcrumbs links={[]} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

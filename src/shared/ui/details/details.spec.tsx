import { expect, it } from "@jest/globals";
import type { ComponentProps } from "react";
import renderer from "react-test-renderer";

import Details from "./details";

jest.mock("../../ui", () => ({
  Badge: (props: ComponentProps<"span">) => <span {...props} />,
  Regular: (props: ComponentProps<"span">) => <span {...props} />,
  Section: (props: ComponentProps<"section">) => <section {...props} />,
}));

describe("Details", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Details
          items={[
            {
              content: "content",
              label: "label",
            },
          ]}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with links", () => {
    const tree = renderer
      .create(
        <Details
          items={[
            {
              content: "content",
              label: "label",
              href: "https://example.com",
              type: "link",
            },
          ]}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with badges", () => {
    const tree = renderer
      .create(
        <Details
          items={[
            {
              content: "content",
              label: "label",
              type: "badge",
            },
          ]}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

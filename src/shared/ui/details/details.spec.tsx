import { expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import type { ComponentProps } from "react";

import Details from "./details";

jest.mock("../../ui", () => ({
  Badge: (props: ComponentProps<"span">) => <span {...props} />,
  Regular: (props: ComponentProps<"span">) => <span {...props} />,
  Section: (props: ComponentProps<"section">) => <section {...props} />,
}));

describe("Details", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <Details
        items={[
          {
            content: "content",
            label: "label",
          },
        ]}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly with links", () => {
    const { asFragment } = render(
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
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly with badges", () => {
    const { asFragment } = render(
      <Details
        items={[
          {
            content: "content",
            label: "label",
            type: "badge",
          },
        ]}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

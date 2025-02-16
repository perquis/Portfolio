import { expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

import Divider from "./divider";

jest.mock("../../hooks", () => ({
  useEventCallback: jest.fn(),
}));

describe("Divider", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Divider />);
    expect(asFragment()).toMatchSnapshot();
  });
});

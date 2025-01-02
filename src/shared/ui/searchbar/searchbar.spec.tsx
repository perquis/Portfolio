import { describe, expect, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react";

import SearchBar from "./searchbar";

jest.mock("nuqs", () => ({
  useQueryState: jest.fn(() => ["", jest.fn()]),
}));

describe("SearchBar", () => {
  it("should render on the screen", () => {
    const { getByTestId } = render(<SearchBar data-testid="searchbar" />);

    expect(getByTestId("searchbar")).toBeInTheDocument();
  });

  it("should change the value of the input", () => {
    const { getByTestId } = render(<SearchBar data-testid="searchbar" />);
    const input = getByTestId("searchbar") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });
});

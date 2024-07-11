import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import { Bold } from "@/shared/ui/bold/bold";

describe("Bold component", () => {
  it("renders a bold component with text", () => {
    const txt = "Hello World!";

    render(<Bold>{txt}</Bold>);
    const title = screen.getByText(txt);

    expect(title).toBeInTheDocument();
  });
});

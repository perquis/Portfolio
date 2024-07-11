import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import { Title } from "@/shared/ui/title/title";

describe("Title component", () => {
  it("renders a title component with text", () => {
    const txt = "Hello World!";

    render(<Title level="h2">{txt}</Title>);
    const title = screen.getByText(txt);

    expect(title).toBeInTheDocument();
  });
});

import type { Meta, StoryObj } from "@storybook/react";

import { CodeSandbox } from "@/shared/ui";

const meta = {
  title: "Markdown/Actions/CodeSandbox",
  component: CodeSandbox,
  parameters: {
    docs: {
      description: {
        component:
          "This component allow you place code that it can be tested and modified by the users if they want. It's useful for tutorials and to show interesting examples in real time without the need to clone the repository.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CodeSandbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

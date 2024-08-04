import type { Meta, StoryObj } from "@storybook/react";

import { Workflows } from "@/shared/ui";

const meta = {
  title: "Markdown/List/Workflows",
  component: Workflows,
  parameters: {
    docs: {
      description: {
        component:
          "The **Workflows** component is a simple component that displays a list of items in a visually appealing way. It is often used to display a list of steps or a process.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Workflows>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        title: "Step 1",
        description: "This is the first step in the process.",
      },
      {
        title: "Step 2",
        description: "This is the second step in the process.",
      },
      {
        title: "Step 3",
        description: "This is the third step in the process.",
      },
    ],
  },
};

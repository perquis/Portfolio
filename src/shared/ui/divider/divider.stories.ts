import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "@/shared/ui";

const meta = {
  title: "Generals/Divider",
  component: Divider,
  parameters: {
    docs: {
      description: {
        component:
          "The **Divider** component is a simple component that displays a horizontal line to separate content.",
      },
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

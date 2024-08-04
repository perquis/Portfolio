import type { Meta, StoryObj } from "@storybook/react";

import { Divider } from "@/shared/ui";

const meta = {
  title: "Generals/Divider",
  component: Divider,
  parameters: {
    docs: {
      description: {
        component:
          "The **Divider** component allows you to separate content in a meaningful way. It's a simple line that can be used to divide sections of a page. So if you worry about the **separation** of the content, you can use this component.",
      },
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

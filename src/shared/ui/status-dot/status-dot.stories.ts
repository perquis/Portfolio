import type { Meta, StoryObj } from "@storybook/react";

import { StatusDot } from "@/shared/ui";

const meta = {
  title: "Generals/StatusDot",
  component: StatusDot,
  parameters: {
    docs: {
      description: {
        component:
          "The **StatusDot** component is a simple component that displays a small dot in a visually appealing way. It is often used to display a status.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: {
        type: "select",
      },
      options: ["online", "offline"],
    },
  },
} satisfies Meta<typeof StatusDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: "online",
  },
};

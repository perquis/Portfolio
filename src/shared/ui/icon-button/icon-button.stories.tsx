import type { Meta, StoryObj } from "@storybook/react";

import * as icons from "@/shared/icons";
import { IconButton } from "@/shared/ui/icon-button/icon-button";

const meta = {
  title: "Actions/IconButton",
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component:
          "The **IconButton** component is a simple component that displays an icon inside a button. It is often used to represent an action or a command.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
    icon: {
      control: {
        type: "select",
      },
      options: Object.keys(icons),
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "medium",
    icon: "ArrowRight",
  },
};

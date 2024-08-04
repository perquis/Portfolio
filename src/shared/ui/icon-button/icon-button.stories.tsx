import type { Meta, StoryObj } from "@storybook/react";

import * as icons from "@/shared/icons/design";
import { IconButton } from "@/shared/ui";

const meta = {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component:
          "The **IconButton** component is super useful when you want to **add an icon** to your button. It has a lot of **variants**, **sizes** and **icons set**. It used as user action that he can perform, it should be visible and intuitive as possible. If you want to learn **how much it has icons**, you can use **select element** in story to see all of them.",
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

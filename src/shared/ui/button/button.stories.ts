import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/shared/ui/button/button";

const meta = {
  title: "Actions/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "The **Button** component is a simple component that users can click to perform an action.",
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
    variants: {
      control: {
        type: "select",
      },
      options: ["black", "white", "indigo"],
    },
  },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "medium",
    variants: "black",
    children: "Click me",
    loading: false,
    disabled: false,
    mode: "gradient",
  },
};

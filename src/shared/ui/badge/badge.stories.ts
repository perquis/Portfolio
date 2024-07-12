import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@/shared/ui/badge/badge";

const meta = {
  title: "Text/Badge",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          "The **Badge** component is a simple component that displays a small piece of information in a visually appealing way. It is often used to display a count or a status.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: [
        "rose",
        "blue",
        "green",
        "yellow",
        "red",
        "amber",
        "orange",
        "indigo",
        "purple",
        "pink",
        "cyan",
        "teal",
        "emerald",
        "lime",
        "fuchsia",
        "violet",
        "zinc",
        "stone",
        "neutral",
        "slate",
      ],
    },
    rounded: {
      control: {
        type: "select",
      },
      options: ["default", "full"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "indigo",
    rounded: "default",
    children: "#nextjs",
  },
};

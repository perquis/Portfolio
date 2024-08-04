import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@/shared/ui";

const meta = {
  title: "Markdown/Text/Badge",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          "The **Badge** component is very useful for displaying a label. For example, if you write **any article for this project**, you can use it to show which frameworks or technologies were used.",
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
    rounded: "full",
    border: false,
    children: "#nextjs",
  },
};

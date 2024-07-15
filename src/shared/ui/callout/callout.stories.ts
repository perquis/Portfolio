import type { Meta, StoryObj } from "@storybook/react";

import { Callout } from "@/shared/ui/callout/callout";

const meta = {
  title: "Generals/Callout",
  component: Callout,
  parameters: {
    docs: {
      description: {
        component:
          "The **Callout** component is a simple component that displays a message in a visually appealing way. It is often used to display a message or a status.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variants: {
      control: {
        type: "select",
      },
      options: ["info", "warning", "error", "success"],
    },
  },
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "The title of the callout",
    content: "The description provides key information that's appropriate for the severity of the alert.",
    variants: "info",
  },
};

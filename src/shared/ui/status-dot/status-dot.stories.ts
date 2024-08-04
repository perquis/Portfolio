import type { Meta, StoryObj } from "@storybook/react";

import { StatusDot } from "@/shared/ui";

const meta = {
  title: "Shared/Other/StatusDot",
  component: StatusDot,
  parameters: {
    docs: {
      description: {
        component:
          "The **StatusDot** component is a simple dot that displays the status of a component. The `status` prop takes a string that can be either `online` or `offline`. The `className` prop is used to apply custom styles to the component.",
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

import type { Meta, StoryObj } from "@storybook/react";

import { statusActions } from "@/data";
import { Alert } from "@/shared/ui";

const meta = {
  title: "Popups/Alert",
  component: Alert,
  parameters: {
    docs: {
      description: {
        component:
          "The **Alert** component is a simple component that displays a message to the user. It is often used to provide feedback or to alert the user of a specific action.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: {
        type: "select",
      },
      options: statusActions.map((action) => action.name),
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: "info",
    content: "This message was sent successfully and will be delivered shortly.",
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { Regular } from "@/shared/ui";

const meta = {
  title: "Text/Regular",
  component: Regular,
  parameters: {
    docs: {
      description: {
        component:
          "The **Regular** component is a simple text component that applies a text-zinc-500 color and text-xs size. It is used to display regular text in the application.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof Regular>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a regular text component.",
  },
};

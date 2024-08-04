import type { Meta, StoryObj } from "@storybook/react";

import { Regular } from "@/shared/ui";

const meta = {
  title: "Text/Regular",
  component: Regular,
  parameters: {
    docs: {
      description: {
        component:
          "The **Regular** component is used to display text that it's not important when it was compared to other text. You can use it carefully, because it's not recommended to use it in **a large amount of text**.",
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

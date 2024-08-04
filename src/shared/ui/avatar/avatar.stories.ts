import type { Meta, StoryObj } from "@storybook/react";

import { placeholders } from "@/data";
import { Avatar } from "@/shared/ui";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Markdown/UI/Avatar",
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          "The **Avatar** component is the image around the around that look like **circle**. It's used to represent the **user profile picture** or anything else in this area. It has a few of variants that you can use in the markdown files.",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    rounded: {
      control: { type: "select" },
      options: ["default", "full"],
    },
    size: {
      control: { type: "select" },
      options: ["large", "medium", "small", "tiny"],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    rounded: "full",
    size: "medium",
    src: placeholders.images,
    alt: "This is an empty placeholder for the image component.",
  },
};

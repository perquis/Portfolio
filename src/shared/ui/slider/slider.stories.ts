import type { Meta, StoryObj } from "@storybook/react";

import { slides } from "@/data";
import { Slider } from "@/shared/ui";

const meta = {
  title: "Markdown/Media/Slider",
  component: Slider,
  parameters: {
    docs: {
      description: {
        component:
          "The **Slider** component is a simple component that displays a set of images in a visually appealing way. It is often used to display a set of images in a carousel.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slides,
  },
};

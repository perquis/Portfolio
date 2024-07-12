import type { Meta, StoryObj } from "@storybook/react";

import { emptyPlaceholderImage, ratios } from "@/data";
import { Ratio } from "@/shared/ui/ratio/ratio";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Ratio",
  component: Ratio,
  parameters: {
    docs: {
      description: {
        component:
          "The **Ratio** component is a wrapper around an element that maintains a fixed aspect ratio. It is useful for creating responsive elements that need to maintain a specific aspect ratio, such as images or videos. The `resolution` prop takes a string in the format `width:height`, where `width` and `height` are the aspect ratio of the element. For example, a 16:9 aspect ratio would be `16:9`. The `children` prop is the content that will be displayed inside the component. The `className` prop is used to apply custom styles to the component.",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    resolution: {
      control: { type: "select" },
      options: ratios,
    },
  },
} satisfies Meta<typeof Ratio>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    resolution: "16:9",
    src: emptyPlaceholderImage,
    alt: "This is an empty placeholder for the image component.",
  },
};

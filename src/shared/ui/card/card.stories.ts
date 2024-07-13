import type { Meta, StoryObj } from "@storybook/react";

import { placeholders } from "@/data";
import { Card } from "@/shared/ui/card/card";

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          "The **Card** component is a simple component that displays a piece of information in a visually appealing way. It is often used to display a title, a description, and an image.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
    image: {
      control: {
        type: "object",
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Card Title",
    description: "This is a description of the card. It can be used to provide more information about the card.",
    image: {
      src: placeholders.images,
      alt: "This is an image of the card.",
    },
    href: "/",
  },
};

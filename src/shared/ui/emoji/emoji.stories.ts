import type { Meta, StoryObj } from "@storybook/react";

import { emojis } from "@/data/emojis/emojis";
import { Emoji } from "@/shared/ui";

const meta = {
  title: "Buttons/Emoji",
  component: Emoji,
  parameters: {
    docs: {
      description: {
        component: "The **Emoji** component is a simple component that displays an animated emoji.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    emoji: {
      control: {
        type: "select",
      },
      options: emojis.map((e) => e.name),
    },
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
  },
} as Meta<typeof Emoji>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Smile: Story = {
  args: {
    emoji: "good",
    size: "large",
  },
};

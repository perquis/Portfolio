import type { Meta, StoryObj } from "@storybook/react";

import { emojis } from "@/data";
import { Emoji } from "@/shared/ui";

const meta = {
  title: "Buttons/Emoji",
  component: Emoji,
  parameters: {
    docs: {
      description: {
        component:
          "The **Emoji** component is a nice addon in this project. If you want to **improve user experiences** you can use it to he can express his feelings. It's used in the **Feedback** component and currently it's not provided as basic feature on the page. However, We are going to add this in the future releases, so stay tuned and wait for this update 🎉.",
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

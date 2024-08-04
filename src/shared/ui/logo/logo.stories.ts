import type { Meta, StoryObj } from "@storybook/react";

import { Logo } from "@/shared/ui";

const meta = {
  title: "Shared/Menu/Logo",
  component: Logo,
  parameters: {
    docs: {
      description: {
        component:
          "The **Logo** component is used to display a logo or brand name in a visually appealing way. It was placed in the navigation bar or footer of the website. You should know that it's not accessible for the markdown files.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

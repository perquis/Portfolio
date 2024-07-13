import type { Meta, StoryObj } from "@storybook/react";

import { Logo } from "@/shared/ui/logo/logo";

const meta = {
  title: "Generals/Logo",
  component: Logo,
  parameters: {
    docs: {
      description: {
        component:
          "The **Logo** component is used to display a logo or brand name in a visually appealing way. It can be customized with a style object to apply custom styles to the component.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

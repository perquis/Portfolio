import type { Meta, StoryObj } from "@storybook/react";

import { links } from "@/data";
import { HamburgerMenu } from "@/shared/ui";

const meta = {
  title: "Shared/Menu/HamburgerMenu",
  component: HamburgerMenu,
  parameters: {
    docs: {
      description: {
        component:
          "The **HamburgerMenu** component is a simple component that displays a hamburger menu icon. It is often used to toggle a mobile navigation menu.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HamburgerMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links,
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { Navigation } from "@/shared/ui";

const meta = {
  title: "Menu/Navigation",
  component: Navigation,
  parameters: {
    docs: {
      description: {
        component:
          "The **Navigation** component is a simple component that displays a navigation bar with links to various parts of the application.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

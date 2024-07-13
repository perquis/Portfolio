import type { Meta, StoryObj } from "@storybook/react";

import { Navigation } from "@/shared/ui/navigation/navigation";

const meta = {
  title: "Actions/Navigation",
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

export const Default: Story = {
  args: {
    links: [
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
};

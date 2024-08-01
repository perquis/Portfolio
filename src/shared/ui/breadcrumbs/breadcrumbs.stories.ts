import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumbs } from "@/shared/ui";

const meta = {
  title: "Menu/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    docs: {
      description: {
        component:
          "The **Breadcrumbs** component is a simple component that displays a list of links in a visually appealing way. It is often used to display a navigation path.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    links: {
      control: {
        type: "object",
      },
    },
  },
} as Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      {
        label: "Blog",
        href: "/blog",
      },
    ],
  },
};

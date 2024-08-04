import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumbs } from "@/shared/ui";

const meta = {
  title: "Menu/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    docs: {
      description: {
        component:
          "It is often used to display a navigation path. So if you want to provide additional navigation for the users, you can use it to show the path.",
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

import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "@/shared/ui";

const meta = {
  title: "Actions/Link",
  component: Link,
  parameters: {
    docs: {
      description: {
        component:
          "The **Link** component is a wrapper around Next.js's `Link` component. It is used to navigate between pages in a Next.js app. It accepts all the props that the Next.js `Link` component accepts.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "The text to display in the link.",
    },
    href: {
      control: "text",
      description: "The URL the link should navigate to.",
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "#",
    children: "Home",
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { SearchBar } from "@/shared/ui";

const meta = {
  title: "Shared/Form/SearchBar",
  component: SearchBar,
  parameters: {
    docs: {
      description: {
        component:
          "The **SearchBar** component is a simple input field that allows users to search for content within the application.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Search for the articles",
  },
};

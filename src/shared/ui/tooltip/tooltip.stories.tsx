import type { Meta, StoryObj } from "@storybook/react";

import { Button, Tooltip } from "@/shared/ui";

const meta = {
  title: "Overlays/Tooltip",
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    alignment: {
      control: {
        type: "select",
      },
      options: ["top", "bottom", "left", "right"],
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Click on this element to check a secret gift 🎉.",
    alignment: "top",
  },
  decorators: [
    (_Story, options) => {
      return (
        <Tooltip label={options.args.label} alignment={options.args.alignment}>
          <Button mode="simple" size="medium" variants="indigo">
            Click me
          </Button>
        </Tooltip>
      );
    },
  ],
};

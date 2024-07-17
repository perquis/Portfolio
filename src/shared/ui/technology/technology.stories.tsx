import type { Meta, StoryObj } from "@storybook/react";

import { Section, Technology } from "@/shared/ui";

const meta = {
  title: "List/Technology",
  component: Technology,
  parameters: {
    docs: {
      description: {
        component: "The **Technology** component is a simple component that displays a technology icon.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Technology>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    avatar: {
      src: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      alt: "React logo",
    },
    name: "React",
    content: "A JavaScript library for building user interfaces.",
  },
};

// @ts-ignore
export const List: Story = {
  decorators: [
    (Story) => (
      <Section className="!flex-row gap-5">
        <Technology
          avatar={{
            src: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
            alt: "React logo",
          }}
          name="React"
          content="A JavaScript library for building user interfaces."
        />
        <Technology
          avatar={{
            src: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
            alt: "Vue logo",
          }}
          name="Vue"
          content="The Progressive JavaScript Framework."
        />
      </Section>
    ),
  ],
};

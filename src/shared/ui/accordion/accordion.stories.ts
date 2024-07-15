import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "@/shared/ui";

const meta = {
  title: "Actions/Accordion",
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component:
          "The **Accordion** component is a simple component that displays a question and an answer. When the question is clicked, the answer is shown.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    question: {
      control: {
        type: "text",
      },
    },
    answer: {
      control: {
        type: "text",
      },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    question: "What technologies and tools do you use most frequently in your projects?",
    answer:
      "I primarily use HTML, CSS/SCSS, and TypeScript for building user interfaces. Additionally, I work with frameworks like Angular and React. On the backend, I utilize Node.js and Express.",
  },
};

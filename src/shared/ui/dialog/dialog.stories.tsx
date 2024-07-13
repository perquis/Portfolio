import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Button } from "@/shared/ui/button/button";
import { Dialog } from "@/shared/ui/dialog/dialog";
import { Paragraph } from "@/shared/ui/paragraph/paragraph";
import { Section } from "@/shared/ui/section/section";
import { Title } from "@/shared/ui/title/title";

const meta = {
  title: "Overlays/Dialog",
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component: "The **Dialog** component is a simple component that displays a modal dialog.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const Example = () => (
  <Section className="gap-3">
    <Section className="gap-2">
      <Title level="h6">We use cookies 🍪</Title>
      <Paragraph>
        To provide you with the best experience on our website, we use cookies. Cookies help us personalize content,
        analyze site traffic, and deliver advertisements tailored to your interests.
      </Paragraph>
    </Section>
    <Section className="!flex-row justify-end gap-2">
      <Button mode="simple" size="medium" variants="white">
        Learn more
      </Button>
      <Button mode="simple" size="medium" variants="black">
        Accept
      </Button>
    </Section>
  </Section>
);

// @ts-ignore
export const Default: Story = {
  decorators: [
    (Story) => {
      const [isOpen, setIsOpen] = useState(false);

      const open = () => setIsOpen(true);
      const close = () => setIsOpen(false);

      return (
        <>
          <Button onClick={open} mode="simple" size="medium" variants="black">
            Open Dialog
          </Button>
          <Story
            args={{
              isOpen,
              close,
              children: <Example />,
            }}
          ></Story>
        </>
      );
    },
  ],
};

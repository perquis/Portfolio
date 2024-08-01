import type { Meta, StoryObj } from "@storybook/react";

import { Button, Form, FormField, Input, Textarea } from "@/shared/ui";

const meta = {
  title: "Form/Form",
  component: Form,
  parameters: {
    docs: {
      description: {
        component:
          "The **Form** component is a simple component that wraps a form element and provides a gap between its children.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    () => (
      <Form className="items-end">
        <FormField>
          <Input placeholder="Name" />
          <Input placeholder="Email" type="email" />
        </FormField>
        <Textarea placeholder="Message" />
        <Button type="submit" mode="simple" size="medium" variants="black">
          Submit
        </Button>
      </Form>
    ),
  ],
};

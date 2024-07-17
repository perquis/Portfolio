import type { Meta, StoryObj } from "@storybook/react";

import { Form, FormField, Input } from "@/shared/ui";

const meta = {
  title: "Form/FormField",
  component: Form,
  parameters: {
    docs: {
      description: {
        component:
          "The **FormField** component is a simple component that wraps a form element and provides a gap between its children.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <Form className="items-end">
        <FormField>
          <Input placeholder="Name" />
          <Input placeholder="Email" type="email" />
        </FormField>
      </Form>
    ),
  ],
};

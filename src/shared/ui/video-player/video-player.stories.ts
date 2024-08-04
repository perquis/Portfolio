import type { Meta, StoryObj } from "@storybook/react";

import { VideoPlayer } from "@/shared/ui";

const meta: Meta<typeof VideoPlayer> = {
  title: "Markdown/Media/VideoPlayer",
  component: VideoPlayer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "This component allows you to embed a YouTube video in your content. You can pass the URL of the video as a prop.",
      },
    },
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
      description: "The URL of the YouTube video to embed",
    },
  },
};

export default meta;
type Story = StoryObj<typeof VideoPlayer>;

export const Primary: Story = {
  args: {
    src: "https://www.youtube.com/embed/PHvw0IP7dEU",
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import YoutubePlayer from "./youtube-player";

const meta: Meta<typeof YoutubePlayer> = {
  title: "Media/YoutubePlayer",
  component: YoutubePlayer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "This is a responsive YouTube player component. It maintains the aspect ratio of the video. The `src` prop is the URL of the YouTube video to embed.",
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
type Story = StoryObj<typeof YoutubePlayer>;

export const Primary: Story = {
  args: {
    src: "https://www.youtube.com/embed/PHvw0IP7dEU",
  },
};

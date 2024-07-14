import type { FC } from "react";

import { emojis } from "@/data/emojis/emojis";
import { Emoji, IconButton, Paragraph, Section, Title } from "@/shared/ui";

export const Feedback: FC = () => {
  return (
    <Section className="bg-zinc-900/90 backdrop-blur-xl rounded-full !flex-row gap-10 py-3 pl-10 pr-6 items-center justify-between w-fit fixed bottom-16 left-1/2 -translate-x-1/2">
      <Section>
        <Title level="b" className="!text-white font-medium">
          You can estimate this article
        </Title>
        <Paragraph className="!text-white/50">How was your experience?</Paragraph>
      </Section>

      <Section className="!flex-row gap-3">
        {emojis.map((emoji) => (
          <Emoji key={emoji.name} emoji={emoji.name} size="medium" />
        ))}
      </Section>

      <IconButton
        rounded="full"
        className="hover:!bg-white/5 focus-visible:!bg-white/5 focus-visible:!text-zinc-200 !text-zinc-500 hover:!text-zinc-200"
        size="medium"
        icon="Close"
      />
    </Section>
  );
};

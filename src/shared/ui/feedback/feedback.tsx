"use client";

import { AnimatePresence, motion } from "framer-motion";

import { emojis } from "@/data";
import { Emoji, IconButton, Paragraph, Section, Title } from "@/shared/ui";

interface IFeedback {
  title: string;
  isOpen: boolean;
  description: string;
  close: () => void;
}

export default function Feedback({ isOpen, close, title, description }: IFeedback) {
  return (
    <div className="w-full h-screen flex justify-center items-end pb-16 fixed top-0 left-0 pointer-events-none overflow-hidden">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
              translateY: 200,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              translateY: 0,
            }}
            exit={{
              scale: 0,
              opacity: 0,
              translateY: 200,
            }}
          >
            <Section className="bg-zinc-900/90 backdrop-blur-xl rounded-full !flex-row gap-10 py-3 pl-10 pr-6 items-center justify-between w-fit origin-center border-t-2 border-zinc-800/50 pointer-events-auto">
              <Section>
                <Title level="b" className="!text-white font-medium">
                  {title}
                </Title>
                <Paragraph className="!text-white/50">{description}</Paragraph>
              </Section>

              <Section className="!flex-row gap-3">
                {emojis.map((emoji) => (
                  <Emoji key={emoji.name} emoji={emoji.name} size="medium" />
                ))}
                <IconButton
                  rounded="full"
                  className="hover:!bg-white/5 focus-visible:!bg-white/5 focus-visible:!text-zinc-200 !text-zinc-500 hover:!text-zinc-200"
                  size="medium"
                  icon="Close"
                  onClick={close}
                />
              </Section>
            </Section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

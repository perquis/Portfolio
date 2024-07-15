import { AnimatePresence, motion } from "framer-motion";
import type { ComponentProps, FC } from "react";

import { useOpen } from "@/shared/hooks/use-open";
import { ArrowLeft } from "@/shared/icons/arrow-left";
import { Paragraph } from "@/shared/ui/paragraph/paragraph";
import { Section } from "@/shared/ui/section/section";
import { Title } from "@/shared/ui/title/title";

interface IAccordion {
  question: string;
  answer: string;
}

export const Accordion: FC<IAccordion & ComponentProps<"button">> = ({ question, answer }) => {
  const [isOpen, [, , toggle]] = useOpen();

  return (
    <motion.button
      onClick={toggle}
      className="p-4 pl-5 rounded-3xl bg-zinc-100 dark:bg-zinc-900 w-full dark:border-t-2 dark:border-zinc-800/50"
    >
      <Section>
        <Section className="relative !flex-row items-center text-zinc-800 dark:text-zinc-200">
          <Title level="b" className="text-sm font-medium !text-zinc-800 dark:!text-zinc-200">
            {question}
          </Title>
          <motion.div
            className="absolute right-0 top-0 flex items-center"
            animate={isOpen ? { rotate: -90 } : { rotate: 0 }}
          >
            <ArrowLeft width={20} height={20} />
          </motion.div>
        </Section>
        <AnimatePresence mode="sync">
          {isOpen && (
            <motion.div
              className="origin-top overflow-hidden"
              initial={{ opacity: 0, height: 0, paddingTop: 0 }}
              animate={{ opacity: 1, height: "auto", paddingTop: 8 }}
              exit={{ opacity: 0, height: 0, paddingTop: 0 }}
              // transition={{ type: "tween", duration: 0.25 }}
            >
              <Paragraph className="text-sm !text-zinc-500">{answer}</Paragraph>
            </motion.div>
          )}
        </AnimatePresence>
      </Section>
    </motion.button>
  );
};

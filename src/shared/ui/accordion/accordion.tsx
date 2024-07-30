"use client";

import { AnimatePresence } from "framer-motion";
import type { ComponentProps } from "react";

import { useOpen } from "@/shared/hooks";
import { ArrowLeft } from "@/shared/icons/design";
import { Paragraph, Section, Title, Transition } from "@/shared/ui";

type TAccordion = {
  question: string;
  answer: string;
} & ComponentProps<"button">;

export default function Accordion({ question, answer }: TAccordion) {
  const [isOpen, [, , toggle]] = useOpen();

  return (
    <Transition as="button" onClick={toggle} className="w-full rounded-3xl bg-zinc-100 p-4 pl-5 dark:bg-zinc-900">
      <Section>
        <Section className="relative !flex-row items-center text-zinc-800 dark:text-zinc-200">
          <Title level="b" className="text-sm font-medium !text-zinc-800 dark:!text-zinc-200">
            {question}
          </Title>
          <Transition
            className="absolute right-0 top-0 flex items-center"
            animate={isOpen ? { rotate: -90 } : { rotate: 0 }}
          >
            <ArrowLeft width={20} height={20} />
          </Transition>
        </Section>
        <AnimatePresence mode="sync">
          {isOpen && (
            <Transition
              className="origin-top overflow-hidden"
              initial={{ opacity: 0, height: 0, paddingTop: 0 }}
              animate={{ opacity: 1, height: "auto", paddingTop: 8 }}
              exit={{ opacity: 0, height: 0, paddingTop: 0 }}
            >
              <Paragraph className="text-sm !text-zinc-500">{answer}</Paragraph>
            </Transition>
          )}
        </AnimatePresence>
      </Section>
    </Transition>
  );
}

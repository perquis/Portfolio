"use client";

import { AnimatePresence } from "framer-motion";
import type { ComponentProps } from "react";

import { useOpen } from "@/shared/hooks";
import { ArrowLeft } from "@/shared/icons";
import { Paragraph, Section, Title, Transition } from "@/shared/ui";

type IAccordion = {
  question: string;
  answer: string;
} & ComponentProps<"button">;

export default function Accordion({ question, answer }: IAccordion) {
  const [isOpen, [, , toggle]] = useOpen();

  return (
    <Transition
      as="button"
      onClick={toggle}
      className="p-4 pl-5 rounded-3xl bg-zinc-100 dark:bg-zinc-900 w-full dark:border-t-2 dark:border-zinc-800/50"
    >
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

"use client";

import { motion } from "framer-motion";
import type { ComponentProps } from "react";

import { useOpen } from "@/shared/hooks";
import { ArrowLeft } from "@/shared/icons/generals";
import { Paragraph } from "@/shared/ui";

type TAccordion = {
  question: string;
  answer: string;
} & ComponentProps<"button">;

export default function Accordion({ question, answer }: TAccordion) {
  const [isOpen, [, , toggle]] = useOpen();
  const layoutId = question.replaceAll(" ", "-");

  return (
    <motion.button
      onClick={toggle}
      layoutId={layoutId}
      className="w-full overflow-hidden rounded-3xl border border-zinc-100 bg-white dark:border-zinc-900 dark:bg-zinc-950"
    >
      <motion.div
        layout="preserve-aspect"
        className="flex w-full items-center bg-zinc-100 p-4 pl-5 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
      >
        <motion.b
          layout="preserve-aspect"
          className="select-none text-sm font-medium !text-zinc-800 dark:!text-zinc-200"
        >
          {question}
        </motion.b>
        <motion.div
          layout="preserve-aspect"
          className="ml-auto flex items-center"
          animate={isOpen ? { rotate: -90 } : { rotate: 0 }}
        >
          <ArrowLeft width={20} height={20} />
        </motion.div>
      </motion.div>
      {isOpen && (
        <motion.div
          layout="position"
          className="!origin-top p-4 pl-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Paragraph className="text-sm !text-zinc-500">{answer}</Paragraph>
        </motion.div>
      )}
    </motion.button>
  );
}

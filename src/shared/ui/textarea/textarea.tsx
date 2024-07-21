import clsx from "clsx";
import type { ComponentProps } from "react";

import { Section, Transition } from "@/shared/ui";

type ErrorValidation = { error?: boolean; message?: string | null };
type ITextarea = ComponentProps<"textarea"> & ErrorValidation;

export default function Textarea({ className, error, message, ...props }: ITextarea) {
  return (
    <Transition
      animate={error ? { rotate: [-1, 1.3, 0], translateX: [-1, 1.3, 0] } : { rotate: 0, translateX: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      <Section className="gap-1">
        <textarea
          className={clsx(
            "text-sm py-2.5 px-3 rounded-[10px] bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 focus-visible:bg-zinc-200 dark:hover:bg-zinc-800 dark:focus-visible:bg-zinc-800 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-zinc-900 dark:text-zinc-100 w-full min-h-64",
            error && "ring-2 ring-rose-500 focus-visible:!outline-none",
            className,
          )}
          {...props}
        />
        {error && <span className="text-sm text-rose-500">{message}</span>}
      </Section>
    </Transition>
  );
}

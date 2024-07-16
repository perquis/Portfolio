import clsx from "clsx";
import type { ComponentProps } from "react";

import { Section } from "@/shared/ui";

type ErrorValidation = { error: boolean; message: string | null };
type IInput = ComponentProps<"input"> & ErrorValidation;

export default function Input({ className, error, message, ...props }: IInput) {
  return (
    <Section className="gap-1">
      <input
        className={clsx(
          "text-sm py-2.5 px-3 rounded-[10px] bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 focus-visible:bg-zinc-200 dark:hover:bg-zinc-800 dark:focus-visible:bg-zinc-800 placeholder:text-zinc-600 dark:placeholder:text-zinc-400 text-zinc-900 dark:text-zinc-100 focus-visible:border focus-visible:border-white dark:focus-visible:border-zinc-700/50 w-full",
          className,
        )}
        {...props}
      />
      {error && <span className="text-sm text-rose-500">{message}</span>}
    </Section>
  );
}

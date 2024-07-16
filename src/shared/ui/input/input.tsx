import clsx from "clsx";
import type { ComponentProps } from "react";

import { Section } from "@/shared/ui";

type ErrorValidation = { error?: boolean; message?: string | null };
type IInput = ComponentProps<"input"> & ErrorValidation;

// FIXME: Add the shake animation when the input is invalid
export default function Input({ className, error, message, ...props }: IInput) {
  return (
    <Section className="gap-1">
      <input
        className={clsx(
          "text-sm py-2.5 px-3 rounded-[10px] bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 focus-visible:bg-zinc-200 dark:hover:bg-zinc-800 dark:focus-visible:bg-zinc-800 placeholder:text-zinc-600 dark:placeholder:text-zinc-400 text-zinc-900 dark:text-zinc-100 w-full",
          error && "ring-2 ring-rose-500 focus-visible:!outline-none",
          className,
        )}
        {...props}
      />
      {error && <span className="text-sm text-rose-500">{message}</span>}
    </Section>
  );
}

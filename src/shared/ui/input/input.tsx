import clsx from "clsx";
import { type ComponentProps, forwardRef } from "react";

import { Section, Transition } from "@/shared/ui";

type ErrorValidation = { error?: string };
type TInput = ComponentProps<"input"> & ErrorValidation;

const Input = forwardRef<HTMLInputElement, TInput>(function Input({ className, error, ...props }, ref) {
  return (
    <Transition
      animate={error ? { rotate: [-1, 1.3, 0], translateX: [-1, 1.3, 0] } : { rotate: 0, translateX: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      <Section className="gap-1">
        <input
          className={clsx(
            "w-full rounded-[10px] bg-zinc-100 px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 hover:bg-zinc-200 focus-visible:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:hover:bg-zinc-800 dark:focus-visible:bg-zinc-800",
            error && "ring-2 ring-rose-500 focus-visible:!outline-none",
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && <span className="text-sm text-rose-500">{error}</span>}
      </Section>
    </Transition>
  );
});

export default Input;

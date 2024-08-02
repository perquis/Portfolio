import clsx from "clsx";
import { type ComponentProps, forwardRef } from "react";

import { Section, Transition } from "@/shared/ui";

type ErrorValidation = { error?: string };
type TInput = ComponentProps<"input"> & ErrorValidation & { labelText?: string };

const Input = forwardRef<HTMLInputElement, TInput>(function Input({ className, error, id, labelText, ...props }, ref) {
  return (
    <Transition
      animate={error ? { rotate: [-1, 1.3, 0], translateX: [-1, 1.3, 0] } : { rotate: 0, translateX: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      <Section className="gap-1">
        <label className="flex flex-col gap-2" htmlFor={id}>
          {labelText && <span className="ml-3 text-sm font-medium text-zinc-500">{labelText}</span>}

          <input
            className={clsx(
              "w-full rounded-[10px] bg-zinc-100 px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 hover:bg-zinc-200 hover:placeholder:text-zinc-500 focus-visible:bg-zinc-200 focus-visible:placeholder:text-zinc-500 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:placeholder:text-zinc-500 dark:focus-visible:bg-zinc-800 dark:focus-visible:placeholder:text-zinc-500",
              error && "ring-2 ring-rose-500 focus-visible:!outline-none",
              className,
            )}
            ref={ref}
            id={id}
            {...props}
          />
        </label>
        {error && <span className="text-sm text-rose-500">{error}</span>}
      </Section>
    </Transition>
  );
});

export default Input;

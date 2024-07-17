import clsx from "clsx";
import type { ComponentProps } from "react";

import { Section, Transition } from "@/shared/ui";

type ErrorValidation = { error?: boolean; message?: string | null };
type IInput = ComponentProps<"input"> & ErrorValidation;

export default function Input({ className, error, message, id, name, ...props }: IInput) {
  return (
    <Transition
      animate={error ? { rotate: [-1, 1.3, 0], translateX: [-1, 1.3, 0] } : { rotate: 0, translateX: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      <Section className="gap-1">
        <label className="flex flex-col gap-1" htmlFor={id}>
          {name && <span className="text-xs font-medium text-zinc-900 dark:text-zinc-100">{name}</span>}
          <input
            className={clsx(
              "text-sm py-2.5 px-3 rounded-[10px] bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 focus-visible:bg-zinc-200 dark:hover:bg-zinc-800 dark:focus-visible:bg-zinc-800 placeholder:text-zinc-600 dark:placeholder:text-zinc-400 text-zinc-900 dark:text-zinc-100 w-full",
              error && "ring-2 ring-rose-500 focus-visible:!outline-none",
              className,
            )}
            id={id}
            name={name}
            {...props}
          />
        </label>
        {error && <span className="text-sm text-rose-500">{message}</span>}
      </Section>
    </Transition>
  );
}

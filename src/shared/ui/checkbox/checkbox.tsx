"use client";

import type { ComponentProps } from "react";

import { useOpen } from "@/shared/hooks";
import { Checkmark } from "@/shared/icons/design";

type TCheckBox = ComponentProps<"input">;

export default function Checkbox({ defaultChecked, ...props }: Omit<TCheckBox, "type">) {
  const [isOpen, [, , toggle]] = useOpen();

  return (
    <div className="relative flex items-center justify-center">
      <input
        type="checkbox"
        className="h-4 w-4 appearance-none rounded border border-white bg-zinc-100 ring-1 ring-zinc-200/50 checked:!border-indigo-400/50 checked:!bg-indigo-500 checked:!ring-indigo-600 dark:border-zinc-800 dark:bg-zinc-900 dark:ring-zinc-800/50"
        defaultChecked={defaultChecked}
        {...props}
        onChange={toggle}
      />
      {isOpen && <Checkmark width={12} height={12} className="absolute text-white" />}
    </div>
  );
}

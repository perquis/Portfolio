import clsx from "clsx";
import type { ComponentProps } from "react";

export default function Regular({ children, className, ...props }: ComponentProps<"span">) {
  return (
    <span className={clsx("text-black/50 dark:text-white/50 text-xs", className)} {...props}>
      {children}
    </span>
  );
}

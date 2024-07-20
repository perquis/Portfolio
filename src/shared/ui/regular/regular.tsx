import clsx from "clsx";
import type { ComponentProps } from "react";

type IRegular = ComponentProps<"span">;

export default function Regular({ children, className, ...props }: IRegular) {
  return (
    <span className={clsx("text-black/50 dark:text-white/50 text-sm", className)} {...props}>
      {children}
    </span>
  );
}

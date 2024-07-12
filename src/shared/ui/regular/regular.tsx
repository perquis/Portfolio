import clsx from "clsx";
import type { ComponentProps, FC } from "react";

export const Regular: FC<ComponentProps<"span">> = ({ children, className, ...props }) => {
  return (
    <span className={clsx("text-black/50 dark:text-white/50 text-xs", className)} {...props}>
      {children}
    </span>
  );
};

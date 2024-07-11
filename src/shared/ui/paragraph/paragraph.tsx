import clsx from "clsx";
import type { ComponentProps, FC } from "react";

export const Paragraph: FC<ComponentProps<"p">> = ({ children, className, ...props }) => {
  return (
    <p className={clsx("text-zinc-800 dark:text-zinc-200", className)} {...props}>
      {children}
    </p>
  );
};

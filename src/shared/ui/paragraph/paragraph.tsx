import clsx from "clsx";
import type { ComponentProps } from "react";

export default function Paragraph({ children, className, ...props }: ComponentProps<"p">) {
  return (
    <p className={clsx("text-zinc-800 text-left dark:text-zinc-200", className)} {...props}>
      {children}
    </p>
  );
}

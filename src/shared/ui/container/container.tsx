import clsx from "clsx";
import type { ComponentProps } from "react";

export default function Container({ children, className, ...props }: ComponentProps<"main">) {
  return (
    <main className={clsx("text-zinc-950 dark:text-white max-w-screen-sm mx-auto w-full", className)} {...props}>
      {children}
    </main>
  );
}

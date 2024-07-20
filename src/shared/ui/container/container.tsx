import clsx from "clsx";
import type { ComponentProps } from "react";

type IContainer = ComponentProps<"main">;

export default function Container({ children, className, ...props }: IContainer) {
  return (
    <main
      className={clsx("text-zinc-950 dark:text-white max-w-screen-sm mx-auto w-full px-5 sm:px-0", className)}
      {...props}
    >
      {children}
    </main>
  );
}

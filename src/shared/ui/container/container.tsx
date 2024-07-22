import clsx from "clsx";
import type { ComponentProps } from "react";

type IContainer = ComponentProps<"main">;

export default function Container({ children, className, ...props }: IContainer) {
  return (
    <main
      className={clsx("mx-auto w-full max-w-screen-sm px-5 text-zinc-950 dark:text-white md:px-0", className)}
      {...props}
    >
      {children}
    </main>
  );
}

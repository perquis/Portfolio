import clsx from "clsx";
import type { ComponentProps, FC } from "react";

export const Container: FC<ComponentProps<"main">> = ({ children, className, ...props }) => {
  return (
    <main className={clsx("text-zinc-950 dark:text-white max-w-screen-sm mx-auto w-full", className)} {...props}>
      {children}
    </main>
  );
};

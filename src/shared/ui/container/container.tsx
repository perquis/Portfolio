import type { ComponentProps, FC } from "react";

export const Container: FC<ComponentProps<"main">> = ({ children, ...props }) => {
  return (
    <main className="text-zinc-950 dark:text-white max-w-screen-sm mx-auto py-32 w-full" {...props}>
      {children}
    </main>
  );
};

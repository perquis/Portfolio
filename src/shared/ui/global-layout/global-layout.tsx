import type { ComponentProps, FC } from "react";

export const GlobalLayout: FC<ComponentProps<"div">> = ({ children, ...props }) => (
  <div className="bg-white dark:bg-zinc-950 w-full" {...props}>
    {children}
  </div>
);

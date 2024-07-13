import clsx from "clsx";
import type { ComponentProps, FC } from "react";

export const GlobalLayout: FC<ComponentProps<"div">> = ({ children, className, ...props }) => (
  <div className={clsx("w-full py-32", className)} {...props}>
    {children}
  </div>
);

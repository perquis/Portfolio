import clsx from "clsx";
import type { ComponentProps, FC } from "react";

export const Bold: FC<ComponentProps<"b">> = ({ children, className, ...props }) => {
  return (
    <b className={clsx("font-bold", className)} {...props}>
      {children}
    </b>
  );
};

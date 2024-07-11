import clsx from "clsx";
import type { ComponentProps, FC } from "react";

export const Flexbox: FC<ComponentProps<"div">> = ({ children, className, ...props }) => {
  return (
    <div className={clsx("flex flex-col", className)} {...props}>
      {children}
    </div>
  );
};

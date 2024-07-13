import type { ComponentProps, FC } from "react";

export const GlobalLayout: FC<ComponentProps<"div">> = ({ children, ...props }) => (
  <div className="w-full py-32" {...props}>
    {children}
  </div>
);

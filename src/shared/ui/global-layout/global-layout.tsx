import clsx from "clsx";
import type { ComponentProps } from "react";

type IGlobalLayout = ComponentProps<"div">;

export default function GlobalLayout({ children, className, ...props }: IGlobalLayout) {
  return (
    <div className={clsx("w-full py-32 overflow-x-hidden", className)} {...props}>
      {children}
    </div>
  );
}

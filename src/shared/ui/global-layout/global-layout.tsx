import clsx from "clsx";
import type { ComponentProps } from "react";

type IGlobalLayout = ComponentProps<"div">;

export default function GlobalLayout({ children, className, ...props }: IGlobalLayout) {
  return (
    <div className={clsx("min-h-screen w-full overflow-x-hidden py-32", className)} {...props}>
      {children}
    </div>
  );
}

import clsx from "clsx";
import type { ComponentProps } from "react";

export default function GlobalLayout({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <div className={clsx("w-full py-32", className)} {...props}>
      {children}
    </div>
  );
}

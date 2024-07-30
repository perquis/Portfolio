import clsx from "clsx";
import type { ComponentProps } from "react";

type TDivider = ComponentProps<"div">;

export default function Divider({ className, ...props }: TDivider) {
  return (
    <div className={clsx("text-zinc-200 dark:text-zinc-800", className)} {...props}>
      <svg width="100%" height="1" viewBox="0 0 640 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.5" y1="0.5" x2="639.5" y2="0.5" stroke="currentColor" strokeLinecap="round" strokeDasharray="8" />
      </svg>
    </div>
  );
}

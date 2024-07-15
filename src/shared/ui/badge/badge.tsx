import clsx from "clsx";
import type { ComponentProps } from "react";

import { getColorClass } from "@/shared/ui/badge/getColorClass";

type IBadge = {
  color: Color;
  rounded: Rounded;
  border?: boolean;
} & ComponentProps<"span">;

export default function Badge({ children, color, border, rounded = "default", ...props }: IBadge) {
  const colorClass = getColorClass(color);

  return (
    <span
      className={clsx(
        "px-3 py-2 text-sm",
        rounded === "default" ? "rounded-md" : "rounded-full",
        border && "border",
        colorClass,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

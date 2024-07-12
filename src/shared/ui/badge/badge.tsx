import clsx from "clsx";
import type { ComponentProps, FC } from "react";

import { getColorClass } from "@/shared/ui/badge/getColorClass";

interface IBadge {
  color: Color;
  rounded: Rounded;
  border?: boolean;
}

export const Badge: FC<IBadge & ComponentProps<"span">> = ({
  children,
  color,
  border,
  rounded = "default",
  ...props
}) => {
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
};

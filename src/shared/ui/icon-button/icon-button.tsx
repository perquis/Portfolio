import clsx from "clsx";
import type { FC } from "react";
import { match } from "ts-pattern";

import { icons } from "@/shared/icons";
import type { ButtonPropsWithSize, IconButtonProps } from "@/shared/ui/icon-button/icon-button.types";

export const IconButton: FC<IconButtonProps> = ({ size, icon, className, children, ...props }) => {
  const squareSize = match(size)
    .with("small", () => 16)
    .with("medium", () => 20)
    .with("large", () => 24)
    .exhaustive();

  const viewBox = {
    width: squareSize,
    height: squareSize,
  };

  // NOTE - If children are provided, render them instead of the Icon component.
  if (children)
    return (
      <Button size={size} className={className} {...props}>
        {children}
      </Button>
    );

  if (!icon) throw new Error("Either icon or children prop is required.");
  const Icon = icons[icon];

  // NOTE - It is a default behavior of the IconButton component.
  return (
    <Button size={size} className={className} {...props}>
      <Icon {...viewBox} />
    </Button>
  );
};

const Button: FC<ButtonPropsWithSize> = ({ className, size, children, rounded, ...props }) => {
  const classes = match(size)
    .with("small", () => "p-1 rounded-md")
    .with("medium", () => "p-[6px] rounded-lg")
    .with("large", () => "p-3 rounded-xl")
    .exhaustive();

  return (
    <button
      className={clsx(
        "text-zinc-700 dark:text-zinc-500 hover:text-zinc-950 focus-visible:text-zinc-950 hover:bg-zinc-100 focus-visible:bg-zinc-100 active:opacity-75 dark:hover:bg-zinc-900 dark:focus-visible:bg-zinc-900 ease-in-out transition-colors duration-300 dark:hover:text-zinc-50 dark:focus-visible:text-zinc-50",
        rounded === "full" && "!rounded-full",
        classes,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

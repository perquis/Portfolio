import clsx from "clsx";
import type { ComponentProps, FC } from "react";
import { match } from "ts-pattern";

import { icons } from "@/shared/icons";

type IconName = keyof typeof icons;

interface IIconButton {
  icon: IconName;
  size: Exclude<Size, "tiny">;
}

export const IconButton: FC<IIconButton & ComponentProps<"button">> = ({ size, icon, className, ...props }) => {
  const squareSize = match(size)
    .with("small", () => 16)
    .with("medium", () => 20)
    .with("large", () => 24)
    .exhaustive();

  const Icon = icons[icon];

  const viewBox = {
    width: squareSize,
    height: squareSize,
  };

  return (
    <Button size={size} {...props}>
      <Icon {...viewBox} />
    </Button>
  );
};

const Button: FC<Pick<IIconButton, "size"> & ComponentProps<"button">> = ({ className, size, children, ...props }) => {
  const classes = match(size)
    .with("small", () => "p-1 rounded-md")
    .with("medium", () => "p-[6px] rounded-lg")
    .with("large", () => "p-3 rounded-xl")
    .exhaustive();

  return (
    <button
      className={clsx(
        "text-zinc-700 dark:text-zinc-500 hover:text-zinc-950 focus-visible:text-zinc-950 hover:bg-zinc-100 focus-visible:bg-zinc-100 active:opacity-75 dark:hover:bg-zinc-900 dark:focus-visible:bg-zinc-900 ease-in-out transition-colors duration-300 dark:hover:text-zinc-50 dark:focus-visible:text-zinc-50",
        classes,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

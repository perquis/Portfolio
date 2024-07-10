import clsx from "clsx";
import { ComponentProps, FC } from "react";

interface ITitle {
  level: Level;
}

export const Title: FC<ITitle & ComponentProps<"h1">> = ({ level: Tag, className, children, ...props }) => {
  return (
    <Tag
      className={clsx(
        "font-bold text-zinc-950 dark:text-white",
        Tag === "h1" && "text-6xl",
        Tag === "h2" && "text-5xl",
        Tag === "h3" && "text-4xl",
        Tag === "h4" && "text-3xl",
        Tag === "h5" && "text-2xl",
        Tag === "h6" && "text-xl",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

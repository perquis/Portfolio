import clsx from "clsx";
import type { ComponentProps, FC } from "react";

interface ITitle {
  level?: Level;
}

export const Title: FC<ITitle & ComponentProps<"h1">> = ({ level: Tag = "h2", className, children, ...props }) => {
  return (
    <Tag
      className={clsx(
        "font-bold",
        Tag === "h1" && "text-4xl lg:text-5xl xl:text-6xl",
        Tag === "h2" && "text-3xl lg:text-4xl xl:text-5xl",
        Tag === "h3" && "text-2xl lg:text-3xl xl:text-4xl",
        Tag === "h4" && "text-xl lg:text-2xl xl:text-3xl",
        Tag === "h5" && "text-lg lg:text-xl xl:text-2xl",
        Tag === "h6" && "text-base lg:text-lg xl:text-xl",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

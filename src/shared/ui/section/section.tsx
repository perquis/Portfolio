import clsx from "clsx";
import type { ComponentProps, FC } from "react";

export const Section: FC<ComponentProps<"section">> = ({ children, className, ...props }) => {
  return (
    <section className={clsx("flex flex-col", className)} {...props}>
      {children}
    </section>
  );
};

import clsx from "clsx";
import type { ComponentProps } from "react";

type ISection = ComponentProps<"section">;

export default function Section({ children, className, ...props }: ISection) {
  return (
    <section className={clsx("flex flex-col", className)} {...props}>
      {children}
    </section>
  );
}

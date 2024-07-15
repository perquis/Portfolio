import clsx from "clsx";
import type { ComponentProps } from "react";

export default function Section({ children, className, ...props }: ComponentProps<"section">) {
  return (
    <section className={clsx("flex flex-col", className)} {...props}>
      {children}
    </section>
  );
}

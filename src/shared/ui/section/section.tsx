import clsx from "clsx";
import { type ComponentProps, forwardRef } from "react";

type ISection = ComponentProps<"section">;

const Section = forwardRef<HTMLDivElement, ISection>(function Section({ children, className, ...props }, ref) {
  return (
    <section className={clsx("flex flex-col", className)} {...props} ref={ref}>
      {children}
    </section>
  );
});

export default Section;

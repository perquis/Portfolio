"use client";

import clsx from "clsx";
import { type MotionProps, motion } from "framer-motion";
import { type ComponentProps, forwardRef } from "react";

type TSection = MotionProps & ComponentProps<"section">;

const Section = forwardRef<HTMLDivElement, TSection>(function Section({ children, className, ...props }, ref) {
  return (
    <motion.section layout="position" className={clsx("flex flex-col", className)} {...props} ref={ref}>
      {children}
    </motion.section>
  );
});

export default Section;

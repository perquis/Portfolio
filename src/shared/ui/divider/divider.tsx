"use client";

import clsx from "clsx";
import { type MotionProps, motion } from "framer-motion";
import { useState } from "react";

import { useEventCallback } from "@/shared/hooks";

type TDivider = MotionProps & { className?: string };

export default function Divider({ className, ...props }: TDivider) {
  const [innerWidth, setInnerWidth] = useState(0);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width !== innerWidth) {
      setInnerWidth(width);
    }
  };

  useEventCallback({ callback: handleResize, eventName: "resize" });

  const dots = Array.from({ length: 32 }, (_, index) => (
    <div
      key={crypto.randomUUID()}
      className={clsx(
        "h-[1px] flex-grow rounded-sm bg-zinc-300 dark:bg-zinc-700",
        innerWidth >= 400 && innerWidth < 640 && index > 20 && "hidden sm:block",
        innerWidth <= 400 && index > 12 && "!hidden sm:!block",
      )}
    ></div>
  ));

  return (
    <motion.div layout="position" className={clsx("flex gap-2", className)} {...props}>
      {dots}
    </motion.div>
  );
}

"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { type ComponentProps, type FC, useEffect, useRef } from "react";
import { match } from "ts-pattern";

import { useOpen } from "@/shared/hooks/use-open";

interface ITooltip {
  label: string;
  alignment?: Exclude<Alignment, "bottom-left" | "bottom-right" | "top-left" | "top-right" | "center">;
}

export const Tooltip: FC<ITooltip & ComponentProps<"div">> = ({
  children,
  className,
  label,
  alignment = "top",
  ...props
}) => {
  const [isOpen, [open, close]] = useOpen();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nodes = containerRef.current?.children as unknown as HTMLElement[];
    if (nodes.length > 2) {
      throw new Error("Too much elements in inside component!");
    }

    const [element] = nodes;
    if (!element) return;
    element.addEventListener("focus", open);

    element.addEventListener("blur", close);

    return () => {
      element.removeEventListener("focus", open);
      element.removeEventListener("blur", close);
    };
  }, [open, close]);

  const direction = match(alignment)
    .with("top", () => "bottom-[calc(100%+8px)]")
    .with("bottom", () => "top-[calc(100%+8px)]")
    .with("left", () => "right-[calc(100%+8px)] -translate-y-1/2 top-1/2")
    .with("right", () => "left-[calc(100%+8px)] -translate-y-1/2 top-1/2")
    .run();

  return (
    <div className="relative flex justify-center pointer-events-none w-fit">
      <div className="pointer-events-auto" onMouseEnter={open} onMouseLeave={close} ref={containerRef}>
        {children}
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={clsx(
            "absolute pointer-events-none px-3 py-2 rounded-lg bg-zinc-900/90 border-t border-zinc-800/90 backdrop-blur text-white max-w-64 w-max text-x",
            direction,
          )}
        >
          {label}
        </motion.div>
      )}
    </div>
  );
};

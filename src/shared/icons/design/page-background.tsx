"use client";

import { motion } from "framer-motion";

export const PageBackground = () => (
  <div
    className="pointer-events-none fixed left-0 top-0 -z-50 flex h-screen w-full justify-between"
    style={{ aspectRatio: "9.8 / 1" }}
  >
    {Array.from({ length: 36 }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: i * 0.25, duration: 5 }}
        className="h-full w-[1px] origin-top border-l border-zinc-200/50 dark:border-zinc-800/50"
      />
    ))}
    <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-between">
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: i * 0.25, duration: 5 }}
          className="h-[1px] w-full origin-left border-b border-zinc-200/50 dark:border-zinc-800/50"
        />
      ))}
    </div>
  </div>
);

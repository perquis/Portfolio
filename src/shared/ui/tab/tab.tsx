"use client";

import clsx from "clsx";
import type { ComponentProps } from "react";

import { Link, usePathname } from "@/next/navigation";

type ITab = ComponentProps<typeof Link>;

export default function Tab({ children, className, ...props }: ITab) {
  const pathname = usePathname(),
    isActive = pathname === props.href;

  return (
    <Link
      className={clsx(
        "text-zinc-500 hover:text-zinc-800 hover:bg-zinc-100 focus-visible:text-zinc-800 focus-visible:bg-zinc-100 dark:hover:bg-zinc-900 dark:focus-visible:bg-zinc-900 rounded-lg dark:text-white/50 dark:hover:text-white/80 dark:focus-visible:text-white/80 px-3 py-2 font-medium transition-colors duration-200 ease-in-out",
        isActive && "text-zinc-800 dark:text-white/80 pointer-events-none",
        className,
      )}
      tabIndex={isActive ? -1 : undefined}
      {...props}
    >
      {children}
    </Link>
  );
}

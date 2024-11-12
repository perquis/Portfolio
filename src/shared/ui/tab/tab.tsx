"use client";

import clsx from "clsx";
import type { ComponentProps } from "react";

import type { IsLock } from "@/interfaces/variants";
import { Link, usePathname } from "@/libs/next-intl";

type TTab = ComponentProps<typeof Link> & IsLock;

export default function Tab({ children, className, lock, ...props }: TTab) {
  const pathname = usePathname(),
    isActive = pathname === props.href;

  return (
    <Link
      className={clsx(
        "rounded-lg px-3 py-2 font-medium text-zinc-500 transition-colors duration-200 ease-in-out hover:bg-zinc-100 hover:text-zinc-800 focus-visible:bg-zinc-100 focus-visible:text-zinc-800 dark:text-white/50 dark:hover:bg-zinc-900 dark:hover:text-white/80 dark:focus-visible:bg-zinc-900 dark:focus-visible:text-white/80",
        isActive && "pointer-events-none text-zinc-800 dark:text-white/80",
        className,
      )}
      tabIndex={lock ? -1 : isActive ? -1 : undefined}
      {...props}
    >
      {children}
    </Link>
  );
}

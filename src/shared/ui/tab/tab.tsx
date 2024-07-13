"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, FC } from "react";

type ITab = ComponentProps<typeof Link>;

export const Tab: FC<ITab> = ({ children, className, ...props }) => {
  const pathname = usePathname();

  return (
    <Link
      className={clsx(
        "text-zinc-500 hover:text-zinc-800 hover:bg-zinc-100 focus-visible:text-zinc-800 focus-visible:bg-zinc-100 dark:hover:bg-zinc-900 dark:focus-visible:bg-zinc-900 rounded-lg dark:text-white/50 dark:hover:text-white/80 dark:focus-visible:text-white/80 px-3 py-2 font-medium transition-colors duration-200 ease-in-out",
        props.href === pathname ? "text-zinc-800 dark:text-white/80 pointer-events-none" : "",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

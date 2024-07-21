"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

import { Link as NextLink } from "@/next/navigation";

type ILink = ComponentProps<typeof NextLink>;

// FIXME: Należy koniecznie przenieść ten komponent do Breadcrumbs
// oraz zastanowić się nad ogólnym designem samego linku.
export default function Link({ children, className, ...props }: ILink) {
  const pathname = usePathname();

  return (
    <NextLink
      className={clsx(
        "text-zinc-500 hover:text-zinc-800 focus-visible:text-zinc-800 dark:text-white/50 dark:hover:text-white/80 dark:focus-visible:text-white/80",
        props.href === pathname ? "text-zinc-800 dark:text-white/80 pointer-events-none" : "",
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
}

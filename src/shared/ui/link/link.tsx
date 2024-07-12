import clsx from "clsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, FC } from "react";

export const Link: FC<ComponentProps<typeof NextLink>> = ({ children, className, ...props }) => {
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
};

"use client";

import clsx from "clsx";
import type { ComponentProps } from "react";
import { TailSpin } from "react-loader-spinner";
import { match } from "ts-pattern";

type IButton = {
  size: Exclude<Size, "tiny">;
  variants: "black" | "white" | "indigo";
  mode: "simple" | "gradient";
  loading?: boolean;
} & ComponentProps<"button">;

export default function Button({ children, size, variants, loading, mode, ...props }: IButton) {
  const sizes = match({ size })
    .with({ size: "small" }, () => "text-xs gap-2 px-4 py-2 rounded-lg")
    .with({ size: "medium" }, () => "text-sm gap-2.5 px-5 py-2.5 rounded-[10px]")
    .with({ size: "large" }, () => "text-base gap-3 px-6 py-3 rounded-xl")
    .run();

  const colors = match({ variants, mode })
    .with(
      { variants: "black", mode: "simple" },
      () => "bg-black text-white !border-0 !ring-0 dark:bg-white dark:text-black",
    )
    .with(
      { variants: "white", mode: "simple" },
      () => "bg-white text-black ring-zinc-400 !border-0 !ring-1 dark:bg-zinc-950 dark:text-white dark:ring-zinc-800",
    )
    .with({ variants: "indigo", mode: "simple" }, () => "bg-indigo-600 text-white !border-0 !ring-0")
    .with({ variants: "black", mode: "gradient" }, () => "from-black to-zinc-900 text-white border-white/25 ring-black")
    .with(
      { variants: "white", mode: "gradient" },
      () => "from-zinc-200 to-white text-zinc-800 border-zinc-300 ring-zinc-500",
    )
    .with(
      { variants: "indigo", mode: "gradient" },
      () => "from-indigo-600 to-indigo-700 text-white border-white/25 ring-indigo-900",
    )
    .run();

  const spinnerSize = match({ size })
    .with({ size: "small" }, () => 16)
    .with({ size: "medium" }, () => 20)
    .with({ size: "large" }, () => 24)
    .run();

  const color = match({ variants })
    .with({ variants: "black" }, () => "white")
    .with({ variants: "white" }, () => "black")
    .otherwise(() => "white");

  return (
    <button
      className={clsx(
        "font-medium border-2 border-b-0 bg-gradient-to-t disabled:opacity-25 disabled:cursor-not-allowed disabled:pointer-events-none hover:opacity-90 focus-visible:opacity-90 flex items-center ring-2 ease-in-out active:scale-95 duration-200 shadow-md",
        sizes,
        colors,
        loading ? "opacity-75 cursor-not-allowed pointer-events-none" : "active:opacity-100",
      )}
      {...props}
    >
      {loading && <TailSpin width={spinnerSize} height={spinnerSize} color={color} visible />}
      {loading ? "Loading..." : <span className="drop-shadow-sm pointer-events-none">{children}</span>}
    </button>
  );
}

import clsx from "clsx";
import type { ComponentProps, FC } from "react";
import { TailSpin } from "react-loader-spinner";
import { match } from "ts-pattern";

interface IButton {
  size: Exclude<Size, "tiny">;
  variants: "black" | "white" | "indigo";
  loading?: boolean;
}

export const Button: FC<IButton & ComponentProps<"button">> = ({ children, size, variants, loading, ...props }) => {
  const sizes = match({ size })
    .with({ size: "small" }, () => "text-xs gap-2 px-4 py-2 rounded-lg")
    .with({ size: "medium" }, () => "text-sm gap-2.5 px-5 py-2.5 rounded-[10px]")
    .with({ size: "large" }, () => "text-base gap-3 px-6 py-3 rounded-xl")
    .run();

  const colors = match({ variants })
    .with({ variants: "black" }, () => "from-black to-zinc-900 text-white border-white/25 border-b-0 ring-black")
    .with({ variants: "white" }, () => "from-zinc-200 to-white text-zinc-800 border-zinc-300 ring-zinc-500")
    .with(
      { variants: "indigo" },
      () => "from-indigo-600 to-indigo-700 text-white border-white/25 border-b-0 ring-indigo-900",
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
        "font-medium border-2 bg-gradient-to-t disabled:opacity-25 disabled:cursor-not-allowed disabled:pointer-events-none hover:opacity-90 focus-visible:opacity-90 flex items-center ring-2 ease-in-out active:scale-95 duration-200 shadow-md",
        sizes,
        colors,
        loading ? "opacity-75 cursor-not-allowed pointer-events-none" : "active:opacity-100",
      )}
      {...props}
    >
      {loading && <TailSpin width={spinnerSize} height={spinnerSize} color={color} visible />}
      {loading ? "Loading..." : <span className="drop-shadow-sm">{children}</span>}
    </button>
  );
};

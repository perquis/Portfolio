import clsx from "clsx";
import { type ComponentProps } from "react";

import { Search } from "@/shared/icons/design";

import { useFocus } from "./use-focus";

type IInput = ComponentProps<"input">;

export default function SearchBar({ className, id, name, ...props }: IInput) {
  const { blur, focus, inputRef, isFocus } = useFocus();

  return (
    <div
      className={clsx(
        "text-sm rounded-[10px] bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 focus-visible:bg-zinc-200 dark:hover:bg-zinc-800 dark:focus-visible:bg-zinc-800 text-zinc-900 dark:text-zinc-100 w-full flex items-center px-3 gap-2",
        className,
        isFocus && "outline outline-offset-[3px] outline-indigo-600/75",
      )}
      tabIndex={0}
      onClick={focus}
      onFocus={focus}
      onBlur={blur}
    >
      <Search width={20} height={20} className="flex-shrink-0 text-zinc-400 dark:text-zinc-600" />
      <input
        className="w-full rounded-[10px] py-2.5 bg-transparent !outline-none focus-visible:!outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
        type="search"
        ref={inputRef}
        tabIndex={-1}
        {...props}
      />
    </div>
  );
}

"use client";

import clsx from "clsx";
import debounce from "lodash/debounce";
import { useQueryState } from "nuqs";
import { type ChangeEvent, type ComponentProps } from "react";

import { Search } from "@/shared/icons/design";

import { useFocus } from "./use-focus";

type TSearchBar = ComponentProps<"input">;

export default function SearchBar({ className, ...props }: TSearchBar) {
  const { blur, focus, inputRef, isFocus } = useFocus();
  const [query, setQuery] = useQueryState("q");

  const onChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") return setQuery(null);
    return setQuery(e.target.value);
  }, 500);

  return (
    <div
      className={clsx(
        "flex w-full items-center gap-2 rounded-[10px] bg-zinc-100 px-3 text-sm text-zinc-900 hover:bg-zinc-200 focus-visible:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800 dark:focus-visible:bg-zinc-800",
        className,
        isFocus && "outline outline-offset-[3px] outline-indigo-600/75",
      )}
      tabIndex={0}
      onClick={focus}
      onFocus={focus}
      onBlur={blur}
      onChange={onChange}
    >
      <Search width={20} height={20} className="flex-shrink-0 text-zinc-500" />
      <input
        className="w-full rounded-[10px] bg-transparent py-2.5 !outline-none placeholder:text-zinc-400 focus-visible:!outline-none dark:placeholder:text-zinc-600"
        type="search"
        defaultValue={query ?? ""}
        ref={inputRef}
        tabIndex={-1}
        {...props}
      />
    </div>
  );
}

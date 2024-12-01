"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect } from "react";

import { links } from "@/data";
import { useRouter } from "@/libs/next-intl";
import { useOpen } from "@/shared/hooks";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/shared/ui/command/command";

import { settings } from "./data-settings";

export function CommandMenu() {
  const [isOpen, [, , toggle]] = useOpen();
  const t = useTranslations();

  const { setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggle]);

  const { push } = useRouter();

  return (
    <CommandDialog open={isOpen} onOpenChange={toggle}>
      <CommandInput placeholder={t("BLOG_SEARCHBAR_PLACEHOLDER")} />
      <CommandList className="py-1">
        <CommandEmpty>{t("NO_RESULTS")}</CommandEmpty>
        <CommandGroup heading={t("SUGGESTIONS")}>
          {links.map(({ Icon, href, label }) => (
            <CommandItem key={label} asChild onSelect={() => push(href)}>
              <div className="flex w-full items-center gap-4">
                <Icon />
                {/* @ts-expect-error */}
                {t(`NAVIGATION_${label.toUpperCase()}`)}
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={t("SETTINGS")}>
          {settings.map(({ Icon, label, selectValue }) => (
            <CommandItem onSelect={() => setTheme(selectValue)} key={label} asChild>
              <button className="flex w-full items-center gap-4">
                <Icon />
                {/* @ts-expect-error */}
                {t(label)}
              </button>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

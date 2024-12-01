"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect } from "react";

import { locales } from "@/config/i18n";
import { links } from "@/data";
import { usePathname, useRouter } from "@/libs/next-intl";
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
import { getLanguageNames } from "@/shared/utils/get-language-names";

import { settings } from "./data-settings";

export function CommandMenu() {
  const { setTheme } = useTheme();
  const pathname = usePathname();
  const locale = useLocale();
  const { push } = useRouter();
  const [isOpen, [, , toggle]] = useOpen();
  const t = useTranslations();

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

  const changeLanguage = (locale: string) => push(pathname, { locale });

  return (
    <CommandDialog open={isOpen} onOpenChange={toggle}>
      <CommandInput placeholder={t("COMMAND_SEARCH_PLACEHOLDER")} />
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
        <CommandGroup heading={t("THEMES")}>
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
        <CommandSeparator />
        <CommandGroup heading={t("LANGUAGES")}>
          {getLanguageNames(locales, locale).map(({ code, fullName }) => (
            <CommandItem key={fullName} asChild onSelect={() => changeLanguage(code)}>
              <span className="capitalize">
                {fullName} ({code.toUpperCase()})
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { useHotkeys } from "@/components/command-menu/utils-use-hotkeys";
import { useSearchByQuery } from "@/components/command-menu/utils-use-search-by-query";
import { locales } from "@/config/i18n";
import { links } from "@/data";
import { useRouter } from "@/libs/next-intl";
import { useChangeLocale } from "@/shared/hooks";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/shared/ui/command/command";
import { isEmptyArray } from "@/shared/utils";
import { getLanguageNames } from "@/shared/utils/get-language-names";

import { settings } from "./data-settings";

export function CommandMenu() {
  const { setTheme } = useTheme();
  const locale = useLocale();
  const { push } = useRouter();
  const t = useTranslations();

  const { isOpen, toggle } = useHotkeys();
  const { changeLanguage } = useChangeLocale();
  const { onValueChange, posts, projects } = useSearchByQuery();

  return (
    <CommandDialog open={isOpen} onOpenChange={toggle}>
      <CommandInput placeholder={t("COMMAND_SEARCH_PLACEHOLDER")} onValueChange={onValueChange} />
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
        {!isEmptyArray(posts) && (
          <CommandGroup heading={t("POSTS")}>
            {posts.map(({ title, slug }) => (
              <CommandItem key={title} onSelect={() => push(`/blog/${slug}`)}>
                {title}
              </CommandItem>
            ))}
          </CommandGroup>
        )}
        {!isEmptyArray(projects) && (
          <CommandGroup heading={t("PROJECTS")}>
            {projects.map(({ title, slug }) => (
              <CommandItem key={title} onSelect={() => push(`/portfolio/${slug}`)}>
                {title}
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
}

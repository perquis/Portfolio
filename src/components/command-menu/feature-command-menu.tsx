"use client";

import { Moon, Sun, SunMoon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect } from "react";

import { links } from "@/data";
import { Link } from "@/libs/next-intl";
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

  return (
    <CommandDialog open={isOpen} onOpenChange={toggle}>
      <CommandInput placeholder={t("BLOG_SEARCHBAR_PLACEHOLDER")} />
      <CommandList className="py-1">
        <CommandEmpty>{t("NO_RESULTS")}</CommandEmpty>
        <CommandGroup heading={t("SUGGESTIONS")}>
          {links.map(({ Icon, href, label }) => (
            <CommandItem key={label} asChild>
              <Link href={href} className="flex w-full items-center gap-4">
                <Icon />
                {/* @ts-expect-error */}
                {t(`NAVIGATION_${label.toUpperCase()}`)}
              </Link>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={t("SETTINGS")}>
          <CommandItem className="w-full" asChild>
            <button onClick={() => setTheme("light")}>
              <Sun />
              <span className="ml-2">{t("LIGHT_MODE")}</span>
            </button>
          </CommandItem>
          <CommandItem className="w-full" asChild>
            <button onClick={() => setTheme("dark")}>
              <Moon />
              <span className="ml-2">{t("DARK_MODE")}</span>
            </button>
          </CommandItem>
          <CommandItem className="w-full" asChild>
            <button onClick={() => setTheme("system")}>
              <SunMoon />
              <span className="ml-2">{t("SYSTEM_MODE")}</span>
            </button>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

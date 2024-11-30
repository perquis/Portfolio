"use client";

import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import { codeToHtml } from "shiki";

import * as stacks from "@/shared/icons/programming-languages";
import { theme } from "@/shared/themes/theme";

type IconName = keyof typeof stacks;

interface CodeComparisonProps {
  beforeCode: string;
  afterCode: string;
  language: string;
  icon: IconName;
  filename: string;
  lightTheme: string;
  darkTheme: string;
}

const lightColorScheme = theme.light;
const darkColorScheme = theme.dark;

export default function CodeComparison({
  beforeCode,
  afterCode,
  language,
  icon = "Ts",
  filename,
  lightTheme = lightColorScheme, // "light-plus" | "slack-ochin" | "snazzy-light"
  darkTheme = darkColorScheme, // "laserwave" | "houston"
}: CodeComparisonProps) {
  const { theme, systemTheme } = useTheme();
  const [highlightedBefore, setHighlightedBefore] = useState("");
  const [highlightedAfter, setHighlightedAfter] = useState("");

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    const selectedTheme = currentTheme === "dark" ? darkTheme : lightTheme;

    async function highlightCode() {
      const before = await codeToHtml(beforeCode, {
        lang: language,
        theme: selectedTheme,
      });

      const after = await codeToHtml(afterCode, {
        lang: language,
        theme: selectedTheme,
      });

      setHighlightedBefore(before);
      setHighlightedAfter(after);
    }

    highlightCode();
  }, [theme, systemTheme, beforeCode, afterCode, language, lightTheme, darkTheme]);

  const renderCode = (code: string, __html: string) => {
    if (__html) {
      return (
        <div
          className="h-full overflow-auto bg-background font-mono text-sm [&>pre]:h-full [&>pre]:!border-none [&>pre]:!bg-transparent [&>pre]:!p-4 [&_code]:break-all"
          dangerouslySetInnerHTML={{ __html }}
        />
      );
    } else {
      return (
        <pre className="h-full overflow-auto break-all bg-background !p-4 font-mono text-xs text-foreground">
          {code}
        </pre>
      );
    }
  };

  const icons = useMemo(() => stacks, []);
  const Icon = icons[icon];

  return (
    <div className="mx-auto w-full">
      <div className="relative w-full overflow-hidden rounded-xl border border-border shadow">
        <div className="relative grid md:grid-cols-2 md:divide-x md:divide-border">
          <div>
            <div className="flex items-center bg-accent px-4 py-2 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <Icon width={20} height={20} />
                {filename}
              </div>
              <span className="ml-auto">before</span>
            </div>
            {renderCode(beforeCode, highlightedBefore)}
          </div>
          <div>
            <div className="flex items-center bg-accent px-4 py-2 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <Icon width={20} height={20} />
                {filename}
              </div>
              <span className="ml-auto">after</span>
            </div>
            {renderCode(afterCode, highlightedAfter)}
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md border border-border bg-accent text-xs text-foreground md:flex">
          VS
        </div>
      </div>
    </div>
  );
}

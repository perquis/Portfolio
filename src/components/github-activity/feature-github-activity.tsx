"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";
import { cloneElement, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { useMounted } from "@/shared/hooks";
import { Paragraph, Regular, Section } from "@/shared/ui";

import { themeInput } from "./data-theme-colors";

export const GithubActivity = () => {
  const [year, setYear] = useState<number | null>(null),
    t = useTranslations(),
    mounted = useMounted();

  if (!mounted) return null;

  const setSelectedYear = (n: number) => setYear(n);

  const currentYear = new Date().getFullYear(),
    items = Array.from({ length: currentYear - 2020 + 1 }, (_, i) => currentYear - i).sort((a, b) => a - b),
    years = [...items];

  return (
    <Section className="max-w-screen-sm gap-5">
      <Regular className="font-semibold">{t("MY_GITHUB_ACTIVITY")}</Regular>
      <Paragraph>{t("GITHUB_ACTIVITY_DESCRIPTION")}</Paragraph>

      <Section className="gap-5">
        <GitHubCalendar
          username="perquis"
          renderBlock={(block, activity) =>
            cloneElement(block, {
              // @ts-ignore
              "data-tooltip-id": "react-tooltip",
              "data-tooltip-html": `${activity.count} contribution${activity.count > 1 ? "s" : ""} on ${activity.date}`,
            })
          }
          theme={themeInput}
          year={year ?? "last"}
        />

        <Section className="!flex-row gap-2">
          {years.map((value) => (
            <button
              className={clsx(
                "rounded p-2 text-xs font-medium text-zinc-500 transition-colors duration-200 hover:text-zinc-950 focus-visible:text-zinc-950 dark:hover:text-white dark:focus-visible:text-white",
                year !== null && value === year
                  ? "pointer-events-none bg-indigo-600 !text-white"
                  : "bg-zinc-100 hover:bg-zinc-200 focus-visible:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:focus-visible:bg-zinc-800",
              )}
              onClick={() => setSelectedYear(value)}
              key={value}
            >
              {value}
            </button>
          ))}
        </Section>

        <ReactTooltip opacity={90} id="react-tooltip" />
      </Section>
    </Section>
  );
};

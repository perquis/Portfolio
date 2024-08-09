"use client";

import { useTranslations } from "next-intl";
import { cloneElement } from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { useMounted } from "@/shared/hooks";
import { Regular, Section } from "@/shared/ui";

import { themeInput } from "./data-theme-colors";

export const GithubActivity = () => {
  const t = useTranslations();
  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <Section className="max-w-screen-sm gap-5">
      <Regular className="font-semibold">{t("MY_GITHUB_ACTIVITY")}</Regular>

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
      />

      <ReactTooltip opacity={90} id="react-tooltip" />
    </Section>
  );
};

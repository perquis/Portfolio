"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";

import { usePathname } from "@/next/navigation";
import { Paragraph, Regular, Section } from "@/shared/ui";

import { QuestionsList } from "./ui-questions-list";

export const FAQSection = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const root = pathname === "/contact";

  return (
    <Section className="gap-5" id="faq">
      <Regular
        className={clsx(
          root ? "font-bold" : "font-semibold",
          { "text-xl": root },
          { "!text-zinc-950 dark:!text-white": root },
        )}
      >
        FAQ
      </Regular>
      <Paragraph>{t("CONTACT_FAQ_DESCRIPTION")}</Paragraph>

      <QuestionsList />
    </Section>
  );
};

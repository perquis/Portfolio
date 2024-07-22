import { useTranslations } from "next-intl";

import { Paragraph, Regular, Section } from "@/shared/ui";

import { QuestionsList } from "./ui-questions-list";

export const FAQ = () => {
  const t = useTranslations();

  return (
    <Section className="gap-5" id="faq">
      <Regular className="font-semibold">FAQ</Regular>
      <Paragraph>{t("CONTACT_FAQ_DESCRIPTION")}</Paragraph>

      <QuestionsList />
    </Section>
  );
};

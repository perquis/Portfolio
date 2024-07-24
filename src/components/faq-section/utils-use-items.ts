import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";

import type { Accordion } from "@/shared/ui";

type Item = ComponentProps<typeof Accordion>;

export const useItems = (): Item[] => {
  const t = useTranslations();

  return [
    {
      question: t("CONTACT_FAQ_ITEM_QUESTION_1"),
      answer: t("CONTACT_FAQ_ITEM_ANSWER_1"),
    },
    {
      question: t("CONTACT_FAQ_ITEM_QUESTION_2"),
      answer: t("CONTACT_FAQ_ITEM_ANSWER_2"),
    },
    {
      question: t("CONTACT_FAQ_ITEM_QUESTION_3"),
      answer: t("CONTACT_FAQ_ITEM_ANSWER_3"),
    },
  ];
};

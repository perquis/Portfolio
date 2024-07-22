import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";

import type { Accordion } from "@/shared/ui";

type Item = ComponentProps<typeof Accordion>;

export const useItems = (): Item[] => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const t = useTranslations();

  return [
    {
      question: "What is the refund policy?",
      answer: "",
    },
  ];
};

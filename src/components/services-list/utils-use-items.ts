import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";

import type { List } from "./ui-list";

type TUseItems = ComponentProps<typeof List>["items"];

export const useItems = (): TUseItems => {
  const t = useTranslations();

  return [
    {
      title: t("HOME_SERVICE_ITEM_LABEL_1"),
      chips: [
        {
          label: t("HOME_SERVICE_ITEM_TITLE_1"),
          description: t("HOME_SERVICE_ITEM_DESCRIPTION_1"),
        },
        {
          label: t("HOME_SERVICE_ITEM_TITLE_2"),
          description: t("HOME_SERVICE_ITEM_DESCRIPTION_2"),
        },
        {
          label: t("HOME_SERVICE_ITEM_TITLE_3"),
          description: t("HOME_SERVICE_ITEM_DESCRIPTION_3"),
        },
      ],
    },
    {
      title: t("HOME_SERVICE_ITEM_LABEL_2"),
      chips: [
        {
          label: t("HOME_SERVICE_ITEM_TITLE_4"),
          description: t("HOME_SERVICE_ITEM_DESCRIPTION_4"),
        },
        {
          label: t("HOME_SERVICE_ITEM_TITLE_5"),
          description: t("HOME_SERVICE_ITEM_DESCRIPTION_5"),
        },
        {
          label: t("HOME_SERVICE_ITEM_TITLE_6"),
          description: t("HOME_SERVICE_ITEM_DESCRIPTION_6"),
        },
      ],
    },
    {
      title: t("HOME_SERVICE_ITEM_LABEL_3"),
      chips: [
        {
          label: t("HOME_SERVICE_ITEM_TITLE_7"),
          description: t("HOME_SERVICE_ITEM_DESCRIPTION_7"),
        },
        {
          label: t("HOME_SERVICE_ITEM_TITLE_8"),
          description: t("HOME_SERVICE_ITEM_DESCRIPTION_8"),
        },
        {
          label: t("HOME_SERVICE_ITEM_TITLE_9"),
          description: t("HOME_SERVICE_ITEM_DESCRIPTION_9"),
        },
      ],
    },
  ];
};

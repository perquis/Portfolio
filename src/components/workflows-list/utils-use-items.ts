import { useTranslations } from "next-intl";

export const useItems = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const t = useTranslations();

  return [
    {
      title: t("HOME_PROCESS_ITEM_TITLE_1"),
      description: t("HOME_PROCESS_ITEM_DESCRIPTION_1"),
    },
    {
      title: t("HOME_PROCESS_ITEM_TITLE_2"),
      description: t("HOME_PROCESS_ITEM_DESCRIPTION_2"),
    },
    {
      title: t("HOME_PROCESS_ITEM_TITLE_3"),
      description: t("HOME_PROCESS_ITEM_DESCRIPTION_3"),
    },
    {
      title: t("HOME_PROCESS_ITEM_TITLE_4"),
      description: t("HOME_PROCESS_ITEM_DESCRIPTION_4"),
    },
    {
      title: t("HOME_PROCESS_ITEM_TITLE_5"),
      description: t("HOME_PROCESS_ITEM_DESCRIPTION_5"),
    },
  ];
};

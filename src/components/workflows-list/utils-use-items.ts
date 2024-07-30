import { useTranslations } from "next-intl";

export const useItems = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const t = useTranslations();

  return [
    {
      label: t("HOME_PROCESS_ITEM_TITLE_1"),
      content: t("HOME_PROCESS_ITEM_DESCRIPTION_1"),
    },
    {
      label: t("HOME_PROCESS_ITEM_TITLE_2"),
      content: t("HOME_PROCESS_ITEM_DESCRIPTION_2"),
    },
    {
      label: t("HOME_PROCESS_ITEM_TITLE_3"),
      content: t("HOME_PROCESS_ITEM_DESCRIPTION_3"),
    },
    {
      label: t("HOME_PROCESS_ITEM_TITLE_4"),
      content: t("HOME_PROCESS_ITEM_DESCRIPTION_4"),
    },
    {
      label: t("HOME_PROCESS_ITEM_TITLE_5"),
      content: t("HOME_PROCESS_ITEM_DESCRIPTION_5"),
    },
  ];
};

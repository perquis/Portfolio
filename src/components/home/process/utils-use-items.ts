import { useTranslations } from "next-intl";

export const useItems = () => {
  const t = useTranslations();

  return [
    {
      title: "process_title_1",
      description: "process_description_1",
    },
  ];
};

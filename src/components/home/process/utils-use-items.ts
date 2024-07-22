import { useTranslations } from "next-intl";

export const useItems = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const t = useTranslations();

  return [
    {
      title: "process_title_1",
      description: "process_description_1",
    },
  ];
};

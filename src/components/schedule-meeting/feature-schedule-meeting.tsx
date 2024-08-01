import { useTranslations } from "next-intl";

import { Button } from "@/shared/ui";

export const ScheduleMeeting = () => {
  const t = useTranslations();

  return (
    <Button mode="simple" size="small" variants="black">
      {t("HOME_HERO_BUTTON_MEETING")}
    </Button>
  );
};

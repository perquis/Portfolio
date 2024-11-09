import { useTranslations } from "next-intl";

import ToggleTheme from "@/components/toggle-theme/toggle-theme";
import { Logo, Regular, Section } from "@/shared/ui";

export default function Footer() {
  const t = useTranslations();

  return (
    <Section className="!flex-row items-start justify-between">
      <Logo />
      <Section className="z-50 items-end gap-2">
        <Regular className="!text-sm">{t("FOOTER_ALL_RIGHTS_RESERVED")}</Regular>
        <ToggleTheme />
      </Section>
    </Section>
  );
}

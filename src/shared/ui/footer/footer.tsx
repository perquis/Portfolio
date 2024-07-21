import { useTranslations } from "next-intl";

import { Logo, Regular, Section } from "@/shared/ui";

export default function Footer() {
  const t = useTranslations();

  return (
    <Section className="!flex-row justify-between items-start">
      <Logo />
      <Regular className="!text-sm">{t("footer.all_rights_reserved")}</Regular>
    </Section>
  );
}

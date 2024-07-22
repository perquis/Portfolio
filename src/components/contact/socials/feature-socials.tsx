import { useTranslations } from "next-intl";

import { socials } from "@/data";
import { Details, Regular, Section } from "@/shared/ui";

export const Socials = () => {
  const t = useTranslations();
  const items = socials.map(
    (social) =>
      ({
        label: String(social.name),
        content: social.url.split("/").at(-1) as string,
        type: "link",
        href: String(social.url),
      }) as const,
  );

  return (
    <Section className="gap-5">
      <Regular className="font-semibold">{t("CONTACT_SOCIALS_TITLE")}</Regular>

      <Details items={items} />
    </Section>
  );
};

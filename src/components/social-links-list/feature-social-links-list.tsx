import { useMemo } from "react";

import { socials } from "@/data";
import { Details, Header, Motion, Section } from "@/shared/ui";

export const SocialLinksList = () => {
  const items = useMemo(
    () =>
      socials.map(
        (social) =>
          ({
            label: String(social.name),
            content: social.url.split("/").at(-1) as string,
            type: "link",
            href: String(social.url),
          }) as const,
      ),
    [],
  );

  return (
    <Motion layout>
      <Section className="gap-5">
        <Header heading="CONTACT_SOCIALS_TITLE" />
        <Details items={items} />
      </Section>
    </Motion>
  );
};

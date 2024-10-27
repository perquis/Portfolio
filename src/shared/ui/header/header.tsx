"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";

import { ArrowLink, Paragraph, Regular, Section } from "@/shared/ui";
import { usePathname } from "@/third-party/next-intl";
import type en from "@/translations/en.json";

type MessageKeys = keyof typeof en;
type PathnameOrNull = string | null;
type LinkOrNull = ILink | null;

interface ILink {
  name: string;
  url: string;
}

interface IHeader {
  heading: MessageKeys;
  description?: MessageKeys | null;
  pathname?: PathnameOrNull;
  link?: LinkOrNull;
}

export default function Header({ heading, description = null, pathname = null, link = null }: IHeader) {
  const t = useTranslations();

  const currentPathname = usePathname(),
    isSpecificPage = !pathname || currentPathname !== pathname;

  return (
    <Section className="w-full gap-5">
      <Section className={clsx("!flex-row", { "justify-between": isSpecificPage })}>
        <Regular className="font-semibold">{t(heading)}</Regular>
        {isSpecificPage && link && (
          <ArrowLink target="_blank" rel="noreferrer;noopenner" href={link.url}>
            {link.name}
          </ArrowLink>
        )}
      </Section>

      {description && <Paragraph>{t(description)}</Paragraph>}
    </Section>
  );
}

import clsx from "clsx";
import { useLocale } from "next-intl";
import type { ComponentProps } from "react";

import { Link } from "@/libs/next-intl";
import { CalendarEvent } from "@/shared/icons/design";
import { Badge, Paragraph, Ratio, Regular, Section, Title } from "@/shared/ui";
import type { TMetadata } from "@/shared/utils/docs/types";

type NextLinkProps = ComponentProps<typeof Link>;

type TCard = {
  className?: string;
} & Omit<NextLinkProps, "href"> &
  TMetadata;

export default function Card({ title, description, className, thumbnail_img, publishedAt, slug, tags }: TCard) {
  const redirectTo = `/blog/${slug}`;
  const locale = useLocale();

  return (
    <Section className={clsx("items-start gap-3 rounded-3xl", className)}>
      <Link href={redirectTo} className="w-full rounded-xl">
        <Ratio
          withThemeMode
          resolution="16:9"
          className="overflow-hidden rounded-lg border border-zinc-200/50 dark:border-zinc-800/50"
          src={thumbnail_img}
          alt={title}
        />
      </Link>

      <Section className="mt-2 items-start">
        <Link href={redirectTo} className="hover:underline focus-visible:underline">
          <Title level="b" className="text-lg">
            {title}
          </Title>
        </Link>
        <Paragraph className="!text-sm">{description}</Paragraph>
      </Section>

      <Section className="mt-2 !flex-row gap-1.5">
        <Section className="!flex-row gap-1.5 text-zinc-400">
          <CalendarEvent width={16} height={16} />
          <Regular className="!text-xs !text-inherit">{locale === "en" ? "Published at:" : "Opublikowano:"}</Regular>
        </Section>
        <Paragraph className="!text-xs">
          {publishedAt.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" })}
        </Paragraph>
      </Section>

      <Section className="!flex-row gap-1.5">
        {tags.map((tag, i) => (
          <Badge key={i} className="!px-2 !py-1 !text-xs" color="indigo" rounded="default">
            {tag}
          </Badge>
        ))}
      </Section>
    </Section>
  );
}

import clsx from "clsx";
import { useLocale } from "next-intl";
import type { ComponentProps } from "react";

import { Link } from "@/next/navigation";
import type { TMetadata } from "@/server/functions/docs/types";
import { CalendarEvent } from "@/shared/icons/design";
import { Badge, Paragraph, Ratio, Regular, Section, Title } from "@/shared/ui";

type NextLinkProps = ComponentProps<typeof Link>;

type TCard = {
  className?: string;
} & Omit<NextLinkProps, "href"> &
  TMetadata;

export default function Card({ title, description, className, thumbnail_img, publishedAt, slug, tags }: TCard) {
  const redirectTo = `/blog/${slug}`;
  const locale = useLocale();

  return (
    <Section
      className={clsx(
        // "items-start gap-3 rounded-3xl border border-zinc-200/50 bg-white p-3 shadow dark:border-zinc-800/50 dark:bg-zinc-900 sm:p-4",
        "items-start gap-3 rounded-3xl",
        className,
      )}
    >
      <Link href={redirectTo} className="w-full rounded-xl">
        <Ratio
          withThemeMode
          resolution="16:9"
          className="overflow-hidden rounded-lg border border-zinc-200/50 dark:border-zinc-800/50"
          src={thumbnail_img}
          alt={title}
        />
      </Link>

      <Badge className="!px-2 !py-1 !text-xs" color="indigo" rounded="default">
        {tags[0]}
      </Badge>

      <Section className="gap-1">
        <Link href={redirectTo}>
          <Title level="b" className="text-lg">
            {title}
          </Title>
        </Link>
        <Paragraph className="!text-sm">{description}</Paragraph>
      </Section>

      <Section className="!flex-row gap-1.5">
        <Section className="!flex-row gap-1.5 text-zinc-400">
          <CalendarEvent width={16} height={16} />
          <Regular className="!text-xs !text-inherit">{locale === "en" ? "Published at:" : "Opublikowano:"}</Regular>
        </Section>
        <Paragraph className="!text-xs">
          {publishedAt.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" })}
        </Paragraph>
      </Section>
    </Section>
  );
}

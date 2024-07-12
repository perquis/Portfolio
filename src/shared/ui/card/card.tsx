import Link from "next/link";
import type { ComponentProps, FC } from "react";

import { Paragraph, Ratio, Section, Title } from "@/shared/ui";

type ImageProps = Pick<ComponentProps<typeof Ratio>, "src" | "alt">;

interface ICard {
  image: ImageProps;
  title: string;
  description: string;
}

type NextLinkProps = ComponentProps<typeof Link>;

export const Card: FC<ICard & Pick<NextLinkProps, "href">> = ({ title, description, image, href }) => {
  return (
    <Section className="gap-4">
      <Link href={href}>
        <Ratio resolution="16:9" className="overflow-hidden rounded-xl" {...image} />
      </Link>
      <Section>
        <Link href={href}>
          <Title level="h6">{title}</Title>
        </Link>
        <Paragraph>{description}</Paragraph>
      </Section>
    </Section>
  );
};

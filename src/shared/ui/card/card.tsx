import Link from "next/link";
import type { ComponentProps } from "react";

import { Paragraph, Ratio, Section, Title } from "@/shared/ui";

type ImageProps = Pick<ComponentProps<typeof Ratio>, "src" | "alt">;
type NextLinkProps = ComponentProps<typeof Link>;

type ICard = {
  image: ImageProps;
  title: string;
  description: string;
} & NextLinkProps;

export default function Card({ title, description, image, href }: ICard) {
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
}

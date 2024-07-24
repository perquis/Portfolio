import clsx from "clsx";
import type { ComponentProps } from "react";

import { Link } from "@/next/navigation";
import { Ratio, Regular, Section, Title } from "@/shared/ui";

type ImageProps = Pick<ComponentProps<typeof Ratio>, "src" | "alt">;
type NextLinkProps = ComponentProps<typeof Link>;

type ICard = {
  image: ImageProps;
  title: string;
  description: string;
  className?: string;
} & NextLinkProps;

export default function Card({ title, description, className, image, href }: ICard) {
  return (
    <Section className={clsx("gap-4", className)}>
      <Link href={href} className="rounded-xl">
        <Ratio resolution="16:9" className="overflow-hidden rounded-xl" {...image} />
      </Link>
      <Section>
        <Link href={href}>
          <Title level="b" className="text-lg">
            {title}
          </Title>
        </Link>
        <Regular className="text-base">{description}</Regular>
      </Section>
    </Section>
  );
}

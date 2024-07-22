import type { ComponentProps, FC } from "react";

import { Avatar, Regular, Section, Title } from "@/shared/ui";

interface Item {
  image: Pick<ComponentProps<typeof Avatar>, "src" | "alt">;
  name: string;
  years: string;
  position: string;
}

interface IExperiencesList {
  items: Item[];
}

export const ExperiencesList: FC<IExperiencesList> = ({ items }) => {
  return (
    <>
      {items.map(({ name, position, years, image }, index) => (
        <Section className="w-full !flex-row justify-between gap-10" key={index}>
          <Section className="!flex-row gap-4">
            <Avatar innerShadow size="medium" rounded="full" {...image} />
            <Section className="gap-1">
              <Title level="b">{name}</Title>
              <Regular className="">{position}</Regular>
            </Section>
          </Section>
          <Regular className="font-medium">{years}</Regular>
        </Section>
      ))}
    </>
  );
};

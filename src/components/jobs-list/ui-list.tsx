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

export const List: FC<IExperiencesList> = ({ items }) => {
  return (
    <>
      {items.map(({ name, position, years, image }, index) => (
        <Section className="w-full !flex-row justify-between gap-10" key={index}>
          <Section className="!flex-row items-center gap-4">
            <Avatar className="!h-10 !w-10 flex-shrink-0" innerShadow size="medium" rounded="full" {...image} />
            <Section>
              <Title level="b">{name}</Title>
              <Regular>{position}</Regular>
            </Section>
          </Section>
          <Regular className="flex-shrink-0 font-medium">{years}</Regular>
        </Section>
      ))}
    </>
  );
};

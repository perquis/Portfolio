import type { FC } from "react";

import { Paragraph, Section, Title } from "@/shared/ui";

interface IWorkflow {
  items: Pick<IItem, "title" | "description">[];
}

export default function Workflows({ items }: IWorkflow) {
  return (
    <Section className="gap-2">
      {items.map((item, index) => (
        <Item key={index} {...item} index={index} last={items.length - 1 === index} />
      ))}
    </Section>
  );
}

interface IItem {
  index?: number;
  title: string;
  description: string;
  last?: boolean;
}

const Item: FC<IItem> = ({ index = 0, title, description, last }) => {
  return (
    <Section>
      <Section className="!flex-row gap-5">
        <Section className="gap-2 justify-start items-center">
          <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-950 dark:text-white flex-shrink-0">
            <span>{index + 1}</span>
          </div>
          {!last && <VerticalLine />}
        </Section>
        <Section className="gap-2">
          <Title level="b">{title}</Title>
          <Paragraph className="!text-zinc-500">{description}</Paragraph>
        </Section>
      </Section>
      {!last && (
        <div className="w-10 h-6 flex justify-center">
          <VerticalLine />
        </div>
      )}
    </Section>
  );
};

const VerticalLine = () => <div className="w-[1px] h-full bg-zinc-100 dark:bg-zinc-900" />;

import { Accordion, Section } from "@/shared/ui";

import { useItems } from "./utils-use-items";

export const QuestionsList = () => {
  const items = useItems();

  return (
    <Section className="gap-3">
      {items.map((item, index) => (
        <Accordion key={index} {...item} />
      ))}
    </Section>
  );
};

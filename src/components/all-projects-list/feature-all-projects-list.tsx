import { CardsList } from "@/components/cards-list/feature-cards-list";
import { Regular, Section, Title } from "@/shared/ui";

export const AllProjectsList = () => {
  const fullYear = new Date().getFullYear();

  return (
    <Section className="gap-5">
      <Section className="!flex-row justify-between">
        <Title level="h6">Portfolio</Title>
        <Regular className="text-base font-medium lg:text-lg xl:text-xl">2020 - {fullYear}</Regular>
      </Section>

      <CardsList />
    </Section>
  );
};

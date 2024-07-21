import { Grid } from "@/shared/icons/design";
import * as stacks from "@/shared/icons/stacks";
import { Paragraph, Section, Title } from "@/shared/ui";

type IconName = keyof typeof stacks;

type ITechnology = {
  icon: IconName;
  name: string;
  content: string;
};

export default function Technology({ icon, name, content }: ITechnology) {
  const Icon = stacks[icon];

  return (
    <Section className="relative flex-1 gap-2 overflow-hidden rounded-xl border border-zinc-300 bg-white p-4 shadow dark:border-zinc-800/50 dark:bg-zinc-950">
      <Icon width={32} height={32} />
      <Section className="z-50 gap-1">
        <Title level="b">{name}</Title>
        <Paragraph className="text-sm">{content}</Paragraph>
      </Section>
      <Grid className="pointer-events-none absolute bottom-0 right-0" />
    </Section>
  );
}

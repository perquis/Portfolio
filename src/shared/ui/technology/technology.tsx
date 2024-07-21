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
    <Section className="relative gap-2 bg-white dark:bg-zinc-950 overflow-hidden rounded-xl dark:border-zinc-800/50 border border-zinc-300 p-4 shadow flex-1">
      <Icon width={32} height={32} />
      <Section className="gap-1 z-50">
        <Title level="b">{name}</Title>
        <Paragraph className="text-sm">{content}</Paragraph>
      </Section>
      <Grid className="absolute right-0 bottom-0 pointer-events-none" />
    </Section>
  );
}

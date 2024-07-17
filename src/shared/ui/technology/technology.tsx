import { Grid } from "@/shared/icons";
import { Avatar, Paragraph, Ratio, Section, Title } from "@/shared/ui";

type RatioProps = Pick<React.ComponentProps<typeof Ratio>, "src" | "alt">;
type ITechnology = {
  avatar: RatioProps;
  name: string;
  content: string;
};

export default function Technology({ avatar, name, content }: ITechnology) {
  return (
    <Section className="relative gap-2 bg-white dark:bg-zinc-900 overflow-hidden rounded-xl dark:border-zinc-800/50 border border-zinc-300 p-4 shadow flex-1">
      <Avatar rounded="default" size="small" className="z-50" {...avatar} />
      <Section className="gap-1 z-50">
        <Title level="b">{name}</Title>
        <Paragraph className="text-sm">{content}</Paragraph>
      </Section>
      <Grid className="absolute right-0 bottom-0 pointer-events-none" />
    </Section>
  );
}

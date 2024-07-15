import clsx from "clsx";
import { match } from "ts-pattern";

import { Checkmark, Danger, Info, Warning } from "@/shared/icons";
import { Paragraph, Section, Title } from "@/shared/ui";

interface ICallout {
  title: string;
  content: string;
  variants: "info" | "warning" | "error" | "success";
}

const icons = [
  { name: "info", Icon: Info },
  { name: "warning", Icon: Warning },
  { name: "error", Icon: Danger },
  { name: "success", Icon: Checkmark },
];

export default function Callout({ title, content, variants }: ICallout) {
  const classes = match(variants)
    .with("info", () => "bg-indigo-50 border-indigo-200 dark:bg-indigo-950 dark:border-indigo-800")
    .with("warning", () => "bg-yellow-50 border-yellow-200 dark:bg-yellow-950 dark:border-yellow-800")
    .with("error", () => "bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800")
    .with("success", () => "bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800")
    .exhaustive();

  const titleColor = match(variants)
    .with("info", () => "!text-indigo-600 dark:!text-indigo-500")
    .with("warning", () => "!text-yellow-600 dark:!text-yellow-500")
    .with("error", () => "!text-red-600 dark:!text-red-500")
    .with("success", () => "!text-green-600 dark:!text-green-500")
    .exhaustive();

  const foundIcon = icons.find((icon) => icon.name === variants)!;

  return (
    <Section className={clsx("!flex-row gap-3 px-5 py-4 rounded-lg border", classes)}>
      <foundIcon.Icon className={titleColor} width={24} height={24} />
      <Section className="gap-1">
        <Title className={titleColor} level="b">
          {title}
        </Title>
        <Paragraph className="text-sm">{content}</Paragraph>
      </Section>
    </Section>
  );
}

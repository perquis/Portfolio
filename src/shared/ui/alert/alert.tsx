import clsx from "clsx";
import { match } from "ts-pattern";

import { statusActions } from "@/data";
import { Paragraph, Section } from "@/shared/ui";

type AlertStataus = (typeof statusActions)[number]["name"];

interface IAlert {
  status: AlertStataus;
  content: string;
}

export default function Alert({ status, content }: IAlert) {
  const foundIcon = statusActions.find((action) => action.name === status)!;
  const textColor = match(status)
    .with("info", () => "bg-blue-500")
    .with("success", () => "bg-green-500")
    .with("warning", () => "bg-yellow-500")
    .with("error", () => "bg-rose-500")
    .otherwise(() => "bg-gray-500");

  return (
    <Section className="max-w-sm !flex-row items-start gap-3 rounded-lg border-t-2 border-zinc-800/50 bg-zinc-900/90 p-3 shadow-md backdrop-blur-xl">
      <div className={clsx("rounded-full p-1 text-white", textColor)}>
        <foundIcon.Icon width={16} height={16} />
      </div>
      <Paragraph className="text-sm !text-white/85">{content}</Paragraph>
    </Section>
  );
}

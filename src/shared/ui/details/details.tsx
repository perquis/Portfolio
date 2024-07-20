import Link from "next/link";
import type { ComponentProps, FC } from "react";
import { match } from "ts-pattern";

import { LinkOut } from "@/shared/icons/design";
import { Badge, Regular, Section } from "@/shared/ui";

interface IDetails {
  items: IItem[];
}

export default function Details({ items }: IDetails) {
  return (
    <Section className="gap-5">
      <Regular className="font-semibold">Project details</Regular>
      <Section className="bg-zinc-100 dark:bg-zinc-900 rounded-xl overflow-hidden">
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </Section>
    </Section>
  );
}

interface IItem {
  type?: "text" | "link" | "badge";
  href?: string;
  label: string;
  content: string;
}

const Item: FC<IItem> = ({ type, href, label, content }) => {
  const html = match(type)
    .with("link", () => (
      <Label>
        <Link
          target="_blank"
          rel="noopenner noreferrer nofollow"
          className="!text-sm flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:!underline focus-visible:!underline"
          href={href ?? ""}
        >
          {content} <LinkOut width={12} height={12} />
        </Link>
      </Label>
    ))
    .with("badge", () => (
      <Label>
        <Badge color="indigo" rounded="full">
          {content}
        </Badge>
      </Label>
    ))
    .otherwise(() => (
      <Regular className="!text-sm font-medium block px-4 py-3.5 !text-zinc-800 dark:!text-zinc-200">
        {content.split("\n").map((v) => (
          <>
            {v}
            <br />
          </>
        ))}
      </Regular>
    ));

  return (
    <Section className="!flex-row border-b items-start border-zinc-200 dark:border-zinc-800 last:border-b-0">
      <Regular className="!text-sm font-medium block px-4 py-3.5 min-w-40">{label}</Regular>
      {html}
    </Section>
  );
};

const Label: FC<ComponentProps<"div">> = ({ children, ...props }) => (
  <div className="px-4 py-3.5" {...props}>
    {children}
  </div>
);

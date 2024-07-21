import Link from "next/link";

import { socials } from "@/data";
import * as icons from "@/shared/icons/design";
import { Section } from "@/shared/ui";

export const SocialsList = () => {
  return (
    <Section className="!flex-row gap-3 flex-wrap">
      {socials.map(({ name, url }, index) => {
        const Icon = icons[name];

        return (
          <Link
            className="rounded-full duration-200 bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:hover:bg-zinc-800 focus-visible:bg-zinc-200 dark:focus-visible:bg-zinc-800 dark:text-zinc-400 items-center dark:bg-zinc-900 flex gap-2 ease-in-out hover:!text-zinc-800 dark:hover:!text-zinc-200 focus-visible:!text-zinc-800 dark:focus-visible:!text-zinc-200 transition-colors px-3 py-2 text-sm"
            target="_blank"
            rel="noopenner noreferrer nofollow"
            href={url}
            key={index}
          >
            <Icon width={16} height={16} /> <span>{url.split("/").at(-1)}</span>
          </Link>
        );
      })}
    </Section>
  );
};

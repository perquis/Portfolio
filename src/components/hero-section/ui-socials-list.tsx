"use client";

import Link from "next/link";

import { ScheduleMeeting } from "@/components";
import { socials } from "@/data";
import { usePathname } from "@/next/navigation";
import * as icons from "@/shared/icons/design";
import { Section } from "@/shared/ui";

export const SocialsList = () => {
  const pathname = usePathname();

  if (pathname === "/blog") return null;

  return (
    <Section className="!flex-row flex-wrap gap-3">
      {socials.map(({ name, url }, index) => {
        const Icon = icons[name];

        return (
          <Link
            className="flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-2 text-sm text-zinc-600 transition-colors duration-200 ease-in-out hover:bg-zinc-200 hover:!text-zinc-800 focus-visible:bg-zinc-200 focus-visible:!text-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:!text-zinc-200 dark:focus-visible:bg-zinc-800 dark:focus-visible:!text-zinc-200"
            target="_blank"
            rel="noopenner noreferrer nofollow"
            href={url}
            key={index}
          >
            <Icon width={16} height={16} /> <span>{url.split("/").at(-1)}</span>
          </Link>
        );
      })}

      {pathname === "/" && <ScheduleMeeting />}
    </Section>
  );
};

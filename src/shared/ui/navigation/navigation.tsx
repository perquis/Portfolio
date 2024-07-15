import type { ComponentProps } from "react";

import { Breadcrumbs, Container, Logo, Section, Tab } from "@/shared/ui";

type INavigation = ComponentProps<typeof Breadcrumbs>;

export default function Navigation({ links }: INavigation) {
  return (
    <nav className="py-2 bg-white/95 dark:bg-zinc-950/95 border-b border-zinc-200 dark:border-zinc-800 fixed top-0 left-0 w-full backdrop-blur-xl">
      <Container className="">
        <Section className="!flex-row justify-between items-center">
          <Logo />
          <Section className="!flex-row gap-3 text-xs">
            {links.map(({ href, label }) => (
              <Tab key={href} href={href}>
                {label}
              </Tab>
            ))}
          </Section>
        </Section>
      </Container>
    </nav>
  );
}

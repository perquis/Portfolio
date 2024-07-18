import type { ComponentProps, FC } from "react";

import { Breadcrumbs, Container, HamburgerMenu, Logo, Section, Tab } from "@/shared/ui";

type INavigation = ComponentProps<typeof Breadcrumbs>;

export default function Navigation({ links }: INavigation) {
  return (
    <nav className="py-2 bg-white/95 dark:bg-zinc-950/95 border-b px-5 sm:px-0 border-zinc-200 dark:border-zinc-800 fixed top-0 left-0 w-full backdrop-blur-xl">
      <Container>
        <Section className="!flex-row justify-between items-center">
          <Logo />
          <Menu links={links} />
          <HamburgerMenu links={links} />
        </Section>
      </Container>
    </nav>
  );
}

const Menu: FC<INavigation> = ({ links }) => {
  return (
    <Section className="!flex-row gap-3 text-xs hidden sm:flex">
      {links.map(({ href, label }) => (
        <Tab key={href} href={href}>
          {label}
        </Tab>
      ))}
    </Section>
  );
};

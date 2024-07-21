"use client";

import { useTranslations } from "next-intl";
import type { ComponentProps, FC } from "react";

import { links } from "@/data";
import { useScrollDirection } from "@/shared/hooks";
import { Breadcrumbs, Container, HamburgerMenu, Logo, Section, Tab, Transition } from "@/shared/ui";

export default function Navigation() {
  const direction = useScrollDirection("y");

  return (
    <Transition
      as="nav"
      transition={{ damping: 30, stiffness: 250 }}
      initial={{ translateY: "-100%" }}
      animate={direction === "up" ? { translateY: 0 } : { translateY: "-100%" }}
      className="py-2 bg-white/95 dark:bg-zinc-950/95 border-b border-zinc-200 dark:border-zinc-800 fixed top-0 left-0 w-full backdrop-blur-xl z-50"
    >
      <Container>
        <Section className="!flex-row justify-between items-center">
          <Logo />
          <Menu links={links} />
          <HamburgerMenu links={links} />
        </Section>
      </Container>
    </Transition>
  );
}

type IMenu = ComponentProps<typeof Breadcrumbs>;

const Menu: FC<IMenu> = ({ links }) => {
  const t = useTranslations();

  return (
    <Section className="!flex-row gap-3 text-xs hidden sm:flex">
      {links.map(({ href, label }) => (
        <Tab key={href} href={href}>
          {/* @ts-ignore */}
          {t(`NAVIGATION_${label.toUpperCase()}`)}
        </Tab>
      ))}
    </Section>
  );
};

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
      className="fixed left-0 top-0 z-50 w-full border-b border-zinc-200 bg-white/95 py-2 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/95"
    >
      <Container>
        <Section className="!flex-row items-center justify-between">
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
    <Section className="hidden !flex-row gap-3 text-xs sm:flex">
      {links.map(({ href, label }) => (
        <Tab key={href} href={href}>
          {/* @ts-ignore */}
          {t(`NAVIGATION_${label.toUpperCase()}`)}
        </Tab>
      ))}
    </Section>
  );
};

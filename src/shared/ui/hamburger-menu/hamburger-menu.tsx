"use client";

import type { MotionProps } from "framer-motion";
import { type ComponentProps, type FC, useRef } from "react";

import { useKey, useOpen, useOutsideOnClick } from "@/shared/hooks";
import type { Breadcrumbs } from "@/shared/ui";
import { Section, Tab, Transition } from "@/shared/ui";

type IHamburgerMenu = ComponentProps<typeof Breadcrumbs>;

// FIXME: This component should be fixed to animate the menu items better.
export default function HamburgerMenu({ links }: IHamburgerMenu) {
  const ref = useRef<HTMLButtonElement>(null);

  const [isOpen, [, close, toggle]] = useOpen();
  useOutsideOnClick(ref, close);
  useKey("Escape", close);

  return (
    <Section className="relative w-fit sm:hidden">
      <button className="relative h-8 w-8 items-center justify-center rounded-lg" onClick={toggle} ref={ref}>
        <Line animate={isOpen ? { translateY: 0, rotate: 45 } : { translateY: 6, rotate: 0 }} />
        <Line animate={isOpen ? { translateY: 0, rotate: -45 } : { translateY: -6, rotate: 0 }} />
      </button>
      {isOpen && (
        <Section className="absolute right-0 top-12 w-64 rounded-xl border border-zinc-300 bg-white p-1 shadow-md dark:border-zinc-800 dark:bg-zinc-950">
          {links.map(({ href, label }, index) => (
            <Tab key={index} className="flex w-full" href={href} onClick={close}>
              {label}
            </Tab>
          ))}
        </Section>
      )}
    </Section>
  );
}

const Line: FC<MotionProps> = (props) => {
  // @ts-expect-error
  return <Transition className="absolute h-[2px] w-full rounded-sm bg-zinc-950 dark:bg-white" {...props} />;
};

"use client";

import type { MotionProps } from "framer-motion";
import { type ComponentProps, type FC, useRef } from "react";

import { useKey, useOpen, useOutsideOnClick } from "@/shared/hooks";
import { Breadcrumbs, Section, Tab, Transition } from "@/shared/ui";

type IHamburgerMenu = ComponentProps<typeof Breadcrumbs>;

// FIXME: This component should be fixed to animate the menu items better.
export default function HamburgerMenu({ links }: IHamburgerMenu) {
  const ref = useRef<HTMLButtonElement>(null);

  const [isOpen, [, close, toggle]] = useOpen();
  useOutsideOnClick(ref, close);
  useKey("Escape", close);

  return (
    <Section className="relative w-fit sm:hidden">
      <button className="relative w-8 h-8 rounded-lg justify-center items-center" onClick={toggle} ref={ref}>
        <Line animate={isOpen ? { translateY: 0, rotate: 45 } : { translateY: 6, rotate: 0 }} />
        <Line animate={isOpen ? { translateY: 0, rotate: -45 } : { translateY: -6, rotate: 0 }} />
      </button>
      {isOpen && (
        <Section className="absolute top-12 right-0 w-64 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 p-1 rounded-xl shadow-md">
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
  // @ts-ignore
  return <Transition className="absolute w-full h-[2px] rounded-sm bg-zinc-950 dark:bg-white" {...props} />;
};

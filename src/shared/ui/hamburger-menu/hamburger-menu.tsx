"use client";

import type { MotionProps } from "framer-motion";
import { type ComponentProps, type FC, useRef } from "react";
import ReactFocusLock from "react-focus-lock";

import { useHideBodyScrollbar, useKey, useOpen, useOutsideOnClick } from "@/shared/hooks";
import type { Breadcrumbs } from "@/shared/ui";
import { Section, Tab, Transition } from "@/shared/ui";

type THamburgerMenu = ComponentProps<typeof Breadcrumbs>;

export default function HamburgerMenu({ links }: THamburgerMenu) {
  const ref = useRef<HTMLButtonElement>(null);

  const [isOpen, [, close, toggle]] = useOpen();
  useOutsideOnClick(ref, close);
  useHideBodyScrollbar(isOpen);
  useKey("Escape", close);

  return (
    <Section className="relative w-fit sm:hidden">
      <ReactFocusLock disabled={!isOpen}>
        <button className="relative h-8 w-8 items-center justify-center rounded-lg" onClick={toggle} ref={ref}>
          <Line animate={isOpen ? { translateY: 0, rotate: 45 } : { translateY: 6, rotate: 0 }} />
          <Line animate={isOpen ? { translateY: 0, rotate: -45 } : { translateY: -6, rotate: 0 }} />
        </button>
        {isOpen && (
          <Section className="absolute right-0 top-12 w-64 rounded-xl border border-zinc-300 bg-white p-1 shadow-md dark:border-zinc-800 dark:bg-zinc-950">
            {links.map(({ Icon, href, label }, index) => (
              <Tab key={index} className="flex w-full gap-3" href={href} onClick={close}>
                <Icon className="size-5" /> {label}
              </Tab>
            ))}
          </Section>
        )}
      </ReactFocusLock>
    </Section>
  );
}

const Line: FC<MotionProps> = (props) => (
  <Transition className="absolute h-[2px] w-full rounded-sm bg-zinc-950 dark:bg-white" {...props} />
);

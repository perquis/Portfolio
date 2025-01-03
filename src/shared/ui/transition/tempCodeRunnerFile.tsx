"use client";

import { type MotionProps, motion } from "framer-motion";
import { type ComponentProps, type ElementType, type ReactNode, createElement } from "react";

type ElementAttributesWithMotion = MotionProps & ComponentProps<"button">;

type MotionElement = ElementAttributesWithMotion & {
  asChild?: ElementType;
  children?: ReactNode;
  className?: string;
};

export default function Motion({ children, asChild = "div", ...props }: MotionElement) {
  const Tag = motion[asChild as keyof typeof motion] as ElementType;
  return createElement(Tag, props, children);
}

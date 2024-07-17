import { type MotionProps, motion } from "framer-motion";
import type { ComponentProps } from "react";

type MotionElement = keyof typeof motion;

export default function Transition<T extends MotionElement>({
  children,
  as = "div",
  ...props
}: MotionProps & ComponentProps<T> & { as?: MotionElement }) {
  const Tag = motion[as];
  // @ts-ignore
  return <Tag {...props}>{children}</Tag>;
}

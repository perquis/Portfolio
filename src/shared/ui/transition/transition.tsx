"use client";

import { type MotionProps, motion } from "framer-motion";
import type { ComponentProps } from "react";
import React from "react";

/* eslint-disable @typescript-eslint/ban-ts-comment */

export default function Transition<T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>>({
  children,
  element = "div" as T,
  ...props
}: MotionProps & ComponentProps<T> & { element?: T }) {
  const Tag = motion[element as keyof typeof motion] as React.ElementType;
  return <Tag {...props}>{children}</Tag>;
}

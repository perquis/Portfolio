"use client";

import { MDXRemote } from "next-mdx-remote";
import type { ComponentProps, FC } from "react";

import {
  Callout,
  Card,
  Container,
  Details,
  Divider,
  Link,
  Paragraph,
  Ratio,
  Regular,
  Section,
  Slider,
  Technology,
  Title,
  Workflows,
} from "@/shared/ui";

const components = {
  Callout,
  Container,
  Title,
  Paragraph,
  Regular,
  Slider,
  Card,
  Divider,
  Link,
  Ratio,
  Section,
  Technology,
  Details,
  Workflows,
};

type INextMDXRemote = ComponentProps<typeof MDXRemote>;

export const NextMDXRemote: FC<INextMDXRemote> = (props) => {
  return <MDXRemote {...props} components={components} />;
};

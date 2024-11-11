"use client";

import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote";
import type { ComponentProps, FC } from "react";

import {
  Accordion,
  ArrowLink,
  Badge,
  Breadcrumbs,
  Callout,
  Card,
  Code,
  CodeBlock,
  CodeSandbox,
  Container,
  Details,
  Divider,
  Link,
  MotionPicture,
  Page,
  Paragraph,
  Ratio,
  Regular,
  Section,
  Slider,
  Technology,
  Title,
  VideoPlayer,
  Workflows,
} from "@/shared/ui";

const components: MDXRemoteProps["components"] = {
  Code,
  Badge,
  CodeBlock,
  Paragraph,
  Breadcrumbs,
  Callout,
  Accordion,
  Container,
  Title,
  Regular,
  Page,
  ArrowLink,
  Slider,
  Card,
  Divider,
  Link,
  Ratio,
  Section,
  Technology,
  Details,
  Workflows,
  MotionPicture,
  VideoPlayer,
  CodeSandbox,

  p: (props) => <Paragraph {...props} />,
};

type TNextMDXRemote = ComponentProps<typeof MDXRemote>;

export const NextMDXRemote: FC<TNextMDXRemote> = (props) => {
  return <MDXRemote {...props} components={components} />;
};

"use client";

import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote";
import type { ComponentProps, FC } from "react";

import {
  Accordion,
  ArrowLink,
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
  Workflows,
  YoutubePlayer,
} from "@/shared/ui";

const components: MDXRemoteProps["components"] = {
  Code,
  CodeBlock,
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
  YoutubePlayer,
  CodeSandbox,

  p: (props) => <Paragraph {...props} />,
};

type TNextMDXRemote = ComponentProps<typeof MDXRemote>;

export const NextMDXRemote: FC<TNextMDXRemote> = (props) => {
  return <MDXRemote {...props} components={components} />;
};

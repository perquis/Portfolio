"use client";

import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote";
import type { ComponentProps, FC } from "react";

import {
  Callout,
  Card,
  Code,
  CodeBlock,
  Container,
  Details,
  Divider,
  Link,
  MotionPicture,
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
  CodeBlock,
  Callout,
  Container,
  Title,
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
  MotionPicture,
  VideoPlayer,

  p: (props) => <Paragraph {...props} />,
};

type TNextMDXRemote = ComponentProps<typeof MDXRemote>;

export const NextMDXRemote: FC<TNextMDXRemote> = (props) => {
  return <MDXRemote {...props} components={components} />;
};

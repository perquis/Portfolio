"use client";

import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote";
import type { ComponentProps, FC } from "react";
import Zoom from "react-medium-image-zoom";

import * as components from "@/shared/ui";

// @ts-ignore
const mdxComponents: MDXRemoteProps["components"] = {
  Zoom,
  ...components,
  // @ts-ignore
  p: (props) => <components.Paragraph {...props} />,
};

type TNextMDXRemote = ComponentProps<typeof MDXRemote>;

export const NextMDXRemote: FC<TNextMDXRemote> = (props) => {
  return <MDXRemote {...props} components={mdxComponents} />;
};

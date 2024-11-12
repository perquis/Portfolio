"use client";

import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote";
import type { ComponentProps, FC } from "react";

import * as components from "@/shared/ui";

const mdxComponents: MDXRemoteProps["components"] = {
  ...components,
  p: (props) => <components.Paragraph {...props} />,
};

type TNextMDXRemote = ComponentProps<typeof MDXRemote>;

export const NextMDXRemote: FC<TNextMDXRemote> = (props) => {
  return <MDXRemote {...props} components={mdxComponents} />;
};

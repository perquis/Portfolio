"use client";

import type { PropsWithChildren } from "react";

import { RootTemplate, SlugTemplate } from "@/templates";
import { usePathname } from "@/third-party/next-intl";

export default function Template({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const [, slug] = pathname.split("/").filter(Boolean);
  const Component = slug ? SlugTemplate : RootTemplate;

  return <Component>{children}</Component>;
}

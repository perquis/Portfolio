"use client";

import type { PropsWithChildren } from "react";

import { usePathname } from "@/next/navigation";
import { RootTemplate, SlugTemplate } from "@/templates";

export default function Template({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const [, slug] = pathname.split("/").filter(Boolean);
  const Component = slug ? SlugTemplate : RootTemplate;

  return <Component>{children}</Component>;
}

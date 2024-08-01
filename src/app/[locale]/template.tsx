"use client";

import type { PropsWithChildren } from "react";

import { usePathname } from "@/next/navigation";
import { PageBackground } from "@/shared/icons/design/page-background";
import { Cursor, Navigation } from "@/shared/ui";
import { RootTemplate, SlugTemplate } from "@/templates";

export default function Template({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const [, slug] = pathname.split("/").filter(Boolean);
  const Component = slug ? SlugTemplate : RootTemplate;

  return (
    <>
      <Navigation />
      <PageBackground />
      <Component>{children}</Component>
      <Cursor />
    </>
  );
}

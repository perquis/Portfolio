"use client";

import type { PropsWithChildren } from "react";

import { usePathname } from "@/libs/next-intl";
import { Container, Layout, Page } from "@/shared/ui";

export default function Template({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const [, slug] = pathname.split("/").filter(Boolean);

  const Component = slug ? (
    <Layout>
      <Page>{children}</Page>
    </Layout>
  ) : (
    <Container>
      <Page>{children}</Page>
    </Container>
  );

  return Component;
}

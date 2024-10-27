import type { PropsWithChildren } from "react";

import { Container, Divider, Footer, Page } from "@/shared/ui";

export default function RootTemplate({ children }: PropsWithChildren) {
  return (
    <Container>
      <Page>
        {children}
        <Divider />
        <Footer />
      </Page>
    </Container>
  );
}

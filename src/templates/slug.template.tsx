import type { PropsWithChildren } from "react";

import { ContactForm } from "@/components";
import { Container, Divider, Footer, Page } from "@/shared/ui";

export default function SlugTemplate({ children }: PropsWithChildren) {
  return (
    <Page>
      <Container className="flex flex-col gap-10">{children}</Container>
      <Container className="flex flex-col gap-10">
        <Divider />
        <ContactForm />
        <Divider />
        <Footer />
      </Container>
    </Page>
  );
}

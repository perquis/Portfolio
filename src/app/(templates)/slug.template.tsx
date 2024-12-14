import type { PropsWithChildren } from "react";

import { ContactForm } from "@/components";
import { Container, Footer, Page } from "@/shared/ui";
import { withDividers } from "@/shared/utils";

const components = withDividers([ContactForm, Footer]);

export default function SlugTemplate({ children }: PropsWithChildren) {
  return (
    <Page>
      {children}
      <Container className="flex flex-col gap-10">
        {components.map((Component, index) => (
          <Component key={index} />
        ))}
      </Container>
    </Page>
  );
}

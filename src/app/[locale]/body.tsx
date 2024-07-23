import type { FC, PropsWithChildren } from "react";

import { ContactForm, PostsList } from "@/components";
import { docs } from "@/server/functions";
import { PageBackground } from "@/shared/icons/design/page-background";
import { Container, Divider, Footer, Navigation, Page } from "@/shared/ui";

export const Body: FC<PropsWithChildren> = async ({ children }) => {
  const slug = await docs.getServerSideSlug();

  const html = slug ? (
    <Page>
      {children}
      <Container className="flex flex-col gap-10">
        <PostsList />
        <Divider />
        <ContactForm />
        <Divider />
        <Footer />
      </Container>
    </Page>
  ) : (
    <Container>
      <Page>
        {children}
        <Divider />
        <Footer />
      </Page>
    </Container>
  );

  return (
    <>
      <Navigation />
      <PageBackground />
      {html}
    </>
  );
};

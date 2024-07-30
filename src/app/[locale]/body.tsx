import type { FC, PropsWithChildren } from "react";

import { ReactPortal } from "@/app/[locale]/react-portal";
import { ContactForm, PostsList } from "@/components";
import { docs } from "@/server/functions";
import { PageBackground } from "@/shared/icons/design/page-background";
import { Container, Cursor, Divider, Footer, Navigation, Page } from "@/shared/ui";

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Navigation />
    <PageBackground />
    {children}
    <Cursor />
    <ReactPortal />
  </>
);

const WithSlugPage: FC<PropsWithChildren> = ({ children }) => (
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
);

const WithoutSlugPage: FC<PropsWithChildren> = ({ children }) => (
  <Container>
    <Page>
      {children}
      <Divider />
      <Footer />
    </Page>
  </Container>
);

export const Body: FC<PropsWithChildren> = async ({ children }) => {
  const slug = await docs.getServerSideSlug();

  if (slug) {
    return (
      <Layout>
        <WithSlugPage>{children}</WithSlugPage>
      </Layout>
    );
  }

  return (
    <Layout>
      <WithoutSlugPage>{children}</WithoutSlugPage>
    </Layout>
  );
};

import type { FC, PropsWithChildren } from "react";

import { ReactPortal } from "@/app/[locale]/react-portal";
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

export const Body: FC<PropsWithChildren> = async ({ children }) => {
  return (
    <Layout>
      <Container>
        <Page>
          {children}
          <Divider />
          <Footer />
        </Page>
      </Container>
    </Layout>
  );
};

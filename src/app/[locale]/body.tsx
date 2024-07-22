import type { FC, PropsWithChildren } from "react";

import { getServerSideSlug } from "@/server/functions";
import { Container, Divider, Footer, Page } from "@/shared/ui";

export const Body: FC<PropsWithChildren> = async ({ children }) => {
  const slug = await getServerSideSlug();

  return slug ? (
    <Page>
      {children}
      <Container className="flex flex-col gap-10">
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
};

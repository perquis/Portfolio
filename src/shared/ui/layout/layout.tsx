import type { PropsWithChildren } from "react";
import { Children, Fragment, isValidElement } from "react";

import { Container, Divider, Footer, Section } from "@/shared/ui";

export default function Layout({ children }: PropsWithChildren) {
  const extractedChildren = Children.toArray(children).filter(
    (Child) => isValidElement(Child) && typeof Child.type === "function" && (Child as JSX.Element).type(Child.props),
  );

  const pageComponents = [
    ...extractedChildren,
    <Container key={crypto.randomUUID()}>
      <Footer />
    </Container>,
  ];

  return (
    <Section className="gap-10">
      {pageComponents.map((Child) => {
        return (
          <Fragment key={crypto.randomUUID()}>
            {isValidElement(Child) && Child}
            {Child !== pageComponents.at(-1) ? <Divider /> : null}
          </Fragment>
        );
      })}
    </Section>
  );
}

import type { PropsWithChildren } from "react";
import { Children, Fragment, isValidElement } from "react";

import { Container, Divider, Footer, Section } from "@/shared/ui";
import { snake_case } from "@/shared/utils";

export default function Layout({ children }: PropsWithChildren) {
  const extractedChildren = Children.toArray(children);
  const pageComponents = [
    ...extractedChildren,
    <Container key={crypto.randomUUID()}>
      <Footer />
    </Container>,
  ];

  return (
    <Section className="gap-10">
      {pageComponents
        .filter((Child) => {
          const Component = Child as { type: { name: string } };
          const sharedComponentIdentifier = snake_case(Component.type.name);
          const runtimeEnvKey =
            process.env[sharedComponentIdentifier?.toUpperCase()] ??
            process.env[`NEXT_PUBLIC_${sharedComponentIdentifier?.toUpperCase()}`];

          return runtimeEnvKey !== "true";
        })
        .map((Child) => {
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

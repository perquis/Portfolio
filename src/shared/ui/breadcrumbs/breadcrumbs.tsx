import React from "react";

import { Link, Section } from "@/shared/ui";

type IBreadcrumb = (typeof import("@/data").links)[number];

export default function Breadcrumbs({ links }: Record<"links", IBreadcrumb[]>) {
  return (
    <Section className="!flex-row gap-2">
      {links.map(({ label, href }, i) => (
        <React.Fragment key={i}>
          <Link href={href}>{label}</Link>
          {i < links.length - 1 && <Dash />}
        </React.Fragment>
      ))}
    </Section>
  );
}

const Dash = () => <span className="block text-center w-5 text-zinc-500">/</span>;

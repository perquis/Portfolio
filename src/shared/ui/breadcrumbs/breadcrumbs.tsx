import type { FC } from "react";
import React from "react";

import { Link, Section } from "@/shared/ui";

interface IBreadcrumb {
  label: string;
  href: string;
}

export const Breadcrumbs: FC<Record<"links", IBreadcrumb[]>> = ({ links }) => {
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
};

const Dash = () => <span className="block text-center w-5 text-zinc-500">/</span>;

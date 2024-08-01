import type { FC } from "react";

import type { TMetadata } from "@/server/functions/docs/docs";
import { Card } from "@/shared/ui";

export const List: FC<Record<"items", TMetadata[]>> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Card key={item.slug} {...item} />
      ))}
    </>
  );
};

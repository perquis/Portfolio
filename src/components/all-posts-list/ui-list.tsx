import type { FC } from "react";

import type { IDocsItem } from "@/server/functions/docs/docs";
import { Card } from "@/shared/ui";

export const List: FC<Record<"items", IDocsItem[]>> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Card key={item.slug} {...item} />
      ))}
    </>
  );
};

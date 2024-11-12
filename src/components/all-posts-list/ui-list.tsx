import type { FC } from "react";

import { Card } from "@/shared/ui";
import type { TMetadata } from "@/shared/utils/docs/types";

export const List: FC<Record<"items", TMetadata[]>> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Card key={item.slug} {...item} />
      ))}
    </>
  );
};

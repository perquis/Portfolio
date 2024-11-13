"use client";

import { useQueryState } from "nuqs";
import type { FC } from "react";

import type { TMetadata } from "@/interfaces/markdown";
import { Card } from "@/shared/ui";

export const List: FC<Record<"items", TMetadata[]>> = ({ items }) => {
  const [q] = useQueryState("q");

  return (
    <>
      {items
        .filter(({ title }) => title.toLowerCase().includes(q?.toLowerCase() ?? ""))
        .map((item) => (
          <Card key={item.slug} {...item} />
        ))}
    </>
  );
};

import type { ComponentProps } from "react";

import type { List } from "./ui-list";

type TUseItems = ComponentProps<typeof List>["items"];

export const useItems = (): TUseItems => {
  return [];
};

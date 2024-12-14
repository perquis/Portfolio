import type { FC, FunctionComponent } from "react";

import { Divider } from "@/shared/ui";

export const withDividers = (components: FC[]) => {
  const componentsWithDividers = components.reduce((composedComponents: FunctionComponent<{}>[], Component, index) => {
    if (index === 0) return [Component];
    if (typeof Component !== "function") return composedComponents; // skip Divider when the component return null

    return [...composedComponents, Divider, Component];
  }, []);

  return componentsWithDividers as unknown as FC[];
};

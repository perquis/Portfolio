import { useState } from "react";

import { slides } from "@/data";
import type { Nullable } from "@/interfaces/utility-types";

export const usePopup = (page: number) => {
  const [selectedId, setSelectedId] = useState<Nullable<string>>(null),
    close = () => setSelectedId(null),
    slide = slides[page];

  return {
    slide,
    close,
    selectedId,
    setSelectedId,
  };
};

import { useState } from "react";

import { slides } from "@/data";

export const usePopup = (page: number) => {
  const [selectedId, setSelectedId] = useState<string | null>(null),
    close = () => setSelectedId(null),
    slide = slides[page];

  return {
    slide,
    close,
    selectedId,
    setSelectedId,
  };
};

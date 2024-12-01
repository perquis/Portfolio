"use client";

import { useCallback, useState } from "react";

export default function useOpen(isActive = false) {
  const [isOpen, setIsOpen] = useState(isActive);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return [isOpen, [open, close, toggle]] as const;
}

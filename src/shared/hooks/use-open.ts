import { useState } from "react";

export const useOpen = (isActive = false) => {
  const [isOpen, setIsOpen] = useState(isActive);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return [isOpen, [open, close, toggle]] as const;
};

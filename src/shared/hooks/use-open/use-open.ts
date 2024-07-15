import { useState } from "react";

export default function useOpen(isActive = false) {
  const [isOpen, setIsOpen] = useState(isActive);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return [isOpen, [open, close, toggle]] as const;
}

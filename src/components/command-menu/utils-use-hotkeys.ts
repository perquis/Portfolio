import { useEventCallback, useOpen } from "@/shared/hooks";

export const useHotkeys = () => {
  const [isOpen, [, , toggle]] = useOpen();

  const down = (e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      toggle();
    }
  };

  useEventCallback({ eventName: "keydown", callback: down });

  return { isOpen, toggle };
};

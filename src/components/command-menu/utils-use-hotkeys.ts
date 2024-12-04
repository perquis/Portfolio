import { useCommandMenu } from "@/components/command-menu/context-command-menu-provider";
import { useEventCallback, useOpen } from "@/shared/hooks";

export const useHotkeys = () => {
  const { setSearchQuery } = useCommandMenu();
  const [isOpen, [, , toggle]] = useOpen();

  const down = (e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setSearchQuery("");
      toggle();
    }
  };

  useEventCallback({ eventName: "keydown", callback: down });

  return { isOpen, toggle };
};

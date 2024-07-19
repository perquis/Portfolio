import { useEffect } from "react";

export default function useHideBodyScrollbar(isActive: boolean) {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isActive]);
}

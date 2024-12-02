import { useMemo } from "react";

import { usePlatform } from "@/shared/hooks";

export default function useIsMobile() {
  const { platform } = usePlatform();
  const isMobile = useMemo(() => {
    if (!platform) return false;
    return platform === "iOS" || platform === "Android";
  }, [platform]);

  return { isMobile };
}

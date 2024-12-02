import { useMemo } from "react";

import { usePlatform } from "@/shared/hooks";

export default function useIsMobile() {
  const { platform } = usePlatform();
  const isMobile = useMemo(() => platform && (platform === "iOS" || platform === "Android"), [platform]);

  return { isMobile };
}

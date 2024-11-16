"use client";

import { type PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from "react";

import type { Nullable } from "@/interfaces/utility-types";

type Platform = "mobile" | "desktop";
type PlatformOrNull = Nullable<Platform>;

interface TDeviceContext {
  platform: PlatformOrNull;
}

const DeviceContext = createContext<TDeviceContext>({
  platform: null,
});

export default function DeviceProvider({ children }: PropsWithChildren) {
  const [platform, setPlatform] = useState<PlatformOrNull>(null);

  useEffect(() => {
    const { userAgent } = navigator;
    const os = userAgent.includes("Mobi") ? "mobile" : "desktop";

    setPlatform(os);
  }, []);

  const value = useMemo(() => ({ platform }), [platform]);

  return <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>;
}

export const usePlatform = () => useContext(DeviceContext).platform!;

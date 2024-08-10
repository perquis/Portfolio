"use client";

import { type PropsWithChildren, createContext, useContext, useEffect, useState } from "react";

type Platform = "mobile" | "desktop";
type PlatformOrNull = Platform | null;

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

  return <DeviceContext.Provider value={{ platform }}>{children}</DeviceContext.Provider>;
}

export const usePlatform = () => useContext(DeviceContext).platform!;

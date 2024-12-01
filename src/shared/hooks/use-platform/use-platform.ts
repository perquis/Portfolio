import { useState } from "react";

function getCurrentOS() {
  const userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"];

  let os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "Mac OS" as const;
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "iOS" as const;
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "Windows" as const;
  } else if (/Android/.test(userAgent)) {
    os = "Android" as const;
  } else if (!os && /Linux/.test(platform)) {
    os = "Linux" as const;
  }

  return os;
}

const usePlatform = () => {
  const [platform] = useState<ReturnType<typeof getCurrentOS>>(getCurrentOS());
  return platform;
};

export default usePlatform;

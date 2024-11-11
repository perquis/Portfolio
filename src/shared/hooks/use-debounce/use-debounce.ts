import { useEffect } from "react";

export const useDebounce = (delayedFn: () => void, time = 500) => {
  useEffect(() => {
    const timeoutId = setTimeout(delayedFn, time);
    return () => clearTimeout(timeoutId);
  }, [delayedFn, time]);
};

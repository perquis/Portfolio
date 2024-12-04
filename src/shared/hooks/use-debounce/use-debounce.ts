import { useEffect } from "react";

const useDebounce = (delayedFn: () => void, time = 500) => {
  useEffect(() => {
    const timeoutId = setTimeout(delayedFn, time);
    return () => clearTimeout(timeoutId);
  }, [delayedFn, time]);
};

export default useDebounce;

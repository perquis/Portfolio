import { useCallback, useState } from "react";

export enum InteractiveStatus {
  IDLE = "IDLE",
  ERROR = "ERROR",
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
}

type InteractiveStatusKey = keyof typeof InteractiveStatus;

export default function useInteractiveActions() {
  const [status, setStatus] = useState<
    InteractiveStatus | InteractiveStatusKey
  >(InteractiveStatus.IDLE);

  const setLoading = useCallback(
      () => setStatus(InteractiveStatus.LOADING),
      [],
    ),
    setError = useCallback(() => setStatus(InteractiveStatus.ERROR), []),
    setSuccess = useCallback(() => setStatus(InteractiveStatus.SUCCESS), []),
    resetStatus = useCallback(() => setStatus(InteractiveStatus.IDLE), []);

  return [
    status,
    {
      resetStatus,
      setLoading,
      setSuccess,
      setError,
    },
  ] as const;
}

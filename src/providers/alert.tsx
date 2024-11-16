"use client";

import {
  type ComponentProps,
  type PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createPortal } from "react-dom";

import { Alert } from "@/shared/ui";

type TAlertProvider = { alert: AlertOrNull; setAlert: (alert: AlertOrNull) => void };
type TAlertContext = ComponentProps<typeof Alert> | null;
type AlertOrNull = TAlertContext | null;

const AlertContext = createContext<TAlertProvider | null>(null);

export default function AlertProvider({ children }: PropsWithChildren) {
  const [alert, setAlert] = useState<AlertOrNull>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setAlert(null), 10000);
    return () => clearTimeout(timeout);
  }, [alert]);

  const value = useMemo(() => ({ alert, setAlert }), [alert]);

  return (
    <AlertContext.Provider value={value}>
      {children}
      {alert && createPortal(<Alert {...alert} />, document.getElementById("alerts")!)}
    </AlertContext.Provider>
  );
}

export const useAlert = () => useContext(AlertContext)!;
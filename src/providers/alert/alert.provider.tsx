"use client";

import { type ComponentProps, type PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { Alert } from "@/shared/ui";

type IAlertProvider = { alert: AlertOrNull; setAlert: (alert: AlertOrNull) => void };
type IAlertContext = ComponentProps<typeof Alert> | null;
type AlertOrNull = IAlertContext | null;

const AlertContext = createContext<IAlertProvider | null>(null);

export default function AlertProvider({ children }: PropsWithChildren) {
  const [alert, setAlert] = useState<AlertOrNull>(null);

  useEffect(() => {
    const timeout = setTimeout(() => setAlert(null), 10000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
      {alert && createPortal(<Alert {...alert} />, document.getElementById("alerts")!)}
    </AlertContext.Provider>
  );
}

export const useAlert = () => useContext(AlertContext)!;

"use client";

import { type PropsWithChildren, createContext, useContext, useMemo, useState } from "react";

import type { Nullable } from "@/interfaces/utility-types";

interface IKeywordsProvider {
  keywords: Nullable<string>;
  setKeywords: (alert: Nullable<string>) => void;
}

const KeywordsContext = createContext<IKeywordsProvider | null>(null);

export default function KeywordsProvider({ children }: PropsWithChildren) {
  const [keywords, setKeywords] = useState<Nullable<string>>(null);
  const value = useMemo(() => ({ keywords, setKeywords }), [keywords]);

  return <KeywordsContext.Provider value={value}>{children}</KeywordsContext.Provider>;
}

export const useKeywords = () => useContext(KeywordsContext)!;

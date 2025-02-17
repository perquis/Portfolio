import { type PropsWithChildren, createContext, useContext } from "react";

import type { Nullable } from "@/interfaces/utility-types";
import type * as stacks from "@/shared/icons/programming-languages";

type IconName = keyof typeof stacks;

export interface CodeComparisonContext {
  beforeCode: string;
  afterCode: string;
  language: string;
  icon: IconName;
  filename: string;
}

const CodeComparisonContext =
  createContext<Nullable<CodeComparisonContext>>(null);

export const CodeComparisonProvider = ({
  children,
  ...props
}: PropsWithChildren & CodeComparisonContext) => (
  <CodeComparisonContext value={props}>{children}</CodeComparisonContext>
);

export const useCodeComparisonContext = () => useContext(CodeComparisonContext);

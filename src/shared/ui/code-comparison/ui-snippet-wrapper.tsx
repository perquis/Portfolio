import { type PropsWithChildren, useMemo } from "react";

import * as stacks from "@/shared/icons/programming-languages";
import { useCodeComparisonContext } from "@/shared/ui/code-comparison/provider-code-comparison";

type SnippetWrapperProps = PropsWithChildren & { label: string };

export const SnippetWrapper = ({ children, label }: SnippetWrapperProps) => {
  const { filename, icon } = useCodeComparisonContext()!;

  const icons = useMemo(() => stacks, []),
    Icon = icons[icon];

  return (
    <div className="grid grid-flow-row auto-rows-max md:block">
      <div className="flex items-center bg-accent px-4 py-2 text-sm text-foreground">
        <div className="flex items-center gap-2">
          <Icon width={20} height={20} />
          {filename}
        </div>
        <span className="ml-auto">{label}</span>
      </div>
      {children}
    </div>
  );
};

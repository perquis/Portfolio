import type { PropsWithChildren } from "react";

export default function KeyBind({ children }: PropsWithChildren) {
  return (
    <kbd className="pointer-events-none my-auto inline-flex select-none items-center gap-1 rounded border bg-background px-1.5 py-2 font-mono text-[10px] font-medium leading-none text-muted-foreground opacity-100">
      {children}
    </kbd>
  );
}

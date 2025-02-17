import type { ComponentProps } from "react";

export const FormattedSnippetsCode = (props: ComponentProps<"div">) => (
  <div
    className="h-full overflow-auto bg-background font-mono text-sm [&>pre]:h-full [&>pre]:!border-none [&>pre]:!bg-transparent [&>pre]:!p-4 [&_code]:break-all"
    {...props}
  />
);

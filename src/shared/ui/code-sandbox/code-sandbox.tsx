"use client";

import { Sandpack } from "@codesandbox/sandpack-react";
import { useTheme } from "next-themes";
import type { ComponentProps } from "react";

type TCodeSandbox = ComponentProps<typeof Sandpack>;

export default function CodeSandbox(props: Omit<TCodeSandbox, "theme">) {
  const { systemTheme } = useTheme();

  return (
    <div className="sandpack">
      <Sandpack
        template="nextjs"
        options={{
          showConsole: true,
        }}
        theme={systemTheme}
        {...props}
      />
    </div>
  );
}

import clsx from "clsx";
import { Fragment } from "react";

import { CopyToClipboard } from "@/shared/ui";
import { getVisibilityClass, highlightCode } from "@/shared/utils";

/**
 * You can visit examples here https://github.com/rehype-pretty/rehype-pretty-code/blob/master/examples/next/src/app/rsc/page.tsx.
 */
export default async function Code({ code }: { code: string }) {
  const renderedCodeHtml = await highlightCode(code);

  return (
    <div className="relative">
      {renderedCodeHtml.map(({ __html, theme }, i) => (
        <Fragment key={i}>
          <div
            className={clsx("w-full", getVisibilityClass(theme))}
            dangerouslySetInnerHTML={{
              __html,
            }}
          />
          <CopyToClipboard code={__html} />
        </Fragment>
      ))}
    </div>
  );
}

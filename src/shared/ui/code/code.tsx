import { CopyToClipboard } from "@/shared/ui";
import { highlightCode } from "@/shared/utils";

/**
 * You can visit examples here https://github.com/rehype-pretty/rehype-pretty-code/blob/master/examples/next/src/app/rsc/page.tsx.
 */
export default async function Code({ code }: { code: string }) {
  const __html = await highlightCode(code);

  return (
    <div className="relative">
      <div
        className="w-full"
        dangerouslySetInnerHTML={{
          __html,
        }}
      />
      <CopyToClipboard code={__html} />
    </div>
  );
}

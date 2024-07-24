import { highlightCode } from "@/server/functions/code/highlights";

/**
 * You can visit examples here https://github.com/rehype-pretty/rehype-pretty-code/blob/master/examples/next/src/app/rsc/page.tsx.
 */
export default async function Code({ code }: { code: string }) {
  const __html = await highlightCode(code);

  return (
    <div
      className="w-full"
      dangerouslySetInnerHTML={{
        __html,
      }}
    />
  );
}

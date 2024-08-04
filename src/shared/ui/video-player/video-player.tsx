import type { ComponentProps } from "react";

export default function VideoPlayer(props: ComponentProps<"iframe">) {
  return (
    <iframe
      {...props}
      className="aspect-video w-full overflow-hidden rounded-xl"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}

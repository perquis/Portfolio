"use client";

import { type ComponentProps } from "react";

type TMotionPicture = ComponentProps<"video">;

export default function MotionPicture(props: TMotionPicture) {
  return (
    <video
      muted
      loop
      autoPlay
      className="aspect-video w-full overflow-hidden rounded-lg border dark:border-zinc-800/50"
      {...props}
    ></video>
  );
}

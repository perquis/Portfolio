import clsx from "clsx";
import Image from "next/image";
import type { ComponentProps } from "react";

import { getAspectRatio } from "./get-aspect-ratio";

type IImage = {
  resolution: Resolution;
  src: string;
  alt: string;
} & ComponentProps<"div">;

export default function Ratio({ src, alt, className = "w-full", resolution, ...props }: IImage) {
  const style = getAspectRatio(resolution);

  return (
    <div className={clsx("relative", className)} style={style} {...props}>
      <Image fill src={src} alt={alt} />
    </div>
  );
}

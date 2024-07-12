import clsx from "clsx";
import Image from "next/image";
import type { ComponentProps, FC } from "react";

import { getAspectRatio } from "./get-aspect-ratio";

interface IImage {
  resolution: Resolution;
  src: string;
  alt: string;
}

export const Ratio: FC<IImage & ComponentProps<"div">> = ({ src, alt, className = "w-full", resolution, ...props }) => {
  const style = getAspectRatio(resolution);

  return (
    <div className={clsx("relative", className)} style={style} {...props}>
      <Image fill src={src} alt={alt} />
    </div>
  );
};

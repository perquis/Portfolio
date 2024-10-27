"use client";

import clsx from "clsx";
import { useTheme } from "next-themes";
import Image from "next/legacy/image";
import type { ComponentProps } from "react";

import type { Resolution } from "@/interfaces/variants.interface";

import { getAspectRatio } from "./get-aspect-ratio";

type TImage = {
  resolution: Resolution;
  src: string;
  alt: string;
  withThemeMode?: boolean;
} & ComponentProps<"div">;

const isHttpProtocol = /(http(s?)):\/\//i;

export default function Ratio({ src, alt, className = "w-full", resolution, withThemeMode, ...props }: TImage) {
  const style = getAspectRatio(resolution);

  const { systemTheme } = useTheme(),
    fileName = src.split("/").at(-1)!,
    image = isHttpProtocol.test(src) ? src : src.replace(fileName, `${systemTheme}/${fileName}`);

  return (
    <div className={clsx("relative", className)} style={style} {...props}>
      <Image layout="fill" objectFit="cover" unoptimized priority src={withThemeMode ? image : src} alt={alt} />
    </div>
  );
}

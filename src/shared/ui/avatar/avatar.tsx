import clsx from "clsx";
import { match } from "ts-pattern";

import { Ratio } from "@/shared/ui";

type RatioProps = React.ComponentProps<typeof Ratio>;
type IAvatar = Omit<RatioProps, "resolution"> & {
  rounded: Rounded;
  size: Size;
};

export default function Avatar({ rounded = "full", size = "medium", ...props }: IAvatar) {
  const className = match({ rounded, size })
    .with({ rounded: "full", size: "large" }, () => "rounded-full h-16 w-16")
    .with({ rounded: "full", size: "medium" }, () => "rounded-full h-12 w-12")
    .with({ rounded: "full", size: "small" }, () => "rounded-full h-8 w-8")
    .with({ rounded: "full", size: "tiny" }, () => "rounded-full h-6 w-6")
    .with({ rounded: "default", size: "large" }, () => "rounded-2xl h-16 w-16")
    .with({ rounded: "default", size: "medium" }, () => "rounded-xl h-12 w-12")
    .with({ rounded: "default", size: "small" }, () => "rounded-lg h-8 w-8")
    .with({ rounded: "default", size: "tiny" }, () => "rounded-md h-6 w-6")
    .run();

  return <Ratio resolution="1:1" className={clsx("overflow-hidden shadow-inner", className)} {...props} />;
}

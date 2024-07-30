import type { ComponentProps } from "react";

import { Link } from "@/next/navigation";
import * as icons from "@/shared/icons/design";

type TArrowLink = ComponentProps<typeof Link>;

export default function ArrowLink({ children, ...props }: Omit<TArrowLink, "className">) {
  return (
    <Link className="flex gap-2 text-sm font-medium hover:underline focus-visible:underline" {...props}>
      {children} <icons.ArrowLineRight width={20} height={20} />
    </Link>
  );
}

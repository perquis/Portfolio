import type { FC } from "react";

import { Motion } from "@/shared/ui";

interface IPage {
  isActive?: boolean;
}

export const Page: FC<IPage> = ({ isActive }) => {
  return (
    <Motion
      className={"h-2 w-2 rounded-full bg-zinc-950 dark:bg-white"}
      animate={isActive ? { opacity: 1 } : { opacity: 0.5 }}
    />
  );
};

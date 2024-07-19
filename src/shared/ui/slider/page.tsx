import type { FC } from "react";

import { Transition } from "@/shared/ui";

interface IPage {
  isActive?: boolean;
}

export const Page: FC<IPage> = ({ isActive }) => {
  return (
    <Transition
      className={"w-2 h-2 rounded-full bg-zinc-950 dark:bg-white"}
      animate={isActive ? { opacity: 1 } : { opacity: 0.5 }}
    />
  );
};

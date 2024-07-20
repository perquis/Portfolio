import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

import * as stacks from "@/shared/icons/stacks";
import { Section } from "@/shared/ui";

type IconName = keyof typeof stacks;

interface Control {
  icon: IconName;
  name: string;
}

type ISegmentedControl = Record<"controls", Control[]>;

export default function SegmentedControl({ controls }: ISegmentedControl) {
  const [selected, setSelected] = useState<string | null>(controls[0].name);

  return (
    <Section className="relative !flex-row gap-2 p-1 items-center rounded-[10px] w-fit bg-zinc-100 dark:bg-zinc-950 dark:ring-1 dark:ring-zinc-900">
      {controls.map(({ name, icon }, index) => {
        const Icon = stacks[icon];
        const isAcive = selected === name;

        return (
          <>
            <button
              key={index}
              onClick={() => setSelected(name)}
              className={clsx(
                "flex gap-2 items-center px-2 py-1.5 relative rounded-md",
                isAcive && "pointer-events-none",
              )}
              disabled={isAcive}
            >
              <Icon width={20} height={20} className="z-10" />{" "}
              <span className="text-sm z-10 select-none drop-shadow">{name}</span>
              {isAcive && (
                <motion.div
                  className="absolute bg-white dark:bg-zinc-900 top-0 left-0 right-0 w-full h-full shadow-sm rounded-md dark:border dark:border-zinc-800/50"
                  layoutId="control"
                  transition={{ type: "spring", stiffness: 200, damping: 30 }}
                />
              )}
            </button>
            {controls.length - 1 !== index && <div className="h-5 w-[1px] bg-zinc-300 dark:bg-zinc-800" />}
          </>
        );
      })}
    </Section>
  );
}

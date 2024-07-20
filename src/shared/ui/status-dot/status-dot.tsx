import clsx from "clsx";
import { match } from "ts-pattern";

import Transition from "@/shared/ui/transition/transition";

interface IStatusDot {
  status: "online" | "offline";
}

export default function StatusDot({ status }: IStatusDot) {
  const color = match(status)
    .with("online", () => "bg-green-500")
    .with("offline", () => "bg-rose-500")
    .exhaustive();

  return (
    <div className={clsx("w-2 h-2 block rounded-full relative", color)}>
      <Transition
        initial={{ opacity: 0.5, scale: 1 }}
        animate={{ opacity: 0, scale: 2.5 }}
        exit={{ opacity: 0.5, scale: 1 }}
        className={clsx("w-full h-full block rounded-full", color)}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
    </div>
  );
}

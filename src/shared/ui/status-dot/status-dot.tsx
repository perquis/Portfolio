import clsx from "clsx";
import { motion } from "framer-motion";
import { match } from "ts-pattern";

interface IStatusDot {
  status: "online" | "offline";
}

export default function StatusDot({ status }: IStatusDot) {
  const color = match(status)
    .with("online", () => "bg-green-500")
    .with("offline", () => "bg-rose-500")
    .exhaustive();

  return (
    <div className={clsx("w-[6px] h-[6px] block rounded-full relative", color)}>
      <motion.div
        initial={{ opacity: 0.5, scale: 1 }}
        animate={{ opacity: 0, scale: 2 }}
        exit={{ opacity: 0.5, scale: 1 }}
        className={clsx("w-full h-full block rounded-full", color)}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
    </div>
  );
}

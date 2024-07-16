import { type MotionProps, motion } from "framer-motion";

export default function Transition({ children, ...props }: MotionProps) {
  return <motion.div {...props}>{children}</motion.div>;
}

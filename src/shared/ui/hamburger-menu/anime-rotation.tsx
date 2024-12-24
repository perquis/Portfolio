import type { Variants } from "framer-motion";

export const rotation: Variants = {
  topStart: { translateY: 6, rotate: 0 },
  topEnd: { translateY: 1, rotate: 45 },
  bottomStart: { translateY: -6, rotate: 0 },
  bottomEnd: { translateY: 1, rotate: -45 },
};

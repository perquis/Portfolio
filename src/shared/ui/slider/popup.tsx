import { AnimatePresence, type Variants, motion } from "framer-motion";
import { type ComponentProps, type FC, useRef } from "react";
import ReactFocusLock from "react-focus-lock";

import { useHideBodyScrollbar, useOutsideOnClick } from "@/shared/hooks";
import { IconButton, Ratio } from "@/shared/ui";

type RatioProps = ComponentProps<typeof Ratio>;
type Slide = Pick<RatioProps, "src" | "alt">;

interface IPopup {
  selectedId: string | null;
  slide: Slide;
  close: () => void;
}

const variants: Variants = {
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
};

export const Popup: FC<IPopup> = ({ selectedId, slide, close }) => {
  const ref = useRef<HTMLImageElement>(null);
  useHideBodyScrollbar(!!selectedId);
  useOutsideOnClick(ref, close);

  return (
    <AnimatePresence>
      {selectedId && (
        <ReactFocusLock>
          <motion.div
            className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-zinc-950/90 dark:bg-white/10 backdrop-blur-sm z-50"
            variants={variants}
            initial="hide"
            animate="show"
            exit="hide"
          >
            <motion.img
              ref={ref}
              layoutId={selectedId}
              className="w-9/12 object-cover rounded-3xl overflow-hidden select-none"
              style={{ aspectRatio: "5 / 4" }}
              {...slide}
            />
            <motion.div className="absolute top-10 right-10">
              <IconButton
                className="!text-white hover:!bg-zinc-900 focus-visible:!bg-zinc-900 active:scale-90"
                size="medium"
                rounded="full"
                icon="Close"
                onClick={close}
              />
            </motion.div>
          </motion.div>
        </ReactFocusLock>
      )}
    </AnimatePresence>
  );
};

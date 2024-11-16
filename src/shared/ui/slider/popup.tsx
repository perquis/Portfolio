import { AnimatePresence, type Variants, motion } from "framer-motion";
import { type ComponentProps, type FC, useRef } from "react";
import ReactFocusLock from "react-focus-lock";

import type { Nullable } from "@/interfaces/utility-types";
import { useHideBodyScrollbar, useOutsideOnClick } from "@/shared/hooks";
import type { Ratio } from "@/shared/ui";
import { IconButton } from "@/shared/ui";

type RatioProps = ComponentProps<typeof Ratio>;
type Slide = Pick<RatioProps, "src" | "alt">;

interface IPopup {
  selectedId: Nullable<string>;
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
        <ReactFocusLock className="fixed left-0 top-0 z-50">
          <motion.div
            className="fixed left-0 top-0 z-50 flex h-screen w-full cursor-zoom-out items-center justify-center bg-zinc-950/90 p-10 backdrop-blur-sm dark:bg-white/10"
            variants={variants}
            initial="hide"
            animate="show"
            exit="hide"
          >
            <motion.img
              ref={ref}
              layoutId={selectedId}
              className="max-w-screen-md cursor-default select-none overflow-hidden rounded-3xl object-cover 2xl:max-w-screen-lg 3xl:max-w-screen-2xl"
              style={{ aspectRatio: "5 / 4" }}
              {...slide}
            />
            <motion.div className="absolute right-10 top-10">
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

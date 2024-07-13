import clsx from "clsx";
import type { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import ReactFocusLock from "react-focus-lock";
import type { ReactFocusLockProps } from "react-focus-lock/interfaces";
import { match } from "ts-pattern";

import { IconButton, Section } from "@/shared/ui";

const dialogRoot = document.getElementById("dialog");

interface IDialog {
  isOpen: boolean;
  close: () => void;
  children?: ReactNode;
  layout?: "center" | "bottom" | "bottom-left" | "bottom-right" | "top" | "top-left" | "top-right" | "left" | "right";
  options?: ReactFocusLockProps<ReactNode, Record<string, any>>;
}

export const Dialog: FC<IDialog> = ({ isOpen, close, layout = "center", children, options }) => {
  if (!isOpen) return null;
  const classes = match(layout)
    .with("center", () => "justify-center items-center")
    .with("bottom", () => "justify-center items-end")
    .with("top", () => "justify-center items-start")
    .with("left", () => "justify-start items-center")
    .with("right", () => "justify-end items-center")
    .with("bottom-left", () => "justify-start items-end")
    .with("bottom-right", () => "justify-end items-end")
    .with("top-left", () => "justify-start items-start")
    .with("top-right", () => "justify-end items-start")
    .exhaustive();

  return createPortal(
    <div
      className={clsx(
        "fixed top-0 left-0 w-full h-screen flex bg-zinc-950/75 backdrop-blur-lg dark:bg-white/10 z-50 sm:p-5",
        classes,
      )}
    >
      <ReactFocusLock {...options}>
        <Section className="bg-white dark:bg-zinc-950 p-5 max-w-screen-sm h-screen sm:h-auto sm:rounded-2xl sm:shadow border border-zinc-200 dark:border-zinc-800 relative">
          <IconButton className="absolute top-3 right-3" size="medium" icon="Close" onClick={close} />
          {children}
        </Section>
      </ReactFocusLock>
    </div>,
    dialogRoot!,
  );
};

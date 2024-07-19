"use client";

import type { MouseEvent, RefObject } from "react";
import { useCallback, useEffect, useState } from "react";

import { useEventCallback } from "@/shared/hooks";

type IElement = (Window & typeof globalThis) | Element | Document;

const useOutsideOnClick = (ref: RefObject<HTMLElement>, close: () => void, element: IElement = window) => {
  const [isOutsideElement, setIsOutsideElement] = useState(false);

  const callback = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement,
        tagName = target.tagName?.toLowerCase();

      if (tagName === "button" || tagName === "a" || tagName === "img") return;

      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOutsideElement(true);
      } else {
        setIsOutsideElement(false);
      }
    },
    [ref],
  );

  useEffect(() => {
    if (isOutsideElement) {
      setIsOutsideElement(false);
      return close();
    }

    return;
  }, [isOutsideElement, close, setIsOutsideElement]);

  useEventCallback({ eventName: "click", callback, element });

  return isOutsideElement;
};

export default useOutsideOnClick;

"use client";

import { useCallback, useState } from "react";

import { useEventCallback } from "@/shared/hooks";

type Position = "x" | "y";

export default function useScrollDirection(position: Position = "y") {
  const [direction, setDirection] = useState(position === "y" ? "up" : "left");
  const [lastScroll, setLastScroll] = useState(0);
  const [currentPos, setCurrentPos] = useState(0);

  const handleScroll = useCallback(() => {
    setCurrentPos(window[position === "y" ? "scrollY" : "scrollX"]);

    if (currentPos > lastScroll) {
      setDirection(position === "y" ? "down" : "right");
    } else {
      setDirection(position === "y" ? "up" : "left");
    }

    setLastScroll(currentPos <= 0 ? 0 : currentPos);
  }, [currentPos, lastScroll, position]);

  useEventCallback({
    callback: handleScroll,
    eventName: "scroll",
  });

  return direction;
}

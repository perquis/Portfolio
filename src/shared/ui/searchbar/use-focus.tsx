"use client";

import { useEffect, useRef } from "react";

import { useOpen } from "@/shared/hooks";

export const useFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, [focus, blur]] = useOpen();

  useEffect(() => {
    if (isFocus) {
      inputRef.current?.focus();
    } else {
      inputRef.current?.blur();
    }
  });

  return { inputRef, isFocus, focus, blur };
};

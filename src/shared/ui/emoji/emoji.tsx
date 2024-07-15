"use client";

import { DotLottie, DotLottieReact } from "@lottiefiles/dotlottie-react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { match } from "ts-pattern";

import { emojis } from "@/data/emojis/emojis";
import { useOpen } from "@/shared/hooks/use-open";

type EmojiName = (typeof emojis)[number]["name"];

interface IEmoji {
  emoji: EmojiName;
  size: Exclude<Size, "tiny">;
}

export default function Emoji({ emoji, size }: IEmoji) {
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);
  const foundEmoji = emojis.find((e) => e.name === emoji);
  const [isOpen, [open, close]] = useOpen();

  const sizeClass = match(size)
    .with("small", () => "w-6 <h-6></h-6>")
    .with("medium", () => "w-8 h-8")
    .with("large", () => "w-10 h-10")
    .exhaustive();

  const dotLottieRefCallback = (dotLottie: DotLottie) => setDotLottie(dotLottie);

  useEffect(() => {
    if (isOpen) {
      dotLottie?.play();
    } else {
      dotLottie?.stop();
    }

    return () => {
      dotLottie?.stop();
    };
  }, [isOpen, dotLottie]);

  return (
    <button
      className={clsx(
        "rounded-full focus-visible:!outline-yellow-300 ease-in-out duration-200 active:scale-90",
        sizeClass,
      )}
      onFocus={open}
      onBlur={close}
      title={foundEmoji?.title}
    >
      <DotLottieReact
        src={foundEmoji?.path}
        loop
        playOnHover
        dotLottieRefCallback={dotLottieRefCallback}
        speed={1.15}
      />
    </button>
  );
}

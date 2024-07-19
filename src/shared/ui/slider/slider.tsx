"use client";

import clsx from "clsx";
import type { ComponentProps } from "react";

import { Container, IconButton, Ratio, Regular, Section, Transition } from "@/shared/ui";

import { Page } from "./page";
import { useAnimate } from "./use-animate";

type RatioProps = ComponentProps<typeof Ratio>;
type Slide = Pick<RatioProps, "src" | "alt">;

interface ISlider {
  slides: Slide[];
}

export default function Slider({ slides }: ISlider) {
  const {
    animate: { page, diff, slideWidth },
    duration: { current: transition },
    actions,
    slideRef,
  } = useAnimate();

  return (
    <Section className="relative gap-5">
      <Container className="relative">
        <Transition animate={{ translateX: diff * -page }} transition={transition} className="w-full">
          <Section className="!flex-row gap-5 items-center" style={{ aspectRatio: "5 / 4" }} ref={slideRef}>
            {slides.map((rest, index) => (
              <Transition
                key={index}
                className={"flex-shrink-0"}
                style={{ width: page === index ? "100%" : "83.33%" }}
                animate={{ width: page === index ? slideWidth.active : slideWidth.inactive }}
              >
                <Ratio
                  key={index}
                  className={clsx("rounded-xl overflow-hidden flex-shrink-0 w-full", page !== index && "opacity-15")}
                  resolution="5:4"
                  {...rest}
                />
              </Transition>
            ))}
          </Section>
        </Transition>
        <Section className="absolute !flex-row gap-3 bottom-3 -translate-x-1/2 left-1/2">
          {slides.map((_, index) => (
            <Page key={index} isActive={index === page} />
          ))}
        </Section>
      </Container>
      <Section className="overflow-hidden h-5 gap-1">
        {slides.map(({ alt }, index) => (
          <Transition
            key={index}
            animate={{ translateY: page * -24 }}
            transition={transition}
            className="text-center h-5"
          >
            <Regular className="!text-sm text-center">{alt}</Regular>
          </Transition>
        ))}
      </Section>
      <Section className="absolute right-0 -bottom-2 !flex-row gap-2">
        {actions.map(({ name, disabled, onClick }, index) => (
          <IconButton
            key={index}
            icon={name}
            size="medium"
            rounded="full"
            onClick={onClick}
            disabled={disabled}
            className="bg-zinc-100 dark:bg-zinc-900 active:scale-90"
          />
        ))}
      </Section>
    </Section>
  );
}

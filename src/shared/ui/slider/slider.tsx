import clsx from "clsx";
import { type FC, useEffect, useRef, useState } from "react";

import { IconButton, Ratio, Regular, Section, Transition } from "@/shared/ui";

interface Slide {
  src: string;
  alt: string;
}

type ISlider = {
  slides: Slide[];
};

export default function Slider({ slides }: ISlider) {
  const [page, setPage] = useState(0);
  const [animate, setAnimate] = useState({
    offsetWidth: 0,
    closestSlideWidth: 0,
    diff: 0,
  });

  const paginate = (newPage: number) =>
    setPage((prevPage) => {
      if (prevPage + newPage < 0) return prevPage;
      if (prevPage + newPage > slides.length - 1) return prevPage;

      return prevPage + newPage;
    });

  const pagination = [
    {
      name: "ArrowLeft",
      onClick: () => paginate(-1),
      disabled: page === 0,
    },
    {
      name: "ArrowRight",
      onClick: () => paginate(1),
      disabled: page === slides.length - 1,
    },
  ] as const;

  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const offsetWidth = slideRef.current?.offsetWidth ?? 0,
      closestSlideWidth = (offsetWidth * 10) / 12,
      diff = closestSlideWidth + 20;

    setAnimate({ offsetWidth, closestSlideWidth, diff });
  }, []);

  const duration = {
    type: "spring",
    damping: 100,
    stiffness: 1000,
  };

  return (
    <Section className="relative gap-5">
      <div className="relative">
        <Transition animate={{ translateX: animate.diff * -page }} transition={duration} className="w-full">
          <Section className="!flex-row gap-5 items-center" style={{ aspectRatio: "5 / 4" }} ref={slideRef}>
            {slides.map((rest, index) => (
              <Transition
                key={index}
                className={"flex-shrink-0"}
                style={{ width: page === index ? "100%" : "83.33%" }}
                animate={{ width: page === index ? animate.offsetWidth : animate.closestSlideWidth }}
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
      </div>
      <Section className="overflow-hidden h-5 gap-1">
        {slides.map(({ alt }, index) => (
          <Transition
            key={index}
            animate={{ translateY: page * -24 }}
            transition={duration}
            className="text-center h-5"
          >
            <Regular className="!text-sm text-center">{alt}</Regular>
          </Transition>
        ))}
      </Section>
      <Section className="absolute right-0 -bottom-2 !flex-row gap-2">
        {pagination.map(({ name, disabled, onClick }, index) => (
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

interface IPage {
  isActive?: boolean;
}

const Page: FC<IPage> = ({ isActive }) => {
  return (
    <Transition
      className={"w-2 h-2 rounded-full bg-zinc-950 dark:bg-white"}
      animate={isActive ? { opacity: 1 } : { opacity: 0.5 }}
    />
  );
};

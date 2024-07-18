import clsx from "clsx";
import { type FC, useState } from "react";

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

  return (
    <Section className="relative gap-5">
      <div className="relative">
        <Section className="!flex-row gap-5 items-center" style={{ aspectRatio: "5 / 4" }}>
          {slides.map((rest, index) => (
            <Ratio
              key={index}
              className={clsx(
                "rounded-xl overflow-hidden flex-shrink-0",
                page !== index ? "!w-10/12 opacity-15" : "w-full",
              )}
              resolution="5:4"
              {...rest}
            />
          ))}
        </Section>
        <Section className="absolute !flex-row gap-3 bottom-3 -translate-x-1/2 left-1/2">
          {slides.map((_, index) => (
            <Page key={index} isActive={index === page} />
          ))}
        </Section>
      </div>
      <Regular className="!text-sm text-center">{slides[page].alt}</Regular>
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

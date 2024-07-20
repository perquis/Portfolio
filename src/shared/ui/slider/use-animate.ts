import { useEffect, useMemo, useRef, useState } from "react";

import { slides } from "@/data";

interface IAnimate {
  page: number;
  slideWidth: {
    // These properties are optional
    // to animation look better
    // when the component is mounted 🔥.
    active?: number;
    inactive?: number;
  };
  diff: number;
}

const initialValue: IAnimate = {
  page: 0,
  slideWidth: {},
  diff: 0,
};

export const useAnimate = () => {
  const [animate, setAnimate] = useState(initialValue);
  const slideRef = useRef<HTMLDivElement>(null);
  const actions = useMemo(
    () =>
      [
        {
          name: "ArrowLeft",
          onClick: () => paginate(-1),
          disabled: animate.page === 0,
        },
        {
          name: "ArrowRight",
          onClick: () => paginate(1),
          disabled: animate.page === slides.length - 1,
        },
      ] as const,
    [animate.page],
  );

  const paginate = (newPage: number) =>
    setAnimate((prevPage) => {
      if (prevPage.page + newPage < 0)
        return {
          ...prevPage,
          page: 0,
        };
      if (prevPage.page + newPage > slides.length - 1)
        return {
          ...prevPage,
          page: slides.length - 1,
        };

      return {
        ...prevPage,
        page: prevPage.page + newPage,
      };
    });

  useEffect(() => {
    const activeSlideWidth = slideRef.current?.offsetWidth ?? 0,
      inactiveSlideWidth = (activeSlideWidth * 10) / 12,
      diff = inactiveSlideWidth + 20;

    setAnimate((prev) => ({
      ...prev,
      slideWidth: {
        active: activeSlideWidth,
        inactive: inactiveSlideWidth,
      },
      diff,
    }));
  }, []);

  const duration = useRef({
    type: "spring",
    damping: 100,
    stiffness: 1000,
  });

  return {
    actions,
    animate,
    slideRef,
    duration,
  };
};

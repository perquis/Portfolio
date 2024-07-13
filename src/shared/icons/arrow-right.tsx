import type { ComponentProps, FC } from "react";

export const ArrowRight: FC<ComponentProps<"svg">> = (props) => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8.33334 14.1666L12.5 9.99998L8.33334 5.83331"
      stroke="currentColor"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

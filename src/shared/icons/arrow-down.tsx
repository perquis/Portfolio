import type { ComponentProps, FC } from "react";

export const ArrowDown: FC<ComponentProps<"svg">> = (props) => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5.66667 8L9.83333 12.1667L14 8"
      stroke="currentColor"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

import type { ComponentProps, FC } from "react";

export const Checkmark: FC<ComponentProps<"svg">> = (props) => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M16.25 5L7.5 15L3.75 11.25"
      stroke="currentColor"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

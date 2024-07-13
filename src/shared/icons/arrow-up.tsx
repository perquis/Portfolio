import type { ComponentProps, FC } from "react";

export const ArrowUp: FC<ComponentProps<"svg">> = (props) => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M14.5833 12.0833L10.4167 7.91665L6.25 12.0833"
      stroke="currentColor"
      stroke-width="1.25"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

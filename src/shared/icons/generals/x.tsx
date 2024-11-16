import type { ComponentProps, FC } from "react";

const X: FC<ComponentProps<"svg">> = (props) => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M11.6175 8.66L17.9463 1.25H16.4462L10.9525 7.68375L6.5625 1.25H1.5L8.1375 10.98L1.5 18.75H3L8.8025 11.955L13.4388 18.75H18.5012L11.6175 8.66ZM9.56375 11.065L8.89125 10.0962L3.54 2.3875H5.84375L10.1613 8.60875L10.8337 9.5775L16.4475 17.665H14.1437L9.56375 11.065Z"
      fill="currentColor"
    />
  </svg>
);

export default X;
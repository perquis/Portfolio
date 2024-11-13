import type { ComponentProps, FC } from "react";

const Pnpm: FC<ComponentProps<"svg">> = (props) => (
  <svg
    {...props}
    clipRule="evenodd"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fillRule="nonzero">
      <path
        d="M191.7 38.825h69.483v69.485H191.7zm-76.447 0h69.484v69.485h-69.484zm-76.433 0h69.484v69.485H38.82zm152.884 76.433h69.484v69.484h-69.484z"
        fill="#ffb300"
      />
      <path
        d="M115.248 115.258h69.484v69.484h-69.484zm0 76.432h69.484v69.485h-69.484zm76.447 0h69.484v69.485h-69.484zm-152.884 0h69.484v69.485H38.811z"
        className="fill-zinc-400 dark:fill-[#e0e0e0]"
      />
    </g>
  </svg>
);
export default Pnpm;

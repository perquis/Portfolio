import type { ComponentProps, FC } from "react";

const Storybook: FC<ComponentProps<"svg">> = (props) => (
  <svg {...props} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.14 41.86 8.9 8.84a2.01 2.01 0 0 1 1.88-2.08L38.86 5A2.01 2.01 0 0 1 41 7.01V43a2.01 2.01 0 0 1-2.1 2l-26.85-1.2a2.01 2.01 0 0 1-1.91-1.93z"
      fill="#FF4081"
    />
    <path
      d="m32.6 9.92.2-4.62 3.85-.3.17 4.76a.3.3 0 0 1-.49.24l-1.49-1.17-1.76 1.34a.3.3 0 0 1-.48-.25zm-4.93 10.16c0 .78 5.27.4 5.98-.15 0-5.32-2.86-8.12-8.1-8.12-5.23 0-8.17 2.84-8.17 7.1 0 7.43 10.03 7.58 10.03 11.63 0 1.14-.56 1.81-1.78 1.81-1.6 0-2.23-.82-2.16-3.59 0-.6-6.09-.79-6.27 0-.47 6.72 3.71 8.66 8.5 8.66 4.64 0 8.28-2.48 8.28-6.95 0-7.96-10.17-7.75-10.17-11.7 0-1.6 1.19-1.81 1.9-1.81.73 0 2.07.13 1.96 3.12z"
      fill="#fff"
    />
  </svg>
);
export default Storybook;
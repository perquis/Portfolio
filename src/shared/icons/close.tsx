import type { ComponentProps, FC } from "react";

const Close: FC<ComponentProps<"svg">> = (props) => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M15.25 4.75834C15.1729 4.68108 15.0813 4.61979 14.9805 4.57798C14.8797 4.53616 14.7716 4.51463 14.6625 4.51463C14.5534 4.51463 14.4453 4.53616 14.3445 4.57798C14.2437 4.61979 14.1521 4.68108 14.075 4.75834L10 8.825L5.925 4.75C5.84785 4.67285 5.75626 4.61165 5.65546 4.5699C5.55465 4.52814 5.44661 4.50665 5.3375 4.50665C5.22839 4.50665 5.12035 4.52814 5.01955 4.5699C4.91875 4.61165 4.82715 4.67285 4.75 4.75C4.67285 4.82715 4.61165 4.91875 4.5699 5.01955C4.52814 5.12035 4.50665 5.22839 4.50665 5.3375C4.50665 5.44661 4.52814 5.55465 4.5699 5.65546C4.61165 5.75626 4.67285 5.84785 4.75 5.925L8.825 10L4.75 14.075C4.67285 14.1522 4.61165 14.2437 4.5699 14.3446C4.52814 14.4454 4.50665 14.5534 4.50665 14.6625C4.50665 14.7716 4.52814 14.8797 4.5699 14.9805C4.61165 15.0813 4.67285 15.1729 4.75 15.25C4.82715 15.3272 4.91875 15.3884 5.01955 15.4301C5.12035 15.4719 5.22839 15.4934 5.3375 15.4934C5.44661 15.4934 5.55465 15.4719 5.65546 15.4301C5.75626 15.3884 5.84785 15.3272 5.925 15.25L10 11.175L14.075 15.25C14.1522 15.3272 14.2437 15.3884 14.3446 15.4301C14.4454 15.4719 14.5534 15.4934 14.6625 15.4934C14.7716 15.4934 14.8797 15.4719 14.9805 15.4301C15.0813 15.3884 15.1729 15.3272 15.25 15.25C15.3272 15.1729 15.3884 15.0813 15.4301 14.9805C15.4719 14.8797 15.4934 14.7716 15.4934 14.6625C15.4934 14.5534 15.4719 14.4454 15.4301 14.3446C15.3884 14.2437 15.3272 14.1522 15.25 14.075L11.175 10L15.25 5.925C15.5667 5.60834 15.5667 5.075 15.25 4.75834Z"
      fill="currentColor"
    />
  </svg>
);

export default Close;

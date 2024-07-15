import type { ComponentProps, FC } from "react";

const Danger: FC<ComponentProps<"svg">> = (props) => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9.99998 6.35582V10.9392M9.99998 13.6442V13.2275M8.09414 3.03332C8.57831 2.62082 8.82081 2.41415 9.07414 2.29332C9.36324 2.15519 9.67958 2.0835 9.99998 2.0835C10.3204 2.0835 10.6367 2.15519 10.9258 2.29332C11.1791 2.41415 11.4216 2.62082 11.9058 3.03332C12.405 3.45832 12.9116 3.67332 13.5783 3.72582C14.2125 3.77665 14.53 3.80249 14.795 3.89582C15.4066 4.11249 15.8883 4.59332 16.1041 5.20582C16.1975 5.46999 16.2233 5.78749 16.2741 6.42249C16.3266 7.08915 16.5408 7.59499 16.9658 8.09415C17.3791 8.57832 17.5858 8.82082 17.7066 9.07415C17.9866 9.65999 17.9866 10.3408 17.7066 10.9258C17.5858 11.1792 17.3791 11.4217 16.9666 11.9058C16.554 12.3694 16.31 12.9587 16.2741 13.5783C16.2233 14.2125 16.1975 14.53 16.1041 14.795C15.9973 15.0971 15.8242 15.3715 15.5975 15.598C15.3708 15.8246 15.0963 15.9975 14.7941 16.1042C14.53 16.1975 14.2125 16.2233 13.5775 16.2742C12.9108 16.3267 12.405 16.5408 11.9058 16.9658C11.4216 17.3792 11.1791 17.5858 10.9258 17.7067C10.6367 17.8448 10.3204 17.9165 9.99998 17.9165C9.67958 17.9165 9.36324 17.8448 9.07414 17.7067C8.82081 17.5858 8.57831 17.3792 8.09414 16.9667C7.63056 16.554 7.04123 16.31 6.42164 16.2742C5.78748 16.2233 5.46998 16.1975 5.20498 16.1042C4.90284 15.9973 4.62845 15.8242 4.40192 15.5975C4.17538 15.3709 4.00246 15.0964 3.89581 14.7942C3.80248 14.53 3.77664 14.2125 3.72581 13.5775C3.69006 12.9583 3.44635 12.3693 3.03414 11.9058C2.62081 11.4217 2.41414 11.1792 2.29248 10.9258C2.15448 10.6367 2.08292 10.3203 2.08307 9.99989C2.08321 9.67949 2.15505 9.36319 2.29331 9.07415C2.41414 8.82082 2.62081 8.57832 3.03331 8.09415C3.46664 7.58499 3.67414 7.07499 3.72581 6.42165C3.77664 5.78749 3.80248 5.46999 3.89581 5.20499C4.00265 4.90285 4.17575 4.62846 4.40243 4.40193C4.6291 4.17539 4.90361 4.00247 5.20581 3.89582C5.46998 3.80249 5.78748 3.77665 6.42248 3.72582C7.04168 3.69007 7.6307 3.44553 8.09414 3.03332Z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Danger;

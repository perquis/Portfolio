import type { ComponentProps } from "react";

import type { List } from "./ui-list";

export const items: ComponentProps<typeof List>["items"] = [
  {
    image: {
      src: "/static/jobs/beesafe-logo.jpg",
      alt: "Beesafe Sp. z o.o.",
    },
    name: "Beesafe Sp. z o.o.",
    position: "Mid Full Stack Developer",
    years: "2024",
  },
  {
    image: {
      src: "/static/jobs/haergi-logo.png",
      alt: "HAERGI Sp. z o. o.",
    },
    name: "Haergi",
    position: "Junior Full Stack Developer",
    years: "2023 - 2024",
  },
];

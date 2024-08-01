import type { ComponentProps } from "react";

import type { List } from "./ui-list";

export const items: ComponentProps<typeof List>["items"] = [
  {
    image: {
      src: "/static/jobs/haergi_logo.jpg",
      alt: "HAERGI Sp. Z. O. O.",
    },
    name: "Haergi",
    position: "Full Stack Developer, Digital Designer",
    years: "2023 - 2024",
  },
];

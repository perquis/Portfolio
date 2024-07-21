import type { ComponentProps } from "react";

import type { ExperiencesList } from "@/components/home/experiences/ui-experiences-list";

export const items: ComponentProps<typeof ExperiencesList>["items"] = [
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

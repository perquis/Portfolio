import { useTranslations } from "next-intl";

import { placeholders } from "@/data";
import { Link } from "@/next/navigation";
import * as icons from "@/shared/icons/design";
import { Card, Grid, Regular, Section } from "@/shared/ui";

export const Articles = () => {
  const t = useTranslations();

  return (
    <Section className="gap-5">
      <Section className="!flex-row justify-between">
        <Regular className="font-semibold">Blog</Regular>
        <Link href="/portfolio" className="text-sm font-medium flex gap-2">
          {t("home.blog.view_all")} <icons.ArrowLineRight width={20} height={20} />
        </Link>
      </Section>

      <Grid>
        {Array.from({ length: 2 })
          .fill(0)
          .map((_, index) => (
            <Card
              key={index}
              title="Untitled"
              description="placeholder_description"
              href=""
              image={{ src: placeholders.images, alt: "" }}
            />
          ))}
      </Grid>
    </Section>
  );
};

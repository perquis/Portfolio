import { useTranslations } from "next-intl";

import * as icons from "@/shared/icons/design";
import { Grid, Regular, Section } from "@/shared/ui";

export const List = () => {
  const t = useTranslations();

  return (
    <Grid>
      {Array.from({ length: 8 })
        .fill(0)
        .map((_, index) => (
          <Section className="!flex-row items-start gap-2" key={index}>
            <icons.Star className="flex-shrink-0 text-zinc-500" width={20} height={20} />
            {/* @ts-ignore */}
            <Regular>{t(`HOME_SERVICE_${index + 1}`)}</Regular>
          </Section>
        ))}
    </Grid>
  );
};

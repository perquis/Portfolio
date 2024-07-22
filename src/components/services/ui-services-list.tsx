import * as icons from "@/shared/icons/design";
import { Grid, Regular, Section } from "@/shared/ui";

export const ServicesList = () => {
  return (
    <Grid>
      {Array.from({ length: 1 })
        .fill(0)
        .map((_, index) => (
          <Section className="!flex-row items-center gap-2" key={index}>
            <icons.Star className="text-zinc-500" width={20} height={20} />
            <Regular>placeholder_service_item</Regular>
          </Section>
        ))}
    </Grid>
  );
};

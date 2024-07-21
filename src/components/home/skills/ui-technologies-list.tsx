import { Grid, Technology } from "@/shared/ui";

import { useItems } from "./utils-use-items";

export const TechnologiesList = () => {
  const items = useItems();

  return (
    <Grid>
      {items.map((item, index) => (
        <Technology {...item} key={index} />
      ))}
    </Grid>
  );
};

import { placeholders } from "@/data";
import { Card, Grid } from "@/shared/ui";

export const List = () => {
  return (
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
  );
};

import { placeholders } from "@/data";
import { Card, Grid } from "@/shared/ui";

export const ProjectsList = () => {
  return (
    <Grid>
      {Array.from({ length: 3 })
        .fill(0)
        .map((_, index) => (
          <Card
            key={index}
            className={index === 0 ? "col-span-2" : ""}
            title="Untitled UI"
            href="/portfolio/untitled-ui"
            description="Strona internetowa"
            image={{ src: placeholders.images, alt: "" }}
          />
        ))}
    </Grid>
  );
};

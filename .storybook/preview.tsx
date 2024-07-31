import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import { match } from "ts-pattern";

import "../src/app/[locale]/globals.css";
import { Container, GlobalLayout } from "../src/shared/ui";

const withLayout = (Story: React.FC, options: any) => {
  const html = match(options.title)
    .with("Menu/Navigation", () => <Story />)
    .otherwise(() => (
      <Container>
        <Story />
      </Container>
    ));

  return <GlobalLayout className="dark:bg-zinc-950">{html}</GlobalLayout>;
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen",
  },
  decorators: [
    withLayout,
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
      attributeName: "data-theme",
    }),
  ],
};

export default preview;

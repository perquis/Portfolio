import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import { match } from "ts-pattern";

import "../src/app/globals.css";
import { Container, GlobalLayout } from "../src/shared/ui";

const withLayout = (Story: React.FC, options: any) => {
  const html = match(options.title)
    .with("Actions/Navigation", () => <Story />)
    .otherwise(() => (
      <Container>
        <Story />
      </Container>
    ));

  return <GlobalLayout>{html}</GlobalLayout>;
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
      attributeName: "data-mode",
    }),
  ],
};

export default preview;

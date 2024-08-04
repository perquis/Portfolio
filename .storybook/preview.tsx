import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import { match } from "ts-pattern";

import { Container } from "../src/shared/ui";
import nextIntl from "./next-intl";
import "./tailwind.css";

const withLayout = (Story: React.FC, options: any) => {
  const html = match(options.title)
    .with("Menu/Navigation", () => <Story />)
    .otherwise(() => (
      <Container>
        <Story />
      </Container>
    ));

  return <div className="py-32 dark:bg-zinc-950">{html}</div>;
};

const preview: Preview = {
  initialGlobals: {
    locale: "en",
    locales: {
      en: "English",
      pl: "Polish",
    },
  },
  parameters: {
    nextIntl,
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

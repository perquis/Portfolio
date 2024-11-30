import type { Options } from "rehype-pretty-code";

import type { Theme } from "@/interfaces/theme";

import dark from "./expo-dark.json";
import light from "./expo-light.json";

const parseTheme = (theme: unknown) => JSON.parse(JSON.stringify(theme));

export const theme = {
  light: parseTheme(light),
  dark: parseTheme(dark),
} satisfies Record<Theme, Options["theme"]>;

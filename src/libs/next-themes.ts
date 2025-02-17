import { useTheme } from "next-themes";

import { theme } from "@/shared/themes/theme";

const lightTheme = theme.light as object;
const darkTheme = theme.dark as object;

const useThemePreference = () => {
  const { theme, systemTheme } = useTheme();
  return theme === "system" ? systemTheme! : theme!;
};

export const useSelectedTheme = () => {
  const themePreference = useThemePreference();
  return themePreference === "dark" ? darkTheme : lightTheme;
};

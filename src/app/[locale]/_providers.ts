import { ThemeProvider } from "next-themes";

import { AlertProvider, NextIntlProvider } from "@/providers";
import { composeProviders, createProvider } from "@/shared/utils/providers";

const providers = [
  createProvider(NextIntlProvider),
  createProvider(ThemeProvider, {
    enableSystem: true,
    disableTransitionOnChange: true,
  }),
  createProvider(AlertProvider),
];

export const AppProvider = composeProviders(providers);

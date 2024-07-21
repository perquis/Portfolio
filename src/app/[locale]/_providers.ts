import { ThemeProvider } from "next-themes";

import { NextIntlProvider } from "@/providers";
import { composeProviders, createProvider } from "@/shared/utils/providers";

const providers = [
  createProvider(NextIntlProvider),
  createProvider(ThemeProvider, {
    enableSystem: true,
    disableTransitionOnChange: true,
  }),
];

export const AppProvider = composeProviders(providers);

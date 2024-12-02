import { ThemeProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next";

import { AlertProvider, NextIntlProvider } from "@/providers";
import { composeProviders, createProvider } from "@/shared/utils";

const providers = [
  createProvider(NextIntlProvider),
  createProvider(ThemeProvider, {
    enableSystem: true,
    disableTransitionOnChange: true,
  }),
  createProvider(AlertProvider),
  createProvider(NuqsAdapter),
];

export const AppProvider = composeProviders(providers);

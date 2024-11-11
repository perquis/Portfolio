import { ThemeProvider } from "next-themes";

import { AlertProvider, DeviceProvider, KeywordsProvider, NextIntlProvider } from "@/providers";
import { composeProviders, createProvider } from "@/shared/utils";

const providers = [
  createProvider(NextIntlProvider),
  createProvider(ThemeProvider, {
    enableSystem: true,
    disableTransitionOnChange: true,
  }),
  createProvider(AlertProvider),
  createProvider(DeviceProvider),
  createProvider(KeywordsProvider),
];

export const AppProvider = composeProviders(providers);

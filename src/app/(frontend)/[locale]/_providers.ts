import { ThemeProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next";

import { AlertProvider, DeviceProvider, NextIntlProvider } from "@/providers";
import { composeProviders, createProvider } from "@/shared/utils";

const providers = [
  createProvider(NextIntlProvider),
  createProvider(ThemeProvider, {
    enableSystem: true,
    disableTransitionOnChange: true,
  }),
  createProvider(AlertProvider),
  createProvider(DeviceProvider),
  createProvider(NuqsAdapter),
];

export const AppProvider = composeProviders(providers);

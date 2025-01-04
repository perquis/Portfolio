import clsx from "clsx";
import { GeistMono } from "geist/font/mono";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { ViewTransitions } from "next-view-transitions";
import { Inter } from "next/font/google";
import { Suspense } from "react";

import { AppProvider } from "@/app/(frontend)/[locale]/_providers";
import { CommandMenu, CommandMenuProvider } from "@/components";
import { locales } from "@/config/i18n";
import { NextIntlProvider } from "@/providers";
import { getItemsWithMetadata } from "@/shared/packages";
import { BackgroundScene, GlobalLayout, Navigation } from "@/shared/ui";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function AppLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const [posts, projects, messages] = await Promise.all([
    getItemsWithMetadata("posts"),
    getItemsWithMetadata("projects"),
    getMessages(),
  ]);

  return (
    <ViewTransitions>
      <html lang={locale} suppressHydrationWarning>
        <body className={clsx(inter.className, GeistMono.variable, "bg-white dark:bg-zinc-950")}>
          <Suspense>
            <NextIntlProvider messages={messages}>
              <AppProvider>
                <Navigation />
                <GlobalLayout>
                  <BackgroundScene />
                  {children}
                  <CommandMenuProvider>
                    <CommandMenu data={[posts, projects]} />
                  </CommandMenuProvider>
                </GlobalLayout>
              </AppProvider>
            </NextIntlProvider>
          </Suspense>

          <div
            className="pointer-events-none fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center"
            id="cal-com-widget"
          />
          <div className="fixed right-5 top-0 z-50" id="alerts" />
          <div className="pointer-events-none fixed bottom-0 left-0 z-50 hidden h-16 w-full bg-gradient-to-t from-white to-white/0 dark:block dark:from-zinc-950 dark:to-zinc-950/0" />
        </body>
      </html>
    </ViewTransitions>
  );
}

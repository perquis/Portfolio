import clsx from "clsx";
import { GeistMono } from "geist/font/mono";
import { unstable_setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { Suspense } from "react";

import { AppProvider } from "@/app/[locale]/_providers";
import { Body } from "@/app/[locale]/body";
import { locales } from "@/config/i18n";
import { GlobalLayout } from "@/shared/ui";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={clsx(inter.className, GeistMono.variable, "bg-white dark:bg-zinc-950")}>
        <Suspense>
          <AppProvider>
            <GlobalLayout>
              <Body>{children}</Body>
            </GlobalLayout>
          </AppProvider>
        </Suspense>
      </body>
    </html>
  );
}

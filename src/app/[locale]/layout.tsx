import clsx from "clsx";
import { GeistMono } from "geist/font/mono";
import { unstable_setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { Suspense } from "react";

import { AppProvider } from "@/app/[locale]/_providers";
import { locales } from "@/config/i18n";
import { PageBackground } from "@/shared/icons/design/page-background";
import { Cursor, GlobalLayout, Navigation } from "@/shared/ui";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(process.env.VERCEL_URL!),
  alternates: {
    canonical: "/",
    languages: {
      [locales[0]]: `/${locales[0]}`,
      [locales[1]]: `/${locales[1]}`,
    },
  },
  openGraph: {
    images: "/static/pages/og-image.png",
  },
};

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

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={clsx(inter.className, GeistMono.variable, "bg-white dark:bg-zinc-950")}>
        <Suspense>
          <AppProvider>
            <Navigation />
            <GlobalLayout>
              <PageBackground />
              {children}
              <Cursor />
            </GlobalLayout>
          </AppProvider>
        </Suspense>

        <div className="pointer-events-none fixed left-1/2 top-0 z-50 -translate-x-1/2" id="alerts" />
        <div className="fixed bottom-0 left-0 h-32 w-full bg-gradient-to-t from-white to-white/0 dark:from-zinc-950 dark:to-zinc-950/0" />
      </body>
    </html>
  );
}

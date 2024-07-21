import clsx from "clsx";
import { unstable_setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { Suspense } from "react";

import { AppProvider } from "@/app/[locale]/_providers";
import { locales } from "@/config/i18n";
import { Container, Divider, Footer, GlobalLayout, Navigation, Page } from "@/shared/ui";

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
      <body className={clsx(inter.className, "bg-white dark:bg-zinc-950")}>
        {/* 🪛 https://www.reddit.com/r/nextjs/comments/1c3yq48/nextintl_has_broken_my_bones/ 🪛 */}
        <Suspense>
          <AppProvider>
            <GlobalLayout>
              <Navigation />
              <Container>
                <Page>
                  {children}
                  <Divider />
                  <Footer />
                </Page>
              </Container>
            </GlobalLayout>
          </AppProvider>
        </Suspense>
      </body>
    </html>
  );
}

import clsx from "clsx";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { Suspense } from "react";

import { locales } from "@/config/i18n";
import { links } from "@/data";
import { Container, GlobalLayout, Navigation } from "@/shared/ui";

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
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={clsx(inter.className, "bg-white dark:bg-zinc-950")}>
        {/* 🪛 https://www.reddit.com/r/nextjs/comments/1c3yq48/nextintl_has_broken_my_bones/ 🪛 */}
        <Suspense>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider enableSystem disableTransitionOnChange>
              <GlobalLayout>
                <Navigation links={links} />
                <Container>{children}</Container>
              </GlobalLayout>
            </ThemeProvider>
          </NextIntlClientProvider>
        </Suspense>
      </body>
    </html>
  );
}

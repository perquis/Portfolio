import type { IntlProvider } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof IntlProvider>, "locale"> & {
  locale?: string;
};

export default function NextIntlProvider({ children, ...rest }: Props) {
  return <NextIntlClientProvider {...rest}>{children}</NextIntlClientProvider>;
}

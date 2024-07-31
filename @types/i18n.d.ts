import type en from "../src/translations/en.json";

type Messages = typeof en;

type Locale = "pl" | "en";

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}

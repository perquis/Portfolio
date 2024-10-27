import type { Messages } from "@/interfaces/i18n";

declare global {
  interface IntlMessages extends Messages {}
}

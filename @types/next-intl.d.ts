import type { Messages } from "@/interfaces/i18n.interface";

declare global {
  interface IntlMessages extends Messages {}
}

import en from "@/translations/en.json";
import pl from "@/translations/pl.json";

const messages: Record<string, any> = {
  en,
  pl,
};

const nextIntl = {
  defaultLocale: "en",
  messages,
};

export default nextIntl;

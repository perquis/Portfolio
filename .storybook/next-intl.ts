import en from "../src/translations/en.json";
import pl from "../src/translations/pl.json";

const messages: Record<string, any> = {
  en,
  pl,
};

const nextIntl = {
  defaultLocale: "en",
  messages,
};

export default nextIntl;

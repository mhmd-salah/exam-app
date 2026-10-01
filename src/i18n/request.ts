import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

const formats = {};

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  // Validate the requested locale and fall back to the default locale
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages = (await import(`./messages/${locale}.json`)).default;

  return {
    locale,
    messages,
    formats,
  };
});

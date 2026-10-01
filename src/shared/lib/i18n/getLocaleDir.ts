export default function getLocaleDir(locale: string) {
  return locale === "ar" ? "rtl" : "ltr";
}

import { Params } from "@/shared/types/misc/route_params";
import App from "./app";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import getLocaleDir from "@/shared/lib/i18n/getLocaleDir";

interface IRootLayout_props {
  children: React.ReactNode;
  params: Params;
}

export default async function RootLayout({
  children,
  params,
}: Readonly<IRootLayout_props>) {
  const { locale } = await params;

  // Check if local lang is support
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const dir = getLocaleDir(locale);

  return (
    <html lang={locale} dir={dir}>
      <body className="min-h-screen flex flex-col [&>main]:flex-auto">
        <App>{children}</App>
      </body>
    </html>
  );
}

import { Cairo, Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import { Params } from "@/shared/types/misc/route_params";
import App from "./app";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import getLocaleDir from "@/shared/lib/i18n/getLocaleDir";
import { cn } from "@/shared/lib/utils";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

interface IRootLayout_props {
  children: React.ReactNode;
  params: Params;
}

export default async function RootLayout({
  children,
  params,
}: Readonly<IRootLayout_props>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const dir = getLocaleDir(locale);

  return (
    <html
      lang={locale}
      dir={dir}
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        cairo.variable,
      )}
    >
      <body className="h-full ">
        <App>{children}</App>
      </body>
    </html>
  );
}

import { Locale } from "next-intl";

export type Params<T = object> = Promise<{ locale: Locale } & T>;

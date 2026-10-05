import React from "react";
import NextIntlProvider from "./providers/next-intl.provider";
import ReactQueryProvider from "./providers/ReactQuery.provider";

interface IProviders_props {
  children: React.ReactNode;
}

const Providers = ({ children }: IProviders_props) => {
  return (
    <NextIntlProvider>
      <ReactQueryProvider>
        <NextIntlProvider>{children}</NextIntlProvider>
      </ReactQueryProvider>
    </NextIntlProvider>
  );
};

export default Providers;

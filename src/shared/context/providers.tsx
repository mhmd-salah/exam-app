import React from "react";  
import NextIntlProvider from "./providers/next-intl.provider";

interface IProviders_props {
  children: React.ReactNode;
}

const Providers = ({ children }: IProviders_props) => {
  return <NextIntlProvider>{children}</NextIntlProvider>;
};

export default Providers;

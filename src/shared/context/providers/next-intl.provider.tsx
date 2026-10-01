import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

interface INextIntlProvider_props {
  children: React.ReactNode;
}

const NextIntlProvider = async ({ children }: INextIntlProvider_props) => {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};

export default NextIntlProvider;

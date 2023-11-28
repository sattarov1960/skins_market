import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import "@/app/globals.css"
import {Metadata} from "next";
import {getTitle} from "@/utilities/Meta";
import {YandexMetrika} from "@/layout/components/yandex_metrika/metrika";

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'ru'}];
}

export const metadata: Metadata = {
}

// @ts-ignore
export default async function LocaleLayout({children, params: {locale}}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
      <html lang={locale}>
      <body>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
      <YandexMetrika/>
      </body>
      </html>
  );
}

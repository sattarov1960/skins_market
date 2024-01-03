import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import "@/app/globals.css"
import {Metadata} from "next";
import {getMeta} from "@/utilities/meta";
import {YandexMetrika} from "@/layout/components/yandex_metrika/metrika";
import {TopWrap} from "@/layout/wrap/topWrap";

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'ru'}];
}

export const metadata: Metadata = getMeta("Главная",
                                      "",
                                       ['Продать', 'скины', 'CS2', 'Dota 2', 'Rust', 'TF2', 'CSGO', 'КС', 'CS', 'дорого', 'выгодно', 'деньги', 'безопасно', 'быстро', 'мгновенно', 'Name.Market', 'нейм маркет'])


export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactChild, params: { locale: string } }) {
    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        alert("Сообщения [messages] не найдены")
        notFound();
    }

    return (
        <html lang={locale}>
        <body style={{fontFamily: "TTFirsNeue"}}>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <TopWrap>
                    {children}
                </TopWrap>
            </NextIntlClientProvider>
            <YandexMetrika/>
        </body>
        </html>
    );
}

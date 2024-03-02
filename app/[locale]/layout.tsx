import {NextIntlClientProvider, useMessages} from 'next-intl';
import "@/app/globals.css"
import {Metadata} from "next";
import {getMeta} from "@/utilities/meta";
import {YandexMetrika} from "@/layout/components/yandex_metrika/metrika";
import {TopWrap} from "@/layout/wrap/topWrap";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ReactNode} from 'react';


export const metadata: Metadata = getMeta("Главная",
                                      "",
                                       ['Продать', 'скины', 'CS2', 'Dota 2', 'Rust', 'TF2', 'CSGO', 'КС', 'CS', 'дорого', 'выгодно', 'деньги', 'безопасно', 'быстро', 'мгновенно', 'Name.Market', 'нейм маркет'])
type Props = {
    children: ReactNode;
    params: {locale: string};
};

export default function LocaleLayout({children, params: {locale}}: Props) {
    const messages = useMessages();
    return (
        <html lang={locale}>
        <body style={{fontFamily: "TTFirsNeue"}}>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <TopWrap>
                    {children}
                </TopWrap>
            </NextIntlClientProvider>
            <YandexMetrika/>
            <ToastContainer />
        </body>
        </html>
    );
}

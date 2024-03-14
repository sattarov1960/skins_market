import {NextIntlClientProvider, useMessages} from 'next-intl';
import "@/app/globals.css"
import {Metadata} from "next";
import {getMeta} from "@/utilities/meta";
import {YandexMetrika} from "@/layout/components/yandex_metrika/metrika";
import {DataWrap} from "@/layout/wrap/dataWrap";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ReactNode} from 'react';
import {Jivo} from "@/layout/components/jivo/jivo";


export const metadata: Metadata = getMeta("Главная",
                                      "",
                                       ['Продать', 'скины', 'CS2', 'Dota 2', 'Rust', 'TF2', 'CSGO', 'КС', 'CS', 'дорого', 'выгодно', 'деньги', 'безопасно', 'быстро', 'мгновенно', 'Name.Market', 'нейм маркет'])
type Props = {
    children: ReactNode;
    params: any;
};

export default function Layout({children, params}: Props) {
    const messages = useMessages();
    return (
            <html lang={params.locale}>
            <body style={{fontFamily: "TTFirsNeue"}}>
                <NextIntlClientProvider locale={params.locale} messages={messages}>
                    <DataWrap>
                        {children}
                    </DataWrap>
                </NextIntlClientProvider>
                <YandexMetrika/>
                <Jivo/>
                <ToastContainer />
            </body>
            </html>
    );
}

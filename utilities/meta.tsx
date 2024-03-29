import {Metadata} from "next";

export function getTitle(title: string) {
    return `CS SELL - ${title}`;
}

export function getMeta(title: string,
                        description: string = "",
                        keywords: string[] = []): Metadata {
    return  {
        metadataBase: new URL('https://cssell.ru'),
        applicationName: 'CS SELL',
        title: getTitle(title),
        description: description,
        keywords: keywords,
        robots: {
            follow: true,
            googleBot: {
                index: true,
                follow: true,
            },
        },
        icons: {
            icon: '../favicon-16x16.png',
            shortcut: '../favicon-16x16.png',
        },
        alternates: {
            canonical: 'https://cssell.ru',
            languages: {
                'ru-RU': '/ru',
                'en-US': '/en',
            },
        },
        openGraph: {
            title: 'CS SELL',
            description: 'CS SELL - позволит вам продать скины за реальные деньги. Продать скины КС безопасно и мгновенно можно только у нас. Моментальная продажа скинов с выводом денег на карту.',
            url: 'https://cssell.ru',
            siteName: 'CS SELL',
            locale: 'ru_RU',
            type: 'website',
        }
    }
}

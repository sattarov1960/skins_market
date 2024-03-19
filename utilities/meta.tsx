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
            icon: '/favicon.ico',
            shortcut: '/favicon.ico',
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
            images: [
                {
                    url: '/images/tild6536-3537-4337-a533-343232346665__tf2key1.jpg',
                    width: 800,
                    height: 600,
                    alt: 'CS SELL',
                },
            ],
            locale: 'ru_RU',
            type: 'website',
        }
    }
}

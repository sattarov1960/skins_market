import {Metadata} from "next";

export function getTitle(title: string) {
    return `Name.Market - ${title}`;
}

export function getMeta(title: string,
                        description: string = "",
                        keywords: string[] = []): Metadata {
    return  {
        metadataBase: new URL('https://tf2key.ru'),
        applicationName: 'Name.Market',
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
            canonical: 'https://name.market',
            languages: {
                'ru-RU': '/ru',
                'en-US': '/en',
            },
        },
        openGraph: {
            title: 'TF2KEY',
            description: 'Name.Market - позволит вам продать скины за реальные деньги. Продать скины КС безопасно и мгновенно можно только у нас. Моментальная продажа скинов с выводом денег на карту.',
            url: 'https://name.market',
            siteName: 'name.market',
            images: [
                {
                    url: '/images/tild6536-3537-4337-a533-343232346665__tf2key1.jpg',
                    width: 800,
                    height: 600,
                    alt: 'Name.Market',
                },
            ],
            locale: 'ru_RU',
            type: 'website',
        }
    }
}
